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

export function generateQueryVariablesSignature(
  hasRequiredVariables: boolean,
  operationVariablesTypes: string,
): string {
  return `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
}

export function generateOutputTransformer(
  node: OperationDefinitionNode,
  operationName: string,
  operationVariablesTypes: string,
  operationResultType: string,
  hasRequiredVariables: boolean,
  field: GraphQLField<any, any>,
) {
  const outputType = getOutputType(field);

  // if (!operationType || !operationType.fields) return '';

  // const returnType = returnTypeName ? toScalarType(returnTypeName) : toScalarType(operationType.output.typeName);

  const comment = `\n/**
  * Output transformer function for ${operationName}.
  * It extracts the data from the GrapohQL response and parses all JSON fields into objects.
  * @param data ${operationResultType} - The data returned from the GraphQL server
  * @returns ${outputType.typeName} - The transformed data
  */`;
  const implementation = `export const ${operationName}Output = ({ ${field.name} }: ${operationResultType}) => ${
    hasJsonFields(outputType.fields)
      ? `${field.name} && ({...${field.name}, ${transformJsonFields(outputType.fields!, `${field.name}`, 'parse').join(
          '\n',
        )} })`
      : field.name
  };`;

  return `\n${comment}\n${implementation}`;
}

export function generateInputTransformer(
  node: OperationDefinitionNode,
  operationName: string,
  operationVariablesTypes: string,
  operationResultType: string,
  hasRequiredVariables: boolean,
  field: GraphQLField<any, any>,
) {
  const variablesType = getInputVariablesType(field);

  // if (!operationType || !operationType.fields) return '';

  // const returnType = returnTypeName ? toScalarType(returnTypeName) : toScalarType(operationType.output.typeName);

  if (!variablesType || !variablesType.input?.fields) return '';

  console.log(variablesType);

  const signature = generateQueryVariablesSignature(hasRequiredVariables, operationVariablesTypes);

  const comment = `\n/**
  * Input transformer function for ${operationName}. 
  * It stringifies all JSON input fields before sending them to the GraphQL server.
  ${Object.keys(variablesType)
    .map((field) => `* @param ${field} ${variablesType[field].typeName} - ${field}`)
    .join('\n')}
  * @returns 
  */`;
  const implementation = `export const ${operationName}Input = (${signature}) => ${
    Object.keys(variablesType).some((field) => hasJsonFields(variablesType[field].fields))
      ? `({...variables, ${Object.keys(variablesType)
          .filter((field) => hasJsonFields(variablesType[field].fields))
          .map(
            (field) =>
              `${field}: { ${transformJsonFields(
                variablesType[field].fields || {},
                `variables.${field}`,
                'stringify',
              )} },`,
          )
          .join('\n')} })`
      : 'variables'
  };`;

  return `\n${comment}\n${implementation}`;
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
          stack.push(
            `${fieldName}: ${fieldPath} && JSON.parse(${fieldPath} as unknown as string) as Parsed<Scalars['AWSJSON']>,`,
          );

        transformer === 'stringify' &&
          stack.push(
            `${fieldName}: ${fieldPath} && JSON.stringify(${fieldPath} as unknown as Record<string, any>) as unknown as Stringified<Scalars['AWSJSON']>,`,
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
