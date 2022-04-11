import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

// https://docs.amplify.aws/cli/auth/override/#customize-amplify-generated-cognito-auth-resources
export function override(resources: AmplifyAuthCognitoStackTemplate) {
  const myCustomAttribute = {
    attributeDataType: 'String',
    developerOnlyAttribute: false,
    mutable: true,
    name: 'organization',
    required: false,
  }
  resources.userPool.schema = [
    ...(resources.userPool.schema as any[]), // Carry over existing attributes (example: email)
    myCustomAttribute,
  ]
}
