import { CustomFetch } from '@graphql-codegen/typescript-react-query/config';
import { buildMapperImport, ParsedMapper, parseMapper } from '@graphql-codegen/visitor-plugin-common';
import { OperationDefinitionNode } from 'graphql';
import { FetcherRenderer } from './fetcher-renderer';
import { generateInfiniteQueryKey, generateMutationKey, generateQueryKey } from './variables-generator';
import { ExtendedReactQueryVisitor } from './visitor';
// import { ReactQueryVisitor } from './visitor';
import { lowerCaseFirst } from 'change-case-all';

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

  private getFetcherFnGenerics(
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

    const hookConfig = this.visitor.reactQueryVisitor.queryMethodMap;
    this.visitor.reactQueryVisitor.reactQueryHookIdentifiersInUse.add(hookConfig.infiniteQuery.hook);
    this.visitor.reactQueryVisitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.infiniteQuery.options);

    const options = `options?: ${hookConfig.infiniteQuery.options}<${outputResultType}, TError, TData>`;

    const typedFetcher = this.getFetcherFnGenerics(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const implHookOuter = this._isReactHook ? `const query = ${typedFetcher}(${documentVariableName})` : '';
    const impl = this._isReactHook
      ? `(metaData) => query({...variables, ...(metaData.pageParam ?? {})})`
      : `(metaData) => ${typedFetcher}(${documentVariableName}, {...variables, ...(metaData.pageParam ?? {})})()`;

    return `\nexport const useInfinite${operationName} = <
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
    )};\n`;
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

    const hookConfig = this.visitor.reactQueryVisitor.queryMethodMap;
    this.visitor.reactQueryVisitor.reactQueryHookIdentifiersInUse.add(hookConfig.query.hook);
    this.visitor.reactQueryVisitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.query.options);

    const options = `options?: ${hookConfig.query.options}<${outputResultType} | undefined, TError, TData>`;

    const typedFetcher = this.getFetcherFnGenerics(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const impl = this._isReactHook
      ? `${typedFetcher}(${documentVariableName}).bind(null, variables)`
      : `${this.getFetcherName(operationName)}(variables)`;

    return `\nexport const use${operationName} = <
      TData = ${outputResultType} | undefined,
      TError = ${this.visitor.config.errorType}
    >(
      ${variables},
      ${options}
    ) =>
    ${hookConfig.query.hook}<${outputResultType} | undefined , TError, TData>(
      ${generateQueryKey(node, hasRequiredVariables)},
      ${impl},
      options
    );\n`;
  }

  generateMutationHook(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string {
    // const variables = `variables?: ${operationVariablesTypes}`;
    const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
    const outputResultType = this.visitor.outputResultTypes[operationName];
    const inputVariablesType = operationVariablesTypes;

    const hookConfig = this.visitor.reactQueryVisitor.queryMethodMap;
    this.visitor.reactQueryVisitor.reactQueryHookIdentifiersInUse.add(hookConfig.mutation.hook);
    this.visitor.reactQueryVisitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.mutation.options);

    const options = `options?: ${hookConfig.mutation.options}<${outputResultType} | undefined, TError, ${inputVariablesType}, TContext>`;
    const typedFetcher = this.getFetcherFnGenerics(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const impl = this._isReactHook
      ? `${typedFetcher}(${documentVariableName})`
      : `(${variables}) => ${this.getFetcherName(operationName)}(variables)()`;

    return `\nexport const use${operationName} = <
      TError = ${this.visitor.config.errorType},
      TContext = unknown
    >(${options}) =>
    ${hookConfig.mutation.hook}<${outputResultType} | undefined, TError, ${inputVariablesType}, TContext>(
      ${generateMutationKey(node)},
      ${impl},
      options
    );\n`;
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

    const typedFetcher = this.getFetcherFnGenerics(
      operationResultType,
      operationVariablesTypes,
      outputResultType,
      inputVariablesType,
    );
    const impl = `${typedFetcher}(${documentVariableName}, variables, options, outputFn, inputFn)`;

    const comment = `\n/**
    * Fetcher function for \`${operationName}\`.
    * It invokes the base fetcher function with the operation-specific input and output transformer functions.
    * The input transformer function must be called inside the base fetcher to transform the \`variables\` before executing the GraphQL operation.
    * The output transformer function must be called inside the base fetcher to transform the result \`data\` after executing the GraphQL operation.
    * 
    * The input and output transformer functions are optional arguments and default to the generated \`{operationName}Input\` and \`${operationName}Output\` functions.    
    * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
    * @param variables - The variables to pass to the GraphQL operation.
    * @param options - The options to pass to the GraphQL operation.
    * @param outputFn - The output transformer function.
    * @param inputFn - The input transformer function.
    * @returns A function \`() => Promise<TOutput>\` that must be invoked manually or passed to ReactQuery as fetcher argument.
    */`;

    const implementation = `export const ${this.getFetcherName(
      operationName,
    )} = (${variables}, options?: RequestInit['headers'], outputFn = ${operationName}Output, inputFn = ${operationName}Input) => ${impl};`;
    return `\n${comment}\n${implementation}\n`;
  }

  generateRequestFunction(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string {
    const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;

    const functionName = lowerCaseFirst(operationName);
    const fetcher = `(${variables}) => ${this.getFetcherName(operationName)}(variables)()`;

    const comment = `\n/**
    * GraphQL request function for \`${operationName}\`.
    * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
    */`;

    const implementation = `export const ${functionName} = ${fetcher};`;

    return `\n${comment}\n${implementation}\n`;
  }
}
