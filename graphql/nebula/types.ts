/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type QueryCache = {
  __typename: "QueryCache",
  queryHash: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  reference: string,
  queryKey: string,
  data?: string | null,
  error?: string | null,
  ttl?: number | null,
};

export type ModelStringKeyConditionInput = {
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


export type ModelQueryCacheFilterInput = {
  queryHash?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  queryKey?: ModelStringInput | null,
  data?: ModelStringInput | null,
  error?: ModelStringInput | null,
  ttl?: ModelIntInput | null,
  and?: Array< ModelQueryCacheFilterInput | null > | null,
  or?: Array< ModelQueryCacheFilterInput | null > | null,
  not?: ModelQueryCacheFilterInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelQueryCacheConnection = {
  __typename: "ModelQueryCacheConnection",
  items:  Array<QueryCache | null >,
  nextToken?: string | null,
};

export type Connector = {
  __typename: "Connector",
  id: string,
  tenantID: string,
  schemaID: string,
  graphID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  description?: string | null,
  service: ConnectorService,
  active?: boolean | null,
  status?: ConnectorStatus | null,
  dataSource?: string | null,
  secretCredentials?: string | null,
  extractor?: string | null,
};

export enum ConnectorService {
  AMAZON = "AMAZON",
  SHOPIFY = "SHOPIFY",
}


export enum ConnectorStatus {
  AuthorizationGranted = "AuthorizationGranted",
  AuthorizationRevoked = "AuthorizationRevoked",
  AuthorizationFailed = "AuthorizationFailed",
  AuthorizationMissing = "AuthorizationMissing",
}


export type ModelConnectorFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  schemaID?: ModelIDInput | null,
  graphID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  service?: ModelConnectorServiceInput | null,
  active?: ModelBooleanInput | null,
  status?: ModelConnectorStatusInput | null,
  dataSource?: ModelStringInput | null,
  secretCredentials?: ModelStringInput | null,
  extractor?: ModelStringInput | null,
  and?: Array< ModelConnectorFilterInput | null > | null,
  or?: Array< ModelConnectorFilterInput | null > | null,
  not?: ModelConnectorFilterInput | null,
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

export type Event = {
  __typename: "Event",
  id: string,
  tenantID: string,
  pubType: PubSubType,
  pubID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  refType: RefType,
  refID: string,
  eventType: EventType,
  eventBody?: string | null,
  eventStatus?: EventStatus | null,
  ttl?: number | null,
};

export enum PubSubType {
  User = "User",
  Group = "Group",
  ExternalSystem = "ExternalSystem",
  Connector = "Connector",
}


export enum RefType {
  Node = "Node",
  Relationship = "Relationship",
  Perspective = "Perspective",
  Connector = "Connector",
}


export enum EventType {
  Comment = "Comment",
  Reaction = "Reaction",
  FileUpload = "FileUpload",
  EtlExecution = "EtlExecution",
}


export enum EventStatus {
  Started = "Started",
  Succeeded = "Succeeded",
  Failed = "Failed",
}


export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  pubType?: ModelPubSubTypeInput | null,
  pubID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  refType?: ModelRefTypeInput | null,
  refID?: ModelIDInput | null,
  eventType?: ModelEventTypeInput | null,
  eventBody?: ModelStringInput | null,
  eventStatus?: ModelEventStatusInput | null,
  ttl?: ModelIntInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelPubSubTypeInput = {
  eq?: PubSubType | null,
  ne?: PubSubType | null,
};

export type ModelRefTypeInput = {
  eq?: RefType | null,
  ne?: RefType | null,
};

export type ModelEventTypeInput = {
  eq?: EventType | null,
  ne?: EventType | null,
};

export type ModelEventStatusInput = {
  eq?: EventStatus | null,
  ne?: EventStatus | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelEventByPubCompositeKeyConditionInput = {
  eq?: ModelEventByPubCompositeKeyInput | null,
  le?: ModelEventByPubCompositeKeyInput | null,
  lt?: ModelEventByPubCompositeKeyInput | null,
  ge?: ModelEventByPubCompositeKeyInput | null,
  gt?: ModelEventByPubCompositeKeyInput | null,
  between?: Array< ModelEventByPubCompositeKeyInput | null > | null,
  beginsWith?: ModelEventByPubCompositeKeyInput | null,
};

export type ModelEventByPubCompositeKeyInput = {
  pubType?: PubSubType | null,
  updatedAt?: string | null,
};

export type ModelEventByRefCompositeKeyConditionInput = {
  eq?: ModelEventByRefCompositeKeyInput | null,
  le?: ModelEventByRefCompositeKeyInput | null,
  lt?: ModelEventByRefCompositeKeyInput | null,
  ge?: ModelEventByRefCompositeKeyInput | null,
  gt?: ModelEventByRefCompositeKeyInput | null,
  between?: Array< ModelEventByRefCompositeKeyInput | null > | null,
  beginsWith?: ModelEventByRefCompositeKeyInput | null,
};

export type ModelEventByRefCompositeKeyInput = {
  refType?: RefType | null,
  updatedAt?: string | null,
};

export type EventSubscriber = {
  __typename: "EventSubscriber",
  id: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  subType: PubSubType,
  subID: string,
  refType: RefType,
  refID: string,
};

export type ModelEventSubscriberFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  subType?: ModelPubSubTypeInput | null,
  subID?: ModelIDInput | null,
  refType?: ModelRefTypeInput | null,
  refID?: ModelIDInput | null,
  and?: Array< ModelEventSubscriberFilterInput | null > | null,
  or?: Array< ModelEventSubscriberFilterInput | null > | null,
  not?: ModelEventSubscriberFilterInput | null,
};

export type ModelEventSubscriberConnection = {
  __typename: "ModelEventSubscriberConnection",
  items:  Array<EventSubscriber | null >,
  nextToken?: string | null,
};

export type ModelEventSubscriberBySubCompositeKeyConditionInput = {
  eq?: ModelEventSubscriberBySubCompositeKeyInput | null,
  le?: ModelEventSubscriberBySubCompositeKeyInput | null,
  lt?: ModelEventSubscriberBySubCompositeKeyInput | null,
  ge?: ModelEventSubscriberBySubCompositeKeyInput | null,
  gt?: ModelEventSubscriberBySubCompositeKeyInput | null,
  between?: Array< ModelEventSubscriberBySubCompositeKeyInput | null > | null,
  beginsWith?: ModelEventSubscriberBySubCompositeKeyInput | null,
};

export type ModelEventSubscriberBySubCompositeKeyInput = {
  subType?: PubSubType | null,
  updatedAt?: string | null,
};

export type ModelEventSubscriberByRefCompositeKeyConditionInput = {
  eq?: ModelEventSubscriberByRefCompositeKeyInput | null,
  le?: ModelEventSubscriberByRefCompositeKeyInput | null,
  lt?: ModelEventSubscriberByRefCompositeKeyInput | null,
  ge?: ModelEventSubscriberByRefCompositeKeyInput | null,
  gt?: ModelEventSubscriberByRefCompositeKeyInput | null,
  between?: Array< ModelEventSubscriberByRefCompositeKeyInput | null > | null,
  beginsWith?: ModelEventSubscriberByRefCompositeKeyInput | null,
};

export type ModelEventSubscriberByRefCompositeKeyInput = {
  refType?: RefType | null,
  updatedAt?: string | null,
};

export type EventNotification = {
  __typename: "EventNotification",
  id: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  subType: PubSubType,
  subID: string,
  refType: RefType,
  refID: string,
  notificationBody?: string | null,
  isRead?: boolean | null,
};

export type ModelEventNotificationFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  subType?: ModelPubSubTypeInput | null,
  subID?: ModelIDInput | null,
  refType?: ModelRefTypeInput | null,
  refID?: ModelIDInput | null,
  notificationBody?: ModelStringInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelEventNotificationFilterInput | null > | null,
  or?: Array< ModelEventNotificationFilterInput | null > | null,
  not?: ModelEventNotificationFilterInput | null,
};

export type ModelEventNotificationConnection = {
  __typename: "ModelEventNotificationConnection",
  items:  Array<EventNotification | null >,
  nextToken?: string | null,
};

export type ModelEventNotificationBySubCompositeKeyConditionInput = {
  eq?: ModelEventNotificationBySubCompositeKeyInput | null,
  le?: ModelEventNotificationBySubCompositeKeyInput | null,
  lt?: ModelEventNotificationBySubCompositeKeyInput | null,
  ge?: ModelEventNotificationBySubCompositeKeyInput | null,
  gt?: ModelEventNotificationBySubCompositeKeyInput | null,
  between?: Array< ModelEventNotificationBySubCompositeKeyInput | null > | null,
  beginsWith?: ModelEventNotificationBySubCompositeKeyInput | null,
};

export type ModelEventNotificationBySubCompositeKeyInput = {
  subType?: PubSubType | null,
  updatedAt?: string | null,
};

export type ModelEventNotificationByRefCompositeKeyConditionInput = {
  eq?: ModelEventNotificationByRefCompositeKeyInput | null,
  le?: ModelEventNotificationByRefCompositeKeyInput | null,
  lt?: ModelEventNotificationByRefCompositeKeyInput | null,
  ge?: ModelEventNotificationByRefCompositeKeyInput | null,
  gt?: ModelEventNotificationByRefCompositeKeyInput | null,
  between?: Array< ModelEventNotificationByRefCompositeKeyInput | null > | null,
  beginsWith?: ModelEventNotificationByRefCompositeKeyInput | null,
};

export type ModelEventNotificationByRefCompositeKeyInput = {
  refType?: RefType | null,
  updatedAt?: string | null,
};

export type Perspective = {
  __typename: "Perspective",
  id: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  description?: string | null,
  query: PerspectiveQuery,
  type: PerspectiveType,
  inputs?:  Array<PerspectiveInputDimension > | null,
  outputs?:  Array<PerspectiveOutputDimension > | null,
  cacheTime?: number | null,
};

export type PerspectiveQuery = {
  __typename: "PerspectiveQuery",
  type: QueryType,
  body: string,
};

export enum QueryType {
  CYPHER = "CYPHER",
  GRAPHQL = "GRAPHQL",
}


export enum PerspectiveType {
  GRAPH = "GRAPH",
  TABLE = "TABLE",
  CHART = "CHART",
  METRIC = "METRIC",
}


export type PerspectiveInputDimension = {
  __typename: "PerspectiveInputDimension",
  id: string,
  key: string,
  name: string,
  description?: string | null,
  type: PrimitiveType,
  default?: string | null,
};

export enum PrimitiveType {
  STRING = "STRING",
  NUMBER = "NUMBER",
  FLOAT = "FLOAT",
  DATE = "DATE",
  DATETIME = "DATETIME",
  TIME = "TIME",
  BOOLEAN = "BOOLEAN",
  UNDEFINED = "UNDEFINED",
}


export type PerspectiveOutputDimension = {
  __typename: "PerspectiveOutputDimension",
  id: string,
  key: string,
  name: string,
  description?: string | null,
  type: PrimitiveType,
};

export type ModelPerspectiveFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelPerspectiveTypeInput | null,
  cacheTime?: ModelIntInput | null,
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
  name: string,
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
  type: PrimitiveType,
  semanticType?: SemanticType | null,
};

