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

type OperationFields = { [field: string]: string } | { [field: string]: OperationFields };
type OperationType = {
  // fieldName: string;
  typeName: string;
  fields?: OperationFields;
};
type OperationOutputType = OperationType;
type OperationInputType = OperationType;
type OperationVariablesType = {
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

const getOutputType = (fieldDefinition: GraphQLField<any, any>): OperationOutputType => {
  return {
    // fieldName: fieldDefinition.name,
    typeName: getTypeName(fieldDefinition.type),
    fields: isScalarField(fieldDefinition.type) ? {} : resolveFields(fieldDefinition.type),
  };
};

const getInputVariablesType = (fieldDefinition: GraphQLField<any, any>): OperationVariablesType => {
  return {
    ...Object.fromEntries(
      fieldDefinition.args.map((arg) => [
        arg.name,
        {
          typeName: getTypeName(arg.type),
          fields: resolveFields(arg.type),
        },
      ]),
    ),
  };
};

export function generateOutputTransformer(
  node: OperationDefinitionNode,
  operationName: string,
  fields: GraphQLFieldMap<any, any>,
) {
  // operatioName: CreateNodeQuery, GetNodeQuery, ...
  const nodeName = node.name!.value; // CreateNode, GetNode, ...
  const fieldName = lowerCaseFirst(nodeName); // createNode, getNode, ...
  const fieldDefinition = fields[fieldName];
  const outputType = getOutputType(fieldDefinition);

  // if (!operationType || !operationType.fields) return '';

  // const returnType = returnTypeName ? toScalarType(returnTypeName) : toScalarType(operationType.output.typeName);

  const comment = `\n/**
  * ${operationName}
  */`;
  const implementation = `export const ${operationName}Output = ({ ${fieldName} }: ${nodeName}${upperCaseFirst(
    node.operation,
  )}) => ${
    hasJsonFields(outputType.fields)
      ? `${fieldName} && ({...${fieldName}, ${transformJsonFields(outputType.fields!, `${fieldName}`, 'parse').join(
          '\n',
        )} })`
      : fieldName
  };`;

  return `\n${comment}\n${implementation}`;
}

export function generateInputTransformer(
  node: OperationDefinitionNode,
  operationName: string,
  fields: GraphQLFieldMap<any, any>,
) {
  // operatioName: CreateNodeQuery, GetNodeQuery, ...
  const nodeName = node.name!.value; // CreateNode, GetNode, ...
  const fieldName = lowerCaseFirst(nodeName); // createNode, getNode, ...
  const fieldDefinition = fields[fieldName];
  const variablesType = getInputVariablesType(fieldDefinition);

  // if (!operationType || !operationType.fields) return '';

  // const returnType = returnTypeName ? toScalarType(returnTypeName) : toScalarType(operationType.output.typeName);

  if (!variablesType || !variablesType.input?.fields) return '';

  return `\nexport const ${operationName}Input = (input: Partial<${variablesType.input.typeName}>) => ${
    hasJsonFields(variablesType.input.fields)
      ? `({...input, ${transformJsonFields(variablesType.input.fields, `input`, 'stringify').join('\n')} })`
      : 'input'
  };`;
}

// iterates through all nested fields and replace AWSJSON fields with JSON.parse() / JSON.stringify()
const transformJsonFields = (fields: OperationFields, path: string, transformer: 'parse' | 'stringify') => {
  // try {
  const stack: string[] = [];

  for (const [field, fieldValue] of Object.entries(fields)) {
    let fieldName = field;

    // remove ! from field name
    const isMandatory = field.includes('!');
    fieldName = isMandatory ? fieldName.substring(0, fieldName.length - 1) : fieldName;

    // remove [] from field name
    const isArray = field.includes('[]');
    fieldName = isArray ? fieldName.substring(0, fieldName.length - 2) : fieldName;
    const fieldNameSingular = fieldName.substring(0, fieldName.length - 1);
    const fieldPath = `${path}.${fieldName}`;

    if (fieldValue && typeof fieldValue === 'object') {
      if (isArray) {
        stack.push(
          `${fieldName}: ${fieldPath}?.map((${fieldNameSingular}) => ({`,
          `...${fieldNameSingular},`,
          ...transformJsonFields(fieldValue, fieldNameSingular + '?', transformer),
          `})),`,
        );
      } else {
        stack.push(
          `${fieldName}: {`,
          `...${fieldPath},`,
          ...transformJsonFields(fieldValue, fieldPath + '?', transformer),
          `},`,
        );
      }
    } else {
      if (fieldValue === 'AWSJSON') {
        transformer === 'parse' &&
          stack.push(`${fieldName}: ${fieldPath} && JSON.parse(${fieldPath} as unknown as string),`);

        transformer === 'stringify' &&
          stack.push(
            `${fieldName}: ${fieldPath} && JSON.stringify(${fieldPath} as unknown as Record<string, any>) as unknown as Record<string, any>,`,
          );
      }
    }
  }

  return stack;
  // } catch {
  //   // eslint-disable-next-line no-debugger
  //   debugger;
  // }
};

// checks if any of the nested fields has type AWSJSON
const hasJsonFields = (fields?: OperationFields): boolean => {
  if (!fields) return false;

  return (
    Object.entries(fields)
      .map(([, fieldValue]) => {
        if (fieldValue && typeof fieldValue === 'object') {
          return hasJsonFields(fieldValue);
        } else {
          return fieldValue === 'AWSJSON';
        }
      })
      .filter(Boolean).length > 0
  );
};
