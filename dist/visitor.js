"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuginVisitor = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const change_case_all_1 = require("change-case-all");
const custom_fetcher_1 = require("./custom-fetcher");
const transformer_1 = require("./transformer");
const type_resolver_1 = require("./type-resolver");
const variables_generator_1 = require("./variables-generator");
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
        this.externalImportPrefix = this.config.importOperationTypesFrom ? `${this.config.importOperationTypesFrom}.` : '';
        this.fields = {
            query: { ...this._schema.getQueryType()?.getFields() },
            mutation: { ...this._schema.getMutationType()?.getFields() },
            subscription: { ...this._schema.getSubscriptionType()?.getFields() },
        };
        this.fetcher = this.createFetcher(rawConfig);
        this.transformer = this.createTransformer(rawConfig);
        this._imports.add(this.fetcher.generateFetcherImport());
        this.transformer.generateImports().map((i) => this._imports.add(i));
    }
    createTransformer(rawConfig) {
        const inputTransformerMap = {};
        const outputTransformerMap = {};
        if (rawConfig.inputTransformer) {
            Object.entries(rawConfig.inputTransformer).forEach(([scalar, type]) => {
                const mapper = type === 'JSON.stringify' ? JsonStringify : (0, visitor_plugin_common_1.parseMapper)(type.func);
                inputTransformerMap[scalar] = mapper;
            });
        }
        if (rawConfig.outputTransformer) {
            Object.entries(rawConfig.outputTransformer).forEach(([scalar, type]) => {
                const mapper = type === 'JSON.parse' ? JsonParse : (0, visitor_plugin_common_1.parseMapper)(type.func);
                outputTransformerMap[scalar] = mapper;
            });
        }
        return new transformer_1.Transformer(this, inputTransformerMap, outputTransformerMap);
    }
    createFetcher(rawConfig) {
        const { fetcher } = rawConfig;
        if (!fetcher ||
            fetcher === 'fetch' ||
            fetcher === 'graphql-request' ||
            (typeof fetcher === 'object' && 'endpoint' in fetcher))
            throw new Error('Plugin "graphql-codegen-typescript-transformer" only supports custom fetchers');
        return new custom_fetcher_1.CustomFetcher(this, fetcher);
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
        const inputVariables = (0, type_resolver_1.getInputVariablesType)(fieldDefinition);
        let query = '';
        if (operationType === 'Query') {
            query += (0, variables_generator_1.generateQueryKeyMaker)(node, operationName, operationVariablesTypes, hasRequiredVariables);
            query += this.transformer.generateInputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables);
            query += this.transformer.generateOutputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, output);
            query += this.fetcher.generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, output);
        }
        else if (operationType === 'Mutation') {
            query += (0, variables_generator_1.generateMutationKeyMaker)(node, operationName);
            query += this.transformer.generateInputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables);
            query += this.transformer.generateOutputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, output);
            query += this.fetcher.generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, output);
        }
        else if (operationType === 'Subscription') {
        }
        return query;
    }
}
exports.PuginVisitor = PuginVisitor;
//# sourceMappingURL=visitor.js.map