"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputVariablesType = exports.getOutputType = void 0;
const graphql_1 = require("graphql");
const toScalarType = (type) => ['ID', 'String', 'Boolean', 'Int', 'Float', 'AWSDateTime', 'AWSJSON'].includes(type) ? `Scalars['${type}']` : type;
const isScalarField = (type) => (0, graphql_1.isScalarType)(type) || (0, graphql_1.isEnumType)(type);
const isArrayField = (type) => (0, graphql_1.isListType)(type) || ((0, graphql_1.isNonNullType)(type) && (0, graphql_1.isListType)(type.ofType));
const isMandatoryField = (type) => (0, graphql_1.isNonNullType)(type);
const isModelField = (type) => {
    if ((0, graphql_1.isNonNullType)(type) || (0, graphql_1.isListType)(type))
        return isModelField(type.ofType);
    if (type.name.startsWith('Model') && type.name.endsWith('Connection'))
        return true;
    if (type.name.startsWith('Model') && type.name.endsWith('Input'))
        return true;
    return false;
};
const getTypeName = (type) => {
    if ((0, graphql_1.isNonNullType)(type))
        return getTypeName(type.ofType);
    if ((0, graphql_1.isListType)(type))
        return `${getTypeName(type.ofType)}[]`;
    return toScalarType(type.name);
};
const resolveFields = (type) => {
    if ((0, graphql_1.isNonNullType)(type)) {
        const resolved = resolveFields(type.ofType);
        return resolved;
    }
    if ((0, graphql_1.isListType)(type)) {
        const resolved = resolveFields(type.ofType);
        return resolved;
    }
    if ((0, graphql_1.isObjectType)(type) || (0, graphql_1.isInputObjectType)(type)) {
        const fields = type.getFields();
        const resolved = Object.fromEntries(Object.values(fields).map((field) => {
            const isArray = isArrayField(field.type);
            const isMandatory = isMandatoryField(field.type);
            if (isModelField(field.type))
                return [field.name, field.type.name];
            return [`${field.name}${isArray ? '[]' : ''}${isMandatory ? '!' : ''}`, resolveFields(field.type)];
        }));
        return resolved;
    }
    if ((0, graphql_1.isScalarType)(type)) {
        return type.name;
    }
    if ((0, graphql_1.isEnumType)(type)) {
        return type.name;
    }
    throw new Error(`Can't resolve type ${type.name}`);
};
const getOutputType = (fieldDefinition) => {
    return {
        fieldName: fieldDefinition.name,
        typeName: getTypeName(fieldDefinition.type),
        fields: isScalarField(fieldDefinition.type) ? {} : resolveFields(fieldDefinition.type),
    };
};
exports.getOutputType = getOutputType;
const getInputVariablesType = (fieldDefinition) => {
    return fieldDefinition.args.map((arg) => ({
        fieldName: arg.name,
        typeName: getTypeName(arg.type),
        fields: resolveFields(arg.type),
    }));
};
exports.getInputVariablesType = getInputVariablesType;
//# sourceMappingURL=type-resolver.js.map