"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedReactQueryVisitor = void 0;
const typescript_react_query_1 = require("@graphql-codegen/typescript-react-query");
const auto_bind_1 = __importDefault(require("auto-bind"));
const change_case_all_1 = require("change-case-all");
const fetcher_custom_mapper_1 = require("./fetcher-custom-mapper");
const variables_generator_1 = require("./variables-generator");
const transformer_1 = require("./transformer");
const type_resolver_1 = require("./type-resolver");
class ExtendedReactQueryVisitor extends typescript_react_query_1.ReactQueryVisitor {
    constructor(schema, fragments, rawConfig, documents) {
        super(schema, fragments, rawConfig, documents);
        this.rawConfig = rawConfig;
        this.outputResultTypes = {};
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
        this.fetcher = this.createExtendedFetcher(rawConfig.fetcher || 'fetch');
        this.fields = { ...this._schema.getQueryType()?.getFields(), ...this._schema.getMutationType()?.getFields() };
        (0, auto_bind_1.default)(this);
    }
    createExtendedFetcher(raw) {
        if (!raw || raw === 'fetch' || raw === 'graphql-request' || (typeof raw === 'object' && 'endpoint' in raw))
            throw new Error('Only custom fetchers are supported');
        return new fetcher_custom_mapper_1.CustomMapperFetcher(this, raw);
    }
    buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes, hasRequiredVariables) {
        const nodeName = node.name?.value ?? '';
        const suffix = this['_getHookSuffix'](nodeName, operationType);
        const operationName = this.convertName(nodeName, {
            suffix,
            useTypesPrefix: false,
            useTypesSuffix: false,
        });
        operationResultType = this['_externalImportPrefix'] + operationResultType;
        operationVariablesTypes = this['_externalImportPrefix'] + operationVariablesTypes;
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
            query += this.fetcher.generateQueryHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            if (this.config.exposeQueryKeys) {
                query += `\nuse${operationName}.getKey = ${operationName}Keys;\n`;
            }
        }
        else if (operationType === 'Mutation') {
            query += (0, variables_generator_1.generateMutationKeyMaker)(node, operationName);
            query += (0, transformer_1.generateInputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables);
            query += (0, transformer_1.generateOutputTransformer)(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output);
            query += this.fetcher.generateFetcherFetch(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            query += this.fetcher.generateMutationHook(node, documentVariableName, operationName, operationResultType, operationVariablesTypes, hasRequiredVariables);
            if (this.config.exposeMutationKeys) {
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