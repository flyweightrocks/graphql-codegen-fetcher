import { oldVisit, PluginFunction, PluginValidateFn, Types } from '@graphql-codegen/plugin-helpers';
import { LoadedFragment } from '@graphql-codegen/visitor-plugin-common';
import { concatAST, DocumentNode, FragmentDefinitionNode, GraphQLSchema, Kind, visit } from 'graphql';
import { RawPluginConfig } from './config';
import { PuginVisitor } from './visitor';
import { extname } from 'path';

export const plugin: PluginFunction<RawPluginConfig, Types.ComplexPluginOutput> = (schema, documents, config) => {
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

  const visitor = new PuginVisitor(schema, allFragments, config, documents);
  const visitorResult = visit(allAst, { leave: visitor });

  return {
    // prepend: [...visitor.getImports(), '\n', visitor.getFetcherImplementation()],
    prepend: visitor.getImports(),
    content: [visitor.fragments, ...visitorResult.definitions.filter((t: any) => typeof t === 'string')].join('\n'),
  };
};

export const validate: PluginValidateFn<RawPluginConfig> = (
  schema,
  documents,
  config,
  outputFile,
  allPlugins,
  pluginContext,
) => {
  if (extname(outputFile) !== '.ts' && extname(outputFile) !== '.tsx') {
    throw new Error(`Plugin "graphql-codegen-typescript-transformer" requires extension to be ".ts" or ".tsx"!`);
  }
};

// export { validate } from '@graphql-codegen/typescript-react-query';
export { PuginVisitor };
