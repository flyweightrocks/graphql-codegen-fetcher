import { RawClientSideBasePluginConfig } from '@graphql-codegen/visitor-plugin-common';

export type CustomFetch = string | { func: string };

export type InputScalarTransformer = {
  [scalar: string]: 'JSON.stringify' | { func: string };
};

export type OutputScalarTransformer = {
  [scalar: string]: 'JSON.parse' | { func: string };
};

export interface RawPluginConfig extends RawClientSideBasePluginConfig {
  fetcher?: CustomFetch;
  inputTransformer?: InputScalarTransformer;
  outputTransformer?: OutputScalarTransformer;
}
