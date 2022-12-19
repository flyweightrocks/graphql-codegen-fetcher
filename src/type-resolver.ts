import {
  GraphQLField,
  GraphQLType,
  isEnumType,
  isInputObjectType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
} from 'graphql';

export type OperationFieldMap = { [field: string]: string } | { [field: string]: OperationFieldMap };
export type OperationField = {
  fieldName: string;
  typeName: string;
  fields: OperationFieldMap;
};
export type OperationOutputField = OperationField;
export type OperationInputVariableField = OperationField[];

const toScalarType = (type: string) =>
  ['ID', 'String', 'Boolean', 'Int', 'Float', 'AWSDateTime', 'AWSJSON'].includes(type) ? `Scalars['${type}']` : type;

const isScalarField = (type: GraphQLType) => isScalarType(type) || isEnumType(type);

const isArrayField = (type: GraphQLType) => isListType(type) || (isNonNullType(type) && isListType(type.ofType));

const isMandatoryField = (type: GraphQLType) => isNonNullType(type);

const isModelField = (type: GraphQLType): boolean => {
  if (isNonNullType(type) || isListType(type)) return isModelField(type.ofType);

  if (type.name.startsWith('Model') && type.name.endsWith('Connection')) return true;
  if (type.name.startsWith('Model') && type.name.endsWith('Input')) return true;

  return false;
};

const getTypeName = (type: GraphQLType): string => {
  if (isNonNullType(type)) return getTypeName(type.ofType);
  if (isListType(type)) return `${getTypeName(type.ofType)}[]`;

  return toScalarType(type.name);
};

// If different versions of GraphQL are installed, the check of instanceof GraphQLType will fail.
// In these cases, we can use the constructor.name property or Symbol.toStringTag to check the type.
// This is automatically handled by the `instanceOf` function in graphql-js:
// https://github.dev/graphql/graphql-js/blob/1564174b0dc26e0adf7ff2833716d06606b06a20/src/jsutils/instanceOf.ts#L9-L10
const resolveFields = (type: GraphQLType): any => {
  if (isNonNullType(type)) {
    const resolved = resolveFields(type.ofType);
    return resolved;
  }

  if (isListType(type)) {
    const resolved = resolveFields(type.ofType);
    return resolved;
  }

  if (isObjectType(type) || isInputObjectType(type)) {
    const fields = type.getFields();
    const resolved = Object.fromEntries(
      Object.values(fields).map((field) => {
        const isArray = isArrayField(field.type);
        const isMandatory = isMandatoryField(field.type);

        if (isModelField(field.type)) return [field.name, field.type.name];

        return [`${field.name}${isArray ? '[]' : ''}${isMandatory ? '!' : ''}`, resolveFields(field.type)];
      }),
    );
    return resolved;
  }

  if (isScalarType(type)) {
    return type.name;
  }

  if (isEnumType(type)) {
    return type.name;
  }

  throw new Error(`Can't resolve type ${type.name}`);
};

export const getOutputType = (fieldDefinition: GraphQLField<any, any>): OperationOutputField => {
  return {
    fieldName: fieldDefinition.name,
    typeName: getTypeName(fieldDefinition.type),
    fields: isScalarField(fieldDefinition.type) ? {} : resolveFields(fieldDefinition.type),
  };
};

export const getInputVariablesType = (fieldDefinition: GraphQLField<any, any>): OperationInputVariableField => {
  return fieldDefinition.args.map((arg) => ({
    fieldName: arg.name,
    typeName: getTypeName(arg.type),
    fields: resolveFields(arg.type),
  }));
};
