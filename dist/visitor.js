"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuginVisitor = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const change_case_all_1 = require("change-case-all");
const custom_fetcher_1 = require("./custom-fetcher");
const variables_generator_1 = require("./variables-generator");
const transformer_1 = require("./transformer");
const type_resolver_1 = require("./type-resolver");
const JsonStringify = {
    isExternal: false,
    type: 'JSON.stringify',
};
const JsonParse = {
    isExternal: false,
    type: 'JSON.parse',
};
class PuginVisitor extends visitor_plugin_common_1.ClientSideBaseVisitor {
    constructor(schema, fragments, rawConfig, documents) {
        super(schema, fragments, rawConfig, {
            documentMode: visitor_plugin_common_1.DocumentMode.string,
        }, documents);
        this.inputTransformerMap = new Map();
        this.outputTransformerMap = new Map();
        this.outputResultTypes = {};
        this.fetcher = this.createFetcher(rawConfig.fetcher || 'fetch');
        this.externalImportPrefix = this.config.importOperationTypesFrom ? `${this.config.importOperationTypesFrom}.` : '';
        this.fields = {
            query: { ...this._schema.getQueryType()?.getFields() },
            mutation: { ...this._schema.getMutationType()?.getFields() },
            subscription: { ...this._schema.getSubscriptionType()?.getFields() },
        };
        if (rawConfig.inputTransformer) {
            Object.entries(rawConfig.inputTransformer).forEach(([scalar, type]) => {
                const mapper = type === 'json-stringify' ? JsonStringify : (0, visitor_plugin_common_1.parseMapper)(type.func);
                this.inputTransformerMap.set(scalar, mapper);
            });
        }
        if (rawConfig.outputTransformer) {
            Object.entries(rawConfig.outputTransformer).forEach(([scalar, type]) => {
                const mapper = type === 'json-parse' ? JsonStringify : (0, visitor_plugin_common_1.parseMapper)(type.func);
                this.outputTransformerMap.set(scalar, mapper);
            });
        }
        this._imports.add(this.fetcher.generateFetcherImport());
        [...this.inputTransformerMap.values(), ...this.outputTransformerMap.values()]
            .filter((mapper) => mapper.isExternal)
            .forEach((mapper) => this._imports.add((0, visitor_plugin_common_1.buildMapperImport)(mapper.source, [
            {
                identifier: mapper.type,
                asDefault: mapper.default,
            },
        ], this.config.useTypeImports) || ''));
    }
    createFetcher(raw) {
        if (!raw || raw === 'fetch' || raw === 'graphql-request' || (typeof raw === 'object' && 'endpoint' in raw))
            throw new Error('Plugin "graphql-codegen-typescript-transformer" only supports custom fetchers');
        return new custom_fetcher_1.CustomFetcher(this, raw);
    }
    getSuffix(name, operationType) {
        if (this.config.omitOperationSuffix) {
            return '';
        }
        if (!this.config.dedupeOperationSuffix) {
            return (0, change_case_all_1.pascalCase)(operationType);
        }
        if (name.includes('Query') || name.includes('Mutation') || name.includes('Subscription')) {
            return '';
        }
        return (0, change_case_all_1.pascalCase)(operationType);
    }
    OperationDefinition(node) {
        return super.OperationDefinition(node);
    }
    buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const nodeName = node.name?.value ?? '';
        const suffix = this.getSuffix(nodeName, operationType);
        const operationName = this.convertName(nodeName, {
            suffix,
            useTypesPrefix: false,
            useTypesSuffix: false,
        });
        operationResultType = this.externalImportPrefix + operationResultType;
        operationVariablesTypes = this.externalImportPrefix + operationVariablesTypes;
        const selectionNode = node.selectionSet.selections[0];
        if (!('name' in selectionNode))
            throw new Error('Selection node must have a name');
        const selectionNodeName = selectionNode.name?.value;
        const fieldDefinition = this.fields[node.operation][selectionNodeName];
        const output = (0, type_resolver_1.getOutputType)(fieldDefinition);
        this.outputResultTypes[operationName] = output.typeName;
        const inputVariables = (0, type_resolver_1.getInputVariablesType)(fieldDefinition);
        let query = '';
        if (operationType === 'Query') {
            query += (0, variables_generator_1.generateQueryKeyMaker)(node, operationName, operationVariablesTypes, hasRequiredVariables);
            query += (0, transformer_1.generateInputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables);
            query += (0, transformer_1.generateOutputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            query += this.fetcher.generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
        }
        else if (operationType === 'Mutation') {
            query += (0, variables_generator_1.generateMutationKeyMaker)(node, operationName);
            query += (0, transformer_1.generateInputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables);
            query += (0, transformer_1.generateOutputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            query += this.fetcher.generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
        }
        else if (operationType === 'Subscription') {
        }
        return query;
    }
}
exports.PuginVisitor = PuginVisitor;
//# sourceMappingURL=visitor.js.map