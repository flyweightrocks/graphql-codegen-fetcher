import { OperationDefinitionNode } from 'graphql';

export function generateQueryVariablesSignature(
  hasRequiredVariables: boolean,
  operationVariablesTypes: string,
): string {
  return `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
}

export function generateQueryKey(node: OperationDefinitionNode, hasRequiredVariables: boolean): string {
  if (hasRequiredVariables) return `['${node.name!.value}', variables]`;
  return `variables === undefined ? ['${node.name!.value}'] : ['${node.name!.value}', variables]`;
}

export function generateQueryKeyMaker(
  node: OperationDefinitionNode,
  operationName: string,
  operationVariablesTypes: string,
  hasRequiredVariables: boolean,
) {
  const signature = generateQueryVariablesSignature(hasRequiredVariables, operationVariablesTypes);

  const comment = `\n/**
  * Key maker function for \`${operationName}\`.
  */`;

  const implementation = `\nexport const ${operationName}Keys = (${signature}) => ${generateQueryKey(
    node,
    hasRequiredVariables,
  )};\n`;

  return `\n${comment}\n${implementation}`;
}

export function generateMutationKey(node: OperationDefinitionNode): string {
  return `['${node.name!.value}']`;
}

export function generateMutationKeyMaker(node: OperationDefinitionNode, operationName: string) {
  const comment = `\n/**
  * Key maker function for \`${operationName}\`.
  */`;

  const implementation = `\nexport const ${operationName}Keys = () => ${generateMutationKey(node)};\n`;

  return `\n${comment}\n${implementation}`;
}
