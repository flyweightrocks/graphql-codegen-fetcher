/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Test = {
  __typename: "Test",
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  name: string,
  credentials?: string | null,
};

export type Connector = {
  __typename: "Connector",
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  descritpion?: string | null,
  resourceName: string,
  extractor?: string | null,
  topics?: Array< string > | null,
  service: ConnectorService,
  active?: boolean | null,
  status: ConnectorStatus,
  secretCredentials?: string | null,
  dataSource?: string | null,
  transformations?: ModelTransformationConnection | null,
};

export enum ConnectorService {
  AMAZON = "AMAZON",
  SHOPIFY = "SHOPIFY",
}


export enum ConnectorStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelTransformationConnection = {
  __typename: "ModelTransformationConnection",
  items:  Array<Transformation | null >,
  nextToken?: string | null,
};

export type Transformation = {
  __typename: "Transformation",
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  connectorID: string,
  topics: Array< string >,
  schemaEntity: string,
  graphEntityType: GraphEntityType,
  status: TransformationStatus,
  expression?: string | null,
  connector?: Connector | null,
};

export enum GraphEntityType {
  NODE = "NODE",
  RELATIONSHIP = "RELATIONSHIP",
}


export enum TransformationStatus {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
}


export type ModelConnectorFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  descritpion?: ModelStringInput | null,
  resourceName?: ModelStringInput | null,
  extractor?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  service?: ModelConnectorServiceInput | null,
  active?: ModelBooleanInput | null,
  status?: ModelConnectorStatusInput | null,
  secretCredentials?: ModelStringInput | null,
  dataSource?: ModelStringInput | null,
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


export type ModelTransformationFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  connectorID?: ModelIDInput | null,
  topics?: ModelStringInput | null,
  schemaEntity?: ModelStringInput | null,
  graphEntityType?: ModelGraphEntityTypeInput | null,
  status?: ModelTransformationStatusInput | null,
  expression?: ModelStringInput | null,
  and?: Array< ModelTransformationFilterInput | null > | null,
  or?: Array< ModelTransformationFilterInput | null > | null,
  not?: ModelTransformationFilterInput | null,
};

export type ModelGraphEntityTypeInput = {
  eq?: GraphEntityType | null,
  ne?: GraphEntityType | null,
};

export type ModelTransformationStatusInput = {
  eq?: TransformationStatus | null,
  ne?: TransformationStatus | null,
};

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
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  nodes?:  Array<SchemaNode > | null,
  relationships?:  Array<SchemaRelationship > | null,
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
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  and?: Array< ModelSchemaFilterInput | null > | null,
  or?: Array< ModelSchemaFilterInput | null > | null,
  not?: ModelSchemaFilterInput | null,
};

export type ModelSchemaConnection = {
  __typename: "ModelSchemaConnection",
  items:  Array<Schema | null >,
  nextToken?: string | null,
};

export type ModelTestFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  name?: ModelStringInput | null,
  credentials?: ModelStringInput | null,
  and?: Array< ModelTestFilterInput | null > | null,
  or?: Array< ModelTestFilterInput | null > | null,
  not?: ModelTestFilterInput | null,
};

