import { GraphQLSchema, buildClientSchema, buildSchema, parse } from 'graphql';
import { Types, mergeOutputs } from '@graphql-codegen/plugin-helpers';

import { plugin as tsPlugin } from '@graphql-codegen/typescript';
import { plugin as tsDocumentsPlugin } from '@graphql-codegen/typescript-operations';
import { validateTs } from '@graphql-codegen/testing';
import fs from 'fs';
import path from 'path';
import { plugin } from '../src/index';

import * as queries from '../graphql/blog/queries';
import * as mutations from '../graphql/blog/mutations';

const schema = buildClientSchema(
  JSON.parse(fs.readFileSync(path.join(__dirname, '../graphql/blog/schema.json'), 'utf8')),
);

const documents = [
  ...Object.entries(queries).map(([name, query]) => ({ document: parse(query) })),
  ...Object.entries(mutations).map(([name, query]) => ({ document: parse(query) })),
];

const validateTypeScript = async (
  output: Types.PluginOutput,
  testSchema: GraphQLSchema,
  testDocuments: Types.DocumentFile[],
  config: any,
) => {
  const tsOutput = await tsPlugin(testSchema, testDocuments, config, { outputFile: '' });
  const tsDocumentsOutput = await tsDocumentsPlugin(testSchema, testDocuments, config, { outputFile: '' });
  const merged = mergeOutputs([tsOutput, tsDocumentsOutput, output]);
  validateTs(merged, undefined, true, false);

  return merged;
};

