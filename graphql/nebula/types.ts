/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Connector = {
  __typename: "Connector",
  id: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  description?: string | null,
  topics: Array< string >,
  service: ConnectorService,
  active?: boolean | null,
  status?: ConnectorStatus | null,
  dataSource?: string | null,
  stack?: string | null,
  secretCredentials?: string | null,
  extractor?: string | null,
  graphID?: string | null,
};

export enum ConnectorService {
  AMAZON = "AMAZON",
  SHOPIFY = "SHOPIFY",
}


export enum ConnectorStatus {
  AuthorizationGranted = "AuthorizationGranted",
  AuthorizationRevoked = "AuthorizationRevoked",
  AuthorizationFailed = "AuthorizationFailed",
}


export type ModelConnectorFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  service?: ModelConnectorServiceInput | null,
  active?: ModelBooleanInput | null,
  status?: ModelConnectorStatusInput | null,
  dataSource?: ModelStringInput | null,
  stack?: ModelStringInput | null,
  secretCredentials?: ModelStringInput | null,
  extractor?: ModelStringInput | null,
  graphID?: ModelStringInput | null,
  and?: Array< ModelConnectorFilterInput | null > | null,
  or?: Array< ModelConnectorFilterInput | null > | null,
  not?: ModelConnectorFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelConnectorServiceInput = {
  eq?: ConnectorService | null,
  ne?: ConnectorService | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelConnectorStatusInput = {
  eq?: ConnectorStatus | null,
  ne?: ConnectorStatus | null,
};

export type ModelConnectorConnection = {
  __typename: "ModelConnectorConnection",
  items:  Array<Connector | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type Perspective = {
  __typename: "Perspective",
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  name: string,
  description?: string | null,
  type: PerspectiveType,
  query: string,
  parameters?:  Array<PerspectiveParameter > | null,
};

export enum PerspectiveType {
  GRAPH = "GRAPH",
  TABLE = "TABLE",
  CHART = "CHART",
  METRIC = "METRIC",
}


export type PerspectiveParameter = {
  __typename: "PerspectiveParameter",
  key: string,
  name: string,
  type: PerspectiveParameterType,
  definition: string,
  value?: string | null,
};

export enum PerspectiveParameterType {
  STRING = "STRING",
  NUMBER = "NUMBER",
  DATE = "DATE",
  DATETIME = "DATETIME",
  TIME = "TIME",
}


export type ModelPerspectiveFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelPerspectiveTypeInput | null,
  query?: ModelStringInput | null,
  and?: Array< ModelPerspectiveFilterInput | null > | null,
  or?: Array< ModelPerspectiveFilterInput | null > | null,
  not?: ModelPerspectiveFilterInput | null,
};

export type ModelPerspectiveTypeInput = {
  eq?: PerspectiveType | null,
  ne?: PerspectiveType | null,
};

export type ModelPerspectiveConnection = {
  __typename: "ModelPerspectiveConnection",
  items:  Array<Perspective | null >,
  nextToken?: string | null,
};

export type Schema = {
  __typename: "Schema",
  id: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodes:  Array<SchemaNode >,
  relationships:  Array<SchemaRelationship >,
};

export type SchemaNode = {
  __typename: "SchemaNode",
  id: string,
  label: string,
  properties?:  Array<SchemaProperty > | null,
  idSelector?: Array< string > | null,
  descriptionSelector?: Array< string > | null,
  avatarSelector?: string | null,
  avatarColor: string,
};

export type SchemaProperty = {
  __typename: "SchemaProperty",
  key: string,
  name: string,
  type: SchemaPropertyType,
};

export enum SchemaPropertyType {
  STRING = "STRING",
  NUMBER = "NUMBER",
  DATE = "DATE",
  DATETIME = "DATETIME",
  TIME = "TIME",
  BOOLEAN = "BOOLEAN",
  CURRENCY = "CURRENCY",
  UNDEFINED = "UNDEFINED",
}


export type SchemaRelationship = {
  __typename: "SchemaRelationship",
  id: string,
  startNodeID: string,
  endNodeID: string,
  type: string,
  properties?:  Array<SchemaProperty > | null,
  descriptionSelector?: Array< string > | null,
};

export type ModelSchemaFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSchemaFilterInput | null > | null,
  or?: Array< ModelSchemaFilterInput | null > | null,
  not?: ModelSchemaFilterInput | null,
};