export enum SemanticType {
  URL = "URL",
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  COUNTRY = "COUNTRY",
  LANGUAGE = "LANGUAGE",
  CURRENCY = "CURRENCY",
  IBAN = "IBAN",
  BIC = "BIC",
  PAN = "PAN",
  POINT = "POINT",
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
  name?: ModelStringInput | null,
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
  language?: TenantLanguage | null,
  region?: TenantRegion | null,
  timezone?: string | null,
};

export enum TenantLanguage {
  DE = "DE",
  EN = "EN",
  FR = "FR",
}


export enum TenantRegion {
  DE = "DE",
  AT = "AT",
}


export type ModelTenantFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  schemaID?: ModelIDInput | null,
  graphID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  language?: ModelTenantLanguageInput | null,
  region?: ModelTenantRegionInput | null,
  timezone?: ModelStringInput | null,
  and?: Array< ModelTenantFilterInput | null > | null,
  or?: Array< ModelTenantFilterInput | null > | null,
  not?: ModelTenantFilterInput | null,
};

export type ModelTenantLanguageInput = {
  eq?: TenantLanguage | null,
  ne?: TenantLanguage | null,
};

export type ModelTenantRegionInput = {
  eq?: TenantRegion | null,
  ne?: TenantRegion | null,
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
  schemaEntityID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  topics: Array< string >,
  active?: boolean | null,
  expression?: string | null,
};

