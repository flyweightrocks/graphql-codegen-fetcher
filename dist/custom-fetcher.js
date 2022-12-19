"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFetcher = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const change_case_all_1 = require("change-case-all");
class CustomFetcher {
    constructor(visitor, fetcher) {
        this.visitor = visitor;
        this.mapper = (0, visitor_plugin_common_1.parseMapper)(typeof fetcher === 'string' ? fetcher : fetcher.func);
    }
    getFetcherFnGenerics(operationResultType, operationVariablesTypes) {
        return `${this.mapper.type}<${operationResultType}, ${operationVariablesTypes}, TOutput, TInput>`;
    }
    getFetcherName(operationName) {
        return `${operationName}Fetcher`;
    }
    generateFetcherImport() {
        if (this.mapper.isExternal) {
            return ((0, visitor_plugin_common_1.buildMapperImport)(this.mapper.source, [
                {
                    identifier: this.mapper.type,
                    asDefault: this.mapper.default,
                },
            ], this.visitor.config.useTypeImports) || '');
        }
        return '';
    }
    generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, output) {
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const outputResultType = output.typeName;
        const inputVariablesType = operationVariablesTypes;
        const typedFetcher = this.getFetcherFnGenerics(operationResultType, operationVariablesTypes);
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
    generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, output) {
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
exports.CustomFetcher = CustomFetcher;
//# sourceMappingURL=custom-fetcher.js.map