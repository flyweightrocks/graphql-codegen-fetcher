// eslint-disable-next-line import/no-extraneous-dependencies
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api';

export const fetchWithAmplify = <TData, TVariables, TOutput = TData, TInput = TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
  outputFn?: (data: TData) => TOutput,
  inputFn?: (variables?: TVariables) => TInput,
): (() => Promise<TOutput>) => {
  return async () => {
    const result = await (API.graphql({
      query,
      variables: inputFn ? inputFn(variables) : variables || {},
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as unknown as Promise<GraphQLResult<TData>>);

    if (result.errors) {
      const message = result.errors ? result.errors[0].message : 'GraphQL fetching error';
      throw new Error(message);
    }

    return outputFn ? outputFn(result.data) : result.data;
  };
};
