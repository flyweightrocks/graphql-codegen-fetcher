"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMapperFetcher = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
class CustomMapperFetcher {
    constructor(visitor, customFetcher) {
        this.visitor = visitor;
        if (typeof customFetcher === 'string') {
            customFetcher = { func: customFetcher };
        }
        this._mapper = (0, visitor_plugin_common_1.parseMapper)(customFetcher.func);
        this._isReactHook = customFetcher.isReactHook;
    }
    getFetcherFnName(operationResultType, operationVariablesTypes, outputResultType, inputVariablesType) {
        return `${this._mapper.type}<${operationResultType}, ${operationVariablesTypes}, ${outputResultType}, ${inputVariablesType}>`;
    }
    generateFetcherImplementaion() {
        if (this._mapper.isExternal) {
            return (0, visitor_plugin_common_1.buildMapperImport)(this._mapper.source, [
                {
                    identifier: this._mapper.type,
                    asDefault: this._mapper.default,
                },
            ], this.visitor.config.useTypeImports);
        }
        return null;
    }
    generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, outputResultType, inputVariablesTypes = operationVariablesTypes) {
        if (this._isReactHook)
            return '';
        const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
        const typedFetcher = this.getFetcherFnName(operationResultType, operationVariablesTypes, outputResultType, inputVariablesTypes);
        const impl = `${typedFetcher}(${documentVariableName}, variables, options, outputFn, inputFn)`;
        const comment = `\n/**
    * Fetcher function for ${operationName}.
    * It extracts the data from the GrapohQL response and parses all JSON fields into objects.
    */`;
        const implementation = `export const ${operationName}Fetcher = (${variables}, options?: RequestInit['headers'], outputFn = ${operationName}Output, inputFn = ${operationName}Input) => ${impl};`;
        return `\n${comment}\n${implementation}`;
    }
}
exports.CustomMapperFetcher = CustomMapperFetcher;
//# sourceMappingURL=fetcher-custom-mapper.js.map