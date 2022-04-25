import { ReactQueryRawPluginConfig } from '@graphql-codegen/typescript-react-query/config';
import { RawClientSideBasePluginConfig } from '@graphql-codegen/visitor-plugin-common';

export type RawPluginConfig = ReactQueryRawPluginConfig & {
  generateReactQueryHooks?: boolean;
  generateGqlRequestFunctions?: boolean;
};