export type ModelTestConnection = {
  __typename: "ModelTestConnection",
  items:  Array<Test | null >,
  nextToken?: string | null,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  adminGroup?: string | null,
  userGroup?: string | null,
  name: string,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  adminGroup?: ModelStringInput | null,
  userGroup?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type SearchGraphInput = {
  term: string,
  schemaID: string,
  labels?: Array< string > | null,
};

export type SearchGraphResult = {
  __typename: "SearchGraphResult",
  records?:  Array<SearchGraphRecord > | null,
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

export type GraphNodeRecord = {
  __typename: "GraphNodeRecord",
  node: GraphNode,
  relationships?:  Array<GraphNodeRelationship > | null,
};

export type GraphNodeRelationship = {
  __typename: "GraphNodeRelationship",
  node: GraphNode,
  relationship: GraphRelationship,
};

export type GraphRelationship = {
  __typename: "GraphRelationship",
  identity: string,
  type: string,
  start: string,
  end: string,
  properties: string,
};

export type GraphRelationshipRecord = {
  __typename: "GraphRelationshipRecord",
  start: GraphNode,
  end: GraphNode,
  relationship: GraphRelationship,
};

export type ListNodesInput = {
  identities: Array< string >,
  limit?: number | null,
};

export type GraphNodeRecords = {
  __typename: "GraphNodeRecords",
  records?:  Array<GraphNodeRecord > | null,
};

export type CognitoUser = {
  __typename: "CognitoUser",
  username: string,
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

export type ConnectorCredentials = {
  __typename: "ConnectorCredentials",
  id: string,
  plainCredentials?: string | null,
  secretCredentials?: string | null,
};

export type CreateConnectorInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  descritpion?: string | null,
  resourceName: string,
  extractor?: string | null,
  topics?: Array< string > | null,
  service: ConnectorService,
  active?: boolean | null,
  status: ConnectorStatus,
  secretCredentials?: string | null,
  dataSource?: string | null,
};

export type ModelConnectorConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  descritpion?: ModelStringInput | null,
  resourceName?: ModelStringInput | null,
  extractor?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  service?: ModelConnectorServiceInput | null,
  active?: ModelBooleanInput | null,
  status?: ModelConnectorStatusInput | null,
  secretCredentials?: ModelStringInput | null,
  dataSource?: ModelStringInput | null,
  and?: Array< ModelConnectorConditionInput | null > | null,
  or?: Array< ModelConnectorConditionInput | null > | null,
  not?: ModelConnectorConditionInput | null,
};

export type UpdateConnectorInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  descritpion?: string | null,
  resourceName?: string | null,
  extractor?: string | null,
  topics?: Array< string > | null,
  service?: ConnectorService | null,
  active?: boolean | null,
  status?: ConnectorStatus | null,
  secretCredentials?: string | null,
  dataSource?: string | null,
};

export type DeleteConnectorInput = {
  id: string,
};

export type CreateTransformationInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  connectorID: string,
  topics: Array< string >,
  schemaEntity: string,
  graphEntityType: GraphEntityType,
  status: TransformationStatus,
  expression?: string | null,
};

export type ModelTransformationConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  connectorID?: ModelIDInput | null,
  topics?: ModelStringInput | null,
  schemaEntity?: ModelStringInput | null,
  graphEntityType?: ModelGraphEntityTypeInput | null,
  status?: ModelTransformationStatusInput | null,
  expression?: ModelStringInput | null,
  and?: Array< ModelTransformationConditionInput | null > | null,
  or?: Array< ModelTransformationConditionInput | null > | null,
  not?: ModelTransformationConditionInput | null,
};

export type UpdateTransformationInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  connectorID?: string | null,
  topics?: Array< string > | null,
  schemaEntity?: string | null,
  graphEntityType?: GraphEntityType | null,
  status?: TransformationStatus | null,
  expression?: string | null,
};

export type DeleteTransformationInput = {
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
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  nodes?: Array< SchemaNodeInput > | null,
  relationships?: Array< SchemaRelationshipInput > | null,
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
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  and?: Array< ModelSchemaConditionInput | null > | null,
  or?: Array< ModelSchemaConditionInput | null > | null,
  not?: ModelSchemaConditionInput | null,
};

export type UpdateSchemaInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  nodes?: Array< SchemaNodeInput > | null,
  relationships?: Array< SchemaRelationshipInput > | null,
};

export type DeleteSchemaInput = {
  id: string,
};

export type CreateTestInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  name: string,
  credentials?: string | null,
};

export type ModelTestConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  name?: ModelStringInput | null,
  credentials?: ModelStringInput | null,
  and?: Array< ModelTestConditionInput | null > | null,
  or?: Array< ModelTestConditionInput | null > | null,
  not?: ModelTestConditionInput | null,
};

export type UpdateTestInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
  groups?: Array< string | null > | null,
  name?: string | null,
  credentials?: string | null,
};

export type DeleteTestInput = {
  id: string,
};

export type CreateOrganizationInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  adminGroup?: string | null,
  userGroup?: string | null,
  name: string,
};

export type ModelOrganizationConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  adminGroup?: ModelStringInput | null,
  userGroup?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  adminGroup?: string | null,
  userGroup?: string | null,
  name?: string | null,
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

export type RunConnectorInput = {
  id: string,
  topic: string,
  parameters?: Array< RunConnectorParameterInput > | null,
};

export type RunConnectorParameterInput = {
  key: string,
  value?: string | null,
};

export type CreateConnectorCredentialsInput = {
  id: string,
  plainCredentials: string,
};

export type UpdateConnectorCredentialsInput = {
  id: string,
  plainCredentials: string,
};

