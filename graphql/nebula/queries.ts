/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const emptyQuery = /* GraphQL */ `
  query EmptyQuery {
    emptyQuery
  }
`;
export const echo = /* GraphQL */ `
  query Echo($msg: String) {
    echo(msg: $msg)
  }
`;
export const getQueryCache = /* GraphQL */ `
  query GetQueryCache(
    $id: ID!
    $tenantID: ID!
    $refType: RefType!
    $refID: ID!
  ) {
    getQueryCache(
      id: $id
      tenantID: $tenantID
      refType: $refType
      refID: $refID
    ) {
      id
      tenantID
      createdAt
      updatedAt
      refType
      refID
      key
      data
      error
      ttl
    }
  }
`;
export const listQueriesByRef = /* GraphQL */ `
  query ListQueriesByRef(
    $tenantID: ID!
    $refTypeRefID: ModelQueryCacheByRefCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQueryCacheFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQueriesByRef(
      tenantID: $tenantID
      refTypeRefID: $refTypeRefID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        createdAt
        updatedAt
        refType
        refID
        key
        data
        error
        ttl
      }
      nextToken
    }
  }
`;
export const getConnector = /* GraphQL */ `
  query GetConnector($id: ID!) {
    getConnector(id: $id) {
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
export const listConnectors = /* GraphQL */ `
  query ListConnectors(
    $filter: ModelConnectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnectors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getConnectorByDataSource = /* GraphQL */ `
  query GetConnectorByDataSource(
    $dataSource: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConnectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getConnectorByDataSource(
      dataSource: $dataSource
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listEventsByPub = /* GraphQL */ `
  query ListEventsByPub(
    $pubID: ID!
    $pubTypeUpdatedAt: ModelEventByPubCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsByPub(
      pubID: $pubID
      pubTypeUpdatedAt: $pubTypeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listEventsByRef = /* GraphQL */ `
  query ListEventsByRef(
    $refID: ID!
    $refTypeUpdatedAt: ModelEventByRefCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsByRef(
      refID: $refID
      refTypeUpdatedAt: $refTypeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEventSubscriber = /* GraphQL */ `
  query GetEventSubscriber($id: ID!) {
    getEventSubscriber(id: $id) {
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
export const listEventSubscribers = /* GraphQL */ `
  query ListEventSubscribers(
    $filter: ModelEventSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventSubscribers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        createdAt
        updatedAt
        subType
        subID
        refType
        refID
      }
      nextToken
    }
  }
`;
export const listEventSubscribersBySub = /* GraphQL */ `
  query ListEventSubscribersBySub(
    $subID: ID!
    $subTypeUpdatedAt: ModelEventSubscriberBySubCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventSubscribersBySub(
      subID: $subID
      subTypeUpdatedAt: $subTypeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        createdAt
        updatedAt
        subType
        subID
        refType
        refID
      }
      nextToken
    }
  }
`;
export const listEventSubscriberByRef = /* GraphQL */ `
  query ListEventSubscriberByRef(
    $refID: ID!
    $refTypeUpdatedAt: ModelEventSubscriberByRefCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventSubscriberByRef(
      refID: $refID
      refTypeUpdatedAt: $refTypeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        createdAt
        updatedAt
        subType
        subID
        refType
        refID
      }
      nextToken
    }
  }
`;
export const getEventNotification = /* GraphQL */ `
  query GetEventNotification($id: ID!) {
    getEventNotification(id: $id) {
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
export const listEventNotifications = /* GraphQL */ `
  query ListEventNotifications(
    $filter: ModelEventNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listEventNotificationsBySub = /* GraphQL */ `
  query ListEventNotificationsBySub(
    $subID: ID!
    $subTypeUpdatedAt: ModelEventNotificationBySubCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventNotificationsBySub(
      subID: $subID
      subTypeUpdatedAt: $subTypeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listEventNotificationsByRef = /* GraphQL */ `
  query ListEventNotificationsByRef(
    $refID: ID!
    $refTypeUpdatedAt: ModelEventNotificationByRefCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventNotificationsByRef(
      refID: $refID
      refTypeUpdatedAt: $refTypeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPerspective = /* GraphQL */ `
  query GetPerspective($id: ID!) {
    getPerspective(id: $id) {
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
export const listPerspectives = /* GraphQL */ `
  query ListPerspectives(
    $filter: ModelPerspectiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerspectives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSchema = /* GraphQL */ `
  query GetSchema($id: ID!) {
    getSchema(id: $id) {
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
export const listSchemas = /* GraphQL */ `
  query ListSchemas(
    $filter: ModelSchemaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchemas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
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
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTransformation = /* GraphQL */ `
  query GetTransformation($id: ID!) {
    getTransformation(id: $id) {
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
export const listTransformations = /* GraphQL */ `
  query ListTransformations(
    $filter: ModelTransformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransformations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listTransformationsByConnector = /* GraphQL */ `
  query ListTransformationsByConnector(
    $connectorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransformationsByConnector(
      connectorID: $connectorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listTransformationsBySchemaEntity = /* GraphQL */ `
  query ListTransformationsBySchemaEntity(
    $schemaEntityID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransformationsBySchemaEntity(
      schemaEntityID: $schemaEntityID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchGraph = /* GraphQL */ `
  query SearchGraph($input: SearchGraphInput!) {
    searchGraph(input: $input) {
      records {
        node {
          identity
          labels
          properties
        }
        score
      }
      nextOffset
    }
  }
`;
export const expandGraph = /* GraphQL */ `
  query ExpandGraph($input: ExpandGraphInput!) {
    expandGraph(input: $input) {
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
export const getNode = /* GraphQL */ `
  query GetNode($input: GetNodeInput!) {
    getNode(input: $input) {
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
export const getRelationship = /* GraphQL */ `
  query GetRelationship($input: GetRelationshipInput!) {
    getRelationship(input: $input) {
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
export const getUser = /* GraphQL */ `
  query GetUser($input: GetUserInput!) {
    getUser(input: $input) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers($input: ListUsersInput!) {
    listUsers(input: $input) {
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
export const getManifest = /* GraphQL */ `
  query GetManifest($service: ConnectorService!) {
    getManifest(service: $service)
  }
`;
