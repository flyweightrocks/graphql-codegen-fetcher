// import { FetcherRenderer as ReactQueryFetcherRenderer } from '@graphql-codegen/typescript-react-query/fetcher';
import { OperationDefinitionNode } from 'graphql';

export interface FetcherRenderer {
  generateFetcherImplementaion: () => string;
  // generateQueryHook: (
  //   node: OperationDefinitionNode,
  //   documentVariableName: string,
  //   operationName: string,
  //   operationResultType: string,
  //   operationVariablesTypes: string,
  //   hasRequiredVariables: boolean,
  // ) => string;
  // generateInfiniteQueryHook: (
  //   node: OperationDefinitionNode,
  //   documentVariableName: string,
  //   operationName: string,
  //   operationResultType: string,
  //   operationVariablesTypes: string,
  //   hasRequiredVariables: boolean,
  // ) => string;
  // generateMutationHook: (
  //   node: OperationDefinitionNode,
  //   documentVariableName: string,
  //   operationName: string,
  //   operationResultType: string,
  //   operationVariablesTypes: string,
  //   hasRequiredVariables: boolean,
  // ) => string;
  generateFetcherFetch: (
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ) => string;

  generateRequestFunction(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
  ): string;
}

// export interface ExtendedFetcherRenderer extends Omit<FetcherRenderer, 'generateFetcherFetch'> {
//   // generateFetcherImplementaion: () => string;
//   // generateQueryHook: (
//   //   node: OperationDefinitionNode,
//   //   documentVariableName: string,
//   //   operationName: string,
//   //   operationResultType: string,
//   //   operationVariablesTypes: string,
//   //   hasRequiredVariables: boolean,
//   // ) => string;
//   // generateInfiniteQueryHook: (
//   //   node: OperationDefinitionNode,
//   //   documentVariableName: string,
//   //   operationName: string,
//   //   operationResultType: string,
//   //   operationVariablesTypes: string,
//   //   hasRequiredVariables: boolean,
//   // ) => string;
//   // generateMutationHook: (
//   //   node: OperationDefinitionNode,
//   //   documentVariableName: string,
//   //   operationName: string,
//   //   operationResultType: string,
//   //   operationVariablesTypes: string,
//   //   hasRequiredVariables: boolean,
//   // ) => string;
//   generateFetcherFetch: (
//     node: OperationDefinitionNode,
//     documentVariableName: string,
//     operationName: string,
//     operationResultType: string,
//     operationVariablesTypes: string,
//     hasRequiredVariables: boolean,
//     outputResultType: string,
//     inportVariablesTypes: string,
//   ) => string;
// }
