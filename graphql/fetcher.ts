// eslint-disable-next-line import/no-extraneous-dependencies
import { API, graphqlOperation, GraphQLResult } from '@aws-amplify/api';

export const fetchWithAmplify = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
  input?: () => TVariables,
  output?: () => TData,
): (() => Promise<TData>) => {
  return async () => {
    const result = await (API.graphql({
      query,
      variables: variables || {},
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as unknown as Promise<GraphQLResult<TData>>);

    if (result.errors) {
      const message = result.errors ? result.errors[0].message : 'GraphQL fetching error';
      throw new Error(message);
    }

    return result.data!;
  };
};