export type ModelSchemaConnection = {
  __typename: "ModelSchemaConnection",
  items:  Array<Schema | null >,
  nextToken?: string | null,
};

export type Tenant = {
  __typename: "Tenant",
  id: string,
  tenantID: string,
  schemaID: string,
  graphID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
};

export type ModelTenantFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  schemaID?: ModelIDInput | null,
  graphID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTenantFilterInput | null > | null,
  or?: Array< ModelTenantFilterInput | null > | null,
  not?: ModelTenantFilterInput | null,
};

export type ModelTenantConnection = {
  __typename: "ModelTenantConnection",
  items:  Array<Tenant | null >,
  nextToken?: string | null,
};

export type Transformation = {
  __typename: "Transformation",
  id: string,
  tenantID: string,
  connectorID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  topics: Array< string >,
  active?: boolean | null,
  schemaEntityID?: string | null,
  expression?: string | null,
};

export type ModelTransformationFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  connectorID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  schemaEntityID?: ModelIDInput | null,
  expression?: ModelStringInput | null,
  and?: Array< ModelTransformationFilterInput | null > | null,
  or?: Array< ModelTransformationFilterInput | null > | null,
  not?: ModelTransformationFilterInput | null,
};

export type ModelTransformationConnection = {
  __typename: "ModelTransformationConnection",
  items:  Array<Transformation | null >,
  nextToken?: string | null,
};

export type SearchGraphInput = {
  term: string,
  labels?: Array< string > | null,
  limit?: number | null,
  offset?: number | null,
};

export type SearchGraphResult = {
  __typename: "SearchGraphResult",
  records?:  Array<SearchGraphRecord > | null,
  nextOffset?: number | null,
};

export type SearchGraphRecord = {
  __typename: "SearchGraphRecord",
  node: GraphNode,
  score: string,
};

export type GraphNode = {
  __typename: "GraphNode",
  identity: string,
  labels: Array< string >,
  properties: string,
};

export type ExpandGraphInput = {
  identities: Array< string >,
  hops?: number | null,
  direction?: RelationshipDirection | null,
};

export enum RelationshipDirection {
  OUTGOING = "OUTGOING",
  INCOMING = "INCOMING",
  BIDIRECTIONAL = "BIDIRECTIONAL",
}


export type GraphResult = {
  __typename: "GraphResult",
  nodes:  Array<GraphNode >,
  relationships:  Array<GraphRelationship >,
};

export type GraphRelationship = {
  __typename: "GraphRelationship",
  identity: string,
  type: string,
  start: string,
  end: string,
  properties: string,
};

export type CognitoUser = {
  __typename: "CognitoUser",
  username: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  attributes: string,
  status?: UserStatus | null,
  enabled?: boolean | null,
};

export enum UserStatus {
  ARCHIVED = "ARCHIVED",
  COMPROMISED = "COMPROMISED",
  CONFIRMED = "CONFIRMED",
  FORCE_CHANGE_PASSWORD = "FORCE_CHANGE_PASSWORD",
  RESET_REQUIRED = "RESET_REQUIRED",
  UNCONFIRMED = "UNCONFIRMED",
  UNKNOWN = "UNKNOWN",
}


export type FindUsersInput = {
  email?: string | null,
};

export type CognitoUserList = {
  __typename: "CognitoUserList",
  items:  Array<CognitoUser | null >,
  nextToken?: string | null,
};

export type CreateConnectorInput = {
  id?: string | null,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  description?: string | null,
  topics: Array< string >,
  service: ConnectorService,
  active?: boolean | null,
  status?: ConnectorStatus | null,
  dataSource?: string | null,
  stack?: string | null,
  secretCredentials?: string | null,
  extractor?: string | null,
  graphID?: string | null,
};

