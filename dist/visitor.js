"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactQueryVisitor = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const auto_bind_1 = __importDefault(require("auto-bind"));
const change_case_all_1 = require("change-case-all");
const fetcher_custom_mapper_1 = require("./fetcher-custom-mapper");
const fetcher_fetch_1 = require("./fetcher-fetch");
const fetcher_fetch_hardcoded_1 = require("./fetcher-fetch-hardcoded");
const fetcher_graphql_request_1 = require("./fetcher-graphql-request");
const keys_generator_1 = require("./keys-generator");
const transformer_generator_1 = require("./transformer-generator");
const change_case_all_2 = require("change-case-all");
const type_resolver_1 = require("./type-resolver");
class ReactQueryVisitor extends visitor_plugin_common_1.ClientSideBaseVisitor {
    constructor(schema, fragments, rawConfig, documents) {
        super(schema, fragments, rawConfig, {
            documentMode: visitor_plugin_common_1.DocumentMode.string,
            errorType: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.errorType, 'unknown'),
            exposeDocument: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.exposeDocument, false),
            exposeQueryKeys: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.exposeQueryKeys, false),
            exposeMutationKeys: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.exposeMutationKeys, false),
            exposeFetcher: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.exposeFetcher, false),
            addInfiniteQuery: (0, visitor_plugin_common_1.getConfigValue)(rawConfig.addInfiniteQuery, false),
        });
        this.rawConfig = rawConfig;
        this.reactQueryHookIdentifiersInUse = new Set();
        this.reactQueryOptionsIdentifiersInUse = new Set();
        this.queryMethodMap = {
            infiniteQuery: {
                hook: 'useInfiniteQuery',
                options: 'UseInfiniteQueryOptions',
            },
            query: {
                hook: 'useQuery',
                options: 'UseQueryOptions',
            },
            mutation: {
                hook: 'useMutation',
                options: 'UseMutationOptions',
            },
        };
        this._externalImportPrefix = this.config.importOperationTypesFrom ? `${this.config.importOperationTypesFrom}.` : '';
        this._documents = documents;
        this.fetcher = this.createFetcher(rawConfig.fetcher || 'fetch');
        this.fields = { ...this._schema.getQueryType()?.getFields(), ...this._schema.getMutationType()?.getFields() };
        (0, auto_bind_1.default)(this);
    }
    get imports() {
        return this._imports;
    }
    createFetcher(raw) {
        if (raw === 'fetch') {
            return new fetcher_fetch_1.FetchFetcher(this);
        }
        else if (typeof raw === 'object' && 'endpoint' in raw) {
            return new fetcher_fetch_hardcoded_1.HardcodedFetchFetcher(this, raw);
        }
        else if (raw === 'graphql-request') {
            return new fetcher_graphql_request_1.GraphQLRequestClientFetcher(this);
        }
        return new fetcher_custom_mapper_1.CustomMapperFetcher(this, raw);
    }
    get hasOperations() {
        return this._collectedOperations.length > 0;
    }
    getImports() {
        const baseImports = super.getImports();
        if (!this.hasOperations) {
            return baseImports;
        }
        if (this.config.addInfiniteQuery) {
            this.reactQueryOptionsIdentifiersInUse.add('QueryFunctionContext');
        }
        const hookAndTypeImports = [
            ...Array.from(this.reactQueryHookIdentifiersInUse),
            ...Array.from(this.reactQueryOptionsIdentifiersInUse).map((identifier) => `${this.config.useTypeImports ? 'type ' : ''}${identifier}`),
        ];
        return [...baseImports, `import { ${hookAndTypeImports.join(', ')} } from 'react-query';`];
    }
    getFetcherImplementation() {
        return this.fetcher.generateFetcherImplementaion();
    }
    _getHookSuffix(name, operationType) {
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
        const suffix = this._getHookSuffix(nodeName, operationType);
        const operationName = this.convertName(nodeName, {
            suffix,
            useTypesPrefix: false,
            useTypesSuffix: false,
        });
        operationResultType = this._externalImportPrefix + operationResultType;
        operationVariablesTypes = this._externalImportPrefix + operationVariablesTypes;
        const fieldName = (0, change_case_all_2.lowerCaseFirst)(nodeName);
        const fieldDefinition = this.fields[fieldName];
        const outputType = (0, type_resolver_1.getOutputType)(fieldDefinition);
        const outputResultType = outputType.typeName;
        const variablesType = (0, type_resolver_1.getInputVariablesType)(fieldDefinition);
        const inputVariablesType = operationVariablesTypes;
        let query = '';
        if (operationType === 'Query') {
            query += (0, keys_generator_1.generateQueryKeyMaker)(node, operationName, operationVariablesTypes, hasRequiredVariables);
            query += (0, transformer_generator_1.generateInputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, variablesType);
            query += (0, transformer_generator_1.generateOutputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, outputType);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, outputResultType, inputVariablesType);
        }
        else if (operationType === 'Mutation') {
            query += (0, keys_generator_1.generateMutationKeyMaker)(node, operationName);
            query += (0, transformer_generator_1.generateInputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, variablesType);
            query += (0, transformer_generator_1.generateOutputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, outputType);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables, outputResultType, inputVariablesType);
        }
        else if (operationType === 'Subscription') {
            console.warn(`Plugin "typescript-react-query" does not support GraphQL Subscriptions at the moment! Ignoring "${node.name.value}"...`);
        }
        return query;
    }
}
exports.ReactQueryVisitor = ReactQueryVisitor;
//# sourceMappingURL=visitor.js.map