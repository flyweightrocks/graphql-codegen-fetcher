import { buildMapperImport, ParsedMapper, parseMapper } from '@graphql-codegen/visitor-plugin-common';
import { OperationDefinitionNode } from 'graphql';
import { lowerCaseFirst } from 'change-case-all';
import type { PuginVisitor } from './visitor';
import { CustomFetch } from './config';
import { OperationField } from './type-resolver';

export interface FetcherRenderer {
  generateFetcherImport: () => string;
  generateFetcherFetch: (
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
    output: OperationField,
  ) => string;

  generateRequestFunction(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
    output: OperationField,
  ): string;
}

//! Investigate GraphQL Schema with https://astexplorer.net/
export class CustomFetcher implements FetcherRenderer {
  private mapper: ParsedMapper;

  constructor(private visitor: PuginVisitor, fetcher: CustomFetch) {
    this.mapper = parseMapper(typeof fetcher === 'string' ? fetcher : fetcher.func);
  }

  private getFetcherFnGenerics(
    operationResultType: string,
    operationVariablesTypes: string,
    // outputResultType: string,
    // inputVariablesType: string,
  ): string {
    return `${this.mapper.type}<${operationResultType}, ${operationVariablesTypes}, TOutput, TInput>`;
  }

  private getFetcherName(operationName: string): string {
    return `${operationName}Fetcher`;
  }

  generateFetcherImport(): string {
    if (this.mapper.isExternal) {
      return (
        buildMapperImport(
          this.mapper.source,
          [
            {
              identifier: this.mapper.type,
              asDefault: this.mapper.default,
            },
          ],
          this.visitor.config.useTypeImports,
        ) || ''
      );
    }

    return '';
  }

  generateFetcherFetch(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
    output: OperationField,
  ): string {
    const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;
    const outputResultType = output.typeName;
    const inputVariablesType = operationVariablesTypes;

    const typedFetcher = this.getFetcherFnGenerics(
      operationResultType,
      operationVariablesTypes,
      // outputResultType,
      // inputVariablesType,
    );
    const invokeFetcher = `${typedFetcher}(document, variables, options, outputFn, inputFn)`;

    const comment = `\n/**
    * Fetcher function for \`${operationName}\`.
    * It invokes the base fetcher function with the operation-specific input and output transformer functions.
    * The input transformer function must be called inside the base fetcher to transform the \`variables\` before executing the GraphQL operation.
    * The output transformer function must be called inside the base fetcher to transform the result \`data\` after executing the GraphQL operation.
    * 
    * The input and output transformer functions are optional arguments and default to the generated \`${operationName}Input\` and \`${operationName}Output\` functions.    
    * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
    * @param variables - The variables to pass to the GraphQL operation.
    * @param options - The options to pass to the GraphQL operation.
    * @param outputFn - The output transformer function.
    * @param inputFn - The input transformer function.
    * @returns A function \`() => Promise<TOutput>\` that must be invoked manually or passed to ReactQuery as fetcher argument.
    */`;

    const implementation = `export const ${this.getFetcherName(
      operationName,
    )} = <TOutput = ${outputResultType}, TInput = ${inputVariablesType}>(${variables}, options?: RequestInit['headers'], document = ${documentVariableName}, outputFn = ${operationName}OutputFn, inputFn = ${operationName}InputFn) => ${invokeFetcher};`;

    return `\n${comment}\n${implementation}\n`;
  }

  generateRequestFunction(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationName: string,
    operationResultType: string,
    operationVariablesTypes: string,
    hasRequiredVariables: boolean,
    output: OperationField,
  ): string {
    const variables = `variables${hasRequiredVariables ? '' : '?'}: ${operationVariablesTypes}`;

    const functionName = lowerCaseFirst(operationName);
    const fetcher = `(${variables}) => ${this.getFetcherName(operationName)}(variables)()`;

    const comment = `\n/**
    * GraphQL request function for \`${operationName}\`.
    * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
    */`;

    const implementation = `export const ${functionName} = ${fetcher};`;

    return `\n${comment}\n${implementation}\n`;
  }
}