describe('graphql-codegen-typescript-transformer', () => {
  it('Should generate query correctly with external mapper', async () => {
    const config = {
      fetcher: '../graphql/fetcher#fetcher',
      omitOperationSuffix: true,
    };

    const out = (await plugin(schema, documents, config)) as Types.ComplexPluginOutput;

    expect(out.prepend).toMatchSnapshot();
    expect(out.content).toMatchSnapshot();

    await validateTypeScript(mergeOutputs(out), schema, documents, config);
  });

  // it('Should generate query correctly with internal mapper', async () => {
  //   const config = {
  //     fetcher: 'myCustomFetcher',
  //     typesPrefix: 'T',
  //     legacyMode: true,
  //   };

  //   const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;

  //   expect(out.prepend).toContain(
  //     `import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';`,
  //   );
  //   expect(out.content).toBeSimilarStringTo(`export const useTestQuery = <
  //     TData = TTestQuery,
  //     TError = unknown
  //   >(
  //     variables?: TTestQueryVariables,
  //     options?: UseQueryOptions<TTestQuery, TError, TData>
  //   ) =>
  //   useQuery<TTestQuery, TError, TData>(
  //     variables === undefined ? ['test'] : ['test', variables],
  //     myCustomFetcher<TTestQuery, TTestQueryVariables>(TestDocument, variables),
  //     options
  //   );`);

  //   expect(out.content).toBeSimilarStringTo(`export const useTestMutation = <
  //     TError = unknown,
  //     TContext = unknown
  //   >(options?: UseMutationOptions<TTestMutation, TError, TTestMutationVariables, TContext>) =>
  //   useMutation<TTestMutation, TError, TTestMutationVariables, TContext>(
  //     ['test'],
  //     (variables?: TTestMutationVariables) => myCustomFetcher<TTestMutation, TTestMutationVariables>(TestDocument, variables)(),
  //     options
  //   );`);

  //   expect(out.content).toMatchSnapshot();
  //   await validateTypeScript(mergeOutputs(out), schema, docs, config);
  // });

  // it('Should generate mutation correctly with lazy variables', async () => {
  //   const config = {
  //     fetcher: {
  //       func: './my-file#useCustomFetcher',
  //       isReactHook: true,
  //     },
  //     typesPrefix: 'T',
  //     addInfiniteQuery: true,
  //     legacyMode: true,
  //   };

  //   const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;

  //   expect(out.prepend).toContain(
  //     `import { useQuery, useInfiniteQuery, useMutation, UseQueryOptions, UseInfiniteQueryOptions, UseMutationOptions } from 'react-query';`,
  //   );
  //   expect(out.prepend).toContain(`import { useCustomFetcher } from './my-file';`);
  //   expect(out.content).toBeSimilarStringTo(`export const useTestQuery = <
  //       TData = TTestQuery,
  //       TError = unknown
  //     >(
  //       variables?: TTestQueryVariables,
  //       options?: UseQueryOptions<TTestQuery, TError, TData>
  //     ) =>
  //     useQuery<TTestQuery, TError, TData>(
  //       variables === undefined ? ['test'] : ['test', variables],
  //       useCustomFetcher<TTestQuery, TTestQueryVariables>(TestDocument).bind(null, variables),
  //       options
  //     );`);

  //   expect(out.content).toBeSimilarStringTo(`export const useInfiniteTestQuery = <
  //   TData = TTestQuery,
  //   TError = unknown
  // >(
  //   pageParamKey: keyof TTestQueryVariables,
  //   variables?: TTestQueryVariables,
  //   options?: UseInfiniteQueryOptions<TTestQuery, TError, TData>
  // ) =>{
  //   const query = useCustomFetcher<TTestQuery, TTestQueryVariables>(TestDocument)
  //   return useInfiniteQuery<TTestQuery, TError, TData>(
  //   variables === undefined ? ['test.infinite'] : ['test.infinite', variables],
  //   (metaData) => query({...variables, ...(metaData.pageParam ? {[pageParamKey]: metaData.pageParam} : {})}),
  //   options
  // )};`);
  //   expect(out.content).toBeSimilarStringTo(`export const useTestMutation = <
  //     TError = unknown,
  //     TContext = unknown
  //   >(options?: UseMutationOptions<TTestMutation, TError, TTestMutationVariables, TContext>) =>
  //   useMutation<TTestMutation, TError, TTestMutationVariables, TContext>(
  //     ['test'],
  //     useCustomFetcher<TTestMutation, TTestMutationVariables>(TestDocument),
  //     options
  //   );`);

  //   expect(out.content).toMatchSnapshot();
  //   await validateTypeScript(mergeOutputs(out), schema, docs, config);
  // });

  // it('Should support useTypeImports', async () => {
  //   const config = {
  //     fetcher: {
  //       func: './my-file#customFetcher',
  //     },
  //     useTypeImports: true,
  //   };

  //   const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;

  //   expect(out.prepend).toContain(`import type { customFetcher } from './my-file';`);
  // });

  // it("Should generate fetcher field when exposeFetcher is true and the fetcher isn't a react hook", async () => {
  //   const config = {
  //     fetcher: {
  //       func: './my-file#customFetcher',
  //     },
  //     exposeFetcher: true,
  //   };

  //   const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;
  //   expect(out.content).toBeSimilarStringTo(
  //     `useTestQuery.fetcher = (variables?: TestQueryVariables, options?: RequestInit['headers']) => customFetcher<TestQuery, TestQueryVariables>(TestDocument, variables, options);`,
  //   );
  // });

  // it('Should NOT generate fetcher field when exposeFetcher is true and the fetcher IS a react hook', async () => {
  //   const config = {
  //     fetcher: {
  //       func: './my-file#useCustomFetcher',
  //       isReactHook: true,
  //     },
  //     exposeFetcher: true,
  //   };

  //   const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;
  //   expect(out.content).not.toBeSimilarStringTo(`useTestQuery.fetcher`);
  // });

  // it("Should generate mutation fetcher field when exposeFetcher is true and the fetcher isn't a react hook", async () => {
  //   const config = {
  //     fetcher: {
  //       func: './my-file#customFetcher',
  //     },
  //     exposeFetcher: true,
  //   };

  //   const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;
  //   expect(out.content).toBeSimilarStringTo(
  //     `useTestMutation.fetcher = (variables?: TestMutationVariables, options?: RequestInit['headers']) => customFetcher<TestMutation, TestMutationVariables>(TestDocument, variables, options);`,
  //   );
  // });

  // it('Should NOT generate mutation fetcher field when exposeFetcher is true and the fetcher IS a react hook', async () => {
  //   const config = {
  //     fetcher: {
  //       func: './my-file#useCustomFetcher',
  //       isReactHook: true,
  //     },
  //     exposeFetcher: true,
  //   };

  //   const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;
  //   expect(out.content).not.toBeSimilarStringTo(`useTestMutation.fetcher`);
  // });

  // describe('exposeMutationKeys: true', () => {
  //   it('Should generate getKey for each mutation', async () => {
  //     const config = {
  //       fetcher: 'fetch',
  //       exposeMutationKeys: true,
  //     };
  //     const out = (await plugin(schema, docs, config)) as Types.ComplexPluginOutput;
  //     expect(out.content).toBeSimilarStringTo(`useTestMutation.getKey = () => ['test']\n`);
  //   });
  // });

  // it(`tests for dedupeOperationSuffix`, async () => {
  //   const ast = parse(/* GraphQL */ `
  //     query notificationsQuery {
  //       notifications {
  //         id
  //       }
  //     }
  //   `);
  //   const ast2 = parse(/* GraphQL */ `
  //     query notifications {
  //       notifications {
  //         id
  //       }
  //     }
  //   `);
  //   const config = {
  //     fetcher: 'myCustomFetcher',
  //     typesPrefix: 'T',
  //     outputFile: '',
  //   };

  //   expect(
  //     ((await plugin(schema, [{ location: 'test-file.ts', document: ast }], {}, config)) as any).content,
  //   ).toContain('fetcher<NotificationsQueryQuery, NotificationsQueryQueryVariables>');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast }],
  //         { dedupeOperationSuffix: false },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('fetcher<NotificationsQueryQuery, NotificationsQueryQueryVariables>');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast }],
  //         { dedupeOperationSuffix: false },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('export const useNotificationsQueryQuery = ');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast }],
  //         { dedupeOperationSuffix: true },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('fetcher<NotificationsQuery, NotificationsQueryVariables>');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast }],
  //         { dedupeOperationSuffix: true },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('export const useNotificationsQuery =');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast2 }],
  //         { dedupeOperationSuffix: true },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('fetcher<NotificationsQuery, NotificationsQueryVariables>');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast2 }],
  //         { dedupeOperationSuffix: true },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('export const useNotificationsQuery =');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast2 }],
  //         { dedupeOperationSuffix: false },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('fetcher<NotificationsQuery, NotificationsQueryVariables>');
  //   expect(
  //     (
  //       (await plugin(
  //         schema,
  //         [{ location: 'test-file.ts', document: ast2 }],
  //         { dedupeOperationSuffix: false },
  //         config,
  //       )) as any
  //     ).content,
  //   ).toContain('export const useNotificationsQuery =');
  // });
});
