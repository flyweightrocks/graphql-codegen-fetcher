import { Types } from '@graphql-codegen/plugin-helpers';
import { ReactQueryVisitor } from '@graphql-codegen/typescript-react-query';
import {
  ClientSideBasePluginConfig,
  ClientSideBaseVisitor,
  DocumentMode,
  getConfigValue,
  LoadedFragment,
} from '@graphql-codegen/visitor-plugin-common';
import autoBind from 'auto-bind';
import { lowerCaseFirst, pascalCase } from 'change-case-all';
import { GraphQLField, GraphQLSchema, OperationDefinitionNode } from 'graphql';
import { CustomMapperFetcher } from './fetcher-custom-mapper';
import { generateMutationKeyMaker, generateQueryKeyMaker } from './variables-generator';
import { generateInputTransformer, generateOutputTransformer } from './transformer';
import { getInputVariablesType, getOutputType } from './type-resolver';
import { ReactQueryRawPluginConfig } from '@graphql-codegen/typescript-react-query/config';
import { RawPluginConfig } from './config';
import { FetcherRenderer } from './fetcher-renderer';
import { ReactQueryPluginConfig } from '@graphql-codegen/typescript-react-query/visitor';
export interface ParsedPluginConfig extends ReactQueryPluginConfig {
  generateReactQueryHooks?: boolean;
  generateGqlRequestFunctions?: boolean;
}

export class ExtendedReactQueryVisitor extends ClientSideBaseVisitor<RawPluginConfig, ParsedPluginConfig> {
  public fetcher: FetcherRenderer;
  public fields: Record<string, GraphQLField<any, any>>;
  public outputResultTypes: Record<string, string> = {};
  public reactQueryVisitor: ReactQueryVisitor;

  constructor(
    schema: GraphQLSchema,
    fragments: LoadedFragment[],
    protected rawConfig: RawPluginConfig,
    documents: Types.DocumentFile[],
  ) {
    super(schema, fragments, rawConfig, {
      documentMode: DocumentMode.string,
      generateReactQueryHooks: getConfigValue(rawConfig.generateReactQueryHooks, false),
      generateGqlRequestFunctions: getConfigValue(rawConfig.generateGqlRequestFunctions, false),
    });

    this.fetcher = this.createExtendedFetcher(rawConfig.fetcher || 'fetch');
    this.fields = { ...this._schema.getQueryType()?.getFields(), ...this._schema.getMutationType()?.getFields() };
    this.reactQueryVisitor = new ReactQueryVisitor(schema, fragments, rawConfig, documents);
    this._documents = documents;

    autoBind(this);
  }

  public get imports(): Set<string> {
    return this._imports;
  }

  OperationDefinition(node: OperationDefinitionNode): string {
    // overwrite method to call the same method on ReactQueryVisitor
    // it collects all operations into _collectedOperations and it must be filled for the type imports
    this.reactQueryVisitor.OperationDefinition(node);
    return super.OperationDefinition(node);
  }

  public get hasOperations() {
    return this._collectedOperations.length > 0;
  }

  public getImports(): string[] {
    return this.reactQueryVisitor.getImports();
  }

  public getFetcherImplementation(): string {
    return this.fetcher.generateFetcherImplementaion();
  }

  private createExtendedFetcher(raw: ReactQueryRawPluginConfig['fetcher']): FetcherRenderer {
    if (!raw || raw === 'fetch' || raw === 'graphql-request' || (typeof raw === 'object' && 'endpoint' in raw))
      throw new Error('Only custom fetchers are supported');

    return new CustomMapperFetcher(this, raw);
  }

  private getSuffix(name: string, operationType: string) {
    if (this.config.omitOperationSuffix) {
      return '';
    }
    if (!this.config.dedupeOperationSuffix) {
      return pascalCase(operationType);
    }
    if (name.includes('Query') || name.includes('Mutation') || name.includes('Subscription')) {
      return '';
    }
    return pascalCase(operationType);
  }

  protected buildOperation(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationType: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string {
    const nodeName = node.name?.value ?? '';
    const suffix = this.getSuffix(nodeName, operationType);
    const operationName: string = this.convertName(nodeName, {
      suffix,
      useTypesPrefix: false,
      useTypesSuffix: false,
    });

    operationResultType = this.reactQueryVisitor['_externalImportPrefix'] + operationResultType;
    operationVariablesTypes = this.reactQueryVisitor['_externalImportPrefix'] + operationVariablesTypes;

    const fieldName = lowerCaseFirst(nodeName); // createNode, getNode, ...
    const fieldDefinition = this.fields[fieldName];

    const output = getOutputType(fieldDefinition);
    this.outputResultTypes[operationName] = output.typeName;

    const inputVariables = getInputVariablesType(fieldDefinition);

    let query = '';

    if (operationType === 'Query') {
      query += generateQueryKeyMaker(node, operationName, operationVariablesTypes, hasRequiredVariables);
      query += generateInputTransformer(
        node,
        operationName,
        operationVariablesTypes,
        operationResultType,
        hasRequiredVariables,
        inputVariables,
      );
      query += generateOutputTransformer(
        node,
        operationName,
        operationVariablesTypes,
        operationResultType,
        hasRequiredVariables,
        output,
      );
      query += this.fetcher.generateFetcherFetch(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
      );

      if (this.config.generateGqlRequestFunctions) {
        query += this.fetcher.generateRequestFunction(
          node,
          documentVariableName,
          operationName,
          operationResultType,
          operationVariablesTypes,
          hasRequiredVariables,
        );
      }

      query += this.fetcher.generateQueryHook(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
      );

      if (this.reactQueryVisitor.config.exposeQueryKeys) {
        query += `\nuse${operationName}.getKey = ${operationName}Keys;\n`;
      }
    } else if (operationType === 'Mutation') {
      query += generateMutationKeyMaker(node, operationName);
      query += generateInputTransformer(
        node,
        operationName,
        operationVariablesTypes,
        operationResultType,
        hasRequiredVariables,
        inputVariables,
      );
      query += generateOutputTransformer(
        node,
        operationName,
        operationVariablesTypes,
        operationResultType,
        hasRequiredVariables,
        output,
      );
      query += this.fetcher.generateFetcherFetch(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
      );

      if (this.config.generateGqlRequestFunctions) {
        query += this.fetcher.generateRequestFunction(
          node,
          documentVariableName,
          operationName,
          operationResultType,
          operationVariablesTypes,
          hasRequiredVariables,
        );
      }

      if (this.config.generateReactQueryHooks)
        query += this.fetcher.generateMutationHook(
          node,
          documentVariableName,
          operationName,
          operationResultType,
          operationVariablesTypes,
          hasRequiredVariables,
        );

      if (this.reactQueryVisitor.config.exposeMutationKeys) {
        query += `\nuse${operationName}.getKey = ${operationName}Keys;\n`;
      }
    } else if (operationType === 'Subscription') {
      // not supported yet
    }

    return query;
  }
}
