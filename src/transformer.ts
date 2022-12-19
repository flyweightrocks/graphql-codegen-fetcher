import { OperationDefinitionNode } from 'graphql';
import { OperationField, OperationFieldMap } from './type-resolver';
import { generateQueryVariablesSignature } from './variables-generator';

// TODO chnage to inputTransformerMap and outputTransformerMap
const isJsonType = (type: string): boolean => type === 'AWSJSON' || type === `Scalars['AWSJSON']`;

// checks if any of the nested fields has type AWSJSON
const hasJsonFields = (fields?: OperationFieldMap): boolean => {
  if (!fields) return false;

  return (
    Object.entries(fields)
      .map(([, fieldValue]) => {
        if (fieldValue && typeof fieldValue === 'object') {
          return hasJsonFields(fieldValue);
        }
        return isJsonType(fieldValue);
      })
      .filter(Boolean).length > 0
  );
};

// TODO change to inputTransformerMap and outputTransformerMap
// iterates through all nested fields and replace AWSJSON fields with JSON.parse() / JSON.stringify()
const transformJsonFields = (fields: OperationFieldMap, path: string, transformer: 'parse' | 'stringify') => {
  // try {
  const stack: string[] = [];

  // eslint-disable-next-line no-restricted-syntax
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
          ...transformJsonFields(fieldValue, `${fieldNameSingular}?`, transformer),
          `})),`,
        );
      } else {
        stack.push(
          `${fieldName}: {`,
          `...${fieldPath},`,
          ...transformJsonFields(fieldValue, `${fieldPath}?`, transformer),
          `},`,
        );
      }
    } else if (fieldValue === 'AWSJSON') {
      if (transformer === 'parse')
        stack.push(`${fieldName}: ${fieldPath} && JSON.parse(${fieldPath} as any) as unknown as Scalars['AWSJSON'],`);

      if (transformer === 'stringify')
        stack.push(
          `${fieldName}: ${fieldPath} && JSON.stringify(${fieldPath} as any) as unknown as Scalars['AWSJSON'],`,
        );
    }
  }

  return stack;
};

export function generateOutputTransformer(
  node: OperationDefinitionNode,
  operationName: string,
  operationVariablesTypes: string,
  operationResultType: string,
  hasRequiredVariables: boolean,
  output: OperationField,
) {
  const hasJson = hasJsonFields(output.fields);
  const returnsJson = isJsonType(output.typeName);

  let result = `${output.fieldName} as unknown as TOutput`;

  if (hasJson) {
    result = `${output.fieldName} && ({...${output.fieldName}, ${transformJsonFields(
      output.fields,
      `${output.fieldName}`,
      'parse',
    ).join('\n')} }) as unknown as TOutput`;
  }

  if (returnsJson) {
    result = `JSON.parse(${output.fieldName} as any) as unknown as TOutput`;
  }

  const comment = `\n/**
  * Output transformer function for \`${operationName}\`.
  * It extracts the \`${output.fieldName}\` field from the result and transforms it into a \`${output.typeName}\` object.
  * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
  * If the object does not conatain any JSON fields, it will return the orignal object.
  * @param data ${operationResultType} - The data returned from the GraphQL server
  * @returns ${output.typeName} - The transformed data
  */`;

  const implementation = `export const ${operationName}OutputFn = <TOutput = ${output.typeName}>({ ${output.fieldName} }: ${operationResultType}) => ${result};`;

  return `\n${comment}\n${implementation}`;
}

export function generateInputTransformer(
  node: OperationDefinitionNode,
  operationName: string,
  operationVariablesTypes: string,
  operationResultType: string,
  hasRequiredVariables: boolean,
  inputVariables: OperationField[],
) {
  const signature = generateQueryVariablesSignature(hasRequiredVariables, operationVariablesTypes);
  const hasJson = inputVariables.some((field) => hasJsonFields(field.fields));

  let result = `variables as unknown as TInput`;

  if (hasJson) {
    result = `({...variables, ${inputVariables
      .filter((variable) => hasJsonFields(variable.fields))
      .map(
        (variable) =>
          `${variable.fieldName}: { ...variables.${variable.fieldName}, ${transformJsonFields(
            variable.fields || {},
            `variables.${variable.fieldName}`,
            'stringify',
          )} },`,
      )
      .join('\n')} }) as unknown as TInput`;
  }

  const comment = `\n/**
  * Input transformer function for \`${operationName}\`.
  * It transforms the fields of the variables into JSON strings.
  * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new \`variables\` object.
  * If the variables do not conatain any JSON fields, it will return the orignal \`variables\` object.
  * 
  * @param variables \`${operationVariablesTypes}\` - The original variables
  * @returns \`${operationVariablesTypes}\` - The transformed variables
  */`;

  const implementation = `export const ${operationName}InputFn = <TInput = ${operationVariablesTypes}>(${signature}) => ${result};`;
  return `\n${comment}\n${implementation}`;
}
