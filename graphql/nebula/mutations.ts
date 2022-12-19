/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const emptyMutation = /* GraphQL */ `
  mutation EmptyMutation {
    emptyMutation
  }
`;
export const createConnector = /* GraphQL */ `
  mutation CreateConnector(
    $input: CreateConnectorInput!
    $condition: ModelConnectorConditionInput
  ) {
    createConnector(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      name
      description
      topics
      service
      active
      status
      dataSource
      stack
      secretCredentials
      extractor
      graphID
    }
  }
`;
export const updateConnector = /* GraphQL */ `
  mutation UpdateConnector(
    $input: UpdateConnectorInput!
    $condition: ModelConnectorConditionInput
  ) {
    updateConnector(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      name
      description
      topics
      service
      active
      status
      dataSource
      stack
      secretCredentials
      extractor
      graphID
    }
  }
`;
export const deleteConnector = /* GraphQL */ `
  mutation DeleteConnector(
    $input: DeleteConnectorInput!
    $condition: ModelConnectorConditionInput
  ) {
    deleteConnector(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      name
      description
      topics
      service
      active
      status
      dataSource
      stack
      secretCredentials
      extractor
      graphID
    }
  }
`;
export const createPerspective = /* GraphQL */ `
  mutation CreatePerspective(
    $input: CreatePerspectiveInput!
    $condition: ModelPerspectiveConditionInput
  ) {
    createPerspective(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
      groups
      name
      description
      type
      query
      parameters {
        key
        name
        type
        definition
        value
      }
    }
  }
`;
export const updatePerspective = /* GraphQL */ `
  mutation UpdatePerspective(
    $input: UpdatePerspectiveInput!
    $condition: ModelPerspectiveConditionInput
  ) {
    updatePerspective(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
      groups
      name
      description
      type
      query
      parameters {
        key
        name
        type
        definition
        value
      }
    }
  }
`;
export const deletePerspective = /* GraphQL */ `
  mutation DeletePerspective(
    $input: DeletePerspectiveInput!
    $condition: ModelPerspectiveConditionInput
  ) {
    deletePerspective(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
      groups
      name
      description
      type
      query
      parameters {
        key
        name
        type
        definition
        value
      }
    }
  }
`;
export const createSchema = /* GraphQL */ `
  mutation CreateSchema(
    $input: CreateSchemaInput!
    $condition: ModelSchemaConditionInput
  ) {
    createSchema(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      nodes {
        id
        label
        properties {
          key
          name
          type
        }
        idSelector
        descriptionSelector
        avatarSelector
        avatarColor
      }
      relationships {
        id
        startNodeID
        endNodeID
        type
        properties {
          key
          name
          type
        }
        descriptionSelector
      }
    }
  }
`;
export const updateSchema = /* GraphQL */ `
  mutation UpdateSchema(
    $input: UpdateSchemaInput!
    $condition: ModelSchemaConditionInput
  ) {
    updateSchema(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      nodes {
        id
        label
        properties {
          key
          name
          type
        }
        idSelector
        descriptionSelector
        avatarSelector
        avatarColor
      }
      relationships {
        id
        startNodeID
        endNodeID
        type
        properties {
          key
          name
          type
        }
        descriptionSelector
      }
    }
  }
`;
export const deleteSchema = /* GraphQL */ `
  mutation DeleteSchema(
    $input: DeleteSchemaInput!
    $condition: ModelSchemaConditionInput
  ) {
    deleteSchema(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      nodes {
        id
        label
        properties {
          key
          name
          type
        }
        idSelector
        descriptionSelector
        avatarSelector
        avatarColor
      }
      relationships {
        id
        startNodeID
        endNodeID
        type
        properties {
          key
          name
          type
        }
        descriptionSelector
      }
    }
  }
`;
export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
      id
      tenantID
      schemaID
      graphID
      createdAt
      updatedAt
      name
    }
  }
`;
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
      id
      tenantID
      schemaID
      graphID
      createdAt
      updatedAt
      name
    }
  }
`;
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
      id
      tenantID
      schemaID
      graphID
      createdAt
      updatedAt
      name
    }
  }
`;
export const createTransformation = /* GraphQL */ `
  mutation CreateTransformation(
    $input: CreateTransformationInput!
    $condition: ModelTransformationConditionInput
  ) {
    createTransformation(input: $input, condition: $condition) {
      id
      tenantID
      connectorID
      createdAt
      updatedAt
      name
      topics
      active
      schemaEntityID
      expression
    }
  }
