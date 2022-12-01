"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputVariablesType = exports.getOutputType = void 0;
const graphql_1 = require("graphql");
const toScalarType = (type) => ['ID', 'String', 'Boolean', 'Int', 'Float', 'AWSDateTime', 'AWSJSON'].includes(type) ? `Scalars['${type}']` : type;
const isScalarField = (type) => type instanceof graphql_1.GraphQLScalarType || type instanceof graphql_1.GraphQLEnumType;
const isArrayField = (type) => type instanceof graphql_1.GraphQLList || (type instanceof graphql_1.GraphQLNonNull && type.ofType instanceof graphql_1.GraphQLList);
const isMandatoryField = (type) => type instanceof graphql_1.GraphQLNonNull;
const isModelField = (type) => {
    if (type instanceof graphql_1.GraphQLNonNull || type instanceof graphql_1.GraphQLList)
        return isModelField(type.ofType);
    if (type.name.startsWith('Model') && type.name.endsWith('Connection'))
        return true;
    if (type.name.startsWith('Model') && type.name.endsWith('Input'))
        return true;
    return false;
};
const getTypeName = (type) => {
    if (type instanceof graphql_1.GraphQLNonNull)
        return getTypeName(type.ofType);
    if (type instanceof graphql_1.GraphQLList)
        return getTypeName(type.ofType) + '[]';
    return toScalarType(type.name);
};
const resolveFields = (type) => {
    if (type instanceof graphql_1.GraphQLNonNull) {
        const resolved = resolveFields(type.ofType);
        return resolved;
    }
    else if (type instanceof graphql_1.GraphQLList) {
        const resolved = resolveFields(type.ofType);
        return resolved;
    }
    else if (type instanceof graphql_1.GraphQLObjectType || type instanceof graphql_1.GraphQLInputObjectType) {
        const fields = type.getFields();
        const resolved = Object.fromEntries(Object.values(fields).map((field) => {
            const isModel = isModelField(field.type);
            const isArray = isArrayField(field.type);
            const isMandatory = isMandatoryField(field.type);
            if (isModel)
                return [field.name, field.type.name];
            return [`${field.name}${isArray ? '[]' : ''}${isMandatory ? '!' : ''}`, resolveFields(field.type)];
        }));
        return resolved;
    }
    else if (type instanceof graphql_1.GraphQLScalarType || type instanceof graphql_1.GraphQLEnumType) {
        return type.name;
    }
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