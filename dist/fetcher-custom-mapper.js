"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMapperFetcher = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const variables_generator_1 = require("./variables-generator");
class CustomMapperFetcher {
    constructor(visitor, customFetcher) {
        this.visitor = visitor;
        if (typeof customFetcher === 'string') {
            customFetcher = { func: customFetcher };
        }
        this._mapper = (0, visitor_plugin_common_1.parseMapper)(customFetcher.func);
        this._isReactHook = !!customFetcher.isReactHook;
    }
    getFetcherFnName(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType) {
        return `${this._mapper.type}<${operationResultType}, ${operationVariablesTypes}, ${outputResultType}, ${inputVariablesType}>`;
    }
    getFetcherName(operationName) {
        return `${operationName}Fetcher`;
    }
    generateFetcherImplementaion() {
        if (this._mapper.isExternal) {
            return ((0, visitor_plugin_common_1.buildMapperImport)(this._mapper.source, [
                {
                    identifier: this._mapper.type,
                    asDefault: this._mapper.default,
                },
            ], this.visitor.config.useTypeImports) || '');
        }
        return '';
    }
    generateInfiniteQueryHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = this.visitor.outputResultTypes[operationName];
        const inputVariablesType = operationVariablesTypes;
        const hookConfig = this.visitor.queryMethodMap;
        this.visitor.reactQueryHookIdentifiersInUse.add(hookConfig.infiniteQuery.hook);
        this.visitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.infiniteQuery.options);
        const options = `options?: ${hookConfig.infiniteQuery.options}<${outputResultType}, TError, TData>`;
        const typedFetcher = this.getFetcherFnName(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
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
      ${(0, variables_generator_1.generateInfiniteQueryKey)(node, hasRequiredVariables)},
      ${impl},
      options
    )};`;
    }
    generateQueryHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = this.visitor.outputResultTypes[operationName];
        const inputVariablesType = operationVariablesTypes;
        const hookConfig = this.visitor.queryMethodMap;
        this.visitor.reactQueryHookIdentifiersInUse.add(hookConfig.query.hook);
        this.visitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.query.options);
        const options = `options?: ${hookConfig.query.options}<${outputResultType} | undefined, TError, TData>`;
        const typedFetcher = this.getFetcherFnName(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
        const impl = this._isReactHook
            ? `${typedFetcher}(${documentVariableName}).bind(null, variables)`
            : `${this.getFetcherName(operationName)}(variables)`;
        return `export const use${operationName} = <
      TData = ${outputResultType} | undefined,
      TError = ${this.visitor.config.errorType}
    >(
      ${variables},
      ${options}
    ) =>
    ${hookConfig.query.hook}<${outputResultType} | undefined , TError, TData>(
      ${(0, variables_generator_1.generateQueryKey)(node, hasRequiredVariables)},
      ${impl},
      options
    );`;
    }
    generateMutationHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = this.visitor.outputResultTypes[operationName];
        const inputVariablesType = operationVariablesTypes;
        const hookConfig = this.visitor.queryMethodMap;
        this.visitor.reactQueryHookIdentifiersInUse.add(hookConfig.mutation.hook);
        this.visitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.mutation.options);
        const options = `options?: ${hookConfig.mutation.options}<${outputResultType} | undefined, TError, ${inputVariablesType}, TContext>`;
        const typedFetcher = this.getFetcherFnName(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
        const impl = this._isReactHook
            ? `${typedFetcher}(${documentVariableName})`
            : `(${variables}) => ${this.getFetcherName(operationName)}(variables)()`;
        return `export const use${operationName} = <
      TError = ${this.visitor.config.errorType},
      TContext = unknown
    >(${options}) =>
    ${hookConfig.mutation.hook}<${outputResultType} | undefined, TError, ${inputVariablesType}, TContext>(
      ${(0, variables_generator_1.generateMutationKey)(node)},
      ${impl},
      options
    );`;
    }
    generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        if (this._isReactHook)
            return '';
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = this.visitor.outputResultTypes[operationName];
        const inputVariablesType = operationVariablesTypes;
        const typedFetcher = this.getFetcherFnName(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
        const impl = `${typedFetcher}(${documentVariableName}, variables, options, outputFn, inputFn)`;
        const comment = `\n/**
    * Fetcher function for \`${operationName}\`.
    * It invokes the base fetcher function with the operation-specific input and output transformer functions.
    * The input transformer function, if available, must be called inside the base fetcher to transform the \`variables\` before executing the GraphQL operation.
    * The output transformer function, if available, must be called inside the base fetcher to transform the result \`data\` after executing the GraphQL operation.
    */`;
        const implementation = `export const ${this.getFetcherName(operationName)} = (${variables}, options?: RequestInit['headers'], outputFn = ${operationName}Output, inputFn = ${operationName}Input) => ${impl};`;
        return `\n${comment}\n${implementation}`;
    }
}
exports.CustomMapperFetcher = CustomMapperFetcher;
//# sourceMappingURL=fetcher-custom-mapper.js.map