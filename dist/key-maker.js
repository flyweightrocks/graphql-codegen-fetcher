"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMutationKeyMaker = exports.generateMutationKey = exports.generateQueryKeyMaker = exports.generateQueryKey = exports.generateQueryVariablesSignature = void 0;
function generateQueryVariablesSignature(hasRequiredVariables, operationVariablesTypes) {
    return `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
}
exports.generateQueryVariablesSignature = generateQueryVariablesSignature;
function generateQueryKey(node, hasRequiredVariables) {
    if (hasRequiredVariables)
        return `['${node.name.value}', variables]`;
    return `variables === undefined ? ['${node.name.value}'] : ['${node.name.value}', variables]`;
}
exports.generateQueryKey = generateQueryKey;
function generateQueryKeyMaker(node, operationName, operationVariablesTypes, hasRequiredVariables) {
    const signature = generateQueryVariablesSignature(hasRequiredVariables, operationVariablesTypes);
    const comment = `\n/**
  * Key maker function for \`${operationName}\`.
  */`;
    const implementation = `\nexport const ${operationName}Keys = (${signature}) => ${generateQueryKey(node, hasRequiredVariables)};\n`;
    return `\n${comment}\n${implementation}`;
}
exports.generateQueryKeyMaker = generateQueryKeyMaker;
function generateMutationKey(node) {
    return `['${node.name.value}']`;
}
exports.generateMutationKey = generateMutationKey;
function generateMutationKeyMaker(node, operationName) {
    const comment = `\n/**
  * Key maker function for \`${operationName}\`.
  */`;
    const implementation = `\nexport const ${operationName}Keys = () => ${generateMutationKey(node)};\n`;
    return `\n${comment}\n${implementation}`;
}
exports.generateMutationKeyMaker = generateMutationKeyMaker;
//# sourceMappingURL=key-maker.js.map