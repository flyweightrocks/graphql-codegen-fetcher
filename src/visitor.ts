import { Types } from '@graphql-codegen/plugin-helpers';
import {
  buildMapperImport,
  ClientSideBasePluginConfig,
  ClientSideBaseVisitor,
  DocumentMode,
  ExternalParsedMapper,
  InternalParsedMapper,
  LoadedFragment,
  ParsedMapper,
  parseMapper,
} from '@graphql-codegen/visitor-plugin-common';
// import autoBind from 'auto-bind';
import { lowerCaseFirst, pascalCase } from 'change-case-all';
import { GraphQLField, GraphQLSchema, OperationDefinitionNode, OperationTypeNode } from 'graphql';
import { CustomFetcher, FetcherRenderer } from './custom-fetcher';
import { generateMutationKeyMaker, generateQueryKeyMaker } from './variables-generator';
import { generateInputTransformer, generateOutputTransformer } from './transformer';
import { getInputVariablesType, getOutputType } from './type-resolver';
import { RawPluginConfig } from './config';

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

  private inputTransformerMap = new Map<string, ParsedMapper>();

  private outputTransformerMap = new Map<string, ParsedMapper>();

  public fetcher: FetcherRenderer;

  public fields: SchemaFields;

  public outputResultTypes: Record<string, string> = {};

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

    this.fetcher = this.createFetcher(rawConfig.fetcher || 'fetch');
    this.externalImportPrefix = this.config.importOperationTypesFrom ? `${this.config.importOperationTypesFrom}.` : '';
    this.fields = {
      query: { ...this._schema.getQueryType()?.getFields() },
      mutation: { ...this._schema.getMutationType()?.getFields() },
      subscription: { ...this._schema.getSubscriptionType()?.getFields() },
    };

    if (rawConfig.inputTransformer) {
      Object.entries(rawConfig.inputTransformer).forEach(([scalar, type]) => {
        const mapper = type === 'JSON.stringify' ? JsonStringify : parseMapper(type.func);
        this.inputTransformerMap.set(scalar, mapper);
      });
    }

    if (rawConfig.outputTransformer) {
      Object.entries(rawConfig.outputTransformer).forEach(([scalar, type]) => {
        const mapper = type === 'JSON.parse' ? JsonParse : parseMapper(type.func);
        this.outputTransformerMap.set(scalar, mapper);
      });
    }

    this._imports.add(this.fetcher.generateFetcherImport());
    [...this.inputTransformerMap.values(), ...this.outputTransformerMap.values()]
      .filter((mapper): mapper is ExternalParsedMapper => mapper.isExternal)
      .forEach((mapper) =>
        this._imports.add(
          buildMapperImport(
            mapper.source,
            [
              {
                identifier: mapper.type,
                asDefault: mapper.default,
              },
            ],
            this.config.useTypeImports,
          ) || '',
        ),
      );

    // autoBind(this);
  }

  // public get imports(): Set<string> {
  //   return this._imports;
  // }

  // public get hasOperations() {
  //   return this._collectedOperations.length > 0;
  // }

  // public getFetcherImplementation(): string {
  //   return this.fetcher.generateFetcherImplementaion();
  // }

  private createFetcher(raw: RawPluginConfig['fetcher']): FetcherRenderer {
    if (!raw || raw === 'fetch' || raw === 'graphql-request' || (typeof raw === 'object' && 'endpoint' in raw))
      throw new Error('Plugin "graphql-codegen-typescript-transformer" only supports custom fetchers');

    return new CustomFetcher(this, raw);
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

    // const fieldName = lowerCaseFirst(nodeName);
    const fieldDefinition = this.fields[node.operation][selectionNodeName];

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
      query += this.fetcher.generateRequestFunction(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
      );
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
      query += this.fetcher.generateRequestFunction(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
      );
    } else if (operationType === 'Subscription') {
      // not supported yet
    }

    return query;
  }
}
