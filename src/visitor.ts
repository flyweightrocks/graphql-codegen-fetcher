import { Types } from '@graphql-codegen/plugin-helpers';
import {
  ClientSideBasePluginConfig,
  ClientSideBaseVisitor,
  DocumentMode,
  InternalParsedMapper,
  LoadedFragment,
  parseMapper,
} from '@graphql-codegen/visitor-plugin-common';
// import autoBind from 'auto-bind';
import { pascalCase } from 'change-case-all';
import { GraphQLField, GraphQLSchema, OperationDefinitionNode, OperationTypeNode } from 'graphql';
import { RawPluginConfig } from './config';
import { CustomFetcher, FetcherRenderer } from './custom-fetcher';
import { Transformer, TransformerMap } from './transformer';
import { getInputVariablesType, getOutputType } from './type-resolver';
import { generateMutationKeyMaker, generateQueryKeyMaker } from './variables-generator';

type SchemaFields = {
  [operation in OperationTypeNode]: {
    [key: string]: GraphQLField<any, any>;
  };
};

export type ParsedPluginConfig = ClientSideBasePluginConfig;

const JsonStringify: InternalParsedMapper = {
  isExternal: false,
  type: 'JSON.stringify',
};

const JsonParse: InternalParsedMapper = {
  isExternal: false,
  type: 'JSON.parse',
};

export class PuginVisitor extends ClientSideBaseVisitor<RawPluginConfig, ParsedPluginConfig> {
  private externalImportPrefix: string;

  public fetcher: FetcherRenderer;

  public transformer: Transformer;

  public fields: SchemaFields;

  constructor(
    schema: GraphQLSchema,
    fragments: LoadedFragment[],
    rawConfig: RawPluginConfig,
    documents: Types.DocumentFile[],
  ) {
    super(
      schema,
      fragments,
      rawConfig,
      {
        documentMode: DocumentMode.string,
      },
      documents,
    );

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

  private createTransformer(rawConfig: RawPluginConfig): Transformer {
    const inputTransformerMap: TransformerMap = {};
    const outputTransformerMap: TransformerMap = {};

    if (rawConfig.inputTransformer) {
      Object.entries(rawConfig.inputTransformer).forEach(([scalar, type]) => {
        const mapper = type === 'JSON.stringify' ? JsonStringify : parseMapper(type.func);
        inputTransformerMap[scalar] = mapper;
      });
    }

    if (rawConfig.outputTransformer) {
      Object.entries(rawConfig.outputTransformer).forEach(([scalar, type]) => {
        const mapper = type === 'JSON.parse' ? JsonParse : parseMapper(type.func);
        outputTransformerMap[scalar] = mapper;
      });
    }

    return new Transformer(this, inputTransformerMap, outputTransformerMap);
  }

  private createFetcher(rawConfig: RawPluginConfig): FetcherRenderer {
    const { fetcher } = rawConfig;

    if (
      !fetcher ||
      fetcher === 'fetch' ||
      fetcher === 'graphql-request' ||
      (typeof fetcher === 'object' && 'endpoint' in fetcher)
    )
      throw new Error('Plugin "graphql-codegen-typescript-transformer" only supports custom fetchers');

    return new CustomFetcher(this, fetcher);
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

  OperationDefinition(node: OperationDefinitionNode): string {
    return super.OperationDefinition(node);
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

    operationResultType = this.externalImportPrefix + operationResultType;
    operationVariablesTypes = this.externalImportPrefix + operationVariablesTypes;

    const selectionNode = node.selectionSet.selections[0]; // createNode, getNode, ...
    if (!('name' in selectionNode)) throw new Error('Selection node must have a name');

    const selectionNodeName = selectionNode.name?.value;

    const fieldDefinition = this.fields[node.operation][selectionNodeName];

    const output = getOutputType(fieldDefinition);
    const inputVariables = getInputVariablesType(fieldDefinition);

    let query = '';

    if (operationType === 'Query') {
      query += generateQueryKeyMaker(node, operationName, operationVariablesTypes, hasRequiredVariables);
      query += this.transformer.generateInputTransformer(
        node,
        operationName,
        operationVariablesTypes,
        operationResultType,
        hasRequiredVariables,
        inputVariables,
      );
      query += this.transformer.generateOutputTransformer(
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
        output,
      );
      query += this.fetcher.generateRequestFunction(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
        output,
      );
    } else if (operationType === 'Mutation') {
      query += generateMutationKeyMaker(node, operationName);
      query += this.transformer.generateInputTransformer(
        node,
        operationName,
        operationVariablesTypes,
        operationResultType,
        hasRequiredVariables,
        inputVariables,
      );
      query += this.transformer.generateOutputTransformer(
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
        output,
      );
      query += this.fetcher.generateRequestFunction(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
        output,
      );
    } else if (operationType === 'Subscription') {
      // not supported yet
    }

    return query;
  }
}