export type DeleteConnectorCredentialsInput = {
  id: string,
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

export type DeleteNodeRecord = {
  __typename: "DeleteNodeRecord",
  nodes?:  Array<GraphNode > | null,
  relationships?:  Array<GraphRelationship > | null,
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

export type DeleteRelationshipRecord = {
  __typename: "DeleteRelationshipRecord",
  relationships?:  Array<GraphRelationship > | null,
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

export type CustomTestQueryVariables = {
  id: string,
};

export type CustomTestQuery = {
  customTest?:  {
    __typename: "Test",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    credentials?: string | null,
  } | null,
};

export type GetConnectorQueryVariables = {
  id: string,
};

export type GetConnectorQuery = {
  getConnector?:  {
    __typename: "Connector",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    descritpion?: string | null,
    resourceName: string,
    extractor?: string | null,
    topics?: Array< string > | null,
    service: ConnectorService,
    active?: boolean | null,
    status: ConnectorStatus,
    secretCredentials?: string | null,
    dataSource?: string | null,
    transformations?:  {
      __typename: "ModelTransformationConnection",
      items:  Array< {
        __typename: "Transformation",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        connectorID: string,
        topics: Array< string >,
        schemaEntity: string,
        graphEntityType: GraphEntityType,
        status: TransformationStatus,
        expression?: string | null,
        connector?:  {
          __typename: "Connector",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          name: string,
          descritpion?: string | null,
          resourceName: string,
          extractor?: string | null,
          topics?: Array< string > | null,
          service: ConnectorService,
          active?: boolean | null,
          status: ConnectorStatus,
          secretCredentials?: string | null,
          dataSource?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      descritpion?: string | null,
      resourceName: string,
      extractor?: string | null,
      topics?: Array< string > | null,
      service: ConnectorService,
      active?: boolean | null,
      status: ConnectorStatus,
      secretCredentials?: string | null,
      dataSource?: string | null,
      transformations?:  {
        __typename: "ModelTransformationConnection",
        items:  Array< {
          __typename: "Transformation",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          connectorID: string,
          topics: Array< string >,
          schemaEntity: string,
          graphEntityType: GraphEntityType,
          status: TransformationStatus,
          expression?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      descritpion?: string | null,
      resourceName: string,
      extractor?: string | null,
      topics?: Array< string > | null,
      service: ConnectorService,
      active?: boolean | null,
      status: ConnectorStatus,
      secretCredentials?: string | null,
      dataSource?: string | null,
      transformations?:  {
        __typename: "ModelTransformationConnection",
        items:  Array< {
          __typename: "Transformation",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          connectorID: string,
          topics: Array< string >,
          schemaEntity: string,
          graphEntityType: GraphEntityType,
          status: TransformationStatus,
          expression?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    connectorID: string,
    topics: Array< string >,
    schemaEntity: string,
    graphEntityType: GraphEntityType,
    status: TransformationStatus,
    expression?: string | null,
    connector?:  {
      __typename: "Connector",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      descritpion?: string | null,
      resourceName: string,
      extractor?: string | null,
      topics?: Array< string > | null,
      service: ConnectorService,
      active?: boolean | null,
      status: ConnectorStatus,
      secretCredentials?: string | null,
      dataSource?: string | null,
      transformations?:  {
        __typename: "ModelTransformationConnection",
        items:  Array< {
          __typename: "Transformation",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          connectorID: string,
          topics: Array< string >,
          schemaEntity: string,
          graphEntityType: GraphEntityType,
          status: TransformationStatus,
          expression?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
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
      createdAt?: string | null,
      updatedAt?: string | null,
      connectorID: string,
      topics: Array< string >,
      schemaEntity: string,
      graphEntityType: GraphEntityType,
      status: TransformationStatus,
      expression?: string | null,
      connector?:  {
        __typename: "Connector",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        name: string,
        descritpion?: string | null,
        resourceName: string,
        extractor?: string | null,
        topics?: Array< string > | null,
        service: ConnectorService,
        active?: boolean | null,
        status: ConnectorStatus,
        secretCredentials?: string | null,
        dataSource?: string | null,
        transformations?:  {
          __typename: "ModelTransformationConnection",
          nextToken?: string | null,
        } | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransformationsByConnectorQueryVariables = {
  connectorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetTransformationsByConnectorQuery = {
  getTransformationsByConnector?:  {
    __typename: "ModelTransformationConnection",
    items:  Array< {
      __typename: "Transformation",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      connectorID: string,
      topics: Array< string >,
      schemaEntity: string,
      graphEntityType: GraphEntityType,
      status: TransformationStatus,
      expression?: string | null,
      connector?:  {
        __typename: "Connector",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        name: string,
        descritpion?: string | null,
        resourceName: string,
        extractor?: string | null,
        topics?: Array< string > | null,
        service: ConnectorService,
        active?: boolean | null,
        status: ConnectorStatus,
        secretCredentials?: string | null,
        dataSource?: string | null,
        transformations?:  {
          __typename: "ModelTransformationConnection",
          nextToken?: string | null,
        } | null,
      } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    nodes?:  Array< {
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
    } > | null,
    relationships?:  Array< {
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
    } > | null,
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
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
      groups?: Array< string | null > | null,
      nodes?:  Array< {
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
      } > | null,
      relationships?:  Array< {
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
      } > | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestQueryVariables = {
  id: string,
};

export type GetTestQuery = {
  getTest?:  {
    __typename: "Test",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    credentials?: string | null,
  } | null,
};

export type ListTestsQueryVariables = {
  filter?: ModelTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestsQuery = {
  listTests?:  {
    __typename: "ModelTestConnection",
    items:  Array< {
      __typename: "Test",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
      groups?: Array< string | null > | null,
      name: string,
      credentials?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    adminGroup?: string | null,
    userGroup?: string | null,
    name: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      adminGroup?: string | null,
      userGroup?: string | null,
      name: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchGraphQueryVariables = {
  input: SearchGraphInput,
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
  } | null,
};

export type GetNodeQueryVariables = {
  identity: string,
};

export type GetNodeQuery = {
  getNode?:  {
    __typename: "GraphNodeRecord",
    node:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    relationships?:  Array< {
      __typename: "GraphNodeRelationship",
      node:  {
        __typename: "GraphNode",
        identity: string,
        labels: Array< string >,
        properties: string,
      },
      relationship:  {
        __typename: "GraphRelationship",
        identity: string,
        type: string,
        start: string,
        end: string,
        properties: string,
      },
    } > | null,
  } | null,
};

export type GetRelationshipQueryVariables = {
  identity: string,
};

export type GetRelationshipQuery = {
  getRelationship?:  {
    __typename: "GraphRelationshipRecord",
    start:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    end:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    relationship:  {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    },
  } | null,
};

export type ListNodesQueryVariables = {
  input: ListNodesInput,
};

export type ListNodesQuery = {
  listNodes?:  {
    __typename: "GraphNodeRecords",
    records?:  Array< {
      __typename: "GraphNodeRecord",
      node:  {
        __typename: "GraphNode",
        identity: string,
        labels: Array< string >,
        properties: string,
      },
      relationships?:  Array< {
        __typename: "GraphNodeRelationship",
        node:  {
          __typename: "GraphNode",
          identity: string,
          labels: Array< string >,
          properties: string,
        },
        relationship:  {
          __typename: "GraphRelationship",
          identity: string,
          type: string,
          start: string,
          end: string,
          properties: string,
        },
      } > | null,
    } > | null,
  } | null,
};

export type GetUserQueryVariables = {
  username: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "CognitoUser",
    username: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type FindUsersQueryVariables = {
  input: FindUsersInput,
};

export type FindUsersQuery = {
  findUsers?:  {
    __typename: "CognitoUserList",
    items:  Array< {
      __typename: "CognitoUser",
      username: string,
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
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "CognitoUserList",
    items:  Array< {
      __typename: "CognitoUser",
      username: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      attributes: string,
      status?: UserStatus | null,
      enabled?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConnectorCredentialsQueryVariables = {
  id: string,
};

export type GetConnectorCredentialsQuery = {
  getConnectorCredentials?:  {
    __typename: "ConnectorCredentials",
    id: string,
    plainCredentials?: string | null,
    secretCredentials?: string | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    descritpion?: string | null,
    resourceName: string,
    extractor?: string | null,
    topics?: Array< string > | null,
    service: ConnectorService,
    active?: boolean | null,
    status: ConnectorStatus,
    secretCredentials?: string | null,
    dataSource?: string | null,
    transformations?:  {
      __typename: "ModelTransformationConnection",
      items:  Array< {
        __typename: "Transformation",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        connectorID: string,
        topics: Array< string >,
        schemaEntity: string,
        graphEntityType: GraphEntityType,
        status: TransformationStatus,
        expression?: string | null,
        connector?:  {
          __typename: "Connector",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          name: string,
          descritpion?: string | null,
          resourceName: string,
          extractor?: string | null,
          topics?: Array< string > | null,
          service: ConnectorService,
          active?: boolean | null,
          status: ConnectorStatus,
          secretCredentials?: string | null,
          dataSource?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    descritpion?: string | null,
    resourceName: string,
    extractor?: string | null,
    topics?: Array< string > | null,
    service: ConnectorService,
    active?: boolean | null,
    status: ConnectorStatus,
    secretCredentials?: string | null,
    dataSource?: string | null,
    transformations?:  {
      __typename: "ModelTransformationConnection",
      items:  Array< {
        __typename: "Transformation",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        connectorID: string,
        topics: Array< string >,
        schemaEntity: string,
        graphEntityType: GraphEntityType,
        status: TransformationStatus,
        expression?: string | null,
        connector?:  {
          __typename: "Connector",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          name: string,
          descritpion?: string | null,
          resourceName: string,
          extractor?: string | null,
          topics?: Array< string > | null,
          service: ConnectorService,
          active?: boolean | null,
          status: ConnectorStatus,
          secretCredentials?: string | null,
          dataSource?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    descritpion?: string | null,
    resourceName: string,
    extractor?: string | null,
    topics?: Array< string > | null,
    service: ConnectorService,
    active?: boolean | null,
    status: ConnectorStatus,
    secretCredentials?: string | null,
    dataSource?: string | null,
    transformations?:  {
      __typename: "ModelTransformationConnection",
      items:  Array< {
        __typename: "Transformation",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        connectorID: string,
        topics: Array< string >,
        schemaEntity: string,
        graphEntityType: GraphEntityType,
        status: TransformationStatus,
        expression?: string | null,
        connector?:  {
          __typename: "Connector",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          name: string,
          descritpion?: string | null,
          resourceName: string,
          extractor?: string | null,
          topics?: Array< string > | null,
          service: ConnectorService,
          active?: boolean | null,
          status: ConnectorStatus,
          secretCredentials?: string | null,
          dataSource?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    connectorID: string,
    topics: Array< string >,
    schemaEntity: string,
    graphEntityType: GraphEntityType,
    status: TransformationStatus,
    expression?: string | null,
    connector?:  {
      __typename: "Connector",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      descritpion?: string | null,
      resourceName: string,
      extractor?: string | null,
      topics?: Array< string > | null,
      service: ConnectorService,
      active?: boolean | null,
      status: ConnectorStatus,
      secretCredentials?: string | null,
      dataSource?: string | null,
      transformations?:  {
        __typename: "ModelTransformationConnection",
        items:  Array< {
          __typename: "Transformation",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          connectorID: string,
          topics: Array< string >,
          schemaEntity: string,
          graphEntityType: GraphEntityType,
          status: TransformationStatus,
          expression?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    connectorID: string,
    topics: Array< string >,
    schemaEntity: string,
    graphEntityType: GraphEntityType,
    status: TransformationStatus,
    expression?: string | null,
    connector?:  {
      __typename: "Connector",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      descritpion?: string | null,
      resourceName: string,
      extractor?: string | null,
      topics?: Array< string > | null,
      service: ConnectorService,
      active?: boolean | null,
      status: ConnectorStatus,
      secretCredentials?: string | null,
      dataSource?: string | null,
      transformations?:  {
        __typename: "ModelTransformationConnection",
        items:  Array< {
          __typename: "Transformation",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          connectorID: string,
          topics: Array< string >,
          schemaEntity: string,
          graphEntityType: GraphEntityType,
          status: TransformationStatus,
          expression?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    connectorID: string,
    topics: Array< string >,
    schemaEntity: string,
    graphEntityType: GraphEntityType,
    status: TransformationStatus,
    expression?: string | null,
    connector?:  {
      __typename: "Connector",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      descritpion?: string | null,
      resourceName: string,
      extractor?: string | null,
      topics?: Array< string > | null,
      service: ConnectorService,
      active?: boolean | null,
      status: ConnectorStatus,
      secretCredentials?: string | null,
      dataSource?: string | null,
      transformations?:  {
        __typename: "ModelTransformationConnection",
        items:  Array< {
          __typename: "Transformation",
          id: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          connectorID: string,
          topics: Array< string >,
          schemaEntity: string,
          graphEntityType: GraphEntityType,
          status: TransformationStatus,
          expression?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    nodes?:  Array< {
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
    } > | null,
    relationships?:  Array< {
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
    } > | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    nodes?:  Array< {
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
    } > | null,
    relationships?:  Array< {
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
    } > | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    nodes?:  Array< {
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
    } > | null,
    relationships?:  Array< {
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
    } > | null,
  } | null,
};

export type CreateTestMutationVariables = {
  input: CreateTestInput,
  condition?: ModelTestConditionInput | null,
};

export type CreateTestMutation = {
  createTest?:  {
    __typename: "Test",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    credentials?: string | null,
  } | null,
};

export type UpdateTestMutationVariables = {
  input: UpdateTestInput,
  condition?: ModelTestConditionInput | null,
};

export type UpdateTestMutation = {
  updateTest?:  {
    __typename: "Test",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    credentials?: string | null,
  } | null,
};

export type DeleteTestMutationVariables = {
  input: DeleteTestInput,
  condition?: ModelTestConditionInput | null,
};

export type DeleteTestMutation = {
  deleteTest?:  {
    __typename: "Test",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
    groups?: Array< string | null > | null,
    name: string,
    credentials?: string | null,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    adminGroup?: string | null,
    userGroup?: string | null,
    name: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    adminGroup?: string | null,
    userGroup?: string | null,
    name: string,
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

export type RunConnectorMutationVariables = {
  input: RunConnectorInput,
};

export type RunConnectorMutation = {
  runConnector?: string | null,
};

export type CreateConnectorCredentialsMutationVariables = {
  input: CreateConnectorCredentialsInput,
};

export type CreateConnectorCredentialsMutation = {
  createConnectorCredentials?:  {
    __typename: "ConnectorCredentials",
    id: string,
    plainCredentials?: string | null,
    secretCredentials?: string | null,
  } | null,
};

export type UpdateConnectorCredentialsMutationVariables = {
  input: UpdateConnectorCredentialsInput,
};

export type UpdateConnectorCredentialsMutation = {
  updateConnectorCredentials?:  {
    __typename: "ConnectorCredentials",
    id: string,
    plainCredentials?: string | null,
    secretCredentials?: string | null,
  } | null,
};

export type DeleteConnectorCredentialsMutationVariables = {
  input: DeleteConnectorCredentialsInput,
};

export type DeleteConnectorCredentialsMutation = {
  deleteConnectorCredentials?:  {
    __typename: "ConnectorCredentials",
    id: string,
    plainCredentials?: string | null,
    secretCredentials?: string | null,
  } | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
};

export type CreateNodeMutation = {
  createNode?:  {
    __typename: "GraphNodeRecord",
    node:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    relationships?:  Array< {
      __typename: "GraphNodeRelationship",
      node:  {
        __typename: "GraphNode",
        identity: string,
        labels: Array< string >,
        properties: string,
      },
      relationship:  {
        __typename: "GraphRelationship",
        identity: string,
        type: string,
        start: string,
        end: string,
        properties: string,
      },
    } > | null,
  } | null,
};

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
};

export type UpdateNodeMutation = {
  updateNode?:  {
    __typename: "GraphNodeRecord",
    node:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    relationships?:  Array< {
      __typename: "GraphNodeRelationship",
      node:  {
        __typename: "GraphNode",
        identity: string,
        labels: Array< string >,
        properties: string,
      },
      relationship:  {
        __typename: "GraphRelationship",
        identity: string,
        type: string,
        start: string,
        end: string,
        properties: string,
      },
    } > | null,
  } | null,
};

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
};

export type DeleteNodeMutation = {
  deleteNode?:  {
    __typename: "DeleteNodeRecord",
    nodes?:  Array< {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    } > | null,
    relationships?:  Array< {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    } > | null,
  } | null,
};

export type CreateRelationshipMutationVariables = {
  input: CreateRelationshipInput,
};

export type CreateRelationshipMutation = {
  createRelationship?:  {
    __typename: "GraphRelationshipRecord",
    start:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    end:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    relationship:  {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    },
  } | null,
};

export type UpdateRelationshipMutationVariables = {
  input: UpdateRelationshipInput,
};

export type UpdateRelationshipMutation = {
  updateRelationship?:  {
    __typename: "GraphRelationshipRecord",
    start:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    end:  {
      __typename: "GraphNode",
      identity: string,
      labels: Array< string >,
      properties: string,
    },
    relationship:  {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    },
  } | null,
};

export type DeleteRelationshipMutationVariables = {
  input: DeleteRelationshipInput,
};

export type DeleteRelationshipMutation = {
  deleteRelationship?:  {
    __typename: "DeleteRelationshipRecord",
    relationships?:  Array< {
      __typename: "GraphRelationship",
      identity: string,
      type: string,
      start: string,
      end: string,
      properties: string,
    } > | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "CognitoUser",
    username: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "CognitoUser",
    username: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "CognitoUser",
    username: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};
