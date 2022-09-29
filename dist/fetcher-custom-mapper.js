"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMapperFetcher = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const variables_generator_1 = require("./variables-generator");
const change_case_all_1 = require("change-case-all");
class CustomMapperFetcher {
    constructor(visitor, customFetcher) {
        this.visitor = visitor;
        if (typeof customFetcher === 'string') {
            customFetcher = { func: customFetcher };
        }
        this._mapper = (0, visitor_plugin_common_1.parseMapper)(customFetcher.func);
        this._isReactHook = !!customFetcher.isReactHook;
    }
    getFetcherFnGenerics(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType) {
        return `${this._mapper.type}<${operationResultType}, ${operationVariablesTypes}, TOutput, TInput>`;
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
        const hookConfig = this.visitor.reactQueryVisitor.queryMethodMap;
        this.visitor.reactQueryVisitor.reactQueryHookIdentifiersInUse.add(hookConfig.infiniteQuery.hook);
        this.visitor.reactQueryVisitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.infiniteQuery.options);
        const options = `options?: ${hookConfig.infiniteQuery.options}<${outputResultType}, TError, TData>`;
        const typedFetcher = this.getFetcherFnGenerics(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
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
      ${(0, variables_generator_1.generateInfiniteQueryKey)(node, hasRequiredVariables)},
      ${impl},
      options
    )};\n`;
    }
    generateQueryHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = this.visitor.outputResultTypes[operationName];
        const inputVariablesType = operationVariablesTypes;
        const hookConfig = this.visitor.reactQueryVisitor.queryMethodMap;
        this.visitor.reactQueryVisitor.reactQueryHookIdentifiersInUse.add(hookConfig.query.hook);
        this.visitor.reactQueryVisitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.query.options);
        const options = `options?: ${hookConfig.query.options}<${outputResultType} | undefined, TError, TData>`;
        const typedFetcher = this.getFetcherFnGenerics(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
        const queryFetcher = this._isReactHook
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
      ${(0, variables_generator_1.generateQueryKey)(node, hasRequiredVariables)},
      ${queryFetcher},
      options
    );\n`;
    }
    generateMutationHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = this.visitor.outputResultTypes[operationName];
        const inputVariablesType = operationVariablesTypes;
        const hookConfig = this.visitor.reactQueryVisitor.queryMethodMap;
        this.visitor.reactQueryVisitor.reactQueryHookIdentifiersInUse.add(hookConfig.mutation.hook);
        this.visitor.reactQueryVisitor.reactQueryOptionsIdentifiersInUse.add(hookConfig.mutation.options);
        const options = `options?: ${hookConfig.mutation.options}<${outputResultType} | undefined, TError, ${inputVariablesType}, TContext>`;
        const typedFetcher = this.getFetcherFnGenerics(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
        const mutationFetcher = this._isReactHook
            ? `${typedFetcher}(${documentVariableName})`
            : `(${variables}) => ${this.getFetcherName(operationName)}(variables)()`;
        return `\nexport const use${operationName} = <
      TError = ${this.visitor.config.errorType},
      TContext = unknown
    >(${options}) =>
    ${hookConfig.mutation.hook}<${outputResultType} | undefined, TError, ${inputVariablesType}, TContext>(
      ${(0, variables_generator_1.generateMutationKey)(node)},
      ${mutationFetcher},
      options
    );\n`;
    }
    generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        if (this._isReactHook)
            return '';
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = this.visitor.outputResultTypes[operationName];
        const inputVariablesType = operationVariablesTypes;
        const typedFetcher = this.getFetcherFnGenerics(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType);
        const invokeFetcher = `${typedFetcher}(document, variables, options, outputFn, inputFn)`;
        const comment = `\n/**
    * Fetcher function for \`${operationName}\`.
    * It invokes the base fetcher function with the operation-specific input and output transformer functions.
    * The input transformer function must be called inside the base fetcher to transform the \`variables\` before executing the GraphQL operation.
    * The output transformer function must be called inside the base fetcher to transform the result \`data\` after executing the GraphQL operation.
    * 
    * The input and output transformer functions are optional arguments and default to the generated \`${operationName}Input\` and \`${operationName}Output\` functions.    
    * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
    * @param variables - The variables to pass to the GraphQL operation.
    * @param options - The options to pass to the GraphQL operation.
    * @param outputFn - The output transformer function.
    * @param inputFn - The input transformer function.
    * @returns A function \`() => Promise<TOutput>\` that must be invoked manually or passed to ReactQuery as fetcher argument.
    */`;
        const implementation = `export const ${this.getFetcherName(operationName)} = <TOutput = ${outputResultType}, TInput = ${inputVariablesType}>(${variables}, options?: RequestInit['headers'], document = ${documentVariableName}, outputFn = ${operationName}OutputFn, inputFn = ${operationName}InputFn) => ${invokeFetcher};`;
        return `\n${comment}\n${implementation}\n`;
    }
    generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const functionName = (0, change_case_all_1.lowerCaseFirst)(operationName);
        const fetcher = `(${variables}) => ${this.getFetcherName(operationName)}(variables)()`;
        const comment = `\n/**
    * GraphQL request function for \`${operationName}\`.
    * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
    */`;
        const implementation = `export const ${functionName} = ${fetcher};`;
        return `\n${comment}\n${implementation}\n`;
    }
}
exports.CustomMapperFetcher = CustomMapperFetcher;
//# sourceMappingURL=fetcher-custom-mapper.js.map