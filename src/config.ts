import { RawClientSideBasePluginConfig } from '@graphql-codegen/visitor-plugin-common';

export type CustomFetch = string | { func: string };

export type InputScalarTransformer = {
  [scalar: string]: 'json-stringify' | { func: string };
};

export type OutputScalarTransformer = {
  [scalar: string]: 'json-parse' | { func: string };
};

export interface RawPluginConfig extends RawClientSideBasePluginConfig {
  fetcher?: CustomFetch;
  inputTransformer?: InputScalarTransformer;
  outputTransformer?: OutputScalarTransformer;
}
