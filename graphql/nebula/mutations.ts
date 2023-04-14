/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const emptyMutation = /* GraphQL */ `
  mutation EmptyMutation {
    emptyMutation
  }
`;
export const createQueryCache = /* GraphQL */ `
  mutation CreateQueryCache(
    $input: CreateQueryCacheInput!
    $condition: ModelQueryCacheConditionInput
  ) {
    createQueryCache(input: $input, condition: $condition) {
      queryHash
      tenantID
      createdAt
      updatedAt
      reference
      queryKey
      data
      error
      ttl
    }
  }
`;
export const updateQueryCache = /* GraphQL */ `
  mutation UpdateQueryCache(
    $input: UpdateQueryCacheInput!
    $condition: ModelQueryCacheConditionInput
  ) {
    updateQueryCache(input: $input, condition: $condition) {
      queryHash
      tenantID
      createdAt
      updatedAt
      reference
      queryKey
      data
      error
      ttl
    }
  }
`;
export const deleteQueryCache = /* GraphQL */ `
  mutation DeleteQueryCache(
    $input: DeleteQueryCacheInput!
    $condition: ModelQueryCacheConditionInput
  ) {
    deleteQueryCache(input: $input, condition: $condition) {
      queryHash
      tenantID
      createdAt
      updatedAt
      reference
      queryKey
      data
      error
      ttl
    }
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
      schemaID
      graphID
      createdAt
      updatedAt
      name
      description
      service
      active
      status
      dataSource
      secretCredentials
      extractor
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
      schemaID
      graphID
      createdAt
      updatedAt
      name
      description
      service
      active
      status
      dataSource
      secretCredentials
      extractor
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
      schemaID
      graphID
      createdAt
      updatedAt
      name
      description
      service
      active
      status
      dataSource
      secretCredentials
      extractor
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      tenantID
      pubType
      pubID
      createdAt
      updatedAt
      refType
      refID
      eventType
      eventBody
      eventStatus
      ttl
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      tenantID
      pubType
      pubID
      createdAt
      updatedAt
      refType
      refID
      eventType
      eventBody
      eventStatus
      ttl
    }
  }
`;
export const createEventSubscriber = /* GraphQL */ `
  mutation CreateEventSubscriber(
    $input: CreateEventSubscriberInput!
    $condition: ModelEventSubscriberConditionInput
  ) {
    createEventSubscriber(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
    }
  }
`;
export const deleteEventSubscriber = /* GraphQL */ `
  mutation DeleteEventSubscriber(
    $input: DeleteEventSubscriberInput!
    $condition: ModelEventSubscriberConditionInput
  ) {
    deleteEventSubscriber(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
    }
  }
`;
export const createEventNotification = /* GraphQL */ `
  mutation CreateEventNotification(
    $input: CreateEventNotificationInput!
    $condition: ModelEventNotificationConditionInput
  ) {
    createEventNotification(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
      notificationBody
      isRead
    }
  }
`;
export const deleteEventNotification = /* GraphQL */ `
  mutation DeleteEventNotification(
    $input: DeleteEventNotificationInput!
    $condition: ModelEventNotificationConditionInput
  ) {
    deleteEventNotification(input: $input, condition: $condition) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
      notificationBody
      isRead
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
      tenantID
      createdAt
      updatedAt
      name
      description
      query {
        type
        body
      }
      type
      inputs {
        id
        key
        name
        description
        type
        default
      }
      outputs {
        id
        key
        name
        description
        type
      }
      cacheTime
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
      tenantID
      createdAt
      updatedAt
      name
      description
      query {
        type
        body
      }
      type
      inputs {
        id
        key
        name
        description
        type
        default
      }
      outputs {
        id
        key
        name
        description
        type
      }
      cacheTime
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
      tenantID
      createdAt
      updatedAt
      name
      description
      query {
        type
        body
      }
      type
      inputs {
        id
        key
        name
        description
        type
        default
      }
      outputs {
        id
        key
        name
        description
        type
      }
      cacheTime
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
      name
      nodes {
        id
        label
        properties {
          key
          name
          type
          semanticType
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
          semanticType
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
      name
      nodes {
        id
        label
        properties {
          key
          name
          type
          semanticType
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
          semanticType
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
      name
      nodes {
        id
        label
        properties {
          key
          name
          type
          semanticType
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
          semanticType
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
      language
      region
      timezone
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
      language
      region
      timezone
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
      language
      region
      timezone
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
      schemaEntityID
      createdAt
      updatedAt
      name
      topics
      active
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
      schemaEntityID
      createdAt
      updatedAt
      name
      topics
      active
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
      schemaEntityID
      createdAt
      updatedAt
      name
      topics
      active
      expression
    }
  }
`;
export const executePerspective = /* GraphQL */ `
  mutation ExecutePerspective($input: ExecutePerspectiveInput!) {
    executePerspective(input: $input) {
      data
      updatedAt
    }
  }
`;
export const authorizeConnector = /* GraphQL */ `
  mutation AuthorizeConnector($input: AuthorizeConnectorInput!) {
    authorizeConnector(input: $input) {
      id
      tenantID
      schemaID
      graphID
      createdAt
      updatedAt
      name
      description
      service
      active
      status
      dataSource
      secretCredentials
      extractor
    }
  }
`;
export const activateConnector = /* GraphQL */ `
  mutation ActivateConnector($input: ActivateConnectorInput!) {
    activateConnector(input: $input) {
      id
      tenantID
      schemaID
      graphID
      createdAt
      updatedAt
      name
      description
      service
      active
      status
      dataSource
      secretCredentials
      extractor
    }
  }
`;
export const activateTransformations = /* GraphQL */ `
  mutation ActivateTransformations($input: ActivateTransformationsInput!) {
    activateTransformations(input: $input) {
      ids
      transformations {
        id
        tenantID
        connectorID
        schemaEntityID
        createdAt
        updatedAt
        name
        topics
        active
        expression
      }
    }
  }
`;
export const setupTransformations = /* GraphQL */ `
  mutation SetupTransformations($input: SetupTransformationsInput!) {
    setupTransformations(input: $input) {
      ids
      transformations {
        id
        tenantID
        connectorID
        schemaEntityID
        createdAt
        updatedAt
        name
        topics
        active
        expression
      }
    }
  }
`;
export const uploadGraphFile = /* GraphQL */ `
  mutation UploadGraphFile(
    $input: UploadGraphFileInput!
    $tenantID: ID!
    $graphID: String!
  ) {
    uploadGraphFile(input: $input, tenantID: $tenantID, graphID: $graphID) {
      signedUploadUrl
      objectKey
      expiresIn
    }
  }
`;
export const downloadGraphFile = /* GraphQL */ `
  mutation DownloadGraphFile(
    $input: DownloadGraphFileInput!
    $tenantID: ID!
    $graphID: String!
  ) {
    downloadGraphFile(input: $input, tenantID: $tenantID, graphID: $graphID) {
      signedDownloadUrl
      expiresIn
    }
  }
`;
export const deleteGraphFile = /* GraphQL */ `
  mutation DeleteGraphFile(
    $input: DeleteGraphFileInput!
    $tenantID: ID!
    $graphID: String!
  ) {
    deleteGraphFile(input: $input, tenantID: $tenantID, graphID: $graphID) {
      objectKey
      nodeID
    }
  }
`;
export const runConnector = /* GraphQL */ `
  mutation RunConnector($input: RunConnectorInput!) {
    runConnector(input: $input)
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode($input: CreateNodeInput!) {
    createNode(input: $input) {
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
export const updateNode = /* GraphQL */ `
  mutation UpdateNode($input: UpdateNodeInput!) {
    updateNode(input: $input) {
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
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship($input: UpdateRelationshipInput!) {
    updateRelationship(input: $input) {
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
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship($input: DeleteRelationshipInput!) {
    deleteRelationship(input: $input) {
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
export const findUsers = /* GraphQL */ `
  mutation FindUsers($input: FindUsersInput!) {
    findUsers(input: $input) {
      items {
        id
        tenantID
        createdAt
        updatedAt
        attributes
        status
        enabled
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      tenantID
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const inviteUser = /* GraphQL */ `
  mutation InviteUser($input: InviteUserInput!) {
    inviteUser(input: $input) {
      id
      tenantID
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const activateUser = /* GraphQL */ `
  mutation ActivateUser($input: ActivateUserInput!) {
    activateUser(input: $input) {
      id
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
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
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
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      tenantID
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const setupTenant = /* GraphQL */ `
  mutation SetupTenant($input: SetupTenantInput!) {
    setupTenant(input: $input) {
      id
      tenantID
      schemaID
      graphID
      createdAt
      updatedAt
      name
      language
      region
      timezone
    }
  }
`;
export const setupSchema = /* GraphQL */ `
  mutation SetupSchema($input: SetupSchemaInput!) {
    setupSchema(input: $input) {
      id
      tenantID
      createdAt
      updatedAt
      name
      nodes {
        id
        label
        properties {
          key
          name
          type
          semanticType
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
          semanticType
        }
        descriptionSelector
      }
    }
  }
`;
