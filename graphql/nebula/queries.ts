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
export const getConnector = /* GraphQL */ `
  query GetConnector($id: ID!) {
    getConnector(id: $id) {
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
      nextToken
    }
  }
`;
export const getPerspective = /* GraphQL */ `
  query GetPerspective($id: ID!) {
    getPerspective(id: $id) {
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
export const listPerspectives = /* GraphQL */ `
  query ListPerspectives(
    $filter: ModelPerspectiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerspectives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        name
        topics
        active
        schemaEntityID
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
        createdAt
        updatedAt
        name
        topics
        active
        schemaEntityID
        expression
      }
      nextToken
    }
  }
`;
export const searchGraph = /* GraphQL */ `
  query SearchGraph(
    $input: SearchGraphInput!
    $graphID: String!
    $schemaID: ID!
  ) {
    searchGraph(input: $input, graphID: $graphID, schemaID: $schemaID) {
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
  query ExpandGraph($input: ExpandGraphInput!, $graphID: String!) {
    expandGraph(input: $input, graphID: $graphID) {
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
  query GetNode($identity: ID!, $graphID: String!) {
    getNode(identity: $identity, graphID: $graphID) {
      identity
      labels
      properties
    }
  }
`;
export const getRelationship = /* GraphQL */ `
  query GetRelationship($identity: ID!, $graphID: String!) {
    getRelationship(identity: $identity, graphID: $graphID) {
      identity
      type
      start
      end
      properties
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($username: ID!, $tenantID: ID!) {
    getUser(username: $username, tenantID: $tenantID) {
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
export const findUsers = /* GraphQL */ `
  query FindUsers($input: FindUsersInput!, $tenantID: String!) {
    findUsers(input: $input, tenantID: $tenantID) {
      items {
        username
        tenantID
        createdAt
        updatedAt
        attributes
        status
        enabled
      }
      nextToken
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers($tenantID: ID!, $nextToken: String) {
    listUsers(tenantID: $tenantID, nextToken: $nextToken) {
      items {
        username
        tenantID
        createdAt
        updatedAt
        attributes
        status
        enabled
      }
      nextToken
    }
  }
`;
export const getManifest = /* GraphQL */ `
  query GetManifest($service: ConnectorService!) {
    getManifest(service: $service)
  }
`;
