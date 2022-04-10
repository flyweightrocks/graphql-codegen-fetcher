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
import { OperationFields, OperationOutputType, OperationVariablesType } from './type-resolver';

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
  outputType: OperationOutputType,
  // field: GraphQLField<any, any>,
) {
  // const outputType = getOutputType(field);

  // if (!operationType || !operationType.fields) return '';

  // const returnType = returnTypeName ? toScalarType(returnTypeName) : toScalarType(operationType.output.typeName);

  const { fieldName, fields } = outputType;

  const comment = `\n/**
  * Output transformer function for ${operationName}.
  * It extracts the data from the GrapohQL response and parses all JSON fields into objects.
  * @param data ${operationResultType} - The data returned from the GraphQL server
  * @returns ${outputType.typeName} - The transformed data
  */`;
  const implementation = `export const ${operationName}Output = ({ ${fieldName} }: ${operationResultType}) => ${
    hasJsonFields(outputType.fields)
      ? `${fieldName} && ({...${fieldName}, ${transformJsonFields(fields!, `${fieldName}`, 'parse').join('\n')} }) as ${
          outputType.typeName
        }`
      : `${fieldName} as ${outputType.typeName}`
  };`;

  return `\n${comment}\n${implementation}`;
}

export function generateInputTransformer(
  node: OperationDefinitionNode,
  operationName: string,
  operationVariablesTypes: string,
  operationResultType: string,
  hasRequiredVariables: boolean,
  variablesType: OperationVariablesType,
) {
  // const variablesType = getInputVariablesType(field);

  if (!variablesType || Object.keys(variablesType).length === 0) {
    const comment = `\n/**
    * Input transformer function for ${operationName}. 
    * It stringifies all JSON input fields before sending them to the GraphQL server.
    ${Object.keys(variablesType)
      .map((field) => `* @param ${field} ${variablesType[field].typeName} - ${field}`)
      .join('\n')}
    * @returns 
    */`;
    const implementation = `export const ${operationName}Input = undefined;`;

    return `\n${comment}\n${implementation}`;
  }

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
          .join('\n')} }) as ${operationVariablesTypes}`
      : `variables as ${operationVariablesTypes}`
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
          stack.push(`${fieldName}: ${fieldPath} && JSON.parse(${fieldPath} as unknown as string),`);

        transformer === 'stringify' &&
          stack.push(`${fieldName}: ${fieldPath} && JSON.stringify(${fieldPath} as unknown as Record<string, any>),`);
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
