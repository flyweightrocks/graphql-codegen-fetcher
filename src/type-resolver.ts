import {
  GraphQLEnumType,
  GraphQLField,
  GraphQLFieldMap,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLType,
  OperationDefinitionNode,
} from 'graphql';
import { upperCaseFirst, lowerCaseFirst } from 'change-case-all';

export type OperationFields = { [field: string]: string } | { [field: string]: OperationFields };
export type OperationType = {
  fieldName: string;
  typeName: string;
  fields?: OperationFields;
};
export type OperationOutputType = OperationType;
export type OperationInputType = OperationType;
export type OperationVariablesType = {
  input?: OperationInputType;
} & {
  [variable: string]: OperationType;
};

const toScalarType = (type: string) =>
  ['ID', 'String', 'Boolean', 'Int', 'Float', 'AWSDateTime', 'AWSJSON'].includes(type) ? `Scalars['${type}']` : type;

const isScalarField = (type: GraphQLType) => type instanceof GraphQLScalarType || type instanceof GraphQLEnumType;

const isArrayField = (type: GraphQLType) =>
  type instanceof GraphQLList || (type instanceof GraphQLNonNull && type.ofType instanceof GraphQLList);

const isMandatoryField = (type: GraphQLType) => type instanceof GraphQLNonNull;

const isModelField = (type: GraphQLType): boolean => {
  if (type instanceof GraphQLNonNull || type instanceof GraphQLList) return isModelField(type.ofType);

  if (type.name.startsWith('Model') && type.name.endsWith('Connection')) return true;
  if (type.name.startsWith('Model') && type.name.endsWith('Input')) return true;

  return false;
};

const getTypeName = (type: GraphQLType): string => {
  if (type instanceof GraphQLNonNull) return getTypeName(type.ofType);
  if (type instanceof GraphQLList) return getTypeName(type.ofType) + '[]';

  return type.name;
};

const resolveFields = (type: GraphQLType): any => {
  if (type instanceof GraphQLNonNull) {
    const resolved = resolveFields(type.ofType);
    return resolved;
  } else if (type instanceof GraphQLList) {
    const resolved = resolveFields(type.ofType);
    return resolved;
  } else if (type instanceof GraphQLObjectType || type instanceof GraphQLInputObjectType) {
    const fields = type.getFields();
    const resolved = Object.fromEntries(
      Object.values(fields).map((field) => {
        const isModel = isModelField(field.type);
        const isArray = isArrayField(field.type);
        const isMandatory = isMandatoryField(field.type);

        if (isModel) return [field.name, field.type.name];

        return [`${field.name}${isArray ? '[]' : ''}${isMandatory ? '!' : ''}`, resolveFields(field.type)];
      }),
    );
    return resolved;
  } else if (type instanceof GraphQLScalarType || type instanceof GraphQLEnumType) {
    return type.name;
  }
};

export const getOutputType = (fieldDefinition: GraphQLField<any, any>): OperationOutputType => {
  return {
    fieldName: fieldDefinition.name,
    typeName: getTypeName(fieldDefinition.type),
    fields: isScalarField(fieldDefinition.type) ? {} : resolveFields(fieldDefinition.type),
  };
};

export const getInputVariablesType = (fieldDefinition: GraphQLField<any, any>): OperationVariablesType => {
  return {
    ...Object.fromEntries(
      fieldDefinition.args.map((arg) => [
        arg.name,
        {
          fieldName: arg.name,
          typeName: getTypeName(arg.type),
          fields: resolveFields(arg.type),
        },
      ]),
    ),
  };
};
