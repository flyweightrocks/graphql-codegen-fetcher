"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformer = void 0;
const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
const variables_generator_1 = require("./variables-generator");
class Transformer {
    constructor(visitor, inputTransformerMap, outputTransformerMap) {
        this.visitor = visitor;
        this.inputTransformerMap = inputTransformerMap;
        this.outputTransformerMap = outputTransformerMap;
    }
    generateImports() {
        const transformer = [...Object.values(this.inputTransformerMap), ...Object.values(this.outputTransformerMap)];
        return transformer
            .filter((mapper) => mapper.isExternal)
            .map((mapper) => (0, visitor_plugin_common_1.buildMapperImport)(mapper.source, [
            {
                identifier: mapper.type,
                asDefault: mapper.default,
            },
        ], this.visitor.config.useTypeImports) || '');
    }
    generateOutputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, output) {
        const hasJson = this.hasJsonFields(output.fields);
        const returnsJson = this.isJsonType(output.typeName);
        let result = `${output.fieldName} as unknown as TOutput`;
        if (hasJson) {
            result = `${output.fieldName} && ({...${output.fieldName}, ${this.transformJsonFields(output.fields, `${output.fieldName}`, 'parse').join('\n')} }) as unknown as TOutput`;
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
    generateInputTransformer(node, operationName, operationVariablesTypes, operationResultType, hasRequiredVariables, inputVariables) {
        const signature = (0, variables_generator_1.generateQueryVariablesSignature)(hasRequiredVariables, operationVariablesTypes);
        const hasJson = inputVariables.some((field) => this.hasJsonFields(field.fields));
        let result = `variables as unknown as TInput`;
        if (hasJson) {
            result = `({...variables, ${inputVariables
                .filter((variable) => this.hasJsonFields(variable.fields))
                .map((variable) => `${variable.fieldName}: { ...variables.${variable.fieldName}, ${this.transformJsonFields(variable.fields || {}, `variables.${variable.fieldName}`, 'stringify')} },`)
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
    isJsonType(type) {
        return type === 'AWSJSON' || type === `Scalars['AWSJSON']`;
    }
    hasJsonFields(fields) {
        if (!fields)
            return false;
        return (Object.entries(fields)
            .map(([, fieldValue]) => {
            if (fieldValue && typeof fieldValue === 'object')
                return this.hasJsonFields(fieldValue);
            return this.isJsonType(fieldValue);
        })
            .filter(Boolean).length > 0);
    }
    transformJsonFields(fields, path, transformer) {
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
                    stack.push(`${fieldName}: ${fieldPath}?.map((${fieldNameSingular}) => ({`, `...${fieldNameSingular},`, ...this.transformJsonFields(fieldValue, `${fieldNameSingular}?`, transformer), `})),`);
                }
                else {
                    stack.push(`${fieldName}: {`, `...${fieldPath},`, ...this.transformJsonFields(fieldValue, `${fieldPath}?`, transformer), `},`);
                }
            }
            else if (fieldValue === 'AWSJSON') {
                if (transformer === 'parse')
                    stack.push(`${fieldName}: ${fieldPath} && JSON.parse(${fieldPath} as any) as unknown as Scalars['AWSJSON'],`);
                if (transformer === 'stringify')
                    stack.push(`${fieldName}: ${fieldPath} && JSON.stringify(${fieldPath} as any) as unknown as Scalars['AWSJSON']`);
            }
        }
        return stack;
    }
}
exports.Transformer = Transformer;
//# sourceMappingURL=transformer.js.map