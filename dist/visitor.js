"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedReactQueryVisitor = void 0;
const typescript_react_query_1 = require("@graphql-codegen/typescript-react-query");
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const auto_bind_1 = __importDefault(require("auto-bind"));
const change_case_all_1 = require("change-case-all");
const fetcher_custom_mapper_1 = require("./fetcher-custom-mapper");
const variables_generator_1 = require("./variables-generator");
const transformer_1 = require("./transformer");
const type_resolver_1 = require("./type-resolver");
class ExtendedReactQueryVisitor extends visitor_plugin_common_1.ClientSideBaseVisitor {
    constructor(schema, fragments, rawConfig, documents) {
        super(schema, fragments, rawConfig, {
            documentMode: visitor_plugin_common_1.DocumentMode.string,
            generateReactQueryHooks: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.generateReactQueryHooks, false),
            generateGqlRequestFunctions: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.generateGqlRequestFunctions, false),
        });
        this.rawConfig = rawConfig;
        this.outputResultTypes = {};
        this.fetcher = this.createExtendedFetcher(rawConfig.fetcher || 'fetch');
        this.fields = { ...this._schema.getQueryType()?.getFields(), ...this._schema.getMutationType()?.getFields() };
        this.reactQueryVisitor = new typescript_react_query_1.ReactQueryVisitor(schema, fragments, rawConfig, documents);
        this._documents = documents;
        (0, auto_bind_1.default)(this);
    }
    get imports() {
        return this._imports;
    }
    OperationDefinition(node) {
        this.reactQueryVisitor.OperationDefinition(node);
        return super.OperationDefinition(node);
    }
    get hasOperations() {
        return this._collectedOperations.length > 0;
    }
    getImports() {
        return this.reactQueryVisitor.getImports();
    }
    getFetcherImplementation() {
        return this.fetcher.generateFetcherImplementaion();
    }
    createExtendedFetcher(raw) {
        if (!raw || raw === 'fetch' || raw === 'graphql-request' || (typeof raw === 'object' && 'endpoint' in raw))
            throw new Error('Only custom fetchers are supported');
        return new fetcher_custom_mapper_1.CustomMapperFetcher(this, raw);
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
    buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const nodeName = node.name?.value ?? '';
        const suffix = this.getSuffix(nodeName, operationType);
        const operationName = this.convertName(nodeName, {
            suffix,
            useTypesPrefix: false,
            useTypesSuffix: false,
        });
        operationResultType = this.reactQueryVisitor['_externalImportPrefix'] + operationResultType;
        operationVariablesTypes = this.reactQueryVisitor['_externalImportPrefix'] + operationVariablesTypes;
        const fieldName = (0, change_case_all_1.lowerCaseFirst)(nodeName);
        const fieldDefinition = this.fields[fieldName];
        const output = (0, type_resolver_1.getOutputType)(fieldDefinition);
        this.outputResultTypes[operationName] = output.typeName;
        const inputVariables = (0, type_resolver_1.getInputVariablesType)(fieldDefinition);
        let query = '';
        if (operationType === 'Query') {
            query += (0, variables_generator_1.generateQueryKeyMaker)(node, operationName, operationVariablesTypes, hasRequiredVariables);
            query += (0, transformer_1.generateInputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables);
            query += (0, transformer_1.generateOutputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            if (this.config.generateGqlRequestFunctions) {
                query += this.fetcher.generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            }
            query += this.fetcher.generateQueryHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            if (this.reactQueryVisitor.config.exposeQueryKeys) {
                query += `\nuse${operationName}.getKey = ${operationName}Keys;\n`;
            }
        }
        else if (operationType === 'Mutation') {
            query += (0, variables_generator_1.generateMutationKeyMaker)(node, operationName);
            query += (0, transformer_1.generateInputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables);
            query += (0, transformer_1.generateOutputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            if (this.config.generateGqlRequestFunctions) {
                query += this.fetcher.generateRequestFunction(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            }
            if (this.config.generateReactQueryHooks)
                query += this.fetcher.generateMutationHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            if (this.reactQueryVisitor.config.exposeMutationKeys) {
                query += `\nuse${operationName}.getKey = ${operationName}Keys;\n`;
            }
        }
        else if (operationType === 'Subscription') {
        }
        return query;
    }
}
exports.ExtendedReactQueryVisitor = ExtendedReactQueryVisitor;
//# sourceMappingURL=visitor.js.map