`;
export const updateTransformation = /* GraphQL */ `
  mutation UpdateTransformation(
    $input: UpdateTransformationInput!
    $condition: ModelTransformationConditionInput
  ) {
    updateTransformation(input: $input, condition: $condition) {
      id
      tenantID
      connectorID
      createdAt
      updatedAt
      name
      topics
      active
      schemaEntityID
      expression
    }
  }
`;
export const deleteTransformation = /* GraphQL */ `
  mutation DeleteTransformation(
    $input: DeleteTransformationInput!
    $condition: ModelTransformationConditionInput
  ) {
    deleteTransformation(input: $input, condition: $condition) {
      id
      tenantID
      connectorID
      createdAt
      updatedAt
      name
      topics
      active
      schemaEntityID
      expression
    }
  }
`;
export const runPerspective = /* GraphQL */ `
  mutation RunPerspective($input: RunPerspectiveInput!) {
    runPerspective(input: $input) {
      records
    }
  }
`;
export const authorizeConnector = /* GraphQL */ `
  mutation AuthorizeConnector($input: AuthorizeConnectorInput!) {
    authorizeConnector(input: $input) {
      id
      tenantID
      createdAt
      updatedAt
      name
      description
      topics
      service
      active
      status
      dataSource
      stack
      secretCredentials
      extractor
      graphID
    }
  }
`;
export const requestFileUpload = /* GraphQL */ `
  mutation RequestFileUpload(
    $input: RequestFileUploadInput!
    $tenantID: ID!
    $graphID: String!
  ) {
    requestFileUpload(input: $input, tenantID: $tenantID, graphID: $graphID) {
      signedUploadUrl
      objectKey
      expiresIn
    }
  }
`;
export const requestFileDownload = /* GraphQL */ `
  mutation RequestFileDownload(
    $input: RequestFileDownloadInput!
    $tenantID: ID!
    $graphID: String!
  ) {
    requestFileDownload(input: $input, tenantID: $tenantID, graphID: $graphID) {
      signedDownloadUrl
      expiresIn
    }
  }
`;
export const runConnector = /* GraphQL */ `
  mutation RunConnector($input: RunConnectorInput!) {
    runConnector(input: $input)
  }
`;
export const initTransformations = /* GraphQL */ `
  mutation InitTransformations(
    $connectorID: ID!
    $tenantID: ID!
    $schemaID: ID!
  ) {
    initTransformations(
      connectorID: $connectorID
      tenantID: $tenantID
      schemaID: $schemaID
    ) {
      transformations
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode($input: CreateNodeInput!, $graphID: String!) {
    createNode(input: $input, graphID: $graphID) {
      identity
      labels
      properties
    }
  }
`;
export const updateNode = /* GraphQL */ `
  mutation UpdateNode($input: UpdateNodeInput!, $graphID: String!) {
    updateNode(input: $input, graphID: $graphID) {
      identity
      labels
      properties
    }
  }
`;
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode($input: DeleteNodeInput!, $graphID: String!) {
    deleteNode(input: $input, graphID: $graphID) {
      nodes {
        identity
        labels
        properties
      }
      relationships {
        identity
        type
        start
        end
        properties
      }
    }
  }
`;
export const createRelationship = /* GraphQL */ `
  mutation CreateRelationship(
    $input: CreateRelationshipInput!
    $graphID: String!
  ) {
    createRelationship(input: $input, graphID: $graphID) {
      identity
      type
      start
      end
      properties
    }
  }
`;
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship(
    $input: UpdateRelationshipInput!
    $graphID: String!
  ) {
    updateRelationship(input: $input, graphID: $graphID) {
      identity
      type
      start
      end
      properties
    }
  }
`;
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship(
    $input: DeleteRelationshipInput!
    $graphID: String!
  ) {
    deleteRelationship(input: $input, graphID: $graphID) {
      nodes {
        identity
        labels
        properties
      }
      relationships {
        identity
        type
        start
        end
        properties
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!, $tenantID: ID!) {
    createUser(input: $input, tenantID: $tenantID) {
      username
      tenantID
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!, $tenantID: ID!) {
    updateUser(input: $input, tenantID: $tenantID) {
      username
      tenantID
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!, $tenantID: ID!) {
    deleteUser(input: $input, tenantID: $tenantID) {
      username
      tenantID
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
