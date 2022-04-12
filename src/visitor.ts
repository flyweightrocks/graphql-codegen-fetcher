import { Types } from '@graphql-codegen/plugin-helpers';
import { ReactQueryVisitor } from '@graphql-codegen/typescript-react-query';
import { ClientSideBasePluginConfig, LoadedFragment } from '@graphql-codegen/visitor-plugin-common';
import autoBind from 'auto-bind';
import { lowerCaseFirst } from 'change-case-all';
import { GraphQLField, GraphQLSchema, OperationDefinitionNode } from 'graphql';
import { CustomMapperFetcher } from './fetcher-custom-mapper';
import { generateMutationKeyMaker, generateQueryKeyMaker } from './variables-generator';
import { generateInputTransformer, generateOutputTransformer } from './transformer';
import { getInputVariablesType, getOutputType } from './type-resolver';
import { ReactQueryRawPluginConfig } from '@graphql-codegen/typescript-react-query/config';
import { FetcherRenderer } from '@graphql-codegen/typescript-react-query/fetcher';
export interface ReactQueryPluginConfig extends ClientSideBasePluginConfig {
  errorType: string;
  exposeDocument: boolean;
  exposeQueryKeys: boolean;
  exposeMutationKeys: boolean;
  exposeFetcher: boolean;
  addInfiniteQuery: boolean;
}

export interface ReactQueryMethodMap {
  infiniteQuery: {
    hook: string;
    options: string;
  };
  query: {
    hook: string;
    options: string;
  };
  mutation: {
    hook: string;
    options: string;
  };
}

export class ExtendedReactQueryVisitor extends ReactQueryVisitor {
  // private _externalImportPrefix: string;
  // public fetcher: ExtendedFetcherRenderer;
  // public reactQueryHookIdentifiersInUse = new Set<string>();
  // public reactQueryOptionsIdentifiersInUse = new Set<string>();
  public fields: Record<string, GraphQLField<any, any>>;

  public outputResultTypes: Record<string, string> = {};

  public queryMethodMap: ReactQueryMethodMap = {
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

  constructor(
    schema: GraphQLSchema,
    fragments: LoadedFragment[],
    protected rawConfig: ReactQueryRawPluginConfig,
    documents: Types.DocumentFile[],
  ) {
    super(schema, fragments, rawConfig, documents);
    // super(schema, fragments, rawConfig, {
    //   documentMode: DocumentMode.string,
    //   errorType: getConfigValue(rawConfig.errorType, 'unknown'),
    //   exposeDocument: getConfigValue(rawConfig.exposeDocument, false),
    //   exposeQueryKeys: getConfigValue(rawConfig.exposeQueryKeys, false),
    //   exposeMutationKeys: getConfigValue(rawConfig.exposeMutationKeys, false),
    //   exposeFetcher: getConfigValue(rawConfig.exposeFetcher, false),
    //   addInfiniteQuery: getConfigValue(rawConfig.addInfiniteQuery, false),
    // });
    // this._externalImportPrefix = this.config.importOperationTypesFrom ? `${this.config.importOperationTypesFrom}.` : '';
    // this._documents = documents;
    this.fetcher = this.createExtendedFetcher(rawConfig.fetcher || 'fetch');

    this.fields = { ...this._schema.getQueryType()?.getFields(), ...this._schema.getMutationType()?.getFields() };

    autoBind(this);
  }

  // public get imports(): Set<string> {
  //   return this._imports;
  // }

  private createExtendedFetcher(raw: ReactQueryRawPluginConfig['fetcher']): FetcherRenderer {
    if (!raw || raw === 'fetch' || raw === 'graphql-request' || (typeof raw === 'object' && 'endpoint' in raw))
      throw new Error('Only custom fetchers are supported');

    return new CustomMapperFetcher(this, raw);
  }

  // public get hasOperations() {
  //   return this._collectedOperations.length > 0;
  // }

  // public getImports(): string[] {
  //   const baseImports = super.getImports();

  //   if (!this.hasOperations) {
  //     return baseImports;
  //   }

  //   if (this.config.addInfiniteQuery) {
  //     this.reactQueryOptionsIdentifiersInUse.add('QueryFunctionContext');
  //   }

  //   const hookAndTypeImports = [
  //     ...Array.from(this.reactQueryHookIdentifiersInUse),
  //     ...Array.from(this.reactQueryOptionsIdentifiersInUse).map(
  //       (identifier) => `${this.config.useTypeImports ? 'type ' : ''}${identifier}`,
  //     ),
  //   ];

  //   return [...baseImports, `import { ${hookAndTypeImports.join(', ')} } from 'react-query';`];
  // }

  // public getFetcherImplementation(): string {
  //   return this.fetcher.generateFetcherImplementaion();
  // }

  // private _getHookSuffix(name: string, operationType: string) {
  //   if (this.config.omitOperationSuffix) {
  //     return '';
  //   }
  //   if (!this.config.dedupeOperationSuffix) {
  //     return pascalCase(operationType);
  //   }
  //   if (name.includes('Query') || name.includes('Mutation') || name.includes('Subscription')) {
  //     return '';
  //   }
  //   return pascalCase(operationType);
  // }

  protected buildOperation(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationType: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string {
    const nodeName = node.name?.value ?? '';
    const suffix = this['_getHookSuffix'](nodeName, operationType);
    const operationName: string = this.convertName(nodeName, {
      suffix,
      useTypesPrefix: false,
      useTypesSuffix: false,
    });

    operationResultType = this['_externalImportPrefix'] + operationResultType;
    operationVariablesTypes = this['_externalImportPrefix'] + operationVariablesTypes;

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

      query += this.fetcher.generateQueryHook(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
      );

      if (this.config.exposeQueryKeys) {
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

      query += this.fetcher.generateMutationHook(
        node,
        documentVariableName,
        operationName,
        operationResultType,
        operationVariablesTypes,
        hasRequiredVariables,
      );

      if (this.config.exposeMutationKeys) {
        query += `\nuse${operationName}.getKey = ${operationName}Keys;\n`;
      }
    } else if (operationType === 'Subscription') {
      // not supported yet
    }

    return query;
  }
}