export type ModelTransformationFilterInput = {
  id?: ModelIDInput | null,
  tenantID?: ModelIDInput | null,
  connectorID?: ModelIDInput | null,
  schemaEntityID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
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
  term?: string | null,
  labels?: Array< string > | null,
  limit?: number | null,
  offset?: number | null,
  graphID: string,
  schemaID: string,
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
  relationshipFilter?: string | null,
  labelFilter?: string | null,
  minLevel?: number | null,
  maxLevel?: number | null,
  graphID: string,
};

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

export type GetNodeInput = {
  identity: string,
  graphID: string,
};

export type GetRelationshipInput = {
  identity: string,
  graphID: string,
};

export type GetUserInput = {
  id: string,
  tenantID: string,
};

export type CognitoUser = {
  __typename: "CognitoUser",
  id: string,
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


export type ListUsersInput = {
  tenantID: string,
  nextToken?: string | null,
};

export type CognitoUserList = {
  __typename: "CognitoUserList",
  items:  Array<CognitoUser | null >,
};

export type CreateQueryCacheInput = {
  queryHash: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  reference: string,
  queryKey: string,
  data?: string | null,
  error?: string | null,
  ttl?: number | null,
};

export type ModelQueryCacheConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  queryKey?: ModelStringInput | null,
  data?: ModelStringInput | null,
  error?: ModelStringInput | null,
  ttl?: ModelIntInput | null,
  and?: Array< ModelQueryCacheConditionInput | null > | null,
  or?: Array< ModelQueryCacheConditionInput | null > | null,
  not?: ModelQueryCacheConditionInput | null,
};

export type UpdateQueryCacheInput = {
  queryHash: string,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  reference?: string | null,
  queryKey?: string | null,
  data?: string | null,
  error?: string | null,
  ttl?: number | null,
};

export type DeleteQueryCacheInput = {
  queryHash: string,
  tenantID: string,
};

export type CreateConnectorInput = {
  id?: string | null,
  tenantID: string,
  schemaID: string,
  graphID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  description?: string | null,
  service: ConnectorService,
  active?: boolean | null,
  status?: ConnectorStatus | null,
  dataSource?: string | null,
  secretCredentials?: string | null,
  extractor?: string | null,
};

export type ModelConnectorConditionInput = {
  tenantID?: ModelIDInput | null,
  schemaID?: ModelIDInput | null,
  graphID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  service?: ModelConnectorServiceInput | null,
  active?: ModelBooleanInput | null,
  status?: ModelConnectorStatusInput | null,
  dataSource?: ModelStringInput | null,
  secretCredentials?: ModelStringInput | null,
  extractor?: ModelStringInput | null,
  and?: Array< ModelConnectorConditionInput | null > | null,
  or?: Array< ModelConnectorConditionInput | null > | null,
  not?: ModelConnectorConditionInput | null,
};

export type UpdateConnectorInput = {
  id: string,
  tenantID?: string | null,
  schemaID?: string | null,
  graphID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  description?: string | null,
  service?: ConnectorService | null,
  active?: boolean | null,
  status?: ConnectorStatus | null,
  dataSource?: string | null,
  secretCredentials?: string | null,
  extractor?: string | null,
};

export type DeleteConnectorInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  tenantID: string,
  pubType: PubSubType,
  pubID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  refType: RefType,
  refID: string,
  eventType: EventType,
  eventBody?: string | null,
  eventStatus?: EventStatus | null,
  ttl?: number | null,
};

