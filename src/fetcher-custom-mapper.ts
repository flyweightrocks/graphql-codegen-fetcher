import { CustomFetch } from '@graphql-codegen/typescript-react-query/config';
import { FetcherRenderer } from '@graphql-codegen/typescript-react-query/fetcher';
import { buildMapperImport, ParsedMapper, parseMapper } from '@graphql-codegen/visitor-plugin-common';
import { OperationDefinitionNode } from 'graphql';
import { generateInfiniteQueryKey, generateMutationKey, generateQueryKey } from './variables-generator';
import { ExtendedReactQueryVisitor } from './visitor';
// import { ReactQueryVisitor } from './visitor';

export class CustomMapperFetcher implements FetcherRenderer {
  private _mapper: ParsedMapper;
  private _isReactHook: boolean;

  constructor(private visitor: ExtendedReactQueryVisitor, customFetcher: CustomFetch) {
    if (typeof customFetcher === 'string') {
      customFetcher = { func: customFetcher };
    }
    this._mapper = parseMapper(customFetcher.func);
    this._isReactHook = !!customFetcher.isReactHook;
  }

  private getFetcherFnName(
    operationResultType: string,
    operationVariablesTypes: string,
    outputResultType: string,
    inputVariablesType: string,
  ): string {
    return `${this._mapper.type}<${operationResultType}, ${operationVariablesTypes}, ${outputResultType}, ${inputVariablesType}>`;
  }

  private getFetcherName(operationName: string): string {
    return `${operationName}Fetcher`;
  }

  generateFetcherImplementaion(): string {
    if (this._mapper.isExternal) {
      return (
        buildMapperImport(
          this._mapper.source,
          [
            {
              identifier: this._mapper.type,
              asDefault: this._mapper.default,
            },
          ],
          this.visitor.config.useTypeImports,
        ) || ''
      );
    }

    return '';
  }

  generateInfiniteQueryHook(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string {
    const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
    const outputResultType = this.visitor.outputResultTypes[operationName];
    const inputVariablesType = operationVariablesTypes;

    const hookConfig = this.visitor.queryMethodMap;
    this.visitor.reactQueryHookIdentifiersInUse.add(hookConfig.infiniteQuery.hook);
    this.visitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.infiniteQuery.options);

    const options = `options?: ${hookConfig.infiniteQuery.options}<${outputResultType}, TError, TData>`;

    const typedFetcher = this.getFetcherFnName(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const implHookOuter = this._isReactHook ? `const query = ${typedFetcher}(${documentVariableName})` : '';
    const impl = this._isReactHook
      ? `(metaData) => query({...variables, ...(metaData.pageParam ?? {})})`
      : `(metaData) => ${typedFetcher}(${documentVariableName}, {...variables, ...(metaData.pageParam ?? {})})()`;

    return `export const useInfinite${operationName} = <
      TData = ${outputResultType},
      TError = ${this.visitor.config.errorType}
    >(
      ${variables},
      ${options}
    ) =>{
    ${implHookOuter}
    return ${hookConfig.infiniteQuery.hook}<${outputResultType}, TError, TData>(
      ${generateInfiniteQueryKey(node, hasRequiredVariables)},
      ${impl},
      options
    )};`;
  }

  generateQueryHook(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string {
    const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
    const outputResultType = this.visitor.outputResultTypes[operationName];
    const inputVariablesType = operationVariablesTypes;

    const hookConfig = this.visitor.queryMethodMap;
    this.visitor.reactQueryHookIdentifiersInUse.add(hookConfig.query.hook);
    this.visitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.query.options);

    const options = `options?: ${hookConfig.query.options}<${outputResultType}, TError, TData>`;

    const typedFetcher = this.getFetcherFnName(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const impl = this._isReactHook
      ? `${typedFetcher}(${documentVariableName}).bind(null, variables)`
      : `${this.getFetcherName(operationName)}(variables)`;

    return `export const use${operationName} = <
      TData = ${outputResultType},
      TError = ${this.visitor.config.errorType}
    >(
      ${variables},
      ${options}
    ) =>
    ${hookConfig.query.hook}<${outputResultType}, TError, TData>(
      ${generateQueryKey(node, hasRequiredVariables)},
      ${impl},
      options
    );`;
  }

  generateMutationHook(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string {
    const variables = `variables?: ${operationVariablesTypes}`;
    const outputResultType = this.visitor.outputResultTypes[operationName];
    const inputVariablesType = operationVariablesTypes;

    const hookConfig = this.visitor.queryMethodMap;
    this.visitor.reactQueryHookIdentifiersInUse.add(hookConfig.mutation.hook);
    this.visitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.mutation.options);

    const options = `options?: ${hookConfig.mutation.options}<${outputResultType}, TError, ${inputVariablesType}, TContext>`;
    const typedFetcher = this.getFetcherFnName(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const impl = this._isReactHook
      ? `${typedFetcher}(${documentVariableName})`
      : `(${variables}) => ${this.getFetcherName(operationName)}(variables)()`;

    return `export const use${operationName} = <
      TError = ${this.visitor.config.errorType},
      TContext = unknown
    >(${options}) =>
    ${hookConfig.mutation.hook}<${outputResultType}, TError, ${inputVariablesType}, TContext>(
      ${generateMutationKey(node)},
      ${impl},
      options
    );`;
  }

  generateFetcherFetch(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
    // outputResultType: string,
    // inputVariablesTypes: string = operationVariablesTypes,
  ): string {
    // We can't generate a fetcher field since we can't call react hooks outside of a React Fucntion Component
    // Related: https://reactjs.org/docs/hooks-rules.html
    if (this._isReactHook) return '';

    const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
    const outputResultType = this.visitor.outputResultTypes[operationName];
    const inputVariablesType = operationVariablesTypes;

    const typedFetcher = this.getFetcherFnName(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const impl = `${typedFetcher}(${documentVariableName}, variables, options, outputFn, inputFn)`;

    const comment = `\n/**
    * Fetcher function for \`${operationName}\`.
    * It invokes the base fetcher function with the operation-specific input and output transformer functions.
    * The input transformer function, if available, must be called inside the base fetcher to transform the \`variables\` before executing the GraphQL operation.
    * The output transformer function, if available, must be called inside the base fetcher to transform the result \`data\` after executing the GraphQL operation.
    */`;

    const implementation = `export const ${this.getFetcherName(
      operationName,
    )} = (${variables}, options?: RequestInit['headers'], outputFn = ${operationName}Output, inputFn = ${operationName}Input) => ${impl};`;
    return `\n${comment}\n${implementation}`;
  }
}
