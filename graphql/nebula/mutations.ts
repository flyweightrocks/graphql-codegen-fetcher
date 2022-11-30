/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const emptyTest = /* GraphQL */ `
  mutation EmptyTest {
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
      createdAt
      updatedAt
      name
      descritpion
      resourceName
      extractor
      topics
      service
      active
      status
      secretCredentials
      dataSource
      transformations {
        items {
          id
          createdAt
          updatedAt
          connectorID
          topics
          schemaEntity
          graphEntityType
          status
          expression
          connector {
            id
            createdAt
            updatedAt
            name
            descritpion
            resourceName
            extractor
            topics
            service
            active
            status
            secretCredentials
            dataSource
          }
        }
        nextToken
      }
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
      createdAt
      updatedAt
      name
      descritpion
      resourceName
      extractor
      topics
      service
      active
      status
      secretCredentials
      dataSource
      transformations {
        items {
          id
          createdAt
          updatedAt
          connectorID
          topics
          schemaEntity
          graphEntityType
          status
          expression
          connector {
            id
            createdAt
            updatedAt
            name
            descritpion
            resourceName
            extractor
            topics
            service
            active
            status
            secretCredentials
            dataSource
          }
        }
        nextToken
      }
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
      createdAt
      updatedAt
      name
      descritpion
      resourceName
      extractor
      topics
      service
      active
      status
      secretCredentials
      dataSource
      transformations {
        items {
          id
          createdAt
          updatedAt
          connectorID
          topics
          schemaEntity
          graphEntityType
          status
          expression
          connector {
            id
            createdAt
            updatedAt
            name
            descritpion
            resourceName
            extractor
            topics
            service
            active
            status
            secretCredentials
            dataSource
          }
        }
        nextToken
      }
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
      createdAt
      updatedAt
      connectorID
      topics
      schemaEntity
      graphEntityType
      status
      expression
      connector {
        id
        createdAt
        updatedAt
        name
        descritpion
        resourceName
        extractor
        topics
        service
        active
        status
        secretCredentials
        dataSource
        transformations {
          items {
            id
            createdAt
            updatedAt
            connectorID
            topics
            schemaEntity
            graphEntityType
            status
            expression
          }
          nextToken
        }
      }
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
      createdAt
      updatedAt
      connectorID
      topics
      schemaEntity
      graphEntityType
      status
      expression
      connector {
        id
        createdAt
        updatedAt
        name
        descritpion
        resourceName
        extractor
        topics
        service
        active
        status
        secretCredentials
        dataSource
        transformations {
          items {
            id
            createdAt
            updatedAt
            connectorID
            topics
            schemaEntity
            graphEntityType
            status
            expression
          }
          nextToken
        }
      }
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
      createdAt
      updatedAt
      connectorID
      topics
      schemaEntity
      graphEntityType
      status
      expression
      connector {
        id
        createdAt
        updatedAt
        name
        descritpion
        resourceName
        extractor
        topics
        service
        active
        status
        secretCredentials
        dataSource
        transformations {
          items {
            id
            createdAt
            updatedAt
            connectorID
            topics
            schemaEntity
            graphEntityType
            status
            expression
          }
          nextToken
        }
      }
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
      createdAt
      updatedAt
      owner
      groups
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
      createdAt
      updatedAt
      owner
      groups
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
      createdAt
      updatedAt
      owner
      groups
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
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
      groups
      name
      credentials
    }
  }
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
      groups
      name
      credentials
    }
  }
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
      groups
      name
      credentials
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      adminGroup
      userGroup
      name
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      adminGroup
      userGroup
      name
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
export const runConnector = /* GraphQL */ `
  mutation RunConnector($input: RunConnectorInput!) {
    runConnector(input: $input)
  }
`;
export const createConnectorCredentials = /* GraphQL */ `
  mutation CreateConnectorCredentials(
    $input: CreateConnectorCredentialsInput!
  ) {
    createConnectorCredentials(input: $input) {
      id
      plainCredentials
      secretCredentials
    }
  }
`;
export const updateConnectorCredentials = /* GraphQL */ `
  mutation UpdateConnectorCredentials(
    $input: UpdateConnectorCredentialsInput!
  ) {
    updateConnectorCredentials(input: $input) {
      id
      plainCredentials
      secretCredentials
    }
  }
`;
export const deleteConnectorCredentials = /* GraphQL */ `
  mutation DeleteConnectorCredentials(
    $input: DeleteConnectorCredentialsInput!
  ) {
    deleteConnectorCredentials(input: $input) {
      id
      plainCredentials
      secretCredentials
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode($input: CreateNodeInput!) {
    createNode(input: $input) {
      node {
        identity
        labels
        properties
      }
      relationships {
        node {
          identity
          labels
          properties
        }
        relationship {
          identity
          type
          start
          end
          properties
        }
      }
    }
  }
`;
export const updateNode = /* GraphQL */ `
  mutation UpdateNode($input: UpdateNodeInput!) {
    updateNode(input: $input) {
      node {
        identity
        labels
        properties
      }
      relationships {
        node {
          identity
          labels
          properties
        }
        relationship {
          identity
          type
          start
          end
          properties
        }
      }
    }
  }
`;
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode($input: DeleteNodeInput!) {
    deleteNode(input: $input) {
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
  mutation CreateRelationship($input: CreateRelationshipInput!) {
    createRelationship(input: $input) {
      start {
        identity
        labels
        properties
      }
      end {
        identity
        labels
        properties
      }
      relationship {
        identity
        type
        start
        end
        properties
      }
    }
  }
`;
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship($input: UpdateRelationshipInput!) {
    updateRelationship(input: $input) {
      start {
        identity
        labels
        properties
      }
      end {
        identity
        labels
        properties
      }
      relationship {
        identity
        type
        start
        end
        properties
      }
    }
  }
`;
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship($input: DeleteRelationshipInput!) {
    deleteRelationship(input: $input) {
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
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      username
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      username
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
