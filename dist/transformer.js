"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInputTransformer = exports.generateOutputTransformer = void 0;
const variables_generator_1 = require("./variables-generator");
function generateOutputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output) {
    const hasJson = hasJsonFields(output.fields);
    const returnsJson = isJsonType(output.typeName);
    const comment = `\n/**
  * Output transformer function for \`${operationName}\`.
  * It extracts the \`${output.fieldName}\` field from the result and transforms it into a \`${output.typeName}\` object.
  * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
  * If the object does not conatain any JSON fields, it will return the orignal object.
  * @param data ${operationResultType} - The data returned from the GraphQL server
  * @returns ${output.typeName} - The transformed data
  */`;
    const implementation = `export const ${operationName}OutputFn = ({ ${output.fieldName} }: ${operationResultType}) => ${hasJson
        ? `${output.fieldName} && ({...${output.fieldName}, ${transformJsonFields(output.fields, `${output.fieldName}`, 'parse').join('\n')} }) as ${output.typeName}`
        : returnsJson
            ? `JSON.parse(${output.fieldName} as any) as unknown as ${output.typeName}`
            : `${output.fieldName} as ${output.typeName}`};`;
    return `\n${comment}\n${implementation}`;
}
exports.generateOutputTransformer = generateOutputTransformer;
function generateInputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables) {
    const signature = (0, variables_generator_1.generateQueryVariablesSignature)(hasRequiredVariables, operationVariablesTypes);
    const hasJson = inputVariables.some((field) => hasJsonFields(field.fields));
    const comment = `\n/**
  * Input transformer function for \`${operationName}\`.
  * It transforms the fields of the variables into JSON strings.
  * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new \`variables\` object.
  * If the variables do not conatain any JSON fields, it will return the orignal \`variables\` object.
  * 
  * @param variables \`${operationVariablesTypes}\` - The original variables
  * @returns \`${operationVariablesTypes}\` - The transformed variables
  */`;
    const implementation = `export const ${operationName}InputFn = (${signature}) => ${hasJson
        ? `({...variables, ${inputVariables
            .filter((variable) => hasJsonFields(variable.fields))
            .map((variable) => `${variable.fieldName}: { ...variables.${variable.fieldName}, ${transformJsonFields(variable.fields || {}, `variables.${variable.fieldName}`, 'stringify')} },`)
            .join('\n')} }) as ${operationVariablesTypes}`
        : `variables as ${operationVariablesTypes}`};`;
    return `\n${comment}\n${implementation}`;
}
exports.generateInputTransformer = generateInputTransformer;
const transformJsonFields = (fields, path, transformer) => {
    const stack = [];
    for (const [field, fieldValue] of Object.entries(fields)) {
        let fieldName = field;
        const isMandatory = field.includes('!');
        fieldName = isMandatory ? fieldName.substring(0, fieldName.length - 1) : fieldName;
        const isArray = field.includes('[]');
        fieldName = isArray ? fieldName.substring(0, fieldName.length - 2) : fieldName;
        const fieldNameSingular = fieldName.substring(0, fieldName.length - 1);
        const fieldPath = `${path}.${fieldName}`;
        if (fieldValue && typeof fieldValue === 'object') {
            if (isArray) {
                stack.push(`${fieldName}: ${fieldPath}?.map((${fieldNameSingular}) => ({`, `...${fieldNameSingular},`, ...transformJsonFields(fieldValue, fieldNameSingular + '?', transformer), `})),`);
            }
            else {
                stack.push(`${fieldName}: {`, `...${fieldPath},`, ...transformJsonFields(fieldValue, fieldPath + '?', transformer), `},`);
            }
        }
        else {
            if (fieldValue === 'AWSJSON') {
                transformer === 'parse' &&
                    stack.push(`${fieldName}: ${fieldPath} && JSON.parse(${fieldPath} as any) as unknown as Scalars['AWSJSON'],`);
                transformer === 'stringify' &&
                    stack.push(`${fieldName}: ${fieldPath} && JSON.stringify(${fieldPath} as any) as unknown as Scalars['AWSJSON'],`);
            }
        }
    }
    return stack;
};
const hasJsonFields = (fields) => {
    if (!fields)
        return false;
    return (Object.entries(fields)
        .map(([, fieldValue]) => {
        if (fieldValue && typeof fieldValue === 'object') {
            return hasJsonFields(fieldValue);
        }
        else {
            return isJsonType(fieldValue);
        }
    })
        .filter(Boolean).length > 0);
};
const isJsonType = (type) => type === 'AWSJSON' || type === `Scalars['AWSJSON']`;
//# sourceMappingURL=transformer.js.map