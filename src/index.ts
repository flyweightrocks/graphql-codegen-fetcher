import { oldVisit, PluginFunction, Types } from '@graphql-codegen/plugin-helpers';
import { ReactQueryRawPluginConfig } from '@graphql-codegen/typescript-react-query/config';
import { LoadedFragment } from '@graphql-codegen/visitor-plugin-common';
import { concatAST, DocumentNode, FragmentDefinitionNode, GraphQLSchema, Kind } from 'graphql';
import { RawPluginConfig } from './config';
import { ExtendedReactQueryVisitor } from './visitor';

export const plugin: PluginFunction<RawPluginConfig, Types.ComplexPluginOutput> = (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: ReactQueryRawPluginConfig,
) => {
  const allAst = concatAST(documents.map((v) => v.document as DocumentNode));

  const allFragments: LoadedFragment[] = [
    ...(allAst.definitions.filter((d) => d.kind === Kind.FRAGMENT_DEFINITION) as FragmentDefinitionNode[]).map(
      (fragmentDef) => ({
        node: fragmentDef,
        name: fragmentDef.name.value,
        onType: fragmentDef.typeCondition.name.value,
        isExternal: false,
      }),
    ),
    ...(config.externalFragments || []),
  ];

  const visitor = new ExtendedReactQueryVisitor(schema, allFragments, config, documents);
  const visitorResult = oldVisit(allAst, { leave: visitor });

  if (visitor.hasOperations) {
    return {
      prepend: [...visitor.getImports(), '\n', visitor.getFetcherImplementation()],
      content: [visitor.fragments, ...visitorResult.definitions.filter((t: any) => typeof t === 'string')].join('\n'),
    };
  }

  return {
    prepend: [...visitor.getImports(), '\n'],
    content: [visitor.fragments, ...visitorResult.definitions.filter((t: any) => typeof t === 'string')].join('\n'),
  };
};

export { validate } from '@graphql-codegen/typescript-react-query';
export { ExtendedReactQueryVisitor };