export type ModelConnectorConditionInput = {
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  service?: ModelConnectorServiceInput | null,
  active?: ModelBooleanInput | null,
  status?: ModelConnectorStatusInput | null,
  dataSource?: ModelStringInput | null,
  stack?: ModelStringInput | null,
  secretCredentials?: ModelStringInput | null,
  extractor?: ModelStringInput | null,
  graphID?: ModelStringInput | null,
  and?: Array< ModelConnectorConditionInput | null > | null,
  or?: Array< ModelConnectorConditionInput | null > | null,
  not?: ModelConnectorConditionInput | null,
};

export type UpdateConnectorInput = {
  id: string,
  tenantID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  description?: string | null,
  topics?: Array< string > | null,
  service?: ConnectorService | null,
  active?: boolean | null,
  status?: ConnectorStatus | null,
  dataSource?: string | null,
  stack?: string | null,
  secretCredentials?: string | null,
  extractor?: string | null,
  graphID?: string | null,
};

export type DeleteConnectorInput = {
  id: string,
};

export type CreatePerspectiveInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  name: string,
  description?: string | null,
  type: PerspectiveType,
  query: string,
  parameters?: Array< PerspectiveParameterInput > | null,
};

export type PerspectiveParameterInput = {
  key: string,
  name: string,
  type: PerspectiveParameterType,
  definition: string,
  value?: string | null,
};

export type ModelPerspectiveConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelPerspectiveTypeInput | null,
  query?: ModelStringInput | null,
  and?: Array< ModelPerspectiveConditionInput | null > | null,
  or?: Array< ModelPerspectiveConditionInput | null > | null,
  not?: ModelPerspectiveConditionInput | null,
};

export type UpdatePerspectiveInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  name?: string | null,
  description?: string | null,
  type?: PerspectiveType | null,
  query?: string | null,
  parameters?: Array< PerspectiveParameterInput > | null,
};

export type DeletePerspectiveInput = {
  id: string,
};

export type CreateSchemaInput = {
  id?: string | null,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodes: Array< SchemaNodeInput >,
  relationships: Array< SchemaRelationshipInput >,
};

export type SchemaNodeInput = {
  id?: string | null,
  label: string,
  properties?: Array< SchemaPropertyInput > | null,
  idSelector?: Array< string > | null,
  descriptionSelector?: Array< string > | null,
  avatarSelector?: string | null,
  avatarColor: string,
};

export type SchemaPropertyInput = {
  key: string,
  name: string,
  type: SchemaPropertyType,
};

export type SchemaRelationshipInput = {
  id?: string | null,
  startNodeID: string,
  endNodeID: string,
  type: string,
  properties?: Array< SchemaPropertyInput > | null,
  descriptionSelector?: Array< string > | null,
};

export type ModelSchemaConditionInput = {
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSchemaConditionInput | null > | null,
  or?: Array< ModelSchemaConditionInput | null > | null,
  not?: ModelSchemaConditionInput | null,
};

export type UpdateSchemaInput = {
  id: string,
  tenantID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodes?: Array< SchemaNodeInput > | null,
  relationships?: Array< SchemaRelationshipInput > | null,
};

export type DeleteSchemaInput = {
  id: string,
};

export type CreateTenantInput = {
  id?: string | null,
  tenantID: string,
  schemaID: string,
  graphID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
};

export type ModelTenantConditionInput = {
  tenantID?: ModelIDInput | null,
  schemaID?: ModelIDInput | null,
  graphID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTenantConditionInput | null > | null,
  or?: Array< ModelTenantConditionInput | null > | null,
  not?: ModelTenantConditionInput | null,
};

export type UpdateTenantInput = {
  id: string,
  tenantID?: string | null,
  schemaID?: string | null,
  graphID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
};

export type DeleteTenantInput = {
  id: string,
};

export type CreateTransformationInput = {
  id?: string | null,
  tenantID: string,
  connectorID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  topics: Array< string >,
  active?: boolean | null,
  schemaEntityID?: string | null,
  expression?: string | null,
};