export type ModelEventConditionInput = {
  tenantID?: ModelIDInput | null,
  pubType?: ModelPubSubTypeInput | null,
  pubID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  refType?: ModelRefTypeInput | null,
  refID?: ModelIDInput | null,
  eventType?: ModelEventTypeInput | null,
  eventBody?: ModelStringInput | null,
  eventStatus?: ModelEventStatusInput | null,
  ttl?: ModelIntInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateEventSubscriberInput = {
  id?: string | null,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  subType: PubSubType,
  subID: string,
  refType: RefType,
  refID: string,
};

export type ModelEventSubscriberConditionInput = {
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  subType?: ModelPubSubTypeInput | null,
  subID?: ModelIDInput | null,
  refType?: ModelRefTypeInput | null,
  refID?: ModelIDInput | null,
  and?: Array< ModelEventSubscriberConditionInput | null > | null,
  or?: Array< ModelEventSubscriberConditionInput | null > | null,
  not?: ModelEventSubscriberConditionInput | null,
};

export type DeleteEventSubscriberInput = {
  id: string,
};

export type CreateEventNotificationInput = {
  id?: string | null,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  subType: PubSubType,
  subID: string,
  refType: RefType,
  refID: string,
  notificationBody?: string | null,
  isRead?: boolean | null,
};

export type ModelEventNotificationConditionInput = {
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  subType?: ModelPubSubTypeInput | null,
  subID?: ModelIDInput | null,
  refType?: ModelRefTypeInput | null,
  refID?: ModelIDInput | null,
  notificationBody?: ModelStringInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelEventNotificationConditionInput | null > | null,
  or?: Array< ModelEventNotificationConditionInput | null > | null,
  not?: ModelEventNotificationConditionInput | null,
};

export type DeleteEventNotificationInput = {
  id: string,
};

export type CreatePerspectiveInput = {
  id?: string | null,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  description?: string | null,
  query: PerspectiveQueryInput,
  type: PerspectiveType,
  inputs?: Array< PerspectiveInputDimensionInput > | null,
  outputs?: Array< PerspectiveOutputDimensionInput > | null,
  cacheTime?: number | null,
};

export type PerspectiveQueryInput = {
  type: QueryType,
  body: string,
};

export type PerspectiveInputDimensionInput = {
  id?: string | null,
  key: string,
  name: string,
  description?: string | null,
  type: PrimitiveType,
  default?: string | null,
};

export type PerspectiveOutputDimensionInput = {
  id?: string | null,
  key: string,
  name: string,
  description?: string | null,
  type: PrimitiveType,
};

export type ModelPerspectiveConditionInput = {
  tenantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelPerspectiveTypeInput | null,
  cacheTime?: ModelIntInput | null,
  and?: Array< ModelPerspectiveConditionInput | null > | null,
  or?: Array< ModelPerspectiveConditionInput | null > | null,
  not?: ModelPerspectiveConditionInput | null,
};

export type UpdatePerspectiveInput = {
  id: string,
  tenantID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  description?: string | null,
  query?: PerspectiveQueryInput | null,
  type?: PerspectiveType | null,
  inputs?: Array< PerspectiveInputDimensionInput > | null,
  outputs?: Array< PerspectiveOutputDimensionInput > | null,
  cacheTime?: number | null,
};

export type DeletePerspectiveInput = {
  id: string,
};

export type CreateSchemaInput = {
  id?: string | null,
  tenantID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
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
  type: PrimitiveType,
  semanticType?: SemanticType | null,
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
  name?: ModelStringInput | null,
  and?: Array< ModelSchemaConditionInput | null > | null,
  or?: Array< ModelSchemaConditionInput | null > | null,
  not?: ModelSchemaConditionInput | null,
};

export type UpdateSchemaInput = {
  id: string,
  tenantID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
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
  language?: TenantLanguage | null,
  region?: TenantRegion | null,
  timezone?: string | null,
};

export type ModelTenantConditionInput = {
  tenantID?: ModelIDInput | null,
  schemaID?: ModelIDInput | null,
  graphID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  language?: ModelTenantLanguageInput | null,
  region?: ModelTenantRegionInput | null,
  timezone?: ModelStringInput | null,
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
  language?: TenantLanguage | null,
  region?: TenantRegion | null,
  timezone?: string | null,
};

export type DeleteTenantInput = {
  id: string,
};

export type CreateTransformationInput = {
  id?: string | null,
  tenantID: string,
  connectorID: string,
  schemaEntityID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name: string,
  topics: Array< string >,
  active?: boolean | null,
  expression?: string | null,
};

export type ModelTransformationConditionInput = {
  tenantID?: ModelIDInput | null,
  connectorID?: ModelIDInput | null,
  schemaEntityID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  expression?: ModelStringInput | null,
  and?: Array< ModelTransformationConditionInput | null > | null,
  or?: Array< ModelTransformationConditionInput | null > | null,
  not?: ModelTransformationConditionInput | null,
};

export type UpdateTransformationInput = {
  id: string,
  tenantID?: string | null,
  connectorID?: string | null,
  schemaEntityID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  name?: string | null,
  topics?: Array< string > | null,
  active?: boolean | null,
  expression?: string | null,
};

export type DeleteTransformationInput = {
  id: string,
};

export type ExecutePerspectiveInput = {
  id: string,
  graphID: string,
  values?: Array< ExecutePerspectiveValueInput > | null,
  limit?: number | null,
  offset?: number | null,
  refresh?: boolean | null,
};

export type ExecutePerspectiveValueInput = {
  id: string,
  value: string,
};

export type ExecutePerspectiveResult = {
  __typename: "ExecutePerspectiveResult",
  data?: Array< string > | null,
  updatedAt?: string | null,
};

export type AuthorizeConnectorInput = {
  id: string,
  dataSource: string,
  plainCredentials?: string | null,
};

export type ActivateConnectorInput = {
  id: string,
  active: boolean,
};

export type ActivateTransformationsInput = {
  ids: Array< string >,
  connectorID: string,
  active: boolean,
};

export type TransformationResult = {
  __typename: "TransformationResult",
  ids?: Array< string > | null,
  transformations?:  Array<Transformation > | null,
};

export type SetupTransformationsInput = {
  connectorID: string,
};

export type UploadGraphFileInput = {
  fileName: string,
  contentType: string,
  size: number,
  nodeID: string,
  objectKey?: string | null,
};

export type UploadGraphFileResult = {
  __typename: "UploadGraphFileResult",
  signedUploadUrl: string,
  objectKey: string,
  expiresIn: number,
};

export type DownloadGraphFileInput = {
  objectKey: string,
};

export type DownloadGraphFileResult = {
  __typename: "DownloadGraphFileResult",
  signedDownloadUrl: string,
  expiresIn: number,
};

export type DeleteGraphFileInput = {
  objectKey: string,
  nodeID: string,
};

export type DeleteGraphFileResult = {
  __typename: "DeleteGraphFileResult",
  objectKey: string,
  nodeID: string,
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

export type CreateNodeInput = {
  labels: Array< string >,
  properties: string,
  graphID: string,
};

export type UpdateNodeInput = {
  identity: string,
  properties: string,
  graphID: string,
};

export type DeleteNodeInput = {
  identities: Array< string >,
  graphID: string,
};

export type CreateRelationshipInput = {
  type: string,
  start: string,
  end: string,
  properties: string,
  graphID: string,
};

export type UpdateRelationshipInput = {
  identity: string,
  properties: string,
  graphID: string,
};

export type DeleteRelationshipInput = {
  identities: Array< string >,
  graphID: string,
};

export type FindUsersInput = {
  attribute: FindUserAttributes,
  value: string,
  exact?: boolean | null,
  tenantID: string,
};

export enum FindUserAttributes {
  email = "email",
  nickname = "nickname",
}


export type CreateUserInput = {
  email: string,
  tenantID: string,
};

export type InviteUserInput = {
  email: string,
  tenantID: string,
  resend?: boolean | null,
};

export type ActivateUserInput = {
  id: string,
  tenantID: string,
  active: boolean,
};

export type UpdateUserInput = {
  id: string,
  email: string,
  tenantID: string,
};

export type DeleteUserInput = {
  id: string,
  tenantID: string,
};

export type SetupTenantInput = {
  name: string,
};

export type SetupSchemaInput = {
  tenantID: string,
  name: string,
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

export type GetQueryByHashQueryVariables = {
  queryHash: string,
  tenantID: string,
};

export type GetQueryByHashQuery = {
  getQueryByHash?:  {
    __typename: "QueryCache",
    queryHash: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    reference: string,
    queryKey: string,
    data?: string | null,
    error?: string | null,
    ttl?: number | null,
  } | null,
};

export type ListQueriesByReferenceQueryVariables = {
  tenantID: string,
  reference?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQueryCacheFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQueriesByReferenceQuery = {
  listQueriesByReference?:  {
    __typename: "ModelQueryCacheConnection",
    items:  Array< {
      __typename: "QueryCache",
      queryHash: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      reference: string,
      queryKey: string,
      data?: string | null,
      error?: string | null,
      ttl?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConnectorQueryVariables = {
  id: string,
};

export type GetConnectorQuery = {
  getConnector?:  {
    __typename: "Connector",
    id: string,
    tenantID: string,
    schemaID: string,
    graphID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
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
      schemaID: string,
      graphID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      description?: string | null,
      service: ConnectorService,
      active?: boolean | null,
      status?: ConnectorStatus | null,
      dataSource?: string | null,
      secretCredentials?: string | null,
      extractor?: string | null,
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
      schemaID: string,
      graphID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      description?: string | null,
      service: ConnectorService,
      active?: boolean | null,
      status?: ConnectorStatus | null,
      dataSource?: string | null,
      secretCredentials?: string | null,
      extractor?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    tenantID: string,
    pubType: PubSubType,
    pubID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    refType: RefType,
    refID: string,
    eventType: EventType,
    eventBody?: string | null,
    eventStatus?: EventStatus | null,
    ttl?: number | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      tenantID: string,
      pubType: PubSubType,
      pubID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      refType: RefType,
      refID: string,
      eventType: EventType,
      eventBody?: string | null,
      eventStatus?: EventStatus | null,
      ttl?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEventsByPubQueryVariables = {
  pubID: string,
  pubTypeUpdatedAt?: ModelEventByPubCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsByPubQuery = {
  listEventsByPub?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      tenantID: string,
      pubType: PubSubType,
      pubID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      refType: RefType,
      refID: string,
      eventType: EventType,
      eventBody?: string | null,
      eventStatus?: EventStatus | null,
      ttl?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEventsByRefQueryVariables = {
  refID: string,
  refTypeUpdatedAt?: ModelEventByRefCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsByRefQuery = {
  listEventsByRef?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      tenantID: string,
      pubType: PubSubType,
      pubID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      refType: RefType,
      refID: string,
      eventType: EventType,
      eventBody?: string | null,
      eventStatus?: EventStatus | null,
      ttl?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventSubscriberQueryVariables = {
  id: string,
};

export type GetEventSubscriberQuery = {
  getEventSubscriber?:  {
    __typename: "EventSubscriber",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    subType: PubSubType,
    subID: string,
    refType: RefType,
    refID: string,
  } | null,
};

export type ListEventSubscribersQueryVariables = {
  filter?: ModelEventSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventSubscribersQuery = {
  listEventSubscribers?:  {
    __typename: "ModelEventSubscriberConnection",
    items:  Array< {
      __typename: "EventSubscriber",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      subType: PubSubType,
      subID: string,
      refType: RefType,
      refID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEventSubscribersBySubQueryVariables = {
  subID: string,
  subTypeUpdatedAt?: ModelEventSubscriberBySubCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventSubscribersBySubQuery = {
  listEventSubscribersBySub?:  {
    __typename: "ModelEventSubscriberConnection",
    items:  Array< {
      __typename: "EventSubscriber",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      subType: PubSubType,
      subID: string,
      refType: RefType,
      refID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEventSubscriberByRefQueryVariables = {
  refID: string,
  refTypeUpdatedAt?: ModelEventSubscriberByRefCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventSubscriberByRefQuery = {
  listEventSubscriberByRef?:  {
    __typename: "ModelEventSubscriberConnection",
    items:  Array< {
      __typename: "EventSubscriber",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      subType: PubSubType,
      subID: string,
      refType: RefType,
      refID: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventNotificationQueryVariables = {
  id: string,
};

export type GetEventNotificationQuery = {
  getEventNotification?:  {
    __typename: "EventNotification",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    subType: PubSubType,
    subID: string,
    refType: RefType,
    refID: string,
    notificationBody?: string | null,
    isRead?: boolean | null,
  } | null,
};

export type ListEventNotificationsQueryVariables = {
  filter?: ModelEventNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventNotificationsQuery = {
  listEventNotifications?:  {
    __typename: "ModelEventNotificationConnection",
    items:  Array< {
      __typename: "EventNotification",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      subType: PubSubType,
      subID: string,
      refType: RefType,
      refID: string,
      notificationBody?: string | null,
      isRead?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEventNotificationsBySubQueryVariables = {
  subID: string,
  subTypeUpdatedAt?: ModelEventNotificationBySubCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventNotificationsBySubQuery = {
  listEventNotificationsBySub?:  {
    __typename: "ModelEventNotificationConnection",
    items:  Array< {
      __typename: "EventNotification",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      subType: PubSubType,
      subID: string,
      refType: RefType,
      refID: string,
      notificationBody?: string | null,
      isRead?: boolean | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListEventNotificationsByRefQueryVariables = {
  refID: string,
  refTypeUpdatedAt?: ModelEventNotificationByRefCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventNotificationsByRefQuery = {
  listEventNotificationsByRef?:  {
    __typename: "ModelEventNotificationConnection",
    items:  Array< {
      __typename: "EventNotification",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      subType: PubSubType,
      subID: string,
      refType: RefType,
      refID: string,
      notificationBody?: string | null,
      isRead?: boolean | null,
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
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    query:  {
      __typename: "PerspectiveQuery",
      type: QueryType,
      body: string,
    },
    type: PerspectiveType,
    inputs?:  Array< {
      __typename: "PerspectiveInputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
      default?: string | null,
    } > | null,
    outputs?:  Array< {
      __typename: "PerspectiveOutputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
    } > | null,
    cacheTime?: number | null,
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
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      description?: string | null,
      query:  {
        __typename: "PerspectiveQuery",
        type: QueryType,
        body: string,
      },
      type: PerspectiveType,
      inputs?:  Array< {
        __typename: "PerspectiveInputDimension",
        id: string,
        key: string,
        name: string,
        description?: string | null,
        type: PrimitiveType,
        default?: string | null,
      } > | null,
      outputs?:  Array< {
        __typename: "PerspectiveOutputDimension",
        id: string,
        key: string,
        name: string,
        description?: string | null,
        type: PrimitiveType,
      } > | null,
      cacheTime?: number | null,
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
    name: string,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
      name: string,
      nodes:  Array< {
        __typename: "SchemaNode",
        id: string,
        label: string,
        properties?:  Array< {
          __typename: "SchemaProperty",
          key: string,
          name: string,
          type: PrimitiveType,
          semanticType?: SemanticType | null,
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
          type: PrimitiveType,
          semanticType?: SemanticType | null,
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
    language?: TenantLanguage | null,
    region?: TenantRegion | null,
    timezone?: string | null,
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
      language?: TenantLanguage | null,
      region?: TenantRegion | null,
      timezone?: string | null,
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
    schemaEntityID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
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
      schemaEntityID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      topics: Array< string >,
      active?: boolean | null,
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
      schemaEntityID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      topics: Array< string >,
      active?: boolean | null,
      expression?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTransformationsBySchemaEntityQueryVariables = {
  schemaEntityID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransformationsBySchemaEntityQuery = {
  listTransformationsBySchemaEntity?:  {
    __typename: "ModelTransformationConnection",
    items:  Array< {
      __typename: "Transformation",
      id: string,
      tenantID: string,
      connectorID: string,
      schemaEntityID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      topics: Array< string >,
      active?: boolean | null,
      expression?: string | null,
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
    nextOffset?: number | null,
  } | null,
};

export type ExpandGraphQueryVariables = {
  input: ExpandGraphInput,
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
  input: GetNodeInput,
};

export type GetNodeQuery = {
  getNode?:  {
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

export type GetRelationshipQueryVariables = {
  input: GetRelationshipInput,
};

export type GetRelationshipQuery = {
  getRelationship?:  {
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

export type GetUserQueryVariables = {
  input: GetUserInput,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "CognitoUser",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type ListUsersQueryVariables = {
  input: ListUsersInput,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "CognitoUserList",
    items:  Array< {
      __typename: "CognitoUser",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      attributes: string,
      status?: UserStatus | null,
      enabled?: boolean | null,
    } | null >,
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

export type CreateQueryCacheMutationVariables = {
  input: CreateQueryCacheInput,
  condition?: ModelQueryCacheConditionInput | null,
};

export type CreateQueryCacheMutation = {
  createQueryCache?:  {
    __typename: "QueryCache",
    queryHash: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    reference: string,
    queryKey: string,
    data?: string | null,
    error?: string | null,
    ttl?: number | null,
  } | null,
};

export type UpdateQueryCacheMutationVariables = {
  input: UpdateQueryCacheInput,
  condition?: ModelQueryCacheConditionInput | null,
};

export type UpdateQueryCacheMutation = {
  updateQueryCache?:  {
    __typename: "QueryCache",
    queryHash: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    reference: string,
    queryKey: string,
    data?: string | null,
    error?: string | null,
    ttl?: number | null,
  } | null,
};

export type DeleteQueryCacheMutationVariables = {
  input: DeleteQueryCacheInput,
  condition?: ModelQueryCacheConditionInput | null,
};

export type DeleteQueryCacheMutation = {
  deleteQueryCache?:  {
    __typename: "QueryCache",
    queryHash: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    reference: string,
    queryKey: string,
    data?: string | null,
    error?: string | null,
    ttl?: number | null,
  } | null,
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
    schemaID: string,
    graphID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
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
    schemaID: string,
    graphID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
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
    schemaID: string,
    graphID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    tenantID: string,
    pubType: PubSubType,
    pubID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    refType: RefType,
    refID: string,
    eventType: EventType,
    eventBody?: string | null,
    eventStatus?: EventStatus | null,
    ttl?: number | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    tenantID: string,
    pubType: PubSubType,
    pubID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    refType: RefType,
    refID: string,
    eventType: EventType,
    eventBody?: string | null,
    eventStatus?: EventStatus | null,
    ttl?: number | null,
  } | null,
};

export type CreateEventSubscriberMutationVariables = {
  input: CreateEventSubscriberInput,
  condition?: ModelEventSubscriberConditionInput | null,
};

export type CreateEventSubscriberMutation = {
  createEventSubscriber?:  {
    __typename: "EventSubscriber",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    subType: PubSubType,
    subID: string,
    refType: RefType,
    refID: string,
  } | null,
};

export type DeleteEventSubscriberMutationVariables = {
  input: DeleteEventSubscriberInput,
  condition?: ModelEventSubscriberConditionInput | null,
};

export type DeleteEventSubscriberMutation = {
  deleteEventSubscriber?:  {
    __typename: "EventSubscriber",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    subType: PubSubType,
    subID: string,
    refType: RefType,
    refID: string,
  } | null,
};

export type CreateEventNotificationMutationVariables = {
  input: CreateEventNotificationInput,
  condition?: ModelEventNotificationConditionInput | null,
};

export type CreateEventNotificationMutation = {
  createEventNotification?:  {
    __typename: "EventNotification",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    subType: PubSubType,
    subID: string,
    refType: RefType,
    refID: string,
    notificationBody?: string | null,
    isRead?: boolean | null,
  } | null,
};

export type DeleteEventNotificationMutationVariables = {
  input: DeleteEventNotificationInput,
  condition?: ModelEventNotificationConditionInput | null,
};

export type DeleteEventNotificationMutation = {
  deleteEventNotification?:  {
    __typename: "EventNotification",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    subType: PubSubType,
    subID: string,
    refType: RefType,
    refID: string,
    notificationBody?: string | null,
    isRead?: boolean | null,
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
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    query:  {
      __typename: "PerspectiveQuery",
      type: QueryType,
      body: string,
    },
    type: PerspectiveType,
    inputs?:  Array< {
      __typename: "PerspectiveInputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
      default?: string | null,
    } > | null,
    outputs?:  Array< {
      __typename: "PerspectiveOutputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
    } > | null,
    cacheTime?: number | null,
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
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    query:  {
      __typename: "PerspectiveQuery",
      type: QueryType,
      body: string,
    },
    type: PerspectiveType,
    inputs?:  Array< {
      __typename: "PerspectiveInputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
      default?: string | null,
    } > | null,
    outputs?:  Array< {
      __typename: "PerspectiveOutputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
    } > | null,
    cacheTime?: number | null,
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
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    query:  {
      __typename: "PerspectiveQuery",
      type: QueryType,
      body: string,
    },
    type: PerspectiveType,
    inputs?:  Array< {
      __typename: "PerspectiveInputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
      default?: string | null,
    } > | null,
    outputs?:  Array< {
      __typename: "PerspectiveOutputDimension",
      id: string,
      key: string,
      name: string,
      description?: string | null,
      type: PrimitiveType,
    } > | null,
    cacheTime?: number | null,
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
    name: string,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
    name: string,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
    name: string,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
    language?: TenantLanguage | null,
    region?: TenantRegion | null,
    timezone?: string | null,
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
    language?: TenantLanguage | null,
    region?: TenantRegion | null,
    timezone?: string | null,
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
    language?: TenantLanguage | null,
    region?: TenantRegion | null,
    timezone?: string | null,
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
    schemaEntityID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
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
    schemaEntityID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
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
    schemaEntityID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    topics: Array< string >,
    active?: boolean | null,
    expression?: string | null,
  } | null,
};

export type ExecutePerspectiveMutationVariables = {
  input: ExecutePerspectiveInput,
};

export type ExecutePerspectiveMutation = {
  executePerspective?:  {
    __typename: "ExecutePerspectiveResult",
    data?: Array< string > | null,
    updatedAt?: string | null,
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
    schemaID: string,
    graphID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
  } | null,
};

export type ActivateConnectorMutationVariables = {
  input: ActivateConnectorInput,
};

export type ActivateConnectorMutation = {
  activateConnector?:  {
    __typename: "Connector",
    id: string,
    tenantID: string,
    schemaID: string,
    graphID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    description?: string | null,
    service: ConnectorService,
    active?: boolean | null,
    status?: ConnectorStatus | null,
    dataSource?: string | null,
    secretCredentials?: string | null,
    extractor?: string | null,
  } | null,
};

export type ActivateTransformationsMutationVariables = {
  input: ActivateTransformationsInput,
};

export type ActivateTransformationsMutation = {
  activateTransformations?:  {
    __typename: "TransformationResult",
    ids?: Array< string > | null,
    transformations?:  Array< {
      __typename: "Transformation",
      id: string,
      tenantID: string,
      connectorID: string,
      schemaEntityID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      topics: Array< string >,
      active?: boolean | null,
      expression?: string | null,
    } > | null,
  } | null,
};

export type SetupTransformationsMutationVariables = {
  input: SetupTransformationsInput,
};

export type SetupTransformationsMutation = {
  setupTransformations?:  {
    __typename: "TransformationResult",
    ids?: Array< string > | null,
    transformations?:  Array< {
      __typename: "Transformation",
      id: string,
      tenantID: string,
      connectorID: string,
      schemaEntityID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      name: string,
      topics: Array< string >,
      active?: boolean | null,
      expression?: string | null,
    } > | null,
  } | null,
};

export type UploadGraphFileMutationVariables = {
  input: UploadGraphFileInput,
  tenantID: string,
  graphID: string,
};

export type UploadGraphFileMutation = {
  uploadGraphFile?:  {
    __typename: "UploadGraphFileResult",
    signedUploadUrl: string,
    objectKey: string,
    expiresIn: number,
  } | null,
};

export type DownloadGraphFileMutationVariables = {
  input: DownloadGraphFileInput,
  tenantID: string,
  graphID: string,
};

export type DownloadGraphFileMutation = {
  downloadGraphFile?:  {
    __typename: "DownloadGraphFileResult",
    signedDownloadUrl: string,
    expiresIn: number,
  } | null,
};

export type DeleteGraphFileMutationVariables = {
  input: DeleteGraphFileInput,
  tenantID: string,
  graphID: string,
};

export type DeleteGraphFileMutation = {
  deleteGraphFile?:  {
    __typename: "DeleteGraphFileResult",
    objectKey: string,
    nodeID: string,
  } | null,
};

export type RunConnectorMutationVariables = {
  input: RunConnectorInput,
};

export type RunConnectorMutation = {
  runConnector?: string | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
};

export type CreateNodeMutation = {
  createNode?:  {
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

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
};

export type UpdateNodeMutation = {
  updateNode?:  {
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

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
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
};

export type CreateRelationshipMutation = {
  createRelationship?:  {
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

export type UpdateRelationshipMutationVariables = {
  input: UpdateRelationshipInput,
};

export type UpdateRelationshipMutation = {
  updateRelationship?:  {
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

export type DeleteRelationshipMutationVariables = {
  input: DeleteRelationshipInput,
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

export type FindUsersMutationVariables = {
  input: FindUsersInput,
};

export type FindUsersMutation = {
  findUsers?:  {
    __typename: "CognitoUserList",
    items:  Array< {
      __typename: "CognitoUser",
      id: string,
      tenantID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      attributes: string,
      status?: UserStatus | null,
      enabled?: boolean | null,
    } | null >,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "CognitoUser",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type InviteUserMutationVariables = {
  input: InviteUserInput,
};

export type InviteUserMutation = {
  inviteUser?:  {
    __typename: "CognitoUser",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type ActivateUserMutationVariables = {
  input: ActivateUserInput,
};

export type ActivateUserMutation = {
  activateUser?:  {
    __typename: "CognitoUser",
    id: string,
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
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "CognitoUser",
    id: string,
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
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "CognitoUser",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    attributes: string,
    status?: UserStatus | null,
    enabled?: boolean | null,
  } | null,
};

export type SetupTenantMutationVariables = {
  input: SetupTenantInput,
};

export type SetupTenantMutation = {
  setupTenant?:  {
    __typename: "Tenant",
    id: string,
    tenantID: string,
    schemaID: string,
    graphID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    language?: TenantLanguage | null,
    region?: TenantRegion | null,
    timezone?: string | null,
  } | null,
};

export type SetupSchemaMutationVariables = {
  input: SetupSchemaInput,
};

export type SetupSchemaMutation = {
  setupSchema?:  {
    __typename: "Schema",
    id: string,
    tenantID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    name: string,
    nodes:  Array< {
      __typename: "SchemaNode",
      id: string,
      label: string,
      properties?:  Array< {
        __typename: "SchemaProperty",
        key: string,
        name: string,
        type: PrimitiveType,
        semanticType?: SemanticType | null,
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
        type: PrimitiveType,
        semanticType?: SemanticType | null,
      } > | null,
      descriptionSelector?: Array< string > | null,
    } >,
  } | null,
};
