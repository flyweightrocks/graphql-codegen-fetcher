/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const empty = /* GraphQL */ `
  query EmptyQuery {
    emptyQuery
  }
`;
export const echoTest = /* GraphQL */ `
  query Echo($msg: String) {
    echo(msg: $msg)
  }
`;
export const customTest = /* GraphQL */ `
  query CustomTest($id: ID!) {
    customTest(id: $id) {
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
export const getConnector = /* GraphQL */ `
  query GetConnector($id: ID!) {
    getConnector(id: $id) {
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
export const listConnectors = /* GraphQL */ `
  query ListConnectors(
    $filter: ModelConnectorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnectors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTransformation = /* GraphQL */ `
  query GetTransformation($id: ID!) {
    getTransformation(id: $id) {
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
export const listTransformations = /* GraphQL */ `
  query ListTransformations(
    $filter: ModelTransformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransformations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          transformations {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getTransformationsByConnector = /* GraphQL */ `
  query GetTransformationsByConnector(
    $connectorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTransformationsByConnector(
      connectorID: $connectorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          transformations {
            nextToken
          }
        }
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
export const listSchemas = /* GraphQL */ `
  query ListSchemas(
    $filter: ModelSchemaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchemas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
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
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
        groups
        name
        credentials
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      createdAt
      updatedAt
      adminGroup
      userGroup
      name
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        adminGroup
        userGroup
        name
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
    }
  }
`;
export const getNode = /* GraphQL */ `
  query GetNode($identity: ID!) {
    getNode(identity: $identity) {
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
export const getRelationship = /* GraphQL */ `
  query GetRelationship($identity: ID!) {
    getRelationship(identity: $identity) {
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
export const listNodes = /* GraphQL */ `
  query ListNodes($input: ListNodesInput!) {
    listNodes(input: $input) {
      records {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($username: ID!) {
    getUser(username: $username) {
      username
      createdAt
      updatedAt
      attributes
      status
      enabled
    }
  }
`;
export const findUsers = /* GraphQL */ `
  query FindUsers($input: FindUsersInput!) {
    findUsers(input: $input) {
      items {
        username
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
  query ListUsers($nextToken: String) {
    listUsers(nextToken: $nextToken) {
      items {
        username
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
export const getConnectorCredentials = /* GraphQL */ `
  query GetConnectorCredentials($id: ID!) {
    getConnectorCredentials(id: $id) {
      id
      plainCredentials
      secretCredentials
    }
  }
`;
export const getManifest = /* GraphQL */ `
  query GetManifest($service: ConnectorService!) {
    getManifest(service: $service)
  }
`;