export type ModelTransformationConditionInput = {
  tenantID?: ModelIDInput | null,
  connectorID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  schemaEntityID?: ModelIDInput | null,
  expression?: ModelStringInput | null,
  and?: Array< ModelTransformationConditionInput | null > | null,
  or?: Array< ModelTransformationConditionInput | null > | null,
  not?: ModelTransformationConditionInput | null,
};

export type UpdateTransformationInput = {
  id: string,
  tenantID?: string | null,
  connectorID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  topics?: Array< string > | null,
  active?: boolean | null,
  schemaEntityID?: string | null,
  expression?: string | null,
};

export type DeleteTransformationInput = {
  id: string,
};

export type RunPerspectiveInput = {
  id: string,
  parameters?: Array< RunPerspectiveParameterInput > | null,
};

export type RunPerspectiveParameterInput = {
  key: string,
  type: PerspectiveParameterType,
  value?: string | null,
};

export type RunPerspectiveResult = {
  __typename: "RunPerspectiveResult",
  records: string,
};

export type AuthorizeConnectorInput = {
  id: string,
  dataSource: string,
  plainCredentials?: string | null,
};

export type RequestFileUploadInput = {
  prefix: string,
  fileName: string,
  nodeID: string,
};

export type RequestFileUploadResult = {
  __typename: "RequestFileUploadResult",
  signedUploadUrl: string,
  objectKey: string,
  expiresIn: number,
};

export type RequestFileDownloadInput = {
  objectKey: string,
};

export type RequestFileDownloadResult = {
  __typename: "RequestFileDownloadResult",
  signedDownloadUrl: string,
  expiresIn: number,
};

export type RunConnectorInput = {
  id: string,
  topic: string,
  parameters?: Array< RunConnectorParameterInput > | null,
};

export type RunConnectorParameterInput = {
  key: string,
  value?: string | null,
};

export type InitTransformationsResult = {
  __typename: "InitTransformationsResult",
  transformations: Array< string | null >,
};

export type CreateNodeInput = {
  labels: Array< string >,
  properties: string,
};

export type UpdateNodeInput = {
  identity: string,
  properties: string,
};

export type DeleteNodeInput = {
  identities: Array< string >,
};

export type CreateRelationshipInput = {
  type: string,
  start: string,
  end: string,
  properties: string,
};

export type UpdateRelationshipInput = {
  identity: string,
  properties: string,
};

export type DeleteRelationshipInput = {
  identities: Array< string >,
};

export type CreateUserInput = {
  email: string,
};

export type UpdateUserInput = {
  username: string,
  email: string,
};

export type DeleteUserInput = {
  username: string,
};

export type EmptyQueryQuery = {
  emptyQuery?: string | null,
};

export type EchoQueryVariables = {
  msg?: string | null,
};

export type EchoQuery = {
  echo?: string | null,
};

export type GetConnectorQueryVariables = {
  id: string,
};

export type GetConnectorQuery = {
  getConnector?:  {
    __typename: "Connector",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    topics: Array< string >,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    stack?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
    graphID?: string | null,
  } | null,
};

