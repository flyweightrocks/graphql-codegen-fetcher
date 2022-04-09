"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInputTransformer = exports.generateOutputTransformer = exports.generateQueryVariablesSignature = void 0;
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
    return type.name;
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
        typeName: getTypeName(fieldDefinition.type),
        fields: isScalarField(fieldDefinition.type) ? {} : resolveFields(fieldDefinition.type),
    };
};
const getInputVariablesType = (fieldDefinition) => {
    return {
        ...Object.fromEntries(fieldDefinition.args.map((arg) => [
            arg.name,
            {
                typeName: getTypeName(arg.type),
                fields: resolveFields(arg.type),
            },
        ])),
    };
};
function generateQueryVariablesSignature(hasRequiredVariables, operationVariablesTypes) {
    return `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
}
exports.generateQueryVariablesSignature = generateQueryVariablesSignature;
function generateOutputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, field) {
    const outputType = getOutputType(field);
    const comment = `\n/**
  * Output transformer function for ${operationName}.
  * It extracts the data from the GrapohQL response and parses all JSON fields into objects.
  * @param data ${operationResultType} - The data returned from the GraphQL server
  * @returns ${outputType.typeName} - The transformed data
  */`;
    const implementation = `export const ${operationName}Output = ({ ${field.name} }: ${operationResultType}) => ${hasJsonFields(outputType.fields)
        ? `${field.name} && ({...${field.name}, ${transformJsonFields(outputType.fields, `${field.name}`, 'parse').join('\n')} })`
        : field.name};`;
    return `\n${comment}\n${implementation}`;
}
exports.generateOutputTransformer = generateOutputTransformer;
function generateInputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, field) {
    const variablesType = getInputVariablesType(field);
    if (!variablesType || !variablesType.input?.fields)
        return '';
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
    const implementation = `export const ${operationName}Input = (${signature}) => ${Object.keys(variablesType).some((field) => hasJsonFields(variablesType[field].fields))
        ? `({...variables, ${Object.keys(variablesType)
            .filter((field) => hasJsonFields(variablesType[field].fields))
            .map((field) => `${field}: { ${transformJsonFields(variablesType[field].fields || {}, `variables.${field}`, 'stringify')} },`)
            .join('\n')} })`
        : 'variables'};`;
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
                    stack.push(`${fieldName}: ${fieldPath} && JSON.parse(${fieldPath} as unknown as string) as Parsed<Scalars['AWSJSON']>,`);
                transformer === 'stringify' &&
                    stack.push(`${fieldName}: ${fieldPath} && JSON.stringify(${fieldPath} as unknown as Record<string, any>) as unknown as Stringified<Scalars['AWSJSON']>,`);
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
            return fieldValue === 'AWSJSON';
        }
    })
        .filter(Boolean).length > 0);
};
//# sourceMappingURL=transformer-generator.js.map