export type ListConnectorsQueryVariables = {
  filter?: ModelConnectorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConnectorsQuery = {
  listConnectors?:  {
    __typename: "ModelConnectorConnection",
    items:  Array< {
      __typename: "Connector",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      description?: string | null,
      topics: Array< string >,
      service: ConnectorService,
      active?: boolean | null,
      status?: ConnectorStatus | null,
      dataSource?: string | null,
      stack?: string | null,
      secretCredentials?: string | null,
      extractor?: string | null,
      graphID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConnectorByDataSourceQueryVariables = {
  dataSource: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelConnectorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetConnectorByDataSourceQuery = {
  getConnectorByDataSource?:  {
    __typename: "ModelConnectorConnection",
    items:  Array< {
      __typename: "Connector",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      description?: string | null,
      topics: Array< string >,
      service: ConnectorService,
      active?: boolean | null,
      status?: ConnectorStatus | null,
      dataSource?: string | null,
      stack?: string | null,
      secretCredentials?: string | null,
      extractor?: string | null,
      graphID?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPerspectiveQueryVariables = {
  id: string,
};

export type GetPerspectiveQuery = {
  getPerspective?:  {
    __typename: "Perspective",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    description?: string | null,
    type: PerspectiveType,
    query: string,
    parameters?:  Array< {
      __typename: "PerspectiveParameter",
      key: string,
      name: string,
      type: PerspectiveParameterType,
      definition: string,
      value?: string | null,
    } > | null,
  } | null,
};

export type ListPerspectivesQueryVariables = {
  filter?: ModelPerspectiveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPerspectivesQuery = {
  listPerspectives?:  {
    __typename: "ModelPerspectiveConnection",
    items:  Array< {
      __typename: "Perspective",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
      groups?: Array< string | null > | null,
      name: string,
      description?: string | null,
      type: PerspectiveType,
      query: string,
      parameters?:  Array< {
        __typename: "PerspectiveParameter",
        key: string,
        name: string,
        type: PerspectiveParameterType,
        definition: string,
        value?: string | null,
      } > | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSchemaQueryVariables = {
  id: string,
};

export type GetSchemaQuery = {
  getSchema?:  {
    __typename: "Schema",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      idSelector?: Array< string > | null,
      descriptionSelector?: Array< string > | null,
      avatarSelector?: string | null,
      avatarColor: string,
    } >,
    relationships:  Array< {
      __typename: "SchemaRelationship",
      id: string,
      startNodeID: string,
      endNodeID: string,
      type: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      descriptionSelector?: Array< string > | null,
    } >,
  } | null,
};

export type ListSchemasQueryVariables = {
  filter?: ModelSchemaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchemasQuery = {
  listSchemas?:  {
    __typename: "ModelSchemaConnection",
    items:  Array< {
      __typename: "Schema",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodes:  Array< {
        __typename: "SchemaNode",
        id: string,
        label: string,
        properties?:  Array< {
          __typename: "SchemaProperty",
          key: string,
          name: string,
          type: SchemaPropertyType,
        } > | null,
        idSelector?: Array< string > | null,
        descriptionSelector?: Array< string > | null,
        avatarSelector?: string | null,
        avatarColor: string,
      } >,
      relationships:  Array< {
        __typename: "SchemaRelationship",
        id: string,
        startNodeID: string,
        endNodeID: string,
        type: string,
        properties?:  Array< {
          __typename: "SchemaProperty",
          key: string,
          name: string,
          type: SchemaPropertyType,
        } > | null,
        descriptionSelector?: Array< string > | null,
      } >,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTenantQueryVariables = {
  id: string,
};

export type GetTenantQuery = {
  getTenant?:  {
    __typename: "Tenant",
    id: string,
    tenantID: string,
    schemaID: string,
    graphID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
  } | null,
};

export type ListTenantsQueryVariables = {
  filter?: ModelTenantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTenantsQuery = {
  listTenants?:  {
    __typename: "ModelTenantConnection",
    items:  Array< {
      __typename: "Tenant",
      id: string,
      tenantID: string,
      schemaID: string,
      graphID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransformationQueryVariables = {
  id: string,
};

export type GetTransformationQuery = {
  getTransformation?:  {
    __typename: "Transformation",
    id: string,
    tenantID: string,
    connectorID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
    schemaEntityID?: string | null,
    expression?: string | null,
  } | null,
};

export type ListTransformationsQueryVariables = {
  filter?: ModelTransformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransformationsQuery = {
  listTransformations?:  {
    __typename: "ModelTransformationConnection",
    items:  Array< {
      __typename: "Transformation",
      id: string,
      tenantID: string,
      connectorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      topics: Array< string >,
      active?: boolean | null,
      schemaEntityID?: string | null,
      expression?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTransformationsByConnectorQueryVariables = {
  connectorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransformationsByConnectorQuery = {
  listTransformationsByConnector?:  {
    __typename: "ModelTransformationConnection",
    items:  Array< {
      __typename: "Transformation",
      id: string,
      tenantID: string,
      connectorID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      topics: Array< string >,
      active?: boolean | null,
      schemaEntityID?: string | null,
      expression?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchGraphQueryVariables = {
  input: SearchGraphInput,
  graphID: string,
  schemaID: string,
};

export type SearchGraphQuery = {
  searchGraph?:  {
    __typename: "SearchGraphResult",
    records?:  Array< {
      __typename: "SearchGraphRecord",
      node:  {
        __typename: "GraphNode",
        identity: string,
        labels: Array< string >,
        properties: string,
      },
      score: string,
    } > | null,
    nextOffset?: number | null,
  } | null,
};

export type ExpandGraphQueryVariables = {
  input: ExpandGraphInput,
  graphID: string,
};

export type ExpandGraphQuery = {
  expandGraph?:  {
    __typename: "GraphResult",
    nodes:  Array< {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    } >,
    relationships:  Array< {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    } >,
  } | null,
};

export type GetNodeQueryVariables = {
  identity: string,
  graphID: string,
};

export type GetNodeQuery = {
  getNode?:  {
    __typename: "GraphNode",
    identity: string,
    labels: Array< string >,
    properties: string,
  } | null,
};

export type GetRelationshipQueryVariables = {
  identity: string,
  graphID: string,
};

export type GetRelationshipQuery = {
  getRelationship?:  {
    __typename: "GraphRelationship",
    identity: string,
    type: string,
    start: string,
    end: string,
    properties: string,
  } | null,
};

export type GetUserQueryVariables = {
  username: string,
  tenantID: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "CognitoUser",
    username: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type FindUsersQueryVariables = {
  input: FindUsersInput,
  tenantID: string,
};

export type FindUsersQuery = {
  findUsers?:  {
    __typename: "CognitoUserList",
    items:  Array< {
      __typename: "CognitoUser",
      username: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      attributes: string,
      status?: UserStatus | null,
      enabled?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  tenantID: string,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "CognitoUserList",
    items:  Array< {
      __typename: "CognitoUser",
      username: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      attributes: string,
      status?: UserStatus | null,
      enabled?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetManifestQueryVariables = {
  service: ConnectorService,
};

export type GetManifestQuery = {
  getManifest?: string | null,
};

export type EmptyMutationMutation = {
  emptyMutation?: number | null,
};

export type CreateConnectorMutationVariables = {
  input: CreateConnectorInput,
  condition?: ModelConnectorConditionInput | null,
};

export type CreateConnectorMutation = {
  createConnector?:  {
    __typename: "Connector",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    topics: Array< string >,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    stack?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
    graphID?: string | null,
  } | null,
};

export type UpdateConnectorMutationVariables = {
  input: UpdateConnectorInput,
  condition?: ModelConnectorConditionInput | null,
};

export type UpdateConnectorMutation = {
  updateConnector?:  {
    __typename: "Connector",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    topics: Array< string >,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    stack?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
    graphID?: string | null,
  } | null,
};

export type DeleteConnectorMutationVariables = {
  input: DeleteConnectorInput,
  condition?: ModelConnectorConditionInput | null,
};

export type DeleteConnectorMutation = {
  deleteConnector?:  {
    __typename: "Connector",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    topics: Array< string >,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    stack?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
    graphID?: string | null,
  } | null,
};

export type CreatePerspectiveMutationVariables = {
  input: CreatePerspectiveInput,
  condition?: ModelPerspectiveConditionInput | null,
};

export type CreatePerspectiveMutation = {
  createPerspective?:  {
    __typename: "Perspective",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    description?: string | null,
    type: PerspectiveType,
    query: string,
    parameters?:  Array< {
      __typename: "PerspectiveParameter",
      key: string,
      name: string,
      type: PerspectiveParameterType,
      definition: string,
      value?: string | null,
    } > | null,
  } | null,
};

export type UpdatePerspectiveMutationVariables = {
  input: UpdatePerspectiveInput,
  condition?: ModelPerspectiveConditionInput | null,
};

export type UpdatePerspectiveMutation = {
  updatePerspective?:  {
    __typename: "Perspective",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    description?: string | null,
    type: PerspectiveType,
    query: string,
    parameters?:  Array< {
      __typename: "PerspectiveParameter",
      key: string,
      name: string,
      type: PerspectiveParameterType,
      definition: string,
      value?: string | null,
    } > | null,
  } | null,
};

export type DeletePerspectiveMutationVariables = {
  input: DeletePerspectiveInput,
  condition?: ModelPerspectiveConditionInput | null,
};

export type DeletePerspectiveMutation = {
  deletePerspective?:  {
    __typename: "Perspective",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    description?: string | null,
    type: PerspectiveType,
    query: string,
    parameters?:  Array< {
      __typename: "PerspectiveParameter",
      key: string,
      name: string,
      type: PerspectiveParameterType,
      definition: string,
      value?: string | null,
    } > | null,
  } | null,
};

export type CreateSchemaMutationVariables = {
  input: CreateSchemaInput,
  condition?: ModelSchemaConditionInput | null,
};

export type CreateSchemaMutation = {
  createSchema?:  {
    __typename: "Schema",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      idSelector?: Array< string > | null,
      descriptionSelector?: Array< string > | null,
      avatarSelector?: string | null,
      avatarColor: string,
    } >,
    relationships:  Array< {
      __typename: "SchemaRelationship",
      id: string,
      startNodeID: string,
      endNodeID: string,
      type: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      descriptionSelector?: Array< string > | null,
    } >,
  } | null,
};

export type UpdateSchemaMutationVariables = {
  input: UpdateSchemaInput,
  condition?: ModelSchemaConditionInput | null,
};

export type UpdateSchemaMutation = {
  updateSchema?:  {
    __typename: "Schema",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      idSelector?: Array< string > | null,
      descriptionSelector?: Array< string > | null,
      avatarSelector?: string | null,
      avatarColor: string,
    } >,
    relationships:  Array< {
      __typename: "SchemaRelationship",
      id: string,
      startNodeID: string,
      endNodeID: string,
      type: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      descriptionSelector?: Array< string > | null,
    } >,
  } | null,
};

export type DeleteSchemaMutationVariables = {
  input: DeleteSchemaInput,
  condition?: ModelSchemaConditionInput | null,
};

export type DeleteSchemaMutation = {
  deleteSchema?:  {
    __typename: "Schema",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      idSelector?: Array< string > | null,
      descriptionSelector?: Array< string > | null,
      avatarSelector?: string | null,
      avatarColor: string,
    } >,
    relationships:  Array< {
      __typename: "SchemaRelationship",
      id: string,
      startNodeID: string,
      endNodeID: string,
      type: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: SchemaPropertyType,
      } > | null,
      descriptionSelector?: Array< string > | null,
    } >,
  } | null,
};

export type CreateTenantMutationVariables = {
  input: CreateTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type CreateTenantMutation = {
  createTenant?:  {
    __typename: "Tenant",
    id: string,
    tenantID: string,
    schemaID: string,
    graphID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
  } | null,
};

export type UpdateTenantMutationVariables = {
  input: UpdateTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type UpdateTenantMutation = {
  updateTenant?:  {
    __typename: "Tenant",
    id: string,
    tenantID: string,
    schemaID: string,
    graphID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
  } | null,
};

export type DeleteTenantMutationVariables = {
  input: DeleteTenantInput,
  condition?: ModelTenantConditionInput | null,
};

export type DeleteTenantMutation = {
  deleteTenant?:  {
    __typename: "Tenant",
    id: string,
    tenantID: string,
    schemaID: string,
    graphID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
  } | null,
};

export type CreateTransformationMutationVariables = {
  input: CreateTransformationInput,
  condition?: ModelTransformationConditionInput | null,
};

export type CreateTransformationMutation = {
  createTransformation?:  {
    __typename: "Transformation",
    id: string,
    tenantID: string,
    connectorID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
    schemaEntityID?: string | null,
    expression?: string | null,
  } | null,
};

export type UpdateTransformationMutationVariables = {
  input: UpdateTransformationInput,
  condition?: ModelTransformationConditionInput | null,
};

export type UpdateTransformationMutation = {
  updateTransformation?:  {
    __typename: "Transformation",
    id: string,
    tenantID: string,
    connectorID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
    schemaEntityID?: string | null,
    expression?: string | null,
  } | null,
};

export type DeleteTransformationMutationVariables = {
  input: DeleteTransformationInput,
  condition?: ModelTransformationConditionInput | null,
};

export type DeleteTransformationMutation = {
  deleteTransformation?:  {
    __typename: "Transformation",
    id: string,
    tenantID: string,
    connectorID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
    schemaEntityID?: string | null,
    expression?: string | null,
  } | null,
};

export type RunPerspectiveMutationVariables = {
  input: RunPerspectiveInput,
};

export type RunPerspectiveMutation = {
  runPerspective?:  {
    __typename: "RunPerspectiveResult",
    records: string,
  } | null,
};

export type AuthorizeConnectorMutationVariables = {
  input: AuthorizeConnectorInput,
};

export type AuthorizeConnectorMutation = {
  authorizeConnector?:  {
    __typename: "Connector",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    topics: Array< string >,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    stack?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
    graphID?: string | null,
  } | null,
};

export type RequestFileUploadMutationVariables = {
  input: RequestFileUploadInput,
  tenantID: string,
  graphID: string,
};

export type RequestFileUploadMutation = {
  requestFileUpload?:  {
    __typename: "RequestFileUploadResult",
    signedUploadUrl: string,
    objectKey: string,
    expiresIn: number,
  } | null,
};

export type RequestFileDownloadMutationVariables = {
  input: RequestFileDownloadInput,
  tenantID: string,
  graphID: string,
};

export type RequestFileDownloadMutation = {
  requestFileDownload?:  {
    __typename: "RequestFileDownloadResult",
    signedDownloadUrl: string,
    expiresIn: number,
  } | null,
};

export type RunConnectorMutationVariables = {
  input: RunConnectorInput,
};

export type RunConnectorMutation = {
  runConnector?: string | null,
};

export type InitTransformationsMutationVariables = {
  connectorID: string,
  tenantID: string,
  schemaID: string,
};

export type InitTransformationsMutation = {
  initTransformations?:  {
    __typename: "InitTransformationsResult",
    transformations: Array< string | null >,
  } | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
  graphID: string,
};

export type CreateNodeMutation = {
  createNode?:  {
    __typename: "GraphNode",
    identity: string,
    labels: Array< string >,
    properties: string,
  } | null,
};

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
  graphID: string,
};

export type UpdateNodeMutation = {
  updateNode?:  {
    __typename: "GraphNode",
    identity: string,
    labels: Array< string >,
    properties: string,
  } | null,
};

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
  graphID: string,
};

export type DeleteNodeMutation = {
  deleteNode?:  {
    __typename: "GraphResult",
    nodes:  Array< {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    } >,
    relationships:  Array< {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    } >,
  } | null,
};

export type CreateRelationshipMutationVariables = {
  input: CreateRelationshipInput,
  graphID: string,
};

export type CreateRelationshipMutation = {
  createRelationship?:  {
    __typename: "GraphRelationship",
    identity: string,
    type: string,
    start: string,
    end: string,
    properties: string,
  } | null,
};

export type UpdateRelationshipMutationVariables = {
  input: UpdateRelationshipInput,
  graphID: string,
};

export type UpdateRelationshipMutation = {
  updateRelationship?:  {
    __typename: "GraphRelationship",
    identity: string,
    type: string,
    start: string,
    end: string,
    properties: string,
  } | null,
};

export type DeleteRelationshipMutationVariables = {
  input: DeleteRelationshipInput,
  graphID: string,
};

export type DeleteRelationshipMutation = {
  deleteRelationship?:  {
    __typename: "GraphResult",
    nodes:  Array< {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    } >,
    relationships:  Array< {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    } >,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  tenantID: string,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "CognitoUser",
    username: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  tenantID: string,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "CognitoUser",
    username: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  tenantID: string,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "CognitoUser",
    username: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};
