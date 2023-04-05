import { fetcher } from '../graphql/nebula/fetcher';

export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
  AWSJSON: Record<string, any> | string;
  AWSTimestamp: any;
};

export type ActivateConnectorInput = {
  active: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type ActivateTransformationsInput = {
  active: Scalars['Boolean'];
  connectorID: Scalars['ID'];
  ids: Array<Scalars['ID']>;
};

export type ActivateUserInput = {
  active: Scalars['Boolean'];
  id: Scalars['ID'];
  tenantID: Scalars['ID'];
};

export type AuthorizeConnectorInput = {
  dataSource: Scalars['String'];
  id: Scalars['ID'];
  plainCredentials?: InputMaybe<Scalars['AWSJSON']>;
};

export type CognitoUser = {
  attributes: Scalars['AWSJSON'];
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  status?: Maybe<UserStatus>;
  tenantID: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type CognitoUserList = {
  items: Array<Maybe<CognitoUser>>;
};

export type Connector = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  dataSource?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extractor?: Maybe<Scalars['String']>;
  graphID?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  schemaID: Scalars['ID'];
  secretCredentials?: Maybe<Scalars['String']>;
  service: ConnectorService;
  status?: Maybe<ConnectorStatus>;
  tenantID: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export enum ConnectorService {
  Amazon = 'AMAZON',
  Shopify = 'SHOPIFY',
}

export enum ConnectorStatus {
  AuthorizationFailed = 'AuthorizationFailed',
  AuthorizationGranted = 'AuthorizationGranted',
  AuthorizationMissing = 'AuthorizationMissing',
  AuthorizationRevoked = 'AuthorizationRevoked',
}

export type CreateConnectorInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  dataSource?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extractor?: InputMaybe<Scalars['String']>;
  graphID?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  schemaID: Scalars['ID'];
  secretCredentials?: InputMaybe<Scalars['String']>;
  service: ConnectorService;
  status?: InputMaybe<ConnectorStatus>;
  tenantID: Scalars['ID'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateNodeInput = {
  graphID: Scalars['String'];
  labels: Array<Scalars['String']>;
  properties: Scalars['AWSJSON'];
};

export type CreatePerspectiveInput = {
  cacheTime?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inputs?: InputMaybe<Array<PerspectiveInputDimensionInput>>;
  name: Scalars['String'];
  outputs?: InputMaybe<Array<PerspectiveOutputDimensionInput>>;
  query: PerspectiveQueryInput;
  tenantID: Scalars['ID'];
  type: PerspectiveType;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateQueryCacheInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  data?: InputMaybe<Scalars['AWSJSON']>;
  error?: InputMaybe<Scalars['AWSJSON']>;
  id?: InputMaybe<Scalars['ID']>;
  key: Scalars['String'];
  refID: Scalars['ID'];
  refType: RefType;
  tenantID: Scalars['ID'];
  ttl?: InputMaybe<Scalars['AWSTimestamp']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateRelationshipInput = {
  end: Scalars['String'];
  graphID: Scalars['String'];
  properties: Scalars['AWSJSON'];
  start: Scalars['String'];
  type: Scalars['String'];
};

export type CreateSchemaInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  nodes: Array<SchemaNodeInput>;
  relationships: Array<SchemaRelationshipInput>;
  tenantID: Scalars['ID'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateTenantInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  graphID: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<TenantLanguage>;
  name: Scalars['String'];
  region?: InputMaybe<TenantRegion>;
  schemaID: Scalars['ID'];
  tenantID: Scalars['ID'];
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateTransformationInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  connectorID: Scalars['ID'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  expression?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  schemaEntityID?: InputMaybe<Scalars['ID']>;
  tenantID: Scalars['ID'];
  topics: Array<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  tenantID: Scalars['ID'];
};

export type DeleteConnectorInput = {
  id: Scalars['ID'];
};

export type DeleteGraphFileInput = {
  nodeID: Scalars['String'];
  objectKey: Scalars['String'];
};

export type DeleteGraphFileResult = {
  nodeID: Scalars['ID'];
  objectKey: Scalars['String'];
};

export type DeleteNodeInput = {
  graphID: Scalars['String'];
  identities: Array<Scalars['ID']>;
};

export type DeletePerspectiveInput = {
  id: Scalars['ID'];
};

export type DeleteQueryCacheInput = {
  id: Scalars['ID'];
  refID: Scalars['ID'];
  refType: RefType;
  tenantID: Scalars['ID'];
};

export type DeleteRelationshipInput = {
  graphID: Scalars['String'];
  identities: Array<Scalars['ID']>;
};

export type DeleteSchemaInput = {
  id: Scalars['ID'];
};

export type DeleteTenantInput = {
  id: Scalars['ID'];
};

export type DeleteTransformationInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  id: Scalars['ID'];
  tenantID: Scalars['ID'];
};

export type DownloadGraphFileInput = {
  objectKey: Scalars['String'];
};

export type DownloadGraphFileResult = {
  expiresIn: Scalars['Int'];
  signedDownloadUrl: Scalars['String'];
};

export type Event = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  eventBody?: Maybe<Scalars['String']>;
  eventStatus?: Maybe<EventStatus>;
  eventType: EventType;
  id: Scalars['ID'];
  pubID: Scalars['ID'];
  pubType: PubSubType;
  refID: Scalars['ID'];
  refType: RefType;
  tenantID: Scalars['ID'];
  ttl?: Maybe<Scalars['AWSTimestamp']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type EventNotification = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  isRead?: Maybe<Scalars['Boolean']>;
  notificationBody?: Maybe<Scalars['String']>;
  refID: Scalars['ID'];
  refType: RefType;
  subID: Scalars['ID'];
  subType: PubSubType;
  tenantID: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export enum EventStatus {
  Failed = 'Failed',
  Started = 'Started',
  Succeeded = 'Succeeded',
}

export type EventSubscriber = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  refID: Scalars['ID'];
  refType: RefType;
  subID: Scalars['ID'];
  subType: PubSubType;
  tenantID: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export enum EventType {
  Comment = 'Comment',
  EtlExecution = 'EtlExecution',
  FileUpload = 'FileUpload',
  Reaction = 'Reaction',
}

export type ExecutePerspectiveInput = {
  graphID: Scalars['ID'];
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  values?: InputMaybe<Array<ExecutePerspectiveValueInput>>;
};

export type ExecutePerspectiveResult = {
  data?: Maybe<Scalars['AWSJSON']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type ExecutePerspectiveValueInput = {
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type ExpandGraphInput = {
  graphID: Scalars['String'];
  identities: Array<Scalars['ID']>;
  labelFilter?: InputMaybe<Scalars['String']>;
  maxLevel?: InputMaybe<Scalars['Int']>;
  minLevel?: InputMaybe<Scalars['Int']>;
  relationshipFilter?: InputMaybe<Scalars['String']>;
};

export enum FindUserAttributes {
  Email = 'email',
  Nickname = 'nickname',
}

export type FindUsersInput = {
  attribute: FindUserAttributes;
  exact?: InputMaybe<Scalars['Boolean']>;
  tenantID: Scalars['String'];
  value: Scalars['String'];
};

export type GetNodeInput = {
  graphID: Scalars['String'];
  identity: Scalars['ID'];
};

export type GetRelationshipInput = {
  graphID: Scalars['String'];
  identity: Scalars['ID'];
};

export type GetUserInput = {
  id: Scalars['ID'];
  tenantID: Scalars['String'];
};

export type GraphFileProperties = {
  contentType: Scalars['String'];
  fileName: Scalars['String'];
  objectKey: Scalars['String'];
  size: Scalars['Int'];
};

export type GraphNode = {
  identity: Scalars['ID'];
  labels: Array<Scalars['String']>;
  properties: Scalars['AWSJSON'];
};

export type GraphRelationship = {
  end: Scalars['String'];
  identity: Scalars['ID'];
  properties: Scalars['AWSJSON'];
  start: Scalars['String'];
  type: Scalars['String'];
};

export type GraphResult = {
  nodes: Array<GraphNode>;
  relationships: Array<GraphRelationship>;
};

export type InviteUserInput = {
  email: Scalars['String'];
  resend?: InputMaybe<Scalars['Boolean']>;
  tenantID: Scalars['ID'];
};

export type ListUsersInput = {
  nextToken?: InputMaybe<Scalars['String']>;
  tenantID: Scalars['ID'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelConnectorConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelConnectorConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  dataSource?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  extractor?: InputMaybe<ModelStringInput>;
  graphID?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelConnectorConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelConnectorConditionInput>>>;
  schemaID?: InputMaybe<ModelIdInput>;
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
  status?: InputMaybe<ModelConnectorStatusInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelConnectorConnection = {
  items: Array<Maybe<Connector>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelConnectorFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelConnectorFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  dataSource?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  extractor?: InputMaybe<ModelStringInput>;
  graphID?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelConnectorFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelConnectorFilterInput>>>;
  schemaID?: InputMaybe<ModelIdInput>;
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
  status?: InputMaybe<ModelConnectorStatusInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelConnectorServiceInput = {
  eq?: InputMaybe<ConnectorService>;
  ne?: InputMaybe<ConnectorService>;
};

export type ModelConnectorStatusInput = {
  eq?: InputMaybe<ConnectorStatus>;
  ne?: InputMaybe<ConnectorStatus>;
};

export type ModelEventByPubCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelEventByPubCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelEventByPubCompositeKeyInput>>>;
  eq?: InputMaybe<ModelEventByPubCompositeKeyInput>;
  ge?: InputMaybe<ModelEventByPubCompositeKeyInput>;
  gt?: InputMaybe<ModelEventByPubCompositeKeyInput>;
  le?: InputMaybe<ModelEventByPubCompositeKeyInput>;
  lt?: InputMaybe<ModelEventByPubCompositeKeyInput>;
};

export type ModelEventByPubCompositeKeyInput = {
  pubType?: InputMaybe<PubSubType>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ModelEventByRefCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelEventByRefCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelEventByRefCompositeKeyInput>>>;
  eq?: InputMaybe<ModelEventByRefCompositeKeyInput>;
  ge?: InputMaybe<ModelEventByRefCompositeKeyInput>;
  gt?: InputMaybe<ModelEventByRefCompositeKeyInput>;
  le?: InputMaybe<ModelEventByRefCompositeKeyInput>;
  lt?: InputMaybe<ModelEventByRefCompositeKeyInput>;
};

export type ModelEventByRefCompositeKeyInput = {
  refType?: InputMaybe<RefType>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ModelEventConnection = {
  items: Array<Maybe<Event>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelEventFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelEventFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  eventBody?: InputMaybe<ModelStringInput>;
  eventStatus?: InputMaybe<ModelEventStatusInput>;
  eventType?: InputMaybe<ModelEventTypeInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelEventFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelEventFilterInput>>>;
  pubID?: InputMaybe<ModelIdInput>;
  pubType?: InputMaybe<ModelPubSubTypeInput>;
  refID?: InputMaybe<ModelIdInput>;
  refType?: InputMaybe<ModelRefTypeInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  ttl?: InputMaybe<ModelIntInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelEventNotificationByRefCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelEventNotificationByRefCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelEventNotificationByRefCompositeKeyInput>>>;
  eq?: InputMaybe<ModelEventNotificationByRefCompositeKeyInput>;
  ge?: InputMaybe<ModelEventNotificationByRefCompositeKeyInput>;
  gt?: InputMaybe<ModelEventNotificationByRefCompositeKeyInput>;
  le?: InputMaybe<ModelEventNotificationByRefCompositeKeyInput>;
  lt?: InputMaybe<ModelEventNotificationByRefCompositeKeyInput>;
};

export type ModelEventNotificationByRefCompositeKeyInput = {
  refType?: InputMaybe<RefType>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ModelEventNotificationBySubCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelEventNotificationBySubCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelEventNotificationBySubCompositeKeyInput>>>;
  eq?: InputMaybe<ModelEventNotificationBySubCompositeKeyInput>;
  ge?: InputMaybe<ModelEventNotificationBySubCompositeKeyInput>;
  gt?: InputMaybe<ModelEventNotificationBySubCompositeKeyInput>;
  le?: InputMaybe<ModelEventNotificationBySubCompositeKeyInput>;
  lt?: InputMaybe<ModelEventNotificationBySubCompositeKeyInput>;
};

export type ModelEventNotificationBySubCompositeKeyInput = {
  subType?: InputMaybe<PubSubType>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ModelEventNotificationConnection = {
  items: Array<Maybe<EventNotification>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelEventNotificationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelEventNotificationFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isRead?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelEventNotificationFilterInput>;
  notificationBody?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelEventNotificationFilterInput>>>;
  refID?: InputMaybe<ModelIdInput>;
  refType?: InputMaybe<ModelRefTypeInput>;
  subID?: InputMaybe<ModelIdInput>;
  subType?: InputMaybe<ModelPubSubTypeInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelEventStatusInput = {
  eq?: InputMaybe<EventStatus>;
  ne?: InputMaybe<EventStatus>;
};

export type ModelEventSubscriberByRefCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelEventSubscriberByRefCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelEventSubscriberByRefCompositeKeyInput>>>;
  eq?: InputMaybe<ModelEventSubscriberByRefCompositeKeyInput>;
  ge?: InputMaybe<ModelEventSubscriberByRefCompositeKeyInput>;
  gt?: InputMaybe<ModelEventSubscriberByRefCompositeKeyInput>;
  le?: InputMaybe<ModelEventSubscriberByRefCompositeKeyInput>;
  lt?: InputMaybe<ModelEventSubscriberByRefCompositeKeyInput>;
};

export type ModelEventSubscriberByRefCompositeKeyInput = {
  refType?: InputMaybe<RefType>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ModelEventSubscriberBySubCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelEventSubscriberBySubCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelEventSubscriberBySubCompositeKeyInput>>>;
  eq?: InputMaybe<ModelEventSubscriberBySubCompositeKeyInput>;
  ge?: InputMaybe<ModelEventSubscriberBySubCompositeKeyInput>;
  gt?: InputMaybe<ModelEventSubscriberBySubCompositeKeyInput>;
  le?: InputMaybe<ModelEventSubscriberBySubCompositeKeyInput>;
  lt?: InputMaybe<ModelEventSubscriberBySubCompositeKeyInput>;
};

export type ModelEventSubscriberBySubCompositeKeyInput = {
  subType?: InputMaybe<PubSubType>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ModelEventSubscriberConnection = {
  items: Array<Maybe<EventSubscriber>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelEventSubscriberFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelEventSubscriberFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelEventSubscriberFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelEventSubscriberFilterInput>>>;
  refID?: InputMaybe<ModelIdInput>;
  refType?: InputMaybe<ModelRefTypeInput>;
  subID?: InputMaybe<ModelIdInput>;
  subType?: InputMaybe<ModelPubSubTypeInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelEventTypeInput = {
  eq?: InputMaybe<EventType>;
  ne?: InputMaybe<EventType>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIdKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelPerspectiveConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPerspectiveConditionInput>>>;
  cacheTime?: InputMaybe<ModelIntInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelPerspectiveConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPerspectiveConditionInput>>>;
  tenantID?: InputMaybe<ModelIdInput>;
  type?: InputMaybe<ModelPerspectiveTypeInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelPerspectiveConnection = {
  items: Array<Maybe<Perspective>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelPerspectiveFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPerspectiveFilterInput>>>;
  cacheTime?: InputMaybe<ModelIntInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelPerspectiveFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPerspectiveFilterInput>>>;
  tenantID?: InputMaybe<ModelIdInput>;
  type?: InputMaybe<ModelPerspectiveTypeInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelPerspectiveTypeInput = {
  eq?: InputMaybe<PerspectiveType>;
  ne?: InputMaybe<PerspectiveType>;
};

export type ModelPubSubTypeInput = {
  eq?: InputMaybe<PubSubType>;
  ne?: InputMaybe<PubSubType>;
};

export type ModelQueryCacheByRefCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelQueryCacheByRefCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelQueryCacheByRefCompositeKeyInput>>>;
  eq?: InputMaybe<ModelQueryCacheByRefCompositeKeyInput>;
  ge?: InputMaybe<ModelQueryCacheByRefCompositeKeyInput>;
  gt?: InputMaybe<ModelQueryCacheByRefCompositeKeyInput>;
  le?: InputMaybe<ModelQueryCacheByRefCompositeKeyInput>;
  lt?: InputMaybe<ModelQueryCacheByRefCompositeKeyInput>;
};

export type ModelQueryCacheByRefCompositeKeyInput = {
  refID?: InputMaybe<Scalars['ID']>;
  refType?: InputMaybe<RefType>;
};

export type ModelQueryCacheConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelQueryCacheConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  data?: InputMaybe<ModelStringInput>;
  error?: InputMaybe<ModelStringInput>;
  key?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelQueryCacheConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelQueryCacheConditionInput>>>;
  ttl?: InputMaybe<ModelIntInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelQueryCacheConnection = {
  items: Array<Maybe<QueryCache>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelQueryCacheFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelQueryCacheFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  data?: InputMaybe<ModelStringInput>;
  error?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  key?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelQueryCacheFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelQueryCacheFilterInput>>>;
  refID?: InputMaybe<ModelIdInput>;
  refType?: InputMaybe<ModelRefTypeInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  ttl?: InputMaybe<ModelIntInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelQueryCachePrimaryCompositeKeyConditionInput = {
  beginsWith?: InputMaybe<ModelQueryCachePrimaryCompositeKeyInput>;
  between?: InputMaybe<Array<InputMaybe<ModelQueryCachePrimaryCompositeKeyInput>>>;
  eq?: InputMaybe<ModelQueryCachePrimaryCompositeKeyInput>;
  ge?: InputMaybe<ModelQueryCachePrimaryCompositeKeyInput>;
  gt?: InputMaybe<ModelQueryCachePrimaryCompositeKeyInput>;
  le?: InputMaybe<ModelQueryCachePrimaryCompositeKeyInput>;
  lt?: InputMaybe<ModelQueryCachePrimaryCompositeKeyInput>;
};

export type ModelQueryCachePrimaryCompositeKeyInput = {
  refID?: InputMaybe<Scalars['ID']>;
  refType?: InputMaybe<RefType>;
  tenantID?: InputMaybe<Scalars['ID']>;
};

export type ModelRefTypeInput = {
  eq?: InputMaybe<RefType>;
  ne?: InputMaybe<RefType>;
};

export type ModelSchemaConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSchemaConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelSchemaConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSchemaConditionInput>>>;
  tenantID?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelSchemaConnection = {
  items: Array<Maybe<Schema>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelSchemaFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSchemaFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelSchemaFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSchemaFilterInput>>>;
  tenantID?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ModelTenantConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTenantConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  graphID?: InputMaybe<ModelIdInput>;
  language?: InputMaybe<ModelTenantLanguageInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTenantConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTenantConditionInput>>>;
  region?: InputMaybe<ModelTenantRegionInput>;
  schemaID?: InputMaybe<ModelIdInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  timezone?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelTenantConnection = {
  items: Array<Maybe<Tenant>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTenantFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTenantFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  graphID?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  language?: InputMaybe<ModelTenantLanguageInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTenantFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTenantFilterInput>>>;
  region?: InputMaybe<ModelTenantRegionInput>;
  schemaID?: InputMaybe<ModelIdInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  timezone?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelTenantLanguageInput = {
  eq?: InputMaybe<TenantLanguage>;
  ne?: InputMaybe<TenantLanguage>;
};

export type ModelTenantRegionInput = {
  eq?: InputMaybe<TenantRegion>;
  ne?: InputMaybe<TenantRegion>;
};

export type ModelTransformationConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelTransformationConditionInput>>>;
  connectorID?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  expression?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTransformationConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTransformationConditionInput>>>;
  schemaEntityID?: InputMaybe<ModelIdInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  topics?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelTransformationConnection = {
  items: Array<Maybe<Transformation>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTransformationFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelTransformationFilterInput>>>;
  connectorID?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  expression?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTransformationFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTransformationFilterInput>>>;
  schemaEntityID?: InputMaybe<ModelIdInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  topics?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type Mutation = {
  activateConnector?: Maybe<Connector>;
  activateTransformations?: Maybe<TransformationResult>;
  activateUser?: Maybe<CognitoUser>;
  authorizeConnector?: Maybe<Connector>;
  createConnector?: Maybe<Connector>;
  createNode?: Maybe<GraphResult>;
  createPerspective?: Maybe<Perspective>;
  createQueryCache?: Maybe<QueryCache>;
  createRelationship?: Maybe<GraphResult>;
  createSchema?: Maybe<Schema>;
  createTenant?: Maybe<Tenant>;
  createTransformation?: Maybe<Transformation>;
  createUser?: Maybe<CognitoUser>;
  deleteConnector?: Maybe<Connector>;
  deleteGraphFile?: Maybe<DeleteGraphFileResult>;
  deleteNode?: Maybe<GraphResult>;
  deletePerspective?: Maybe<Perspective>;
  deleteQueryCache?: Maybe<QueryCache>;
  deleteRelationship?: Maybe<GraphResult>;
  deleteSchema?: Maybe<Schema>;
  deleteTenant?: Maybe<Tenant>;
  deleteTransformation?: Maybe<Transformation>;
  deleteUser?: Maybe<CognitoUser>;
  downloadGraphFile?: Maybe<DownloadGraphFileResult>;
  emptyMutation?: Maybe<Scalars['Int']>;
  executePerspective?: Maybe<ExecutePerspectiveResult>;
  findUsers?: Maybe<CognitoUserList>;
  inviteUser?: Maybe<CognitoUser>;
  runConnector?: Maybe<Scalars['AWSJSON']>;
  setupSchema?: Maybe<Schema>;
  setupTenant?: Maybe<Tenant>;
  setupTransformations?: Maybe<TransformationResult>;
  updateConnector?: Maybe<Connector>;
  updateNode?: Maybe<GraphResult>;
  updatePerspective?: Maybe<Perspective>;
  updateQueryCache?: Maybe<QueryCache>;
  updateRelationship?: Maybe<GraphResult>;
  updateSchema?: Maybe<Schema>;
  updateTenant?: Maybe<Tenant>;
  updateTransformation?: Maybe<Transformation>;
  updateUser?: Maybe<CognitoUser>;
  uploadGraphFile?: Maybe<UploadGraphFileResult>;
};

export type MutationActivateConnectorArgs = {
  input: ActivateConnectorInput;
};

export type MutationActivateTransformationsArgs = {
  input: ActivateTransformationsInput;
};

export type MutationActivateUserArgs = {
  input: ActivateUserInput;
};

export type MutationAuthorizeConnectorArgs = {
  input: AuthorizeConnectorInput;
};

export type MutationCreateConnectorArgs = {
  condition?: InputMaybe<ModelConnectorConditionInput>;
  input: CreateConnectorInput;
};

export type MutationCreateNodeArgs = {
  input: CreateNodeInput;
};

export type MutationCreatePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: CreatePerspectiveInput;
};

export type MutationCreateQueryCacheArgs = {
  condition?: InputMaybe<ModelQueryCacheConditionInput>;
  input: CreateQueryCacheInput;
};

export type MutationCreateRelationshipArgs = {
  input: CreateRelationshipInput;
};

export type MutationCreateSchemaArgs = {
  condition?: InputMaybe<ModelSchemaConditionInput>;
  input: CreateSchemaInput;
};

export type MutationCreateTenantArgs = {
  condition?: InputMaybe<ModelTenantConditionInput>;
  input: CreateTenantInput;
};

export type MutationCreateTransformationArgs = {
  condition?: InputMaybe<ModelTransformationConditionInput>;
  input: CreateTransformationInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteConnectorArgs = {
  condition?: InputMaybe<ModelConnectorConditionInput>;
  input: DeleteConnectorInput;
};

export type MutationDeleteGraphFileArgs = {
  graphID: Scalars['String'];
  input: DeleteGraphFileInput;
  tenantID: Scalars['ID'];
};

export type MutationDeleteNodeArgs = {
  input: DeleteNodeInput;
};

export type MutationDeletePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: DeletePerspectiveInput;
};

export type MutationDeleteQueryCacheArgs = {
  condition?: InputMaybe<ModelQueryCacheConditionInput>;
  input: DeleteQueryCacheInput;
};

export type MutationDeleteRelationshipArgs = {
  input: DeleteRelationshipInput;
};

export type MutationDeleteSchemaArgs = {
  condition?: InputMaybe<ModelSchemaConditionInput>;
  input: DeleteSchemaInput;
};

export type MutationDeleteTenantArgs = {
  condition?: InputMaybe<ModelTenantConditionInput>;
  input: DeleteTenantInput;
};

export type MutationDeleteTransformationArgs = {
  condition?: InputMaybe<ModelTransformationConditionInput>;
  input: DeleteTransformationInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationDownloadGraphFileArgs = {
  graphID: Scalars['String'];
  input: DownloadGraphFileInput;
  tenantID: Scalars['ID'];
};

export type MutationExecutePerspectiveArgs = {
  input: ExecutePerspectiveInput;
};

export type MutationFindUsersArgs = {
  input: FindUsersInput;
};

export type MutationInviteUserArgs = {
  input: InviteUserInput;
};

export type MutationRunConnectorArgs = {
  input: RunConnectorInput;
};

export type MutationSetupSchemaArgs = {
  input: SetupSchemaInput;
};

export type MutationSetupTenantArgs = {
  input: SetupTenantInput;
};

export type MutationSetupTransformationsArgs = {
  input: SetupTransformationsInput;
};

export type MutationUpdateConnectorArgs = {
  condition?: InputMaybe<ModelConnectorConditionInput>;
  input: UpdateConnectorInput;
};

export type MutationUpdateNodeArgs = {
  input: UpdateNodeInput;
};

export type MutationUpdatePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: UpdatePerspectiveInput;
};

export type MutationUpdateQueryCacheArgs = {
  condition?: InputMaybe<ModelQueryCacheConditionInput>;
  input: UpdateQueryCacheInput;
};

export type MutationUpdateRelationshipArgs = {
  input: UpdateRelationshipInput;
};

export type MutationUpdateSchemaArgs = {
  condition?: InputMaybe<ModelSchemaConditionInput>;
  input: UpdateSchemaInput;
};

export type MutationUpdateTenantArgs = {
  condition?: InputMaybe<ModelTenantConditionInput>;
  input: UpdateTenantInput;
};

export type MutationUpdateTransformationArgs = {
  condition?: InputMaybe<ModelTransformationConditionInput>;
  input: UpdateTransformationInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationUploadGraphFileArgs = {
  graphID: Scalars['String'];
  input: UploadGraphFileInput;
  tenantID: Scalars['ID'];
};

export type Perspective = {
  cacheTime?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inputs?: Maybe<Array<PerspectiveInputDimension>>;
  name: Scalars['String'];
  outputs?: Maybe<Array<PerspectiveOutputDimension>>;
  query: PerspectiveQuery;
  tenantID: Scalars['ID'];
  type: PerspectiveType;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type PerspectiveInputDimension = {
  default?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  type: PrimitiveType;
};

export type PerspectiveInputDimensionInput = {
  default?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  key: Scalars['String'];
  name: Scalars['String'];
  type: PrimitiveType;
};

export type PerspectiveOutputDimension = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  type: PrimitiveType;
};

export type PerspectiveOutputDimensionInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  key: Scalars['String'];
  name: Scalars['String'];
  type: PrimitiveType;
};

export type PerspectiveQuery = {
  body: Scalars['String'];
  type: QueryType;
};

export type PerspectiveQueryInput = {
  body: Scalars['String'];
  type: QueryType;
};

export enum PerspectiveType {
  Chart = 'CHART',
  Graph = 'GRAPH',
  Metric = 'METRIC',
  Table = 'TABLE',
}

export enum PrimitiveType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Float = 'FLOAT',
  Number = 'NUMBER',
  String = 'STRING',
  Time = 'TIME',
  Undefined = 'UNDEFINED',
}

export enum PubSubType {
  Connector = 'Connector',
  ExternalSystem = 'ExternalSystem',
  Group = 'Group',
  User = 'User',
}

export type Query = {
  echo?: Maybe<Scalars['String']>;
  emptyQuery?: Maybe<Scalars['String']>;
  expandGraph?: Maybe<GraphResult>;
  getConnector?: Maybe<Connector>;
  getConnectorByDataSource?: Maybe<ModelConnectorConnection>;
  getEvent?: Maybe<Event>;
  getEventNotification?: Maybe<EventNotification>;
  getEventSubscriber?: Maybe<EventSubscriber>;
  getManifest?: Maybe<Scalars['AWSJSON']>;
  getNode?: Maybe<GraphResult>;
  getPerspective?: Maybe<Perspective>;
  getQueryCache?: Maybe<QueryCache>;
  getRelationship?: Maybe<GraphResult>;
  getSchema?: Maybe<Schema>;
  getTenant?: Maybe<Tenant>;
  getTransformation?: Maybe<Transformation>;
  getUser?: Maybe<CognitoUser>;
  listConnectors?: Maybe<ModelConnectorConnection>;
  listEventNotifications?: Maybe<ModelEventNotificationConnection>;
  listEventNotificationsByRef?: Maybe<ModelEventNotificationConnection>;
  listEventNotificationsBySub?: Maybe<ModelEventNotificationConnection>;
  listEventSubscriberByRef?: Maybe<ModelEventSubscriberConnection>;
  listEventSubscribers?: Maybe<ModelEventSubscriberConnection>;
  listEventSubscribersBySub?: Maybe<ModelEventSubscriberConnection>;
  listEvents?: Maybe<ModelEventConnection>;
  listEventsByPub?: Maybe<ModelEventConnection>;
  listEventsByRef?: Maybe<ModelEventConnection>;
  listPerspectives?: Maybe<ModelPerspectiveConnection>;
  listQueriesByRef?: Maybe<ModelQueryCacheConnection>;
  listSchemas?: Maybe<ModelSchemaConnection>;
  listTenants?: Maybe<ModelTenantConnection>;
  listTransformations?: Maybe<ModelTransformationConnection>;
  listTransformationsByConnector?: Maybe<ModelTransformationConnection>;
  listTransformationsBySchemaEntity?: Maybe<ModelTransformationConnection>;
  listUsers?: Maybe<CognitoUserList>;
  searchGraph?: Maybe<SearchGraphResult>;
};

export type QueryEchoArgs = {
  msg?: InputMaybe<Scalars['String']>;
};

export type QueryExpandGraphArgs = {
  input: ExpandGraphInput;
};

export type QueryGetConnectorArgs = {
  id: Scalars['ID'];
};

export type QueryGetConnectorByDataSourceArgs = {
  dataSource: Scalars['String'];
  filter?: InputMaybe<ModelConnectorFilterInput>;
  id?: InputMaybe<ModelIdKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryGetEventArgs = {
  id: Scalars['ID'];
};

export type QueryGetEventNotificationArgs = {
  id: Scalars['ID'];
};

export type QueryGetEventSubscriberArgs = {
  id: Scalars['ID'];
};

export type QueryGetManifestArgs = {
  service: ConnectorService;
};

export type QueryGetNodeArgs = {
  input: GetNodeInput;
};

export type QueryGetPerspectiveArgs = {
  id: Scalars['ID'];
};

export type QueryGetQueryCacheArgs = {
  id: Scalars['ID'];
  refID: Scalars['ID'];
  refType: RefType;
  tenantID: Scalars['ID'];
};

export type QueryGetRelationshipArgs = {
  input: GetRelationshipInput;
};

export type QueryGetSchemaArgs = {
  id: Scalars['ID'];
};

export type QueryGetTenantArgs = {
  id: Scalars['ID'];
};

export type QueryGetTransformationArgs = {
  id: Scalars['ID'];
};

export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type QueryListConnectorsArgs = {
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListEventNotificationsArgs = {
  filter?: InputMaybe<ModelEventNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListEventNotificationsByRefArgs = {
  filter?: InputMaybe<ModelEventNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  refID: Scalars['ID'];
  refTypeUpdatedAt?: InputMaybe<ModelEventNotificationByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListEventNotificationsBySubArgs = {
  filter?: InputMaybe<ModelEventNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  subID: Scalars['ID'];
  subTypeUpdatedAt?: InputMaybe<ModelEventNotificationBySubCompositeKeyConditionInput>;
};

export type QueryListEventSubscriberByRefArgs = {
  filter?: InputMaybe<ModelEventSubscriberFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  refID: Scalars['ID'];
  refTypeUpdatedAt?: InputMaybe<ModelEventSubscriberByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListEventSubscribersArgs = {
  filter?: InputMaybe<ModelEventSubscriberFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListEventSubscribersBySubArgs = {
  filter?: InputMaybe<ModelEventSubscriberFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  subID: Scalars['ID'];
  subTypeUpdatedAt?: InputMaybe<ModelEventSubscriberBySubCompositeKeyConditionInput>;
};

export type QueryListEventsArgs = {
  filter?: InputMaybe<ModelEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListEventsByPubArgs = {
  filter?: InputMaybe<ModelEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  pubID: Scalars['ID'];
  pubTypeUpdatedAt?: InputMaybe<ModelEventByPubCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListEventsByRefArgs = {
  filter?: InputMaybe<ModelEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  refID: Scalars['ID'];
  refTypeUpdatedAt?: InputMaybe<ModelEventByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListPerspectivesArgs = {
  filter?: InputMaybe<ModelPerspectiveFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListQueriesByRefArgs = {
  filter?: InputMaybe<ModelQueryCacheFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  refTypeRefID?: InputMaybe<ModelQueryCacheByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  tenantID: Scalars['ID'];
};

export type QueryListSchemasArgs = {
  filter?: InputMaybe<ModelSchemaFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListTenantsArgs = {
  filter?: InputMaybe<ModelTenantFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListTransformationsArgs = {
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListTransformationsByConnectorArgs = {
  connectorID: Scalars['ID'];
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListTransformationsBySchemaEntityArgs = {
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  schemaEntityID: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListUsersArgs = {
  input: ListUsersInput;
};

export type QuerySearchGraphArgs = {
  input: SearchGraphInput;
};

export type QueryCache = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  data?: Maybe<Scalars['AWSJSON']>;
  error?: Maybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  refID: Scalars['ID'];
  refType: RefType;
  tenantID: Scalars['ID'];
  ttl?: Maybe<Scalars['AWSTimestamp']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export enum QueryType {
  Cypher = 'CYPHER',
  Graphql = 'GRAPHQL',
}

export enum RefType {
  Connector = 'Connector',
  Node = 'Node',
  Perspective = 'Perspective',
  Relationship = 'Relationship',
}

export type RunConnectorInput = {
  id: Scalars['ID'];
  parameters?: InputMaybe<Array<RunConnectorParameterInput>>;
  topic: Scalars['String'];
};

export type RunConnectorParameterInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type Schema = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  nodes: Array<SchemaNode>;
  relationships: Array<SchemaRelationship>;
  tenantID: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type SchemaNode = {
  avatarColor: Scalars['String'];
  avatarSelector?: Maybe<Scalars['String']>;
  descriptionSelector?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  idSelector?: Maybe<Array<Scalars['String']>>;
  label: Scalars['String'];
  properties?: Maybe<Array<SchemaProperty>>;
};

export type SchemaNodeInput = {
  avatarColor: Scalars['String'];
  avatarSelector?: InputMaybe<Scalars['String']>;
  descriptionSelector?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  idSelector?: InputMaybe<Array<Scalars['String']>>;
  label: Scalars['String'];
  properties?: InputMaybe<Array<SchemaPropertyInput>>;
};

export type SchemaProperty = {
  key: Scalars['String'];
  name: Scalars['String'];
  semanticType?: Maybe<SemanticType>;
  type: PrimitiveType;
};

export type SchemaPropertyInput = {
  key: Scalars['String'];
  name: Scalars['String'];
  semanticType?: InputMaybe<SemanticType>;
  type: PrimitiveType;
};

export type SchemaRelationship = {
  descriptionSelector?: Maybe<Array<Scalars['String']>>;
  endNodeID: Scalars['ID'];
  id: Scalars['ID'];
  properties?: Maybe<Array<SchemaProperty>>;
  startNodeID: Scalars['ID'];
  type: Scalars['String'];
};

export type SchemaRelationshipInput = {
  descriptionSelector?: InputMaybe<Array<Scalars['String']>>;
  endNodeID: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  properties?: InputMaybe<Array<SchemaPropertyInput>>;
  startNodeID: Scalars['ID'];
  type: Scalars['String'];
};

export type SearchGraphInput = {
  graphID: Scalars['String'];
  labels?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  schemaID: Scalars['ID'];
  term?: InputMaybe<Scalars['String']>;
};

export type SearchGraphRecord = {
  node: GraphNode;
  score: Scalars['String'];
};

export type SearchGraphResult = {
  nextOffset?: Maybe<Scalars['Int']>;
  records?: Maybe<Array<SearchGraphRecord>>;
};

export enum SemanticType {
  Bic = 'BIC',
  Country = 'COUNTRY',
  Currency = 'CURRENCY',
  Email = 'EMAIL',
  Iban = 'IBAN',
  Language = 'LANGUAGE',
  Pan = 'PAN',
  Phone = 'PHONE',
  Point = 'POINT',
  Url = 'URL',
}

export type SetupSchemaInput = {
  name: Scalars['String'];
  tenantID: Scalars['ID'];
};

export type SetupTenantInput = {
  name: Scalars['String'];
};

export type SetupTransformationsInput = {
  connectorID: Scalars['ID'];
};

export type Tenant = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  graphID: Scalars['ID'];
  id: Scalars['ID'];
  language?: Maybe<TenantLanguage>;
  name: Scalars['String'];
  region?: Maybe<TenantRegion>;
  schemaID: Scalars['ID'];
  tenantID: Scalars['ID'];
  timezone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export enum TenantLanguage {
  De = 'DE',
  En = 'EN',
  Fr = 'FR',
}

export enum TenantRegion {
  At = 'AT',
  De = 'DE',
}

export type Transformation = {
  active?: Maybe<Scalars['Boolean']>;
  connectorID: Scalars['ID'];
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  expression?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  schemaEntityID?: Maybe<Scalars['ID']>;
  tenantID: Scalars['ID'];
  topics: Array<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type TransformationResult = {
  ids?: Maybe<Array<Scalars['ID']>>;
  transformations?: Maybe<Array<Transformation>>;
};

export type UpdateConnectorInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  dataSource?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extractor?: InputMaybe<Scalars['String']>;
  graphID?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  schemaID?: InputMaybe<Scalars['ID']>;
  secretCredentials?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ConnectorService>;
  status?: InputMaybe<ConnectorStatus>;
  tenantID?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateNodeInput = {
  graphID: Scalars['String'];
  identity: Scalars['ID'];
  properties: Scalars['AWSJSON'];
};

export type UpdatePerspectiveInput = {
  cacheTime?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  inputs?: InputMaybe<Array<PerspectiveInputDimensionInput>>;
  name?: InputMaybe<Scalars['String']>;
  outputs?: InputMaybe<Array<PerspectiveOutputDimensionInput>>;
  query?: InputMaybe<PerspectiveQueryInput>;
  tenantID?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<PerspectiveType>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateQueryCacheInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  data?: InputMaybe<Scalars['AWSJSON']>;
  error?: InputMaybe<Scalars['AWSJSON']>;
  id: Scalars['ID'];
  key?: InputMaybe<Scalars['String']>;
  refID: Scalars['ID'];
  refType: RefType;
  tenantID: Scalars['ID'];
  ttl?: InputMaybe<Scalars['AWSTimestamp']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateRelationshipInput = {
  graphID: Scalars['String'];
  identity: Scalars['ID'];
  properties: Scalars['AWSJSON'];
};

export type UpdateSchemaInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  nodes?: InputMaybe<Array<SchemaNodeInput>>;
  relationships?: InputMaybe<Array<SchemaRelationshipInput>>;
  tenantID?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateTenantInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  graphID?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  language?: InputMaybe<TenantLanguage>;
  name?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<TenantRegion>;
  schemaID?: InputMaybe<Scalars['ID']>;
  tenantID?: InputMaybe<Scalars['ID']>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateTransformationInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  connectorID?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  expression?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  schemaEntityID?: InputMaybe<Scalars['ID']>;
  tenantID?: InputMaybe<Scalars['ID']>;
  topics?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateUserInput = {
  email: Scalars['String'];
  id: Scalars['ID'];
  tenantID: Scalars['ID'];
};

export type UploadGraphFileInput = {
  contentType: Scalars['String'];
  fileName: Scalars['String'];
  nodeID: Scalars['String'];
  objectKey?: InputMaybe<Scalars['String']>;
  size: Scalars['Int'];
};

export type UploadGraphFileResult = {
  expiresIn: Scalars['Int'];
  objectKey: Scalars['String'];
  signedUploadUrl: Scalars['String'];
};

export enum UserStatus {
  Archived = 'ARCHIVED',
  Compromised = 'COMPROMISED',
  Confirmed = 'CONFIRMED',
  ForceChangePassword = 'FORCE_CHANGE_PASSWORD',
  ResetRequired = 'RESET_REQUIRED',
  Unconfirmed = 'UNCONFIRMED',
  Unknown = 'UNKNOWN',
}

export type EmptyMutationVariables = Exact<{ [key: string]: never }>;

export type EmptyMutation = { emptyMutation?: number | undefined };

export type CreateQueryCacheVariables = Exact<{
  input: CreateQueryCacheInput;
  condition?: InputMaybe<ModelQueryCacheConditionInput>;
}>;

export type CreateQueryCache = {
  createQueryCache?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        refType: RefType;
        refID: string;
        key: string;
        data?: Record<string, any> | string | undefined;
        error?: Record<string, any> | string | undefined;
        ttl?: any | undefined;
      }
    | undefined;
};

export type UpdateQueryCacheVariables = Exact<{
  input: UpdateQueryCacheInput;
  condition?: InputMaybe<ModelQueryCacheConditionInput>;
}>;

export type UpdateQueryCache = {
  updateQueryCache?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        refType: RefType;
        refID: string;
        key: string;
        data?: Record<string, any> | string | undefined;
        error?: Record<string, any> | string | undefined;
        ttl?: any | undefined;
      }
    | undefined;
};

export type DeleteQueryCacheVariables = Exact<{
  input: DeleteQueryCacheInput;
  condition?: InputMaybe<ModelQueryCacheConditionInput>;
}>;

export type DeleteQueryCache = {
  deleteQueryCache?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        refType: RefType;
        refID: string;
        key: string;
        data?: Record<string, any> | string | undefined;
        error?: Record<string, any> | string | undefined;
        ttl?: any | undefined;
      }
    | undefined;
};

export type CreateConnectorVariables = Exact<{
  input: CreateConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type CreateConnector = {
  createConnector?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
      }
    | undefined;
};

export type UpdateConnectorVariables = Exact<{
  input: UpdateConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type UpdateConnector = {
  updateConnector?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
      }
    | undefined;
};

export type DeleteConnectorVariables = Exact<{
  input: DeleteConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type DeleteConnector = {
  deleteConnector?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
      }
    | undefined;
};

export type CreatePerspectiveVariables = Exact<{
  input: CreatePerspectiveInput;
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
}>;

export type CreatePerspective = {
  createPerspective?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        cacheTime?: number | undefined;
        query: { type: QueryType; body: string };
        inputs?:
          | Array<{
              id: string;
              key: string;
              name: string;
              description?: string | undefined;
              type: PrimitiveType;
              default?: string | undefined;
            }>
          | undefined;
        outputs?:
          | Array<{ id: string; key: string; name: string; description?: string | undefined; type: PrimitiveType }>
          | undefined;
      }
    | undefined;
};

export type UpdatePerspectiveVariables = Exact<{
  input: UpdatePerspectiveInput;
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
}>;

export type UpdatePerspective = {
  updatePerspective?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        cacheTime?: number | undefined;
        query: { type: QueryType; body: string };
        inputs?:
          | Array<{
              id: string;
              key: string;
              name: string;
              description?: string | undefined;
              type: PrimitiveType;
              default?: string | undefined;
            }>
          | undefined;
        outputs?:
          | Array<{ id: string; key: string; name: string; description?: string | undefined; type: PrimitiveType }>
          | undefined;
      }
    | undefined;
};

export type DeletePerspectiveVariables = Exact<{
  input: DeletePerspectiveInput;
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
}>;

export type DeletePerspective = {
  deletePerspective?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        cacheTime?: number | undefined;
        query: { type: QueryType; body: string };
        inputs?:
          | Array<{
              id: string;
              key: string;
              name: string;
              description?: string | undefined;
              type: PrimitiveType;
              default?: string | undefined;
            }>
          | undefined;
        outputs?:
          | Array<{ id: string; key: string; name: string; description?: string | undefined; type: PrimitiveType }>
          | undefined;
      }
    | undefined;
};

export type CreateSchemaVariables = Exact<{
  input: CreateSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type CreateSchema = {
  createSchema?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
      }
    | undefined;
};

export type UpdateSchemaVariables = Exact<{
  input: UpdateSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type UpdateSchema = {
  updateSchema?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
      }
    | undefined;
};

export type DeleteSchemaVariables = Exact<{
  input: DeleteSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type DeleteSchema = {
  deleteSchema?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
      }
    | undefined;
};

export type CreateTenantVariables = Exact<{
  input: CreateTenantInput;
  condition?: InputMaybe<ModelTenantConditionInput>;
}>;

export type CreateTenant = {
  createTenant?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        language?: TenantLanguage | undefined;
        region?: TenantRegion | undefined;
        timezone?: string | undefined;
      }
    | undefined;
};

export type UpdateTenantVariables = Exact<{
  input: UpdateTenantInput;
  condition?: InputMaybe<ModelTenantConditionInput>;
}>;

export type UpdateTenant = {
  updateTenant?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        language?: TenantLanguage | undefined;
        region?: TenantRegion | undefined;
        timezone?: string | undefined;
      }
    | undefined;
};

export type DeleteTenantVariables = Exact<{
  input: DeleteTenantInput;
  condition?: InputMaybe<ModelTenantConditionInput>;
}>;

export type DeleteTenant = {
  deleteTenant?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        language?: TenantLanguage | undefined;
        region?: TenantRegion | undefined;
        timezone?: string | undefined;
      }
    | undefined;
};

export type CreateTransformationVariables = Exact<{
  input: CreateTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type CreateTransformation = {
  createTransformation?:
    | {
        id: string;
        tenantID: string;
        connectorID: string;
        schemaEntityID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        expression?: string | undefined;
      }
    | undefined;
};

export type UpdateTransformationVariables = Exact<{
  input: UpdateTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type UpdateTransformation = {
  updateTransformation?:
    | {
        id: string;
        tenantID: string;
        connectorID: string;
        schemaEntityID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        expression?: string | undefined;
      }
    | undefined;
};

export type DeleteTransformationVariables = Exact<{
  input: DeleteTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type DeleteTransformation = {
  deleteTransformation?:
    | {
        id: string;
        tenantID: string;
        connectorID: string;
        schemaEntityID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        expression?: string | undefined;
      }
    | undefined;
};

export type ExecutePerspectiveVariables = Exact<{
  input: ExecutePerspectiveInput;
}>;

export type ExecutePerspective = {
  executePerspective?: { data?: Record<string, any> | string | undefined; updatedAt?: any | undefined } | undefined;
};

export type AuthorizeConnectorVariables = Exact<{
  input: AuthorizeConnectorInput;
}>;

export type AuthorizeConnector = {
  authorizeConnector?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
      }
    | undefined;
};

export type ActivateConnectorVariables = Exact<{
  input: ActivateConnectorInput;
}>;

export type ActivateConnector = {
  activateConnector?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
      }
    | undefined;
};

export type ActivateTransformationsVariables = Exact<{
  input: ActivateTransformationsInput;
}>;

export type ActivateTransformations = {
  activateTransformations?:
    | {
        ids?: Array<string> | undefined;
        transformations?:
          | Array<{
              id: string;
              tenantID: string;
              connectorID: string;
              schemaEntityID?: string | undefined;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              topics: Array<string>;
              active?: boolean | undefined;
              expression?: string | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type SetupTransformationsVariables = Exact<{
  input: SetupTransformationsInput;
}>;

export type SetupTransformations = {
  setupTransformations?:
    | {
        ids?: Array<string> | undefined;
        transformations?:
          | Array<{
              id: string;
              tenantID: string;
              connectorID: string;
              schemaEntityID?: string | undefined;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              topics: Array<string>;
              active?: boolean | undefined;
              expression?: string | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type UploadGraphFileVariables = Exact<{
  input: UploadGraphFileInput;
  tenantID: Scalars['ID'];
  graphID: Scalars['String'];
}>;

export type UploadGraphFile = {
  uploadGraphFile?: { signedUploadUrl: string; objectKey: string; expiresIn: number } | undefined;
};

export type DownloadGraphFileVariables = Exact<{
  input: DownloadGraphFileInput;
  tenantID: Scalars['ID'];
  graphID: Scalars['String'];
}>;

export type DownloadGraphFile = { downloadGraphFile?: { signedDownloadUrl: string; expiresIn: number } | undefined };

export type DeleteGraphFileVariables = Exact<{
  input: DeleteGraphFileInput;
  tenantID: Scalars['ID'];
  graphID: Scalars['String'];
}>;

export type DeleteGraphFile = { deleteGraphFile?: { objectKey: string; nodeID: string } | undefined };

export type RunConnectorVariables = Exact<{
  input: RunConnectorInput;
}>;

export type RunConnector = { runConnector?: Record<string, any> | string | undefined };

export type CreateNodeVariables = Exact<{
  input: CreateNodeInput;
}>;

export type CreateNode = {
  createNode?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type UpdateNodeVariables = Exact<{
  input: UpdateNodeInput;
}>;

export type UpdateNode = {
  updateNode?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type DeleteNodeVariables = Exact<{
  input: DeleteNodeInput;
}>;

export type DeleteNode = {
  deleteNode?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type CreateRelationshipVariables = Exact<{
  input: CreateRelationshipInput;
}>;

export type CreateRelationship = {
  createRelationship?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type UpdateRelationshipVariables = Exact<{
  input: UpdateRelationshipInput;
}>;

export type UpdateRelationship = {
  updateRelationship?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type DeleteRelationshipVariables = Exact<{
  input: DeleteRelationshipInput;
}>;

export type DeleteRelationship = {
  deleteRelationship?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type FindUsersVariables = Exact<{
  input: FindUsersInput;
}>;

export type FindUsers = {
  findUsers?:
    | {
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              attributes: Record<string, any> | string;
              status?: UserStatus | undefined;
              enabled?: boolean | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type CreateUserVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUser = {
  createUser?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type InviteUserVariables = Exact<{
  input: InviteUserInput;
}>;

export type InviteUser = {
  inviteUser?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type ActivateUserVariables = Exact<{
  input: ActivateUserInput;
}>;

export type ActivateUser = {
  activateUser?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type UpdateUserVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUser = {
  updateUser?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type DeleteUserVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUser = {
  deleteUser?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type SetupTenantVariables = Exact<{
  input: SetupTenantInput;
}>;

export type SetupTenant = {
  setupTenant?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        language?: TenantLanguage | undefined;
        region?: TenantRegion | undefined;
        timezone?: string | undefined;
      }
    | undefined;
};

export type SetupSchemaVariables = Exact<{
  input: SetupSchemaInput;
}>;

export type SetupSchema = {
  setupSchema?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
      }
    | undefined;
};

export type EmptyQueryVariables = Exact<{ [key: string]: never }>;

export type EmptyQuery = { emptyQuery?: string | undefined };

export type EchoVariables = Exact<{
  msg?: InputMaybe<Scalars['String']>;
}>;

export type Echo = { echo?: string | undefined };

export type GetQueryCacheVariables = Exact<{
  id: Scalars['ID'];
  tenantID: Scalars['ID'];
  refType: RefType;
  refID: Scalars['ID'];
}>;

export type GetQueryCache = {
  getQueryCache?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        refType: RefType;
        refID: string;
        key: string;
        data?: Record<string, any> | string | undefined;
        error?: Record<string, any> | string | undefined;
        ttl?: any | undefined;
      }
    | undefined;
};

export type ListQueriesByRefVariables = Exact<{
  tenantID: Scalars['ID'];
  refTypeRefID?: InputMaybe<ModelQueryCacheByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelQueryCacheFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListQueriesByRef = {
  listQueriesByRef?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              refType: RefType;
              refID: string;
              key: string;
              data?: Record<string, any> | string | undefined;
              error?: Record<string, any> | string | undefined;
              ttl?: any | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetConnectorVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnector = {
  getConnector?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
      }
    | undefined;
};

export type ListConnectorsVariables = Exact<{
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListConnectors = {
  listConnectors?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              schemaID: string;
              graphID?: string | undefined;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              description?: string | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status?: ConnectorStatus | undefined;
              dataSource?: string | undefined;
              secretCredentials?: string | undefined;
              extractor?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetConnectorByDataSourceVariables = Exact<{
  dataSource: Scalars['String'];
  id?: InputMaybe<ModelIdKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type GetConnectorByDataSource = {
  getConnectorByDataSource?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              schemaID: string;
              graphID?: string | undefined;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              description?: string | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status?: ConnectorStatus | undefined;
              dataSource?: string | undefined;
              secretCredentials?: string | undefined;
              extractor?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetEventVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetEvent = {
  getEvent?:
    | {
        id: string;
        tenantID: string;
        pubType: PubSubType;
        pubID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        refType: RefType;
        refID: string;
        eventType: EventType;
        eventBody?: string | undefined;
        eventStatus?: EventStatus | undefined;
        ttl?: any | undefined;
      }
    | undefined;
};

export type ListEventsVariables = Exact<{
  filter?: InputMaybe<ModelEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEvents = {
  listEvents?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              pubType: PubSubType;
              pubID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              refType: RefType;
              refID: string;
              eventType: EventType;
              eventBody?: string | undefined;
              eventStatus?: EventStatus | undefined;
              ttl?: any | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListEventsByPubVariables = Exact<{
  pubID: Scalars['ID'];
  pubTypeUpdatedAt?: InputMaybe<ModelEventByPubCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventsByPub = {
  listEventsByPub?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              pubType: PubSubType;
              pubID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              refType: RefType;
              refID: string;
              eventType: EventType;
              eventBody?: string | undefined;
              eventStatus?: EventStatus | undefined;
              ttl?: any | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListEventsByRefVariables = Exact<{
  refID: Scalars['ID'];
  refTypeUpdatedAt?: InputMaybe<ModelEventByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventsByRef = {
  listEventsByRef?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              pubType: PubSubType;
              pubID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              refType: RefType;
              refID: string;
              eventType: EventType;
              eventBody?: string | undefined;
              eventStatus?: EventStatus | undefined;
              ttl?: any | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetEventSubscriberVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetEventSubscriber = {
  getEventSubscriber?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        subType: PubSubType;
        subID: string;
        refType: RefType;
        refID: string;
      }
    | undefined;
};

export type ListEventSubscribersVariables = Exact<{
  filter?: InputMaybe<ModelEventSubscriberFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventSubscribers = {
  listEventSubscribers?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              subType: PubSubType;
              subID: string;
              refType: RefType;
              refID: string;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListEventSubscribersBySubVariables = Exact<{
  subID: Scalars['ID'];
  subTypeUpdatedAt?: InputMaybe<ModelEventSubscriberBySubCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelEventSubscriberFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventSubscribersBySub = {
  listEventSubscribersBySub?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              subType: PubSubType;
              subID: string;
              refType: RefType;
              refID: string;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListEventSubscriberByRefVariables = Exact<{
  refID: Scalars['ID'];
  refTypeUpdatedAt?: InputMaybe<ModelEventSubscriberByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelEventSubscriberFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventSubscriberByRef = {
  listEventSubscriberByRef?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              subType: PubSubType;
              subID: string;
              refType: RefType;
              refID: string;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetEventNotificationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetEventNotification = {
  getEventNotification?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        subType: PubSubType;
        subID: string;
        refType: RefType;
        refID: string;
        notificationBody?: string | undefined;
        isRead?: boolean | undefined;
      }
    | undefined;
};

export type ListEventNotificationsVariables = Exact<{
  filter?: InputMaybe<ModelEventNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventNotifications = {
  listEventNotifications?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              subType: PubSubType;
              subID: string;
              refType: RefType;
              refID: string;
              notificationBody?: string | undefined;
              isRead?: boolean | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListEventNotificationsBySubVariables = Exact<{
  subID: Scalars['ID'];
  subTypeUpdatedAt?: InputMaybe<ModelEventNotificationBySubCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelEventNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventNotificationsBySub = {
  listEventNotificationsBySub?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              subType: PubSubType;
              subID: string;
              refType: RefType;
              refID: string;
              notificationBody?: string | undefined;
              isRead?: boolean | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListEventNotificationsByRefVariables = Exact<{
  refID: Scalars['ID'];
  refTypeUpdatedAt?: InputMaybe<ModelEventNotificationByRefCompositeKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelEventNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListEventNotificationsByRef = {
  listEventNotificationsByRef?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              subType: PubSubType;
              subID: string;
              refType: RefType;
              refID: string;
              notificationBody?: string | undefined;
              isRead?: boolean | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetPerspectiveVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetPerspective = {
  getPerspective?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        cacheTime?: number | undefined;
        query: { type: QueryType; body: string };
        inputs?:
          | Array<{
              id: string;
              key: string;
              name: string;
              description?: string | undefined;
              type: PrimitiveType;
              default?: string | undefined;
            }>
          | undefined;
        outputs?:
          | Array<{ id: string; key: string; name: string; description?: string | undefined; type: PrimitiveType }>
          | undefined;
      }
    | undefined;
};

export type ListPerspectivesVariables = Exact<{
  filter?: InputMaybe<ModelPerspectiveFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListPerspectives = {
  listPerspectives?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              description?: string | undefined;
              type: PerspectiveType;
              cacheTime?: number | undefined;
              query: { type: QueryType; body: string };
              inputs?:
                | Array<{
                    id: string;
                    key: string;
                    name: string;
                    description?: string | undefined;
                    type: PrimitiveType;
                    default?: string | undefined;
                  }>
                | undefined;
              outputs?:
                | Array<{
                    id: string;
                    key: string;
                    name: string;
                    description?: string | undefined;
                    type: PrimitiveType;
                  }>
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetSchemaVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetSchema = {
  getSchema?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?:
            | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
            | undefined;
        }>;
      }
    | undefined;
};

export type ListSchemasVariables = Exact<{
  filter?: InputMaybe<ModelSchemaFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListSchemas = {
  listSchemas?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              nodes: Array<{
                id: string;
                label: string;
                idSelector?: Array<string> | undefined;
                descriptionSelector?: Array<string> | undefined;
                avatarSelector?: string | undefined;
                avatarColor: string;
                properties?:
                  | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
                  | undefined;
              }>;
              relationships: Array<{
                id: string;
                startNodeID: string;
                endNodeID: string;
                type: string;
                descriptionSelector?: Array<string> | undefined;
                properties?:
                  | Array<{ key: string; name: string; type: PrimitiveType; semanticType?: SemanticType | undefined }>
                  | undefined;
              }>;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetTenantVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTenant = {
  getTenant?:
    | {
        id: string;
        tenantID: string;
        schemaID: string;
        graphID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        language?: TenantLanguage | undefined;
        region?: TenantRegion | undefined;
        timezone?: string | undefined;
      }
    | undefined;
};

export type ListTenantsVariables = Exact<{
  filter?: InputMaybe<ModelTenantFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListTenants = {
  listTenants?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              schemaID: string;
              graphID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              language?: TenantLanguage | undefined;
              region?: TenantRegion | undefined;
              timezone?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetTransformationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTransformation = {
  getTransformation?:
    | {
        id: string;
        tenantID: string;
        connectorID: string;
        schemaEntityID?: string | undefined;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        expression?: string | undefined;
      }
    | undefined;
};

export type ListTransformationsVariables = Exact<{
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListTransformations = {
  listTransformations?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              connectorID: string;
              schemaEntityID?: string | undefined;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              topics: Array<string>;
              active?: boolean | undefined;
              expression?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListTransformationsByConnectorVariables = Exact<{
  connectorID: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListTransformationsByConnector = {
  listTransformationsByConnector?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              connectorID: string;
              schemaEntityID?: string | undefined;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              topics: Array<string>;
              active?: boolean | undefined;
              expression?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListTransformationsBySchemaEntityVariables = Exact<{
  schemaEntityID: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListTransformationsBySchemaEntity = {
  listTransformationsBySchemaEntity?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              tenantID: string;
              connectorID: string;
              schemaEntityID?: string | undefined;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              topics: Array<string>;
              active?: boolean | undefined;
              expression?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type SearchGraphVariables = Exact<{
  input: SearchGraphInput;
}>;

export type SearchGraph = {
  searchGraph?:
    | {
        nextOffset?: number | undefined;
        records?:
          | Array<{
              score: string;
              node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
            }>
          | undefined;
      }
    | undefined;
};

export type ExpandGraphVariables = Exact<{
  input: ExpandGraphInput;
}>;

export type ExpandGraph = {
  expandGraph?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type GetNodeVariables = Exact<{
  input: GetNodeInput;
}>;

export type GetNode = {
  getNode?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type GetRelationshipVariables = Exact<{
  input: GetRelationshipInput;
}>;

export type GetRelationship = {
  getRelationship?:
    | {
        nodes: Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>;
        relationships: Array<{
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        }>;
      }
    | undefined;
};

export type GetUserVariables = Exact<{
  input: GetUserInput;
}>;

export type GetUser = {
  getUser?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type ListUsersVariables = Exact<{
  input: ListUsersInput;
}>;

export type ListUsers = {
  listUsers?:
    | {
        items: Array<
          | {
              id: string;
              tenantID: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              attributes: Record<string, any> | string;
              status?: UserStatus | undefined;
              enabled?: boolean | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetManifestVariables = Exact<{
  service: ConnectorService;
}>;

export type GetManifest = { getManifest?: Record<string, any> | string | undefined };

export const EmptyMutationDocument = `
    mutation EmptyMutation {
  emptyMutation
}
    `;

/**
 * Key maker function for `EmptyMutation`.
 */
export const EmptyMutationKeys = () => ['EmptyMutation'];

/**
 * Input transformer function for `EmptyMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `EmptyMutationVariables` - The original variables
 * @returns `EmptyMutationVariables` - The transformed variables
 */
export const EmptyMutationInputFn = <TInput = EmptyMutationVariables>(variables?: EmptyMutationVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `EmptyMutation`.
 * It extracts the `emptyMutation` field from the result and transforms it into a `Scalars['Int']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyMutation - The data returned from the GraphQL server
 * @returns Scalars['Int'] - The transformed data
 */
export const EmptyMutationOutputFn = <TOutput = Scalars['Int']>({ emptyMutation }: EmptyMutation) =>
  emptyMutation as unknown as TOutput;

/**
 * Fetcher function for `EmptyMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `EmptyMutationInput` and `EmptyMutationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const EmptyMutationFetcher = <TOutput = Scalars['Int'], TInput = EmptyMutationVariables>(
  variables?: EmptyMutationVariables,
  options?: RequestInit['headers'],
  document = EmptyMutationDocument,
  outputFn = EmptyMutationOutputFn,
  inputFn = EmptyMutationInputFn,
) => fetcher<EmptyMutation, EmptyMutationVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `EmptyMutation`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const emptyMutation = (variables?: EmptyMutationVariables) => EmptyMutationFetcher(variables)();

export const CreateQueryCacheDocument = `
    mutation CreateQueryCache($input: CreateQueryCacheInput!, $condition: ModelQueryCacheConditionInput) {
  createQueryCache(input: $input, condition: $condition) {
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

/**
 * Key maker function for `CreateQueryCache`.
 */
export const CreateQueryCacheKeys = () => ['CreateQueryCache'];

/**
 * Input transformer function for `CreateQueryCache`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateQueryCacheVariables` - The original variables
 * @returns `CreateQueryCacheVariables` - The transformed variables
 */
export const CreateQueryCacheInputFn = <TInput = CreateQueryCacheVariables>(variables: CreateQueryCacheVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      data: variables.input.data && (JSON.stringify(variables.input.data as any) as unknown as Scalars['AWSJSON']),
      error: variables.input.error && (JSON.stringify(variables.input.error as any) as unknown as Scalars['AWSJSON']),
    },
  } as unknown as TInput);

/**
 * Output transformer function for `CreateQueryCache`.
 * It extracts the `createQueryCache` field from the result and transforms it into a `QueryCache` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateQueryCache - The data returned from the GraphQL server
 * @returns QueryCache - The transformed data
 */
export const CreateQueryCacheOutputFn = <TOutput = QueryCache>({ createQueryCache }: CreateQueryCache) =>
  createQueryCache &&
  ({
    ...createQueryCache,
    data: createQueryCache.data && (JSON.parse(createQueryCache.data as any) as unknown as Scalars['AWSJSON']),
    error: createQueryCache.error && (JSON.parse(createQueryCache.error as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `CreateQueryCache`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateQueryCacheInput` and `CreateQueryCacheOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateQueryCacheFetcher = <TOutput = QueryCache, TInput = CreateQueryCacheVariables>(
  variables: CreateQueryCacheVariables,
  options?: RequestInit['headers'],
  document = CreateQueryCacheDocument,
  outputFn = CreateQueryCacheOutputFn,
  inputFn = CreateQueryCacheInputFn,
) =>
  fetcher<CreateQueryCache, CreateQueryCacheVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateQueryCache`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createQueryCache = (variables: CreateQueryCacheVariables) => CreateQueryCacheFetcher(variables)();

export const UpdateQueryCacheDocument = `
    mutation UpdateQueryCache($input: UpdateQueryCacheInput!, $condition: ModelQueryCacheConditionInput) {
  updateQueryCache(input: $input, condition: $condition) {
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

/**
 * Key maker function for `UpdateQueryCache`.
 */
export const UpdateQueryCacheKeys = () => ['UpdateQueryCache'];

/**
 * Input transformer function for `UpdateQueryCache`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateQueryCacheVariables` - The original variables
 * @returns `UpdateQueryCacheVariables` - The transformed variables
 */
export const UpdateQueryCacheInputFn = <TInput = UpdateQueryCacheVariables>(variables: UpdateQueryCacheVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      data: variables.input.data && (JSON.stringify(variables.input.data as any) as unknown as Scalars['AWSJSON']),
      error: variables.input.error && (JSON.stringify(variables.input.error as any) as unknown as Scalars['AWSJSON']),
    },
  } as unknown as TInput);

/**
 * Output transformer function for `UpdateQueryCache`.
 * It extracts the `updateQueryCache` field from the result and transforms it into a `QueryCache` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateQueryCache - The data returned from the GraphQL server
 * @returns QueryCache - The transformed data
 */
export const UpdateQueryCacheOutputFn = <TOutput = QueryCache>({ updateQueryCache }: UpdateQueryCache) =>
  updateQueryCache &&
  ({
    ...updateQueryCache,
    data: updateQueryCache.data && (JSON.parse(updateQueryCache.data as any) as unknown as Scalars['AWSJSON']),
    error: updateQueryCache.error && (JSON.parse(updateQueryCache.error as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `UpdateQueryCache`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateQueryCacheInput` and `UpdateQueryCacheOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateQueryCacheFetcher = <TOutput = QueryCache, TInput = UpdateQueryCacheVariables>(
  variables: UpdateQueryCacheVariables,
  options?: RequestInit['headers'],
  document = UpdateQueryCacheDocument,
  outputFn = UpdateQueryCacheOutputFn,
  inputFn = UpdateQueryCacheInputFn,
) =>
  fetcher<UpdateQueryCache, UpdateQueryCacheVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateQueryCache`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateQueryCache = (variables: UpdateQueryCacheVariables) => UpdateQueryCacheFetcher(variables)();

export const DeleteQueryCacheDocument = `
    mutation DeleteQueryCache($input: DeleteQueryCacheInput!, $condition: ModelQueryCacheConditionInput) {
  deleteQueryCache(input: $input, condition: $condition) {
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

/**
 * Key maker function for `DeleteQueryCache`.
 */
export const DeleteQueryCacheKeys = () => ['DeleteQueryCache'];

/**
 * Input transformer function for `DeleteQueryCache`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteQueryCacheVariables` - The original variables
 * @returns `DeleteQueryCacheVariables` - The transformed variables
 */
export const DeleteQueryCacheInputFn = <TInput = DeleteQueryCacheVariables>(variables: DeleteQueryCacheVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeleteQueryCache`.
 * It extracts the `deleteQueryCache` field from the result and transforms it into a `QueryCache` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteQueryCache - The data returned from the GraphQL server
 * @returns QueryCache - The transformed data
 */
export const DeleteQueryCacheOutputFn = <TOutput = QueryCache>({ deleteQueryCache }: DeleteQueryCache) =>
  deleteQueryCache &&
  ({
    ...deleteQueryCache,
    data: deleteQueryCache.data && (JSON.parse(deleteQueryCache.data as any) as unknown as Scalars['AWSJSON']),
    error: deleteQueryCache.error && (JSON.parse(deleteQueryCache.error as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `DeleteQueryCache`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteQueryCacheInput` and `DeleteQueryCacheOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteQueryCacheFetcher = <TOutput = QueryCache, TInput = DeleteQueryCacheVariables>(
  variables: DeleteQueryCacheVariables,
  options?: RequestInit['headers'],
  document = DeleteQueryCacheDocument,
  outputFn = DeleteQueryCacheOutputFn,
  inputFn = DeleteQueryCacheInputFn,
) =>
  fetcher<DeleteQueryCache, DeleteQueryCacheVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteQueryCache`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteQueryCache = (variables: DeleteQueryCacheVariables) => DeleteQueryCacheFetcher(variables)();

export const CreateConnectorDocument = `
    mutation CreateConnector($input: CreateConnectorInput!, $condition: ModelConnectorConditionInput) {
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

/**
 * Key maker function for `CreateConnector`.
 */
export const CreateConnectorKeys = () => ['CreateConnector'];

/**
 * Input transformer function for `CreateConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateConnectorVariables` - The original variables
 * @returns `CreateConnectorVariables` - The transformed variables
 */
export const CreateConnectorInputFn = <TInput = CreateConnectorVariables>(variables: CreateConnectorVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `CreateConnector`.
 * It extracts the `createConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const CreateConnectorOutputFn = <TOutput = Connector>({ createConnector }: CreateConnector) =>
  createConnector as unknown as TOutput;

/**
 * Fetcher function for `CreateConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateConnectorInput` and `CreateConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateConnectorFetcher = <TOutput = Connector, TInput = CreateConnectorVariables>(
  variables: CreateConnectorVariables,
  options?: RequestInit['headers'],
  document = CreateConnectorDocument,
  outputFn = CreateConnectorOutputFn,
  inputFn = CreateConnectorInputFn,
) =>
  fetcher<CreateConnector, CreateConnectorVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `CreateConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createConnector = (variables: CreateConnectorVariables) => CreateConnectorFetcher(variables)();

export const UpdateConnectorDocument = `
    mutation UpdateConnector($input: UpdateConnectorInput!, $condition: ModelConnectorConditionInput) {
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

/**
 * Key maker function for `UpdateConnector`.
 */
export const UpdateConnectorKeys = () => ['UpdateConnector'];

/**
 * Input transformer function for `UpdateConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateConnectorVariables` - The original variables
 * @returns `UpdateConnectorVariables` - The transformed variables
 */
export const UpdateConnectorInputFn = <TInput = UpdateConnectorVariables>(variables: UpdateConnectorVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `UpdateConnector`.
 * It extracts the `updateConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const UpdateConnectorOutputFn = <TOutput = Connector>({ updateConnector }: UpdateConnector) =>
  updateConnector as unknown as TOutput;

/**
 * Fetcher function for `UpdateConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateConnectorInput` and `UpdateConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateConnectorFetcher = <TOutput = Connector, TInput = UpdateConnectorVariables>(
  variables: UpdateConnectorVariables,
  options?: RequestInit['headers'],
  document = UpdateConnectorDocument,
  outputFn = UpdateConnectorOutputFn,
  inputFn = UpdateConnectorInputFn,
) =>
  fetcher<UpdateConnector, UpdateConnectorVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UpdateConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateConnector = (variables: UpdateConnectorVariables) => UpdateConnectorFetcher(variables)();

export const DeleteConnectorDocument = `
    mutation DeleteConnector($input: DeleteConnectorInput!, $condition: ModelConnectorConditionInput) {
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

/**
 * Key maker function for `DeleteConnector`.
 */
export const DeleteConnectorKeys = () => ['DeleteConnector'];

/**
 * Input transformer function for `DeleteConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteConnectorVariables` - The original variables
 * @returns `DeleteConnectorVariables` - The transformed variables
 */
export const DeleteConnectorInputFn = <TInput = DeleteConnectorVariables>(variables: DeleteConnectorVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeleteConnector`.
 * It extracts the `deleteConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const DeleteConnectorOutputFn = <TOutput = Connector>({ deleteConnector }: DeleteConnector) =>
  deleteConnector as unknown as TOutput;

/**
 * Fetcher function for `DeleteConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteConnectorInput` and `DeleteConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteConnectorFetcher = <TOutput = Connector, TInput = DeleteConnectorVariables>(
  variables: DeleteConnectorVariables,
  options?: RequestInit['headers'],
  document = DeleteConnectorDocument,
  outputFn = DeleteConnectorOutputFn,
  inputFn = DeleteConnectorInputFn,
) =>
  fetcher<DeleteConnector, DeleteConnectorVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteConnector = (variables: DeleteConnectorVariables) => DeleteConnectorFetcher(variables)();

export const CreatePerspectiveDocument = `
    mutation CreatePerspective($input: CreatePerspectiveInput!, $condition: ModelPerspectiveConditionInput) {
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

/**
 * Key maker function for `CreatePerspective`.
 */
export const CreatePerspectiveKeys = () => ['CreatePerspective'];

/**
 * Input transformer function for `CreatePerspective`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreatePerspectiveVariables` - The original variables
 * @returns `CreatePerspectiveVariables` - The transformed variables
 */
export const CreatePerspectiveInputFn = <TInput = CreatePerspectiveVariables>(variables: CreatePerspectiveVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `CreatePerspective`.
 * It extracts the `createPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreatePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const CreatePerspectiveOutputFn = <TOutput = Perspective>({ createPerspective }: CreatePerspective) =>
  createPerspective as unknown as TOutput;

/**
 * Fetcher function for `CreatePerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreatePerspectiveInput` and `CreatePerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreatePerspectiveFetcher = <TOutput = Perspective, TInput = CreatePerspectiveVariables>(
  variables: CreatePerspectiveVariables,
  options?: RequestInit['headers'],
  document = CreatePerspectiveDocument,
  outputFn = CreatePerspectiveOutputFn,
  inputFn = CreatePerspectiveInputFn,
) =>
  fetcher<CreatePerspective, CreatePerspectiveVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreatePerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createPerspective = (variables: CreatePerspectiveVariables) => CreatePerspectiveFetcher(variables)();

export const UpdatePerspectiveDocument = `
    mutation UpdatePerspective($input: UpdatePerspectiveInput!, $condition: ModelPerspectiveConditionInput) {
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

/**
 * Key maker function for `UpdatePerspective`.
 */
export const UpdatePerspectiveKeys = () => ['UpdatePerspective'];

/**
 * Input transformer function for `UpdatePerspective`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdatePerspectiveVariables` - The original variables
 * @returns `UpdatePerspectiveVariables` - The transformed variables
 */
export const UpdatePerspectiveInputFn = <TInput = UpdatePerspectiveVariables>(variables: UpdatePerspectiveVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `UpdatePerspective`.
 * It extracts the `updatePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdatePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const UpdatePerspectiveOutputFn = <TOutput = Perspective>({ updatePerspective }: UpdatePerspective) =>
  updatePerspective as unknown as TOutput;

/**
 * Fetcher function for `UpdatePerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdatePerspectiveInput` and `UpdatePerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdatePerspectiveFetcher = <TOutput = Perspective, TInput = UpdatePerspectiveVariables>(
  variables: UpdatePerspectiveVariables,
  options?: RequestInit['headers'],
  document = UpdatePerspectiveDocument,
  outputFn = UpdatePerspectiveOutputFn,
  inputFn = UpdatePerspectiveInputFn,
) =>
  fetcher<UpdatePerspective, UpdatePerspectiveVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdatePerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updatePerspective = (variables: UpdatePerspectiveVariables) => UpdatePerspectiveFetcher(variables)();

export const DeletePerspectiveDocument = `
    mutation DeletePerspective($input: DeletePerspectiveInput!, $condition: ModelPerspectiveConditionInput) {
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

/**
 * Key maker function for `DeletePerspective`.
 */
export const DeletePerspectiveKeys = () => ['DeletePerspective'];

/**
 * Input transformer function for `DeletePerspective`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeletePerspectiveVariables` - The original variables
 * @returns `DeletePerspectiveVariables` - The transformed variables
 */
export const DeletePerspectiveInputFn = <TInput = DeletePerspectiveVariables>(variables: DeletePerspectiveVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeletePerspective`.
 * It extracts the `deletePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeletePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const DeletePerspectiveOutputFn = <TOutput = Perspective>({ deletePerspective }: DeletePerspective) =>
  deletePerspective as unknown as TOutput;

/**
 * Fetcher function for `DeletePerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeletePerspectiveInput` and `DeletePerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeletePerspectiveFetcher = <TOutput = Perspective, TInput = DeletePerspectiveVariables>(
  variables: DeletePerspectiveVariables,
  options?: RequestInit['headers'],
  document = DeletePerspectiveDocument,
  outputFn = DeletePerspectiveOutputFn,
  inputFn = DeletePerspectiveInputFn,
) =>
  fetcher<DeletePerspective, DeletePerspectiveVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeletePerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deletePerspective = (variables: DeletePerspectiveVariables) => DeletePerspectiveFetcher(variables)();

export const CreateSchemaDocument = `
    mutation CreateSchema($input: CreateSchemaInput!, $condition: ModelSchemaConditionInput) {
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

/**
 * Key maker function for `CreateSchema`.
 */
export const CreateSchemaKeys = () => ['CreateSchema'];

/**
 * Input transformer function for `CreateSchema`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateSchemaVariables` - The original variables
 * @returns `CreateSchemaVariables` - The transformed variables
 */
export const CreateSchemaInputFn = <TInput = CreateSchemaVariables>(variables: CreateSchemaVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `CreateSchema`.
 * It extracts the `createSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const CreateSchemaOutputFn = <TOutput = Schema>({ createSchema }: CreateSchema) =>
  createSchema as unknown as TOutput;

/**
 * Fetcher function for `CreateSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateSchemaInput` and `CreateSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateSchemaFetcher = <TOutput = Schema, TInput = CreateSchemaVariables>(
  variables: CreateSchemaVariables,
  options?: RequestInit['headers'],
  document = CreateSchemaDocument,
  outputFn = CreateSchemaOutputFn,
  inputFn = CreateSchemaInputFn,
) => fetcher<CreateSchema, CreateSchemaVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `CreateSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createSchema = (variables: CreateSchemaVariables) => CreateSchemaFetcher(variables)();

export const UpdateSchemaDocument = `
    mutation UpdateSchema($input: UpdateSchemaInput!, $condition: ModelSchemaConditionInput) {
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

/**
 * Key maker function for `UpdateSchema`.
 */
export const UpdateSchemaKeys = () => ['UpdateSchema'];

/**
 * Input transformer function for `UpdateSchema`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateSchemaVariables` - The original variables
 * @returns `UpdateSchemaVariables` - The transformed variables
 */
export const UpdateSchemaInputFn = <TInput = UpdateSchemaVariables>(variables: UpdateSchemaVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `UpdateSchema`.
 * It extracts the `updateSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const UpdateSchemaOutputFn = <TOutput = Schema>({ updateSchema }: UpdateSchema) =>
  updateSchema as unknown as TOutput;

/**
 * Fetcher function for `UpdateSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateSchemaInput` and `UpdateSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateSchemaFetcher = <TOutput = Schema, TInput = UpdateSchemaVariables>(
  variables: UpdateSchemaVariables,
  options?: RequestInit['headers'],
  document = UpdateSchemaDocument,
  outputFn = UpdateSchemaOutputFn,
  inputFn = UpdateSchemaInputFn,
) => fetcher<UpdateSchema, UpdateSchemaVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UpdateSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateSchema = (variables: UpdateSchemaVariables) => UpdateSchemaFetcher(variables)();

export const DeleteSchemaDocument = `
    mutation DeleteSchema($input: DeleteSchemaInput!, $condition: ModelSchemaConditionInput) {
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

/**
 * Key maker function for `DeleteSchema`.
 */
export const DeleteSchemaKeys = () => ['DeleteSchema'];

/**
 * Input transformer function for `DeleteSchema`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteSchemaVariables` - The original variables
 * @returns `DeleteSchemaVariables` - The transformed variables
 */
export const DeleteSchemaInputFn = <TInput = DeleteSchemaVariables>(variables: DeleteSchemaVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeleteSchema`.
 * It extracts the `deleteSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const DeleteSchemaOutputFn = <TOutput = Schema>({ deleteSchema }: DeleteSchema) =>
  deleteSchema as unknown as TOutput;

/**
 * Fetcher function for `DeleteSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteSchemaInput` and `DeleteSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteSchemaFetcher = <TOutput = Schema, TInput = DeleteSchemaVariables>(
  variables: DeleteSchemaVariables,
  options?: RequestInit['headers'],
  document = DeleteSchemaDocument,
  outputFn = DeleteSchemaOutputFn,
  inputFn = DeleteSchemaInputFn,
) => fetcher<DeleteSchema, DeleteSchemaVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteSchema = (variables: DeleteSchemaVariables) => DeleteSchemaFetcher(variables)();

export const CreateTenantDocument = `
    mutation CreateTenant($input: CreateTenantInput!, $condition: ModelTenantConditionInput) {
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

/**
 * Key maker function for `CreateTenant`.
 */
export const CreateTenantKeys = () => ['CreateTenant'];

/**
 * Input transformer function for `CreateTenant`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateTenantVariables` - The original variables
 * @returns `CreateTenantVariables` - The transformed variables
 */
export const CreateTenantInputFn = <TInput = CreateTenantVariables>(variables: CreateTenantVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `CreateTenant`.
 * It extracts the `createTenant` field from the result and transforms it into a `Tenant` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateTenant - The data returned from the GraphQL server
 * @returns Tenant - The transformed data
 */
export const CreateTenantOutputFn = <TOutput = Tenant>({ createTenant }: CreateTenant) =>
  createTenant as unknown as TOutput;

/**
 * Fetcher function for `CreateTenant`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateTenantInput` and `CreateTenantOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateTenantFetcher = <TOutput = Tenant, TInput = CreateTenantVariables>(
  variables: CreateTenantVariables,
  options?: RequestInit['headers'],
  document = CreateTenantDocument,
  outputFn = CreateTenantOutputFn,
  inputFn = CreateTenantInputFn,
) => fetcher<CreateTenant, CreateTenantVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `CreateTenant`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createTenant = (variables: CreateTenantVariables) => CreateTenantFetcher(variables)();

export const UpdateTenantDocument = `
    mutation UpdateTenant($input: UpdateTenantInput!, $condition: ModelTenantConditionInput) {
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

/**
 * Key maker function for `UpdateTenant`.
 */
export const UpdateTenantKeys = () => ['UpdateTenant'];

/**
 * Input transformer function for `UpdateTenant`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateTenantVariables` - The original variables
 * @returns `UpdateTenantVariables` - The transformed variables
 */
export const UpdateTenantInputFn = <TInput = UpdateTenantVariables>(variables: UpdateTenantVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `UpdateTenant`.
 * It extracts the `updateTenant` field from the result and transforms it into a `Tenant` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateTenant - The data returned from the GraphQL server
 * @returns Tenant - The transformed data
 */
export const UpdateTenantOutputFn = <TOutput = Tenant>({ updateTenant }: UpdateTenant) =>
  updateTenant as unknown as TOutput;

/**
 * Fetcher function for `UpdateTenant`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateTenantInput` and `UpdateTenantOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateTenantFetcher = <TOutput = Tenant, TInput = UpdateTenantVariables>(
  variables: UpdateTenantVariables,
  options?: RequestInit['headers'],
  document = UpdateTenantDocument,
  outputFn = UpdateTenantOutputFn,
  inputFn = UpdateTenantInputFn,
) => fetcher<UpdateTenant, UpdateTenantVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UpdateTenant`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateTenant = (variables: UpdateTenantVariables) => UpdateTenantFetcher(variables)();

export const DeleteTenantDocument = `
    mutation DeleteTenant($input: DeleteTenantInput!, $condition: ModelTenantConditionInput) {
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

/**
 * Key maker function for `DeleteTenant`.
 */
export const DeleteTenantKeys = () => ['DeleteTenant'];

/**
 * Input transformer function for `DeleteTenant`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteTenantVariables` - The original variables
 * @returns `DeleteTenantVariables` - The transformed variables
 */
export const DeleteTenantInputFn = <TInput = DeleteTenantVariables>(variables: DeleteTenantVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeleteTenant`.
 * It extracts the `deleteTenant` field from the result and transforms it into a `Tenant` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteTenant - The data returned from the GraphQL server
 * @returns Tenant - The transformed data
 */
export const DeleteTenantOutputFn = <TOutput = Tenant>({ deleteTenant }: DeleteTenant) =>
  deleteTenant as unknown as TOutput;

/**
 * Fetcher function for `DeleteTenant`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteTenantInput` and `DeleteTenantOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteTenantFetcher = <TOutput = Tenant, TInput = DeleteTenantVariables>(
  variables: DeleteTenantVariables,
  options?: RequestInit['headers'],
  document = DeleteTenantDocument,
  outputFn = DeleteTenantOutputFn,
  inputFn = DeleteTenantInputFn,
) => fetcher<DeleteTenant, DeleteTenantVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteTenant`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteTenant = (variables: DeleteTenantVariables) => DeleteTenantFetcher(variables)();

export const CreateTransformationDocument = `
    mutation CreateTransformation($input: CreateTransformationInput!, $condition: ModelTransformationConditionInput) {
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

/**
 * Key maker function for `CreateTransformation`.
 */
export const CreateTransformationKeys = () => ['CreateTransformation'];

/**
 * Input transformer function for `CreateTransformation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateTransformationVariables` - The original variables
 * @returns `CreateTransformationVariables` - The transformed variables
 */
export const CreateTransformationInputFn = <TInput = CreateTransformationVariables>(
  variables: CreateTransformationVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `CreateTransformation`.
 * It extracts the `createTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const CreateTransformationOutputFn = <TOutput = Transformation>({
  createTransformation,
}: CreateTransformation) => createTransformation as unknown as TOutput;

/**
 * Fetcher function for `CreateTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateTransformationInput` and `CreateTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateTransformationFetcher = <TOutput = Transformation, TInput = CreateTransformationVariables>(
  variables: CreateTransformationVariables,
  options?: RequestInit['headers'],
  document = CreateTransformationDocument,
  outputFn = CreateTransformationOutputFn,
  inputFn = CreateTransformationInputFn,
) =>
  fetcher<CreateTransformation, CreateTransformationVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateTransformation`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createTransformation = (variables: CreateTransformationVariables) =>
  CreateTransformationFetcher(variables)();

export const UpdateTransformationDocument = `
    mutation UpdateTransformation($input: UpdateTransformationInput!, $condition: ModelTransformationConditionInput) {
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

/**
 * Key maker function for `UpdateTransformation`.
 */
export const UpdateTransformationKeys = () => ['UpdateTransformation'];

/**
 * Input transformer function for `UpdateTransformation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateTransformationVariables` - The original variables
 * @returns `UpdateTransformationVariables` - The transformed variables
 */
export const UpdateTransformationInputFn = <TInput = UpdateTransformationVariables>(
  variables: UpdateTransformationVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `UpdateTransformation`.
 * It extracts the `updateTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const UpdateTransformationOutputFn = <TOutput = Transformation>({
  updateTransformation,
}: UpdateTransformation) => updateTransformation as unknown as TOutput;

/**
 * Fetcher function for `UpdateTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateTransformationInput` and `UpdateTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateTransformationFetcher = <TOutput = Transformation, TInput = UpdateTransformationVariables>(
  variables: UpdateTransformationVariables,
  options?: RequestInit['headers'],
  document = UpdateTransformationDocument,
  outputFn = UpdateTransformationOutputFn,
  inputFn = UpdateTransformationInputFn,
) =>
  fetcher<UpdateTransformation, UpdateTransformationVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateTransformation`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateTransformation = (variables: UpdateTransformationVariables) =>
  UpdateTransformationFetcher(variables)();

export const DeleteTransformationDocument = `
    mutation DeleteTransformation($input: DeleteTransformationInput!, $condition: ModelTransformationConditionInput) {
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

/**
 * Key maker function for `DeleteTransformation`.
 */
export const DeleteTransformationKeys = () => ['DeleteTransformation'];

/**
 * Input transformer function for `DeleteTransformation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteTransformationVariables` - The original variables
 * @returns `DeleteTransformationVariables` - The transformed variables
 */
export const DeleteTransformationInputFn = <TInput = DeleteTransformationVariables>(
  variables: DeleteTransformationVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `DeleteTransformation`.
 * It extracts the `deleteTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const DeleteTransformationOutputFn = <TOutput = Transformation>({
  deleteTransformation,
}: DeleteTransformation) => deleteTransformation as unknown as TOutput;

/**
 * Fetcher function for `DeleteTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteTransformationInput` and `DeleteTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteTransformationFetcher = <TOutput = Transformation, TInput = DeleteTransformationVariables>(
  variables: DeleteTransformationVariables,
  options?: RequestInit['headers'],
  document = DeleteTransformationDocument,
  outputFn = DeleteTransformationOutputFn,
  inputFn = DeleteTransformationInputFn,
) =>
  fetcher<DeleteTransformation, DeleteTransformationVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteTransformation`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteTransformation = (variables: DeleteTransformationVariables) =>
  DeleteTransformationFetcher(variables)();

export const ExecutePerspectiveDocument = `
    mutation ExecutePerspective($input: ExecutePerspectiveInput!) {
  executePerspective(input: $input) {
    data
    updatedAt
  }
}
    `;

/**
 * Key maker function for `ExecutePerspective`.
 */
export const ExecutePerspectiveKeys = () => ['ExecutePerspective'];

/**
 * Input transformer function for `ExecutePerspective`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ExecutePerspectiveVariables` - The original variables
 * @returns `ExecutePerspectiveVariables` - The transformed variables
 */
export const ExecutePerspectiveInputFn = <TInput = ExecutePerspectiveVariables>(
  variables: ExecutePerspectiveVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ExecutePerspective`.
 * It extracts the `executePerspective` field from the result and transforms it into a `ExecutePerspectiveResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ExecutePerspective - The data returned from the GraphQL server
 * @returns ExecutePerspectiveResult - The transformed data
 */
export const ExecutePerspectiveOutputFn = <TOutput = ExecutePerspectiveResult>({
  executePerspective,
}: ExecutePerspective) =>
  executePerspective &&
  ({
    ...executePerspective,
    data: executePerspective.data && (JSON.parse(executePerspective.data as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `ExecutePerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ExecutePerspectiveInput` and `ExecutePerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ExecutePerspectiveFetcher = <TOutput = ExecutePerspectiveResult, TInput = ExecutePerspectiveVariables>(
  variables: ExecutePerspectiveVariables,
  options?: RequestInit['headers'],
  document = ExecutePerspectiveDocument,
  outputFn = ExecutePerspectiveOutputFn,
  inputFn = ExecutePerspectiveInputFn,
) =>
  fetcher<ExecutePerspective, ExecutePerspectiveVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ExecutePerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const executePerspective = (variables: ExecutePerspectiveVariables) => ExecutePerspectiveFetcher(variables)();

export const AuthorizeConnectorDocument = `
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

/**
 * Key maker function for `AuthorizeConnector`.
 */
export const AuthorizeConnectorKeys = () => ['AuthorizeConnector'];

/**
 * Input transformer function for `AuthorizeConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `AuthorizeConnectorVariables` - The original variables
 * @returns `AuthorizeConnectorVariables` - The transformed variables
 */
export const AuthorizeConnectorInputFn = <TInput = AuthorizeConnectorVariables>(
  variables: AuthorizeConnectorVariables,
) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      plainCredentials:
        variables.input.plainCredentials &&
        (JSON.stringify(variables.input.plainCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as unknown as TInput);

/**
 * Output transformer function for `AuthorizeConnector`.
 * It extracts the `authorizeConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data AuthorizeConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const AuthorizeConnectorOutputFn = <TOutput = Connector>({ authorizeConnector }: AuthorizeConnector) =>
  authorizeConnector as unknown as TOutput;

/**
 * Fetcher function for `AuthorizeConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `AuthorizeConnectorInput` and `AuthorizeConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const AuthorizeConnectorFetcher = <TOutput = Connector, TInput = AuthorizeConnectorVariables>(
  variables: AuthorizeConnectorVariables,
  options?: RequestInit['headers'],
  document = AuthorizeConnectorDocument,
  outputFn = AuthorizeConnectorOutputFn,
  inputFn = AuthorizeConnectorInputFn,
) =>
  fetcher<AuthorizeConnector, AuthorizeConnectorVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `AuthorizeConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const authorizeConnector = (variables: AuthorizeConnectorVariables) => AuthorizeConnectorFetcher(variables)();

export const ActivateConnectorDocument = `
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

/**
 * Key maker function for `ActivateConnector`.
 */
export const ActivateConnectorKeys = () => ['ActivateConnector'];

/**
 * Input transformer function for `ActivateConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ActivateConnectorVariables` - The original variables
 * @returns `ActivateConnectorVariables` - The transformed variables
 */
export const ActivateConnectorInputFn = <TInput = ActivateConnectorVariables>(variables: ActivateConnectorVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ActivateConnector`.
 * It extracts the `activateConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ActivateConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const ActivateConnectorOutputFn = <TOutput = Connector>({ activateConnector }: ActivateConnector) =>
  activateConnector as unknown as TOutput;

/**
 * Fetcher function for `ActivateConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ActivateConnectorInput` and `ActivateConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ActivateConnectorFetcher = <TOutput = Connector, TInput = ActivateConnectorVariables>(
  variables: ActivateConnectorVariables,
  options?: RequestInit['headers'],
  document = ActivateConnectorDocument,
  outputFn = ActivateConnectorOutputFn,
  inputFn = ActivateConnectorInputFn,
) =>
  fetcher<ActivateConnector, ActivateConnectorVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ActivateConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const activateConnector = (variables: ActivateConnectorVariables) => ActivateConnectorFetcher(variables)();

export const ActivateTransformationsDocument = `
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

/**
 * Key maker function for `ActivateTransformations`.
 */
export const ActivateTransformationsKeys = () => ['ActivateTransformations'];

/**
 * Input transformer function for `ActivateTransformations`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ActivateTransformationsVariables` - The original variables
 * @returns `ActivateTransformationsVariables` - The transformed variables
 */
export const ActivateTransformationsInputFn = <TInput = ActivateTransformationsVariables>(
  variables: ActivateTransformationsVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ActivateTransformations`.
 * It extracts the `activateTransformations` field from the result and transforms it into a `TransformationResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ActivateTransformations - The data returned from the GraphQL server
 * @returns TransformationResult - The transformed data
 */
export const ActivateTransformationsOutputFn = <TOutput = TransformationResult>({
  activateTransformations,
}: ActivateTransformations) => activateTransformations as unknown as TOutput;

/**
 * Fetcher function for `ActivateTransformations`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ActivateTransformationsInput` and `ActivateTransformationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ActivateTransformationsFetcher = <
  TOutput = TransformationResult,
  TInput = ActivateTransformationsVariables,
>(
  variables: ActivateTransformationsVariables,
  options?: RequestInit['headers'],
  document = ActivateTransformationsDocument,
  outputFn = ActivateTransformationsOutputFn,
  inputFn = ActivateTransformationsInputFn,
) =>
  fetcher<ActivateTransformations, ActivateTransformationsVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ActivateTransformations`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const activateTransformations = (variables: ActivateTransformationsVariables) =>
  ActivateTransformationsFetcher(variables)();

export const SetupTransformationsDocument = `
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

/**
 * Key maker function for `SetupTransformations`.
 */
export const SetupTransformationsKeys = () => ['SetupTransformations'];

/**
 * Input transformer function for `SetupTransformations`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `SetupTransformationsVariables` - The original variables
 * @returns `SetupTransformationsVariables` - The transformed variables
 */
export const SetupTransformationsInputFn = <TInput = SetupTransformationsVariables>(
  variables: SetupTransformationsVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `SetupTransformations`.
 * It extracts the `setupTransformations` field from the result and transforms it into a `TransformationResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data SetupTransformations - The data returned from the GraphQL server
 * @returns TransformationResult - The transformed data
 */
export const SetupTransformationsOutputFn = <TOutput = TransformationResult>({
  setupTransformations,
}: SetupTransformations) => setupTransformations as unknown as TOutput;

/**
 * Fetcher function for `SetupTransformations`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `SetupTransformationsInput` and `SetupTransformationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const SetupTransformationsFetcher = <TOutput = TransformationResult, TInput = SetupTransformationsVariables>(
  variables: SetupTransformationsVariables,
  options?: RequestInit['headers'],
  document = SetupTransformationsDocument,
  outputFn = SetupTransformationsOutputFn,
  inputFn = SetupTransformationsInputFn,
) =>
  fetcher<SetupTransformations, SetupTransformationsVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `SetupTransformations`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const setupTransformations = (variables: SetupTransformationsVariables) =>
  SetupTransformationsFetcher(variables)();

export const UploadGraphFileDocument = `
    mutation UploadGraphFile($input: UploadGraphFileInput!, $tenantID: ID!, $graphID: String!) {
  uploadGraphFile(input: $input, tenantID: $tenantID, graphID: $graphID) {
    signedUploadUrl
    objectKey
    expiresIn
  }
}
    `;

/**
 * Key maker function for `UploadGraphFile`.
 */
export const UploadGraphFileKeys = () => ['UploadGraphFile'];

/**
 * Input transformer function for `UploadGraphFile`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UploadGraphFileVariables` - The original variables
 * @returns `UploadGraphFileVariables` - The transformed variables
 */
export const UploadGraphFileInputFn = <TInput = UploadGraphFileVariables>(variables: UploadGraphFileVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `UploadGraphFile`.
 * It extracts the `uploadGraphFile` field from the result and transforms it into a `UploadGraphFileResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UploadGraphFile - The data returned from the GraphQL server
 * @returns UploadGraphFileResult - The transformed data
 */
export const UploadGraphFileOutputFn = <TOutput = UploadGraphFileResult>({ uploadGraphFile }: UploadGraphFile) =>
  uploadGraphFile as unknown as TOutput;

/**
 * Fetcher function for `UploadGraphFile`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UploadGraphFileInput` and `UploadGraphFileOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UploadGraphFileFetcher = <TOutput = UploadGraphFileResult, TInput = UploadGraphFileVariables>(
  variables: UploadGraphFileVariables,
  options?: RequestInit['headers'],
  document = UploadGraphFileDocument,
  outputFn = UploadGraphFileOutputFn,
  inputFn = UploadGraphFileInputFn,
) =>
  fetcher<UploadGraphFile, UploadGraphFileVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UploadGraphFile`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const uploadGraphFile = (variables: UploadGraphFileVariables) => UploadGraphFileFetcher(variables)();

export const DownloadGraphFileDocument = `
    mutation DownloadGraphFile($input: DownloadGraphFileInput!, $tenantID: ID!, $graphID: String!) {
  downloadGraphFile(input: $input, tenantID: $tenantID, graphID: $graphID) {
    signedDownloadUrl
    expiresIn
  }
}
    `;

/**
 * Key maker function for `DownloadGraphFile`.
 */
export const DownloadGraphFileKeys = () => ['DownloadGraphFile'];

/**
 * Input transformer function for `DownloadGraphFile`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DownloadGraphFileVariables` - The original variables
 * @returns `DownloadGraphFileVariables` - The transformed variables
 */
export const DownloadGraphFileInputFn = <TInput = DownloadGraphFileVariables>(variables: DownloadGraphFileVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DownloadGraphFile`.
 * It extracts the `downloadGraphFile` field from the result and transforms it into a `DownloadGraphFileResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DownloadGraphFile - The data returned from the GraphQL server
 * @returns DownloadGraphFileResult - The transformed data
 */
export const DownloadGraphFileOutputFn = <TOutput = DownloadGraphFileResult>({
  downloadGraphFile,
}: DownloadGraphFile) => downloadGraphFile as unknown as TOutput;

/**
 * Fetcher function for `DownloadGraphFile`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DownloadGraphFileInput` and `DownloadGraphFileOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DownloadGraphFileFetcher = <TOutput = DownloadGraphFileResult, TInput = DownloadGraphFileVariables>(
  variables: DownloadGraphFileVariables,
  options?: RequestInit['headers'],
  document = DownloadGraphFileDocument,
  outputFn = DownloadGraphFileOutputFn,
  inputFn = DownloadGraphFileInputFn,
) =>
  fetcher<DownloadGraphFile, DownloadGraphFileVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DownloadGraphFile`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const downloadGraphFile = (variables: DownloadGraphFileVariables) => DownloadGraphFileFetcher(variables)();

export const DeleteGraphFileDocument = `
    mutation DeleteGraphFile($input: DeleteGraphFileInput!, $tenantID: ID!, $graphID: String!) {
  deleteGraphFile(input: $input, tenantID: $tenantID, graphID: $graphID) {
    objectKey
    nodeID
  }
}
    `;

/**
 * Key maker function for `DeleteGraphFile`.
 */
export const DeleteGraphFileKeys = () => ['DeleteGraphFile'];

/**
 * Input transformer function for `DeleteGraphFile`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteGraphFileVariables` - The original variables
 * @returns `DeleteGraphFileVariables` - The transformed variables
 */
export const DeleteGraphFileInputFn = <TInput = DeleteGraphFileVariables>(variables: DeleteGraphFileVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeleteGraphFile`.
 * It extracts the `deleteGraphFile` field from the result and transforms it into a `DeleteGraphFileResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteGraphFile - The data returned from the GraphQL server
 * @returns DeleteGraphFileResult - The transformed data
 */
export const DeleteGraphFileOutputFn = <TOutput = DeleteGraphFileResult>({ deleteGraphFile }: DeleteGraphFile) =>
  deleteGraphFile as unknown as TOutput;

/**
 * Fetcher function for `DeleteGraphFile`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteGraphFileInput` and `DeleteGraphFileOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteGraphFileFetcher = <TOutput = DeleteGraphFileResult, TInput = DeleteGraphFileVariables>(
  variables: DeleteGraphFileVariables,
  options?: RequestInit['headers'],
  document = DeleteGraphFileDocument,
  outputFn = DeleteGraphFileOutputFn,
  inputFn = DeleteGraphFileInputFn,
) =>
  fetcher<DeleteGraphFile, DeleteGraphFileVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteGraphFile`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteGraphFile = (variables: DeleteGraphFileVariables) => DeleteGraphFileFetcher(variables)();

export const RunConnectorDocument = `
    mutation RunConnector($input: RunConnectorInput!) {
  runConnector(input: $input)
}
    `;

/**
 * Key maker function for `RunConnector`.
 */
export const RunConnectorKeys = () => ['RunConnector'];

/**
 * Input transformer function for `RunConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `RunConnectorVariables` - The original variables
 * @returns `RunConnectorVariables` - The transformed variables
 */
export const RunConnectorInputFn = <TInput = RunConnectorVariables>(variables: RunConnectorVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `RunConnector`.
 * It extracts the `runConnector` field from the result and transforms it into a `Scalars['AWSJSON']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RunConnector - The data returned from the GraphQL server
 * @returns Scalars['AWSJSON'] - The transformed data
 */
export const RunConnectorOutputFn = <TOutput = Scalars['AWSJSON']>({ runConnector }: RunConnector) =>
  JSON.parse(runConnector as any) as unknown as TOutput;

/**
 * Fetcher function for `RunConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `RunConnectorInput` and `RunConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const RunConnectorFetcher = <TOutput = Scalars['AWSJSON'], TInput = RunConnectorVariables>(
  variables: RunConnectorVariables,
  options?: RequestInit['headers'],
  document = RunConnectorDocument,
  outputFn = RunConnectorOutputFn,
  inputFn = RunConnectorInputFn,
) => fetcher<RunConnector, RunConnectorVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `RunConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const runConnector = (variables: RunConnectorVariables) => RunConnectorFetcher(variables)();

export const CreateNodeDocument = `
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

/**
 * Key maker function for `CreateNode`.
 */
export const CreateNodeKeys = () => ['CreateNode'];

/**
 * Input transformer function for `CreateNode`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateNodeVariables` - The original variables
 * @returns `CreateNodeVariables` - The transformed variables
 */
export const CreateNodeInputFn = <TInput = CreateNodeVariables>(variables: CreateNodeVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as unknown as TInput);

/**
 * Output transformer function for `CreateNode`.
 * It extracts the `createNode` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateNode - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const CreateNodeOutputFn = <TOutput = GraphResult>({ createNode }: CreateNode) =>
  createNode &&
  ({
    ...createNode,
    nodes: createNode.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: createNode.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `CreateNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateNodeInput` and `CreateNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateNodeFetcher = <TOutput = GraphResult, TInput = CreateNodeVariables>(
  variables: CreateNodeVariables,
  options?: RequestInit['headers'],
  document = CreateNodeDocument,
  outputFn = CreateNodeOutputFn,
  inputFn = CreateNodeInputFn,
) => fetcher<CreateNode, CreateNodeVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `CreateNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createNode = (variables: CreateNodeVariables) => CreateNodeFetcher(variables)();

export const UpdateNodeDocument = `
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

/**
 * Key maker function for `UpdateNode`.
 */
export const UpdateNodeKeys = () => ['UpdateNode'];

/**
 * Input transformer function for `UpdateNode`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateNodeVariables` - The original variables
 * @returns `UpdateNodeVariables` - The transformed variables
 */
export const UpdateNodeInputFn = <TInput = UpdateNodeVariables>(variables: UpdateNodeVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as unknown as TInput);

/**
 * Output transformer function for `UpdateNode`.
 * It extracts the `updateNode` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateNode - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const UpdateNodeOutputFn = <TOutput = GraphResult>({ updateNode }: UpdateNode) =>
  updateNode &&
  ({
    ...updateNode,
    nodes: updateNode.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: updateNode.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `UpdateNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateNodeInput` and `UpdateNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateNodeFetcher = <TOutput = GraphResult, TInput = UpdateNodeVariables>(
  variables: UpdateNodeVariables,
  options?: RequestInit['headers'],
  document = UpdateNodeDocument,
  outputFn = UpdateNodeOutputFn,
  inputFn = UpdateNodeInputFn,
) => fetcher<UpdateNode, UpdateNodeVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UpdateNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateNode = (variables: UpdateNodeVariables) => UpdateNodeFetcher(variables)();

export const DeleteNodeDocument = `
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

/**
 * Key maker function for `DeleteNode`.
 */
export const DeleteNodeKeys = () => ['DeleteNode'];

/**
 * Input transformer function for `DeleteNode`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteNodeVariables` - The original variables
 * @returns `DeleteNodeVariables` - The transformed variables
 */
export const DeleteNodeInputFn = <TInput = DeleteNodeVariables>(variables: DeleteNodeVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeleteNode`.
 * It extracts the `deleteNode` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteNode - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const DeleteNodeOutputFn = <TOutput = GraphResult>({ deleteNode }: DeleteNode) =>
  deleteNode &&
  ({
    ...deleteNode,
    nodes: deleteNode.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: deleteNode.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `DeleteNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteNodeInput` and `DeleteNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteNodeFetcher = <TOutput = GraphResult, TInput = DeleteNodeVariables>(
  variables: DeleteNodeVariables,
  options?: RequestInit['headers'],
  document = DeleteNodeDocument,
  outputFn = DeleteNodeOutputFn,
  inputFn = DeleteNodeInputFn,
) => fetcher<DeleteNode, DeleteNodeVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteNode = (variables: DeleteNodeVariables) => DeleteNodeFetcher(variables)();

export const CreateRelationshipDocument = `
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

/**
 * Key maker function for `CreateRelationship`.
 */
export const CreateRelationshipKeys = () => ['CreateRelationship'];

/**
 * Input transformer function for `CreateRelationship`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateRelationshipVariables` - The original variables
 * @returns `CreateRelationshipVariables` - The transformed variables
 */
export const CreateRelationshipInputFn = <TInput = CreateRelationshipVariables>(
  variables: CreateRelationshipVariables,
) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as unknown as TInput);

/**
 * Output transformer function for `CreateRelationship`.
 * It extracts the `createRelationship` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateRelationship - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const CreateRelationshipOutputFn = <TOutput = GraphResult>({ createRelationship }: CreateRelationship) =>
  createRelationship &&
  ({
    ...createRelationship,
    nodes: createRelationship.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: createRelationship.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `CreateRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateRelationshipInput` and `CreateRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateRelationshipFetcher = <TOutput = GraphResult, TInput = CreateRelationshipVariables>(
  variables: CreateRelationshipVariables,
  options?: RequestInit['headers'],
  document = CreateRelationshipDocument,
  outputFn = CreateRelationshipOutputFn,
  inputFn = CreateRelationshipInputFn,
) =>
  fetcher<CreateRelationship, CreateRelationshipVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createRelationship = (variables: CreateRelationshipVariables) => CreateRelationshipFetcher(variables)();

export const UpdateRelationshipDocument = `
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

/**
 * Key maker function for `UpdateRelationship`.
 */
export const UpdateRelationshipKeys = () => ['UpdateRelationship'];

/**
 * Input transformer function for `UpdateRelationship`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateRelationshipVariables` - The original variables
 * @returns `UpdateRelationshipVariables` - The transformed variables
 */
export const UpdateRelationshipInputFn = <TInput = UpdateRelationshipVariables>(
  variables: UpdateRelationshipVariables,
) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as unknown as TInput);

/**
 * Output transformer function for `UpdateRelationship`.
 * It extracts the `updateRelationship` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateRelationship - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const UpdateRelationshipOutputFn = <TOutput = GraphResult>({ updateRelationship }: UpdateRelationship) =>
  updateRelationship &&
  ({
    ...updateRelationship,
    nodes: updateRelationship.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: updateRelationship.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `UpdateRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateRelationshipInput` and `UpdateRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateRelationshipFetcher = <TOutput = GraphResult, TInput = UpdateRelationshipVariables>(
  variables: UpdateRelationshipVariables,
  options?: RequestInit['headers'],
  document = UpdateRelationshipDocument,
  outputFn = UpdateRelationshipOutputFn,
  inputFn = UpdateRelationshipInputFn,
) =>
  fetcher<UpdateRelationship, UpdateRelationshipVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateRelationship = (variables: UpdateRelationshipVariables) => UpdateRelationshipFetcher(variables)();

export const DeleteRelationshipDocument = `
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

/**
 * Key maker function for `DeleteRelationship`.
 */
export const DeleteRelationshipKeys = () => ['DeleteRelationship'];

/**
 * Input transformer function for `DeleteRelationship`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteRelationshipVariables` - The original variables
 * @returns `DeleteRelationshipVariables` - The transformed variables
 */
export const DeleteRelationshipInputFn = <TInput = DeleteRelationshipVariables>(
  variables: DeleteRelationshipVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `DeleteRelationship`.
 * It extracts the `deleteRelationship` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteRelationship - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const DeleteRelationshipOutputFn = <TOutput = GraphResult>({ deleteRelationship }: DeleteRelationship) =>
  deleteRelationship &&
  ({
    ...deleteRelationship,
    nodes: deleteRelationship.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: deleteRelationship.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `DeleteRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteRelationshipInput` and `DeleteRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteRelationshipFetcher = <TOutput = GraphResult, TInput = DeleteRelationshipVariables>(
  variables: DeleteRelationshipVariables,
  options?: RequestInit['headers'],
  document = DeleteRelationshipDocument,
  outputFn = DeleteRelationshipOutputFn,
  inputFn = DeleteRelationshipInputFn,
) =>
  fetcher<DeleteRelationship, DeleteRelationshipVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteRelationship = (variables: DeleteRelationshipVariables) => DeleteRelationshipFetcher(variables)();

export const FindUsersDocument = `
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

/**
 * Key maker function for `FindUsers`.
 */
export const FindUsersKeys = () => ['FindUsers'];

/**
 * Input transformer function for `FindUsers`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `FindUsersVariables` - The original variables
 * @returns `FindUsersVariables` - The transformed variables
 */
export const FindUsersInputFn = <TInput = FindUsersVariables>(variables: FindUsersVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `FindUsers`.
 * It extracts the `findUsers` field from the result and transforms it into a `CognitoUserList` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data FindUsers - The data returned from the GraphQL server
 * @returns CognitoUserList - The transformed data
 */
export const FindUsersOutputFn = <TOutput = CognitoUserList>({ findUsers }: FindUsers) =>
  findUsers &&
  ({
    ...findUsers,
    items: findUsers.items?.map((item) => ({
      ...item,
      attributes: item?.attributes && (JSON.parse(item?.attributes as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `FindUsers`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `FindUsersInput` and `FindUsersOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const FindUsersFetcher = <TOutput = CognitoUserList, TInput = FindUsersVariables>(
  variables: FindUsersVariables,
  options?: RequestInit['headers'],
  document = FindUsersDocument,
  outputFn = FindUsersOutputFn,
  inputFn = FindUsersInputFn,
) => fetcher<FindUsers, FindUsersVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `FindUsers`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const findUsers = (variables: FindUsersVariables) => FindUsersFetcher(variables)();

export const CreateUserDocument = `
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

/**
 * Key maker function for `CreateUser`.
 */
export const CreateUserKeys = () => ['CreateUser'];

/**
 * Input transformer function for `CreateUser`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateUserVariables` - The original variables
 * @returns `CreateUserVariables` - The transformed variables
 */
export const CreateUserInputFn = <TInput = CreateUserVariables>(variables: CreateUserVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `CreateUser`.
 * It extracts the `createUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const CreateUserOutputFn = <TOutput = CognitoUser>({ createUser }: CreateUser) =>
  createUser &&
  ({
    ...createUser,
    attributes: createUser.attributes && (JSON.parse(createUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `CreateUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateUserInput` and `CreateUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateUserFetcher = <TOutput = CognitoUser, TInput = CreateUserVariables>(
  variables: CreateUserVariables,
  options?: RequestInit['headers'],
  document = CreateUserDocument,
  outputFn = CreateUserOutputFn,
  inputFn = CreateUserInputFn,
) => fetcher<CreateUser, CreateUserVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `CreateUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createUser = (variables: CreateUserVariables) => CreateUserFetcher(variables)();

export const InviteUserDocument = `
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

/**
 * Key maker function for `InviteUser`.
 */
export const InviteUserKeys = () => ['InviteUser'];

/**
 * Input transformer function for `InviteUser`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `InviteUserVariables` - The original variables
 * @returns `InviteUserVariables` - The transformed variables
 */
export const InviteUserInputFn = <TInput = InviteUserVariables>(variables: InviteUserVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `InviteUser`.
 * It extracts the `inviteUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data InviteUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const InviteUserOutputFn = <TOutput = CognitoUser>({ inviteUser }: InviteUser) =>
  inviteUser &&
  ({
    ...inviteUser,
    attributes: inviteUser.attributes && (JSON.parse(inviteUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `InviteUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `InviteUserInput` and `InviteUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const InviteUserFetcher = <TOutput = CognitoUser, TInput = InviteUserVariables>(
  variables: InviteUserVariables,
  options?: RequestInit['headers'],
  document = InviteUserDocument,
  outputFn = InviteUserOutputFn,
  inputFn = InviteUserInputFn,
) => fetcher<InviteUser, InviteUserVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `InviteUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const inviteUser = (variables: InviteUserVariables) => InviteUserFetcher(variables)();

export const ActivateUserDocument = `
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

/**
 * Key maker function for `ActivateUser`.
 */
export const ActivateUserKeys = () => ['ActivateUser'];

/**
 * Input transformer function for `ActivateUser`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ActivateUserVariables` - The original variables
 * @returns `ActivateUserVariables` - The transformed variables
 */
export const ActivateUserInputFn = <TInput = ActivateUserVariables>(variables: ActivateUserVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ActivateUser`.
 * It extracts the `activateUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ActivateUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const ActivateUserOutputFn = <TOutput = CognitoUser>({ activateUser }: ActivateUser) =>
  activateUser &&
  ({
    ...activateUser,
    attributes:
      activateUser.attributes && (JSON.parse(activateUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `ActivateUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ActivateUserInput` and `ActivateUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ActivateUserFetcher = <TOutput = CognitoUser, TInput = ActivateUserVariables>(
  variables: ActivateUserVariables,
  options?: RequestInit['headers'],
  document = ActivateUserDocument,
  outputFn = ActivateUserOutputFn,
  inputFn = ActivateUserInputFn,
) => fetcher<ActivateUser, ActivateUserVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ActivateUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const activateUser = (variables: ActivateUserVariables) => ActivateUserFetcher(variables)();

export const UpdateUserDocument = `
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

/**
 * Key maker function for `UpdateUser`.
 */
export const UpdateUserKeys = () => ['UpdateUser'];

/**
 * Input transformer function for `UpdateUser`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateUserVariables` - The original variables
 * @returns `UpdateUserVariables` - The transformed variables
 */
export const UpdateUserInputFn = <TInput = UpdateUserVariables>(variables: UpdateUserVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `UpdateUser`.
 * It extracts the `updateUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const UpdateUserOutputFn = <TOutput = CognitoUser>({ updateUser }: UpdateUser) =>
  updateUser &&
  ({
    ...updateUser,
    attributes: updateUser.attributes && (JSON.parse(updateUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `UpdateUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateUserInput` and `UpdateUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateUserFetcher = <TOutput = CognitoUser, TInput = UpdateUserVariables>(
  variables: UpdateUserVariables,
  options?: RequestInit['headers'],
  document = UpdateUserDocument,
  outputFn = UpdateUserOutputFn,
  inputFn = UpdateUserInputFn,
) => fetcher<UpdateUser, UpdateUserVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UpdateUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateUser = (variables: UpdateUserVariables) => UpdateUserFetcher(variables)();

export const DeleteUserDocument = `
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

/**
 * Key maker function for `DeleteUser`.
 */
export const DeleteUserKeys = () => ['DeleteUser'];

/**
 * Input transformer function for `DeleteUser`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteUserVariables` - The original variables
 * @returns `DeleteUserVariables` - The transformed variables
 */
export const DeleteUserInputFn = <TInput = DeleteUserVariables>(variables: DeleteUserVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `DeleteUser`.
 * It extracts the `deleteUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const DeleteUserOutputFn = <TOutput = CognitoUser>({ deleteUser }: DeleteUser) =>
  deleteUser &&
  ({
    ...deleteUser,
    attributes: deleteUser.attributes && (JSON.parse(deleteUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `DeleteUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteUserInput` and `DeleteUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteUserFetcher = <TOutput = CognitoUser, TInput = DeleteUserVariables>(
  variables: DeleteUserVariables,
  options?: RequestInit['headers'],
  document = DeleteUserDocument,
  outputFn = DeleteUserOutputFn,
  inputFn = DeleteUserInputFn,
) => fetcher<DeleteUser, DeleteUserVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteUser = (variables: DeleteUserVariables) => DeleteUserFetcher(variables)();

export const SetupTenantDocument = `
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

/**
 * Key maker function for `SetupTenant`.
 */
export const SetupTenantKeys = () => ['SetupTenant'];

/**
 * Input transformer function for `SetupTenant`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `SetupTenantVariables` - The original variables
 * @returns `SetupTenantVariables` - The transformed variables
 */
export const SetupTenantInputFn = <TInput = SetupTenantVariables>(variables: SetupTenantVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `SetupTenant`.
 * It extracts the `setupTenant` field from the result and transforms it into a `Tenant` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data SetupTenant - The data returned from the GraphQL server
 * @returns Tenant - The transformed data
 */
export const SetupTenantOutputFn = <TOutput = Tenant>({ setupTenant }: SetupTenant) =>
  setupTenant as unknown as TOutput;

/**
 * Fetcher function for `SetupTenant`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `SetupTenantInput` and `SetupTenantOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const SetupTenantFetcher = <TOutput = Tenant, TInput = SetupTenantVariables>(
  variables: SetupTenantVariables,
  options?: RequestInit['headers'],
  document = SetupTenantDocument,
  outputFn = SetupTenantOutputFn,
  inputFn = SetupTenantInputFn,
) => fetcher<SetupTenant, SetupTenantVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `SetupTenant`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const setupTenant = (variables: SetupTenantVariables) => SetupTenantFetcher(variables)();

export const SetupSchemaDocument = `
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

/**
 * Key maker function for `SetupSchema`.
 */
export const SetupSchemaKeys = () => ['SetupSchema'];

/**
 * Input transformer function for `SetupSchema`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `SetupSchemaVariables` - The original variables
 * @returns `SetupSchemaVariables` - The transformed variables
 */
export const SetupSchemaInputFn = <TInput = SetupSchemaVariables>(variables: SetupSchemaVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `SetupSchema`.
 * It extracts the `setupSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data SetupSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const SetupSchemaOutputFn = <TOutput = Schema>({ setupSchema }: SetupSchema) =>
  setupSchema as unknown as TOutput;

/**
 * Fetcher function for `SetupSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `SetupSchemaInput` and `SetupSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const SetupSchemaFetcher = <TOutput = Schema, TInput = SetupSchemaVariables>(
  variables: SetupSchemaVariables,
  options?: RequestInit['headers'],
  document = SetupSchemaDocument,
  outputFn = SetupSchemaOutputFn,
  inputFn = SetupSchemaInputFn,
) => fetcher<SetupSchema, SetupSchemaVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `SetupSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const setupSchema = (variables: SetupSchemaVariables) => SetupSchemaFetcher(variables)();

export const EmptyQueryDocument = `
    query EmptyQuery {
  emptyQuery
}
    `;

/**
 * Key maker function for `EmptyQuery`.
 */
export const EmptyQueryKeys = (variables?: EmptyQueryVariables) =>
  variables === undefined ? ['EmptyQuery'] : ['EmptyQuery', variables];

/**
 * Input transformer function for `EmptyQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `EmptyQueryVariables` - The original variables
 * @returns `EmptyQueryVariables` - The transformed variables
 */
export const EmptyQueryInputFn = <TInput = EmptyQueryVariables>(variables?: EmptyQueryVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `EmptyQuery`.
 * It extracts the `emptyQuery` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyQuery - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EmptyQueryOutputFn = <TOutput = Scalars['String']>({ emptyQuery }: EmptyQuery) =>
  emptyQuery as unknown as TOutput;

/**
 * Fetcher function for `EmptyQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `EmptyQueryInput` and `EmptyQueryOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const EmptyQueryFetcher = <TOutput = Scalars['String'], TInput = EmptyQueryVariables>(
  variables?: EmptyQueryVariables,
  options?: RequestInit['headers'],
  document = EmptyQueryDocument,
  outputFn = EmptyQueryOutputFn,
  inputFn = EmptyQueryInputFn,
) => fetcher<EmptyQuery, EmptyQueryVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `EmptyQuery`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const emptyQuery = (variables?: EmptyQueryVariables) => EmptyQueryFetcher(variables)();

export const EchoDocument = `
    query Echo($msg: String) {
  echo(msg: $msg)
}
    `;

/**
 * Key maker function for `Echo`.
 */
export const EchoKeys = (variables?: EchoVariables) => (variables === undefined ? ['Echo'] : ['Echo', variables]);

/**
 * Input transformer function for `Echo`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `EchoVariables` - The original variables
 * @returns `EchoVariables` - The transformed variables
 */
export const EchoInputFn = <TInput = EchoVariables>(variables?: EchoVariables) => variables as unknown as TInput;

/**
 * Output transformer function for `Echo`.
 * It extracts the `echo` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data Echo - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EchoOutputFn = <TOutput = Scalars['String']>({ echo }: Echo) => echo as unknown as TOutput;

/**
 * Fetcher function for `Echo`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `EchoInput` and `EchoOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const EchoFetcher = <TOutput = Scalars['String'], TInput = EchoVariables>(
  variables?: EchoVariables,
  options?: RequestInit['headers'],
  document = EchoDocument,
  outputFn = EchoOutputFn,
  inputFn = EchoInputFn,
) => fetcher<Echo, EchoVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `Echo`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const echo = (variables?: EchoVariables) => EchoFetcher(variables)();

export const GetQueryCacheDocument = `
    query GetQueryCache($id: ID!, $tenantID: ID!, $refType: RefType!, $refID: ID!) {
  getQueryCache(id: $id, tenantID: $tenantID, refType: $refType, refID: $refID) {
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

/**
 * Key maker function for `GetQueryCache`.
 */
export const GetQueryCacheKeys = (variables: GetQueryCacheVariables) => ['GetQueryCache', variables];

/**
 * Input transformer function for `GetQueryCache`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetQueryCacheVariables` - The original variables
 * @returns `GetQueryCacheVariables` - The transformed variables
 */
export const GetQueryCacheInputFn = <TInput = GetQueryCacheVariables>(variables: GetQueryCacheVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetQueryCache`.
 * It extracts the `getQueryCache` field from the result and transforms it into a `QueryCache` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetQueryCache - The data returned from the GraphQL server
 * @returns QueryCache - The transformed data
 */
export const GetQueryCacheOutputFn = <TOutput = QueryCache>({ getQueryCache }: GetQueryCache) =>
  getQueryCache &&
  ({
    ...getQueryCache,
    data: getQueryCache.data && (JSON.parse(getQueryCache.data as any) as unknown as Scalars['AWSJSON']),
    error: getQueryCache.error && (JSON.parse(getQueryCache.error as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `GetQueryCache`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetQueryCacheInput` and `GetQueryCacheOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetQueryCacheFetcher = <TOutput = QueryCache, TInput = GetQueryCacheVariables>(
  variables: GetQueryCacheVariables,
  options?: RequestInit['headers'],
  document = GetQueryCacheDocument,
  outputFn = GetQueryCacheOutputFn,
  inputFn = GetQueryCacheInputFn,
) => fetcher<GetQueryCache, GetQueryCacheVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetQueryCache`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getQueryCache = (variables: GetQueryCacheVariables) => GetQueryCacheFetcher(variables)();

export const ListQueriesByRefDocument = `
    query ListQueriesByRef($tenantID: ID!, $refTypeRefID: ModelQueryCacheByRefCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelQueryCacheFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListQueriesByRef`.
 */
export const ListQueriesByRefKeys = (variables: ListQueriesByRefVariables) => ['ListQueriesByRef', variables];

/**
 * Input transformer function for `ListQueriesByRef`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListQueriesByRefVariables` - The original variables
 * @returns `ListQueriesByRefVariables` - The transformed variables
 */
export const ListQueriesByRefInputFn = <TInput = ListQueriesByRefVariables>(variables: ListQueriesByRefVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListQueriesByRef`.
 * It extracts the `listQueriesByRef` field from the result and transforms it into a `ModelQueryCacheConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListQueriesByRef - The data returned from the GraphQL server
 * @returns ModelQueryCacheConnection - The transformed data
 */
export const ListQueriesByRefOutputFn = <TOutput = ModelQueryCacheConnection>({ listQueriesByRef }: ListQueriesByRef) =>
  listQueriesByRef &&
  ({
    ...listQueriesByRef,
    items: listQueriesByRef.items?.map((item) => ({
      ...item,
      data: item?.data && (JSON.parse(item?.data as any) as unknown as Scalars['AWSJSON']),
      error: item?.error && (JSON.parse(item?.error as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `ListQueriesByRef`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListQueriesByRefInput` and `ListQueriesByRefOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListQueriesByRefFetcher = <TOutput = ModelQueryCacheConnection, TInput = ListQueriesByRefVariables>(
  variables: ListQueriesByRefVariables,
  options?: RequestInit['headers'],
  document = ListQueriesByRefDocument,
  outputFn = ListQueriesByRefOutputFn,
  inputFn = ListQueriesByRefInputFn,
) =>
  fetcher<ListQueriesByRef, ListQueriesByRefVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListQueriesByRef`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listQueriesByRef = (variables: ListQueriesByRefVariables) => ListQueriesByRefFetcher(variables)();

export const GetConnectorDocument = `
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

/**
 * Key maker function for `GetConnector`.
 */
export const GetConnectorKeys = (variables: GetConnectorVariables) => ['GetConnector', variables];

/**
 * Input transformer function for `GetConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorVariables` - The original variables
 * @returns `GetConnectorVariables` - The transformed variables
 */
export const GetConnectorInputFn = <TInput = GetConnectorVariables>(variables: GetConnectorVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetConnector`.
 * It extracts the `getConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const GetConnectorOutputFn = <TOutput = Connector>({ getConnector }: GetConnector) =>
  getConnector as unknown as TOutput;

/**
 * Fetcher function for `GetConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetConnectorInput` and `GetConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetConnectorFetcher = <TOutput = Connector, TInput = GetConnectorVariables>(
  variables: GetConnectorVariables,
  options?: RequestInit['headers'],
  document = GetConnectorDocument,
  outputFn = GetConnectorOutputFn,
  inputFn = GetConnectorInputFn,
) => fetcher<GetConnector, GetConnectorVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getConnector = (variables: GetConnectorVariables) => GetConnectorFetcher(variables)();

export const ListConnectorsDocument = `
    query ListConnectors($filter: ModelConnectorFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListConnectors`.
 */
export const ListConnectorsKeys = (variables?: ListConnectorsVariables) =>
  variables === undefined ? ['ListConnectors'] : ['ListConnectors', variables];

/**
 * Input transformer function for `ListConnectors`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListConnectorsVariables` - The original variables
 * @returns `ListConnectorsVariables` - The transformed variables
 */
export const ListConnectorsInputFn = <TInput = ListConnectorsVariables>(variables?: ListConnectorsVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListConnectors`.
 * It extracts the `listConnectors` field from the result and transforms it into a `ModelConnectorConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListConnectors - The data returned from the GraphQL server
 * @returns ModelConnectorConnection - The transformed data
 */
export const ListConnectorsOutputFn = <TOutput = ModelConnectorConnection>({ listConnectors }: ListConnectors) =>
  listConnectors as unknown as TOutput;

/**
 * Fetcher function for `ListConnectors`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListConnectorsInput` and `ListConnectorsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListConnectorsFetcher = <TOutput = ModelConnectorConnection, TInput = ListConnectorsVariables>(
  variables?: ListConnectorsVariables,
  options?: RequestInit['headers'],
  document = ListConnectorsDocument,
  outputFn = ListConnectorsOutputFn,
  inputFn = ListConnectorsInputFn,
) => fetcher<ListConnectors, ListConnectorsVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListConnectors`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listConnectors = (variables?: ListConnectorsVariables) => ListConnectorsFetcher(variables)();

export const GetConnectorByDataSourceDocument = `
    query GetConnectorByDataSource($dataSource: String!, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelConnectorFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `GetConnectorByDataSource`.
 */
export const GetConnectorByDataSourceKeys = (variables: GetConnectorByDataSourceVariables) => [
  'GetConnectorByDataSource',
  variables,
];

/**
 * Input transformer function for `GetConnectorByDataSource`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorByDataSourceVariables` - The original variables
 * @returns `GetConnectorByDataSourceVariables` - The transformed variables
 */
export const GetConnectorByDataSourceInputFn = <TInput = GetConnectorByDataSourceVariables>(
  variables: GetConnectorByDataSourceVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `GetConnectorByDataSource`.
 * It extracts the `getConnectorByDataSource` field from the result and transforms it into a `ModelConnectorConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorByDataSource - The data returned from the GraphQL server
 * @returns ModelConnectorConnection - The transformed data
 */
export const GetConnectorByDataSourceOutputFn = <TOutput = ModelConnectorConnection>({
  getConnectorByDataSource,
}: GetConnectorByDataSource) => getConnectorByDataSource as unknown as TOutput;

/**
 * Fetcher function for `GetConnectorByDataSource`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetConnectorByDataSourceInput` and `GetConnectorByDataSourceOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetConnectorByDataSourceFetcher = <
  TOutput = ModelConnectorConnection,
  TInput = GetConnectorByDataSourceVariables,
>(
  variables: GetConnectorByDataSourceVariables,
  options?: RequestInit['headers'],
  document = GetConnectorByDataSourceDocument,
  outputFn = GetConnectorByDataSourceOutputFn,
  inputFn = GetConnectorByDataSourceInputFn,
) =>
  fetcher<GetConnectorByDataSource, GetConnectorByDataSourceVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetConnectorByDataSource`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getConnectorByDataSource = (variables: GetConnectorByDataSourceVariables) =>
  GetConnectorByDataSourceFetcher(variables)();

export const GetEventDocument = `
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

/**
 * Key maker function for `GetEvent`.
 */
export const GetEventKeys = (variables: GetEventVariables) => ['GetEvent', variables];

/**
 * Input transformer function for `GetEvent`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetEventVariables` - The original variables
 * @returns `GetEventVariables` - The transformed variables
 */
export const GetEventInputFn = <TInput = GetEventVariables>(variables: GetEventVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetEvent`.
 * It extracts the `getEvent` field from the result and transforms it into a `Event` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetEvent - The data returned from the GraphQL server
 * @returns Event - The transformed data
 */
export const GetEventOutputFn = <TOutput = Event>({ getEvent }: GetEvent) => getEvent as unknown as TOutput;

/**
 * Fetcher function for `GetEvent`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetEventInput` and `GetEventOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetEventFetcher = <TOutput = Event, TInput = GetEventVariables>(
  variables: GetEventVariables,
  options?: RequestInit['headers'],
  document = GetEventDocument,
  outputFn = GetEventOutputFn,
  inputFn = GetEventInputFn,
) => fetcher<GetEvent, GetEventVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetEvent`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getEvent = (variables: GetEventVariables) => GetEventFetcher(variables)();

export const ListEventsDocument = `
    query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListEvents`.
 */
export const ListEventsKeys = (variables?: ListEventsVariables) =>
  variables === undefined ? ['ListEvents'] : ['ListEvents', variables];

/**
 * Input transformer function for `ListEvents`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventsVariables` - The original variables
 * @returns `ListEventsVariables` - The transformed variables
 */
export const ListEventsInputFn = <TInput = ListEventsVariables>(variables?: ListEventsVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListEvents`.
 * It extracts the `listEvents` field from the result and transforms it into a `ModelEventConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEvents - The data returned from the GraphQL server
 * @returns ModelEventConnection - The transformed data
 */
export const ListEventsOutputFn = <TOutput = ModelEventConnection>({ listEvents }: ListEvents) =>
  listEvents as unknown as TOutput;

/**
 * Fetcher function for `ListEvents`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventsInput` and `ListEventsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventsFetcher = <TOutput = ModelEventConnection, TInput = ListEventsVariables>(
  variables?: ListEventsVariables,
  options?: RequestInit['headers'],
  document = ListEventsDocument,
  outputFn = ListEventsOutputFn,
  inputFn = ListEventsInputFn,
) => fetcher<ListEvents, ListEventsVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListEvents`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEvents = (variables?: ListEventsVariables) => ListEventsFetcher(variables)();

export const ListEventsByPubDocument = `
    query ListEventsByPub($pubID: ID!, $pubTypeUpdatedAt: ModelEventByPubCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListEventsByPub`.
 */
export const ListEventsByPubKeys = (variables: ListEventsByPubVariables) => ['ListEventsByPub', variables];

/**
 * Input transformer function for `ListEventsByPub`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventsByPubVariables` - The original variables
 * @returns `ListEventsByPubVariables` - The transformed variables
 */
export const ListEventsByPubInputFn = <TInput = ListEventsByPubVariables>(variables: ListEventsByPubVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListEventsByPub`.
 * It extracts the `listEventsByPub` field from the result and transforms it into a `ModelEventConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventsByPub - The data returned from the GraphQL server
 * @returns ModelEventConnection - The transformed data
 */
export const ListEventsByPubOutputFn = <TOutput = ModelEventConnection>({ listEventsByPub }: ListEventsByPub) =>
  listEventsByPub as unknown as TOutput;

/**
 * Fetcher function for `ListEventsByPub`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventsByPubInput` and `ListEventsByPubOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventsByPubFetcher = <TOutput = ModelEventConnection, TInput = ListEventsByPubVariables>(
  variables: ListEventsByPubVariables,
  options?: RequestInit['headers'],
  document = ListEventsByPubDocument,
  outputFn = ListEventsByPubOutputFn,
  inputFn = ListEventsByPubInputFn,
) =>
  fetcher<ListEventsByPub, ListEventsByPubVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListEventsByPub`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventsByPub = (variables: ListEventsByPubVariables) => ListEventsByPubFetcher(variables)();

export const ListEventsByRefDocument = `
    query ListEventsByRef($refID: ID!, $refTypeUpdatedAt: ModelEventByRefCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListEventsByRef`.
 */
export const ListEventsByRefKeys = (variables: ListEventsByRefVariables) => ['ListEventsByRef', variables];

/**
 * Input transformer function for `ListEventsByRef`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventsByRefVariables` - The original variables
 * @returns `ListEventsByRefVariables` - The transformed variables
 */
export const ListEventsByRefInputFn = <TInput = ListEventsByRefVariables>(variables: ListEventsByRefVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListEventsByRef`.
 * It extracts the `listEventsByRef` field from the result and transforms it into a `ModelEventConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventsByRef - The data returned from the GraphQL server
 * @returns ModelEventConnection - The transformed data
 */
export const ListEventsByRefOutputFn = <TOutput = ModelEventConnection>({ listEventsByRef }: ListEventsByRef) =>
  listEventsByRef as unknown as TOutput;

/**
 * Fetcher function for `ListEventsByRef`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventsByRefInput` and `ListEventsByRefOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventsByRefFetcher = <TOutput = ModelEventConnection, TInput = ListEventsByRefVariables>(
  variables: ListEventsByRefVariables,
  options?: RequestInit['headers'],
  document = ListEventsByRefDocument,
  outputFn = ListEventsByRefOutputFn,
  inputFn = ListEventsByRefInputFn,
) =>
  fetcher<ListEventsByRef, ListEventsByRefVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListEventsByRef`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventsByRef = (variables: ListEventsByRefVariables) => ListEventsByRefFetcher(variables)();

export const GetEventSubscriberDocument = `
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

/**
 * Key maker function for `GetEventSubscriber`.
 */
export const GetEventSubscriberKeys = (variables: GetEventSubscriberVariables) => ['GetEventSubscriber', variables];

/**
 * Input transformer function for `GetEventSubscriber`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetEventSubscriberVariables` - The original variables
 * @returns `GetEventSubscriberVariables` - The transformed variables
 */
export const GetEventSubscriberInputFn = <TInput = GetEventSubscriberVariables>(
  variables: GetEventSubscriberVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `GetEventSubscriber`.
 * It extracts the `getEventSubscriber` field from the result and transforms it into a `EventSubscriber` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetEventSubscriber - The data returned from the GraphQL server
 * @returns EventSubscriber - The transformed data
 */
export const GetEventSubscriberOutputFn = <TOutput = EventSubscriber>({ getEventSubscriber }: GetEventSubscriber) =>
  getEventSubscriber as unknown as TOutput;

/**
 * Fetcher function for `GetEventSubscriber`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetEventSubscriberInput` and `GetEventSubscriberOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetEventSubscriberFetcher = <TOutput = EventSubscriber, TInput = GetEventSubscriberVariables>(
  variables: GetEventSubscriberVariables,
  options?: RequestInit['headers'],
  document = GetEventSubscriberDocument,
  outputFn = GetEventSubscriberOutputFn,
  inputFn = GetEventSubscriberInputFn,
) =>
  fetcher<GetEventSubscriber, GetEventSubscriberVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetEventSubscriber`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getEventSubscriber = (variables: GetEventSubscriberVariables) => GetEventSubscriberFetcher(variables)();

export const ListEventSubscribersDocument = `
    query ListEventSubscribers($filter: ModelEventSubscriberFilterInput, $limit: Int, $nextToken: String) {
  listEventSubscribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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

/**
 * Key maker function for `ListEventSubscribers`.
 */
export const ListEventSubscribersKeys = (variables?: ListEventSubscribersVariables) =>
  variables === undefined ? ['ListEventSubscribers'] : ['ListEventSubscribers', variables];

/**
 * Input transformer function for `ListEventSubscribers`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventSubscribersVariables` - The original variables
 * @returns `ListEventSubscribersVariables` - The transformed variables
 */
export const ListEventSubscribersInputFn = <TInput = ListEventSubscribersVariables>(
  variables?: ListEventSubscribersVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListEventSubscribers`.
 * It extracts the `listEventSubscribers` field from the result and transforms it into a `ModelEventSubscriberConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventSubscribers - The data returned from the GraphQL server
 * @returns ModelEventSubscriberConnection - The transformed data
 */
export const ListEventSubscribersOutputFn = <TOutput = ModelEventSubscriberConnection>({
  listEventSubscribers,
}: ListEventSubscribers) => listEventSubscribers as unknown as TOutput;

/**
 * Fetcher function for `ListEventSubscribers`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventSubscribersInput` and `ListEventSubscribersOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventSubscribersFetcher = <
  TOutput = ModelEventSubscriberConnection,
  TInput = ListEventSubscribersVariables,
>(
  variables?: ListEventSubscribersVariables,
  options?: RequestInit['headers'],
  document = ListEventSubscribersDocument,
  outputFn = ListEventSubscribersOutputFn,
  inputFn = ListEventSubscribersInputFn,
) =>
  fetcher<ListEventSubscribers, ListEventSubscribersVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListEventSubscribers`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventSubscribers = (variables?: ListEventSubscribersVariables) =>
  ListEventSubscribersFetcher(variables)();

export const ListEventSubscribersBySubDocument = `
    query ListEventSubscribersBySub($subID: ID!, $subTypeUpdatedAt: ModelEventSubscriberBySubCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelEventSubscriberFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListEventSubscribersBySub`.
 */
export const ListEventSubscribersBySubKeys = (variables: ListEventSubscribersBySubVariables) => [
  'ListEventSubscribersBySub',
  variables,
];

/**
 * Input transformer function for `ListEventSubscribersBySub`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventSubscribersBySubVariables` - The original variables
 * @returns `ListEventSubscribersBySubVariables` - The transformed variables
 */
export const ListEventSubscribersBySubInputFn = <TInput = ListEventSubscribersBySubVariables>(
  variables: ListEventSubscribersBySubVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListEventSubscribersBySub`.
 * It extracts the `listEventSubscribersBySub` field from the result and transforms it into a `ModelEventSubscriberConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventSubscribersBySub - The data returned from the GraphQL server
 * @returns ModelEventSubscriberConnection - The transformed data
 */
export const ListEventSubscribersBySubOutputFn = <TOutput = ModelEventSubscriberConnection>({
  listEventSubscribersBySub,
}: ListEventSubscribersBySub) => listEventSubscribersBySub as unknown as TOutput;

/**
 * Fetcher function for `ListEventSubscribersBySub`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventSubscribersBySubInput` and `ListEventSubscribersBySubOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventSubscribersBySubFetcher = <
  TOutput = ModelEventSubscriberConnection,
  TInput = ListEventSubscribersBySubVariables,
>(
  variables: ListEventSubscribersBySubVariables,
  options?: RequestInit['headers'],
  document = ListEventSubscribersBySubDocument,
  outputFn = ListEventSubscribersBySubOutputFn,
  inputFn = ListEventSubscribersBySubInputFn,
) =>
  fetcher<ListEventSubscribersBySub, ListEventSubscribersBySubVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListEventSubscribersBySub`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventSubscribersBySub = (variables: ListEventSubscribersBySubVariables) =>
  ListEventSubscribersBySubFetcher(variables)();

export const ListEventSubscriberByRefDocument = `
    query ListEventSubscriberByRef($refID: ID!, $refTypeUpdatedAt: ModelEventSubscriberByRefCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelEventSubscriberFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListEventSubscriberByRef`.
 */
export const ListEventSubscriberByRefKeys = (variables: ListEventSubscriberByRefVariables) => [
  'ListEventSubscriberByRef',
  variables,
];

/**
 * Input transformer function for `ListEventSubscriberByRef`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventSubscriberByRefVariables` - The original variables
 * @returns `ListEventSubscriberByRefVariables` - The transformed variables
 */
export const ListEventSubscriberByRefInputFn = <TInput = ListEventSubscriberByRefVariables>(
  variables: ListEventSubscriberByRefVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListEventSubscriberByRef`.
 * It extracts the `listEventSubscriberByRef` field from the result and transforms it into a `ModelEventSubscriberConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventSubscriberByRef - The data returned from the GraphQL server
 * @returns ModelEventSubscriberConnection - The transformed data
 */
export const ListEventSubscriberByRefOutputFn = <TOutput = ModelEventSubscriberConnection>({
  listEventSubscriberByRef,
}: ListEventSubscriberByRef) => listEventSubscriberByRef as unknown as TOutput;

/**
 * Fetcher function for `ListEventSubscriberByRef`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventSubscriberByRefInput` and `ListEventSubscriberByRefOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventSubscriberByRefFetcher = <
  TOutput = ModelEventSubscriberConnection,
  TInput = ListEventSubscriberByRefVariables,
>(
  variables: ListEventSubscriberByRefVariables,
  options?: RequestInit['headers'],
  document = ListEventSubscriberByRefDocument,
  outputFn = ListEventSubscriberByRefOutputFn,
  inputFn = ListEventSubscriberByRefInputFn,
) =>
  fetcher<ListEventSubscriberByRef, ListEventSubscriberByRefVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListEventSubscriberByRef`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventSubscriberByRef = (variables: ListEventSubscriberByRefVariables) =>
  ListEventSubscriberByRefFetcher(variables)();

export const GetEventNotificationDocument = `
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

/**
 * Key maker function for `GetEventNotification`.
 */
export const GetEventNotificationKeys = (variables: GetEventNotificationVariables) => [
  'GetEventNotification',
  variables,
];

/**
 * Input transformer function for `GetEventNotification`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetEventNotificationVariables` - The original variables
 * @returns `GetEventNotificationVariables` - The transformed variables
 */
export const GetEventNotificationInputFn = <TInput = GetEventNotificationVariables>(
  variables: GetEventNotificationVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `GetEventNotification`.
 * It extracts the `getEventNotification` field from the result and transforms it into a `EventNotification` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetEventNotification - The data returned from the GraphQL server
 * @returns EventNotification - The transformed data
 */
export const GetEventNotificationOutputFn = <TOutput = EventNotification>({
  getEventNotification,
}: GetEventNotification) => getEventNotification as unknown as TOutput;

/**
 * Fetcher function for `GetEventNotification`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetEventNotificationInput` and `GetEventNotificationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetEventNotificationFetcher = <TOutput = EventNotification, TInput = GetEventNotificationVariables>(
  variables: GetEventNotificationVariables,
  options?: RequestInit['headers'],
  document = GetEventNotificationDocument,
  outputFn = GetEventNotificationOutputFn,
  inputFn = GetEventNotificationInputFn,
) =>
  fetcher<GetEventNotification, GetEventNotificationVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetEventNotification`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getEventNotification = (variables: GetEventNotificationVariables) =>
  GetEventNotificationFetcher(variables)();

export const ListEventNotificationsDocument = `
    query ListEventNotifications($filter: ModelEventNotificationFilterInput, $limit: Int, $nextToken: String) {
  listEventNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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

/**
 * Key maker function for `ListEventNotifications`.
 */
export const ListEventNotificationsKeys = (variables?: ListEventNotificationsVariables) =>
  variables === undefined ? ['ListEventNotifications'] : ['ListEventNotifications', variables];

/**
 * Input transformer function for `ListEventNotifications`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventNotificationsVariables` - The original variables
 * @returns `ListEventNotificationsVariables` - The transformed variables
 */
export const ListEventNotificationsInputFn = <TInput = ListEventNotificationsVariables>(
  variables?: ListEventNotificationsVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListEventNotifications`.
 * It extracts the `listEventNotifications` field from the result and transforms it into a `ModelEventNotificationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventNotifications - The data returned from the GraphQL server
 * @returns ModelEventNotificationConnection - The transformed data
 */
export const ListEventNotificationsOutputFn = <TOutput = ModelEventNotificationConnection>({
  listEventNotifications,
}: ListEventNotifications) => listEventNotifications as unknown as TOutput;

/**
 * Fetcher function for `ListEventNotifications`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventNotificationsInput` and `ListEventNotificationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventNotificationsFetcher = <
  TOutput = ModelEventNotificationConnection,
  TInput = ListEventNotificationsVariables,
>(
  variables?: ListEventNotificationsVariables,
  options?: RequestInit['headers'],
  document = ListEventNotificationsDocument,
  outputFn = ListEventNotificationsOutputFn,
  inputFn = ListEventNotificationsInputFn,
) =>
  fetcher<ListEventNotifications, ListEventNotificationsVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListEventNotifications`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventNotifications = (variables?: ListEventNotificationsVariables) =>
  ListEventNotificationsFetcher(variables)();

export const ListEventNotificationsBySubDocument = `
    query ListEventNotificationsBySub($subID: ID!, $subTypeUpdatedAt: ModelEventNotificationBySubCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelEventNotificationFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListEventNotificationsBySub`.
 */
export const ListEventNotificationsBySubKeys = (variables: ListEventNotificationsBySubVariables) => [
  'ListEventNotificationsBySub',
  variables,
];

/**
 * Input transformer function for `ListEventNotificationsBySub`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventNotificationsBySubVariables` - The original variables
 * @returns `ListEventNotificationsBySubVariables` - The transformed variables
 */
export const ListEventNotificationsBySubInputFn = <TInput = ListEventNotificationsBySubVariables>(
  variables: ListEventNotificationsBySubVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListEventNotificationsBySub`.
 * It extracts the `listEventNotificationsBySub` field from the result and transforms it into a `ModelEventNotificationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventNotificationsBySub - The data returned from the GraphQL server
 * @returns ModelEventNotificationConnection - The transformed data
 */
export const ListEventNotificationsBySubOutputFn = <TOutput = ModelEventNotificationConnection>({
  listEventNotificationsBySub,
}: ListEventNotificationsBySub) => listEventNotificationsBySub as unknown as TOutput;

/**
 * Fetcher function for `ListEventNotificationsBySub`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventNotificationsBySubInput` and `ListEventNotificationsBySubOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventNotificationsBySubFetcher = <
  TOutput = ModelEventNotificationConnection,
  TInput = ListEventNotificationsBySubVariables,
>(
  variables: ListEventNotificationsBySubVariables,
  options?: RequestInit['headers'],
  document = ListEventNotificationsBySubDocument,
  outputFn = ListEventNotificationsBySubOutputFn,
  inputFn = ListEventNotificationsBySubInputFn,
) =>
  fetcher<ListEventNotificationsBySub, ListEventNotificationsBySubVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListEventNotificationsBySub`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventNotificationsBySub = (variables: ListEventNotificationsBySubVariables) =>
  ListEventNotificationsBySubFetcher(variables)();

export const ListEventNotificationsByRefDocument = `
    query ListEventNotificationsByRef($refID: ID!, $refTypeUpdatedAt: ModelEventNotificationByRefCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelEventNotificationFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListEventNotificationsByRef`.
 */
export const ListEventNotificationsByRefKeys = (variables: ListEventNotificationsByRefVariables) => [
  'ListEventNotificationsByRef',
  variables,
];

/**
 * Input transformer function for `ListEventNotificationsByRef`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListEventNotificationsByRefVariables` - The original variables
 * @returns `ListEventNotificationsByRefVariables` - The transformed variables
 */
export const ListEventNotificationsByRefInputFn = <TInput = ListEventNotificationsByRefVariables>(
  variables: ListEventNotificationsByRefVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListEventNotificationsByRef`.
 * It extracts the `listEventNotificationsByRef` field from the result and transforms it into a `ModelEventNotificationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListEventNotificationsByRef - The data returned from the GraphQL server
 * @returns ModelEventNotificationConnection - The transformed data
 */
export const ListEventNotificationsByRefOutputFn = <TOutput = ModelEventNotificationConnection>({
  listEventNotificationsByRef,
}: ListEventNotificationsByRef) => listEventNotificationsByRef as unknown as TOutput;

/**
 * Fetcher function for `ListEventNotificationsByRef`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListEventNotificationsByRefInput` and `ListEventNotificationsByRefOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListEventNotificationsByRefFetcher = <
  TOutput = ModelEventNotificationConnection,
  TInput = ListEventNotificationsByRefVariables,
>(
  variables: ListEventNotificationsByRefVariables,
  options?: RequestInit['headers'],
  document = ListEventNotificationsByRefDocument,
  outputFn = ListEventNotificationsByRefOutputFn,
  inputFn = ListEventNotificationsByRefInputFn,
) =>
  fetcher<ListEventNotificationsByRef, ListEventNotificationsByRefVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListEventNotificationsByRef`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listEventNotificationsByRef = (variables: ListEventNotificationsByRefVariables) =>
  ListEventNotificationsByRefFetcher(variables)();

export const GetPerspectiveDocument = `
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

/**
 * Key maker function for `GetPerspective`.
 */
export const GetPerspectiveKeys = (variables: GetPerspectiveVariables) => ['GetPerspective', variables];

/**
 * Input transformer function for `GetPerspective`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetPerspectiveVariables` - The original variables
 * @returns `GetPerspectiveVariables` - The transformed variables
 */
export const GetPerspectiveInputFn = <TInput = GetPerspectiveVariables>(variables: GetPerspectiveVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetPerspective`.
 * It extracts the `getPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetPerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const GetPerspectiveOutputFn = <TOutput = Perspective>({ getPerspective }: GetPerspective) =>
  getPerspective as unknown as TOutput;

/**
 * Fetcher function for `GetPerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetPerspectiveInput` and `GetPerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetPerspectiveFetcher = <TOutput = Perspective, TInput = GetPerspectiveVariables>(
  variables: GetPerspectiveVariables,
  options?: RequestInit['headers'],
  document = GetPerspectiveDocument,
  outputFn = GetPerspectiveOutputFn,
  inputFn = GetPerspectiveInputFn,
) => fetcher<GetPerspective, GetPerspectiveVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetPerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getPerspective = (variables: GetPerspectiveVariables) => GetPerspectiveFetcher(variables)();

export const ListPerspectivesDocument = `
    query ListPerspectives($filter: ModelPerspectiveFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListPerspectives`.
 */
export const ListPerspectivesKeys = (variables?: ListPerspectivesVariables) =>
  variables === undefined ? ['ListPerspectives'] : ['ListPerspectives', variables];

/**
 * Input transformer function for `ListPerspectives`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListPerspectivesVariables` - The original variables
 * @returns `ListPerspectivesVariables` - The transformed variables
 */
export const ListPerspectivesInputFn = <TInput = ListPerspectivesVariables>(variables?: ListPerspectivesVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListPerspectives`.
 * It extracts the `listPerspectives` field from the result and transforms it into a `ModelPerspectiveConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListPerspectives - The data returned from the GraphQL server
 * @returns ModelPerspectiveConnection - The transformed data
 */
export const ListPerspectivesOutputFn = <TOutput = ModelPerspectiveConnection>({
  listPerspectives,
}: ListPerspectives) => listPerspectives as unknown as TOutput;

/**
 * Fetcher function for `ListPerspectives`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListPerspectivesInput` and `ListPerspectivesOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListPerspectivesFetcher = <TOutput = ModelPerspectiveConnection, TInput = ListPerspectivesVariables>(
  variables?: ListPerspectivesVariables,
  options?: RequestInit['headers'],
  document = ListPerspectivesDocument,
  outputFn = ListPerspectivesOutputFn,
  inputFn = ListPerspectivesInputFn,
) =>
  fetcher<ListPerspectives, ListPerspectivesVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListPerspectives`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listPerspectives = (variables?: ListPerspectivesVariables) => ListPerspectivesFetcher(variables)();

export const GetSchemaDocument = `
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

/**
 * Key maker function for `GetSchema`.
 */
export const GetSchemaKeys = (variables: GetSchemaVariables) => ['GetSchema', variables];

/**
 * Input transformer function for `GetSchema`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetSchemaVariables` - The original variables
 * @returns `GetSchemaVariables` - The transformed variables
 */
export const GetSchemaInputFn = <TInput = GetSchemaVariables>(variables: GetSchemaVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetSchema`.
 * It extracts the `getSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const GetSchemaOutputFn = <TOutput = Schema>({ getSchema }: GetSchema) => getSchema as unknown as TOutput;

/**
 * Fetcher function for `GetSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetSchemaInput` and `GetSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetSchemaFetcher = <TOutput = Schema, TInput = GetSchemaVariables>(
  variables: GetSchemaVariables,
  options?: RequestInit['headers'],
  document = GetSchemaDocument,
  outputFn = GetSchemaOutputFn,
  inputFn = GetSchemaInputFn,
) => fetcher<GetSchema, GetSchemaVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getSchema = (variables: GetSchemaVariables) => GetSchemaFetcher(variables)();

export const ListSchemasDocument = `
    query ListSchemas($filter: ModelSchemaFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListSchemas`.
 */
export const ListSchemasKeys = (variables?: ListSchemasVariables) =>
  variables === undefined ? ['ListSchemas'] : ['ListSchemas', variables];

/**
 * Input transformer function for `ListSchemas`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListSchemasVariables` - The original variables
 * @returns `ListSchemasVariables` - The transformed variables
 */
export const ListSchemasInputFn = <TInput = ListSchemasVariables>(variables?: ListSchemasVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListSchemas`.
 * It extracts the `listSchemas` field from the result and transforms it into a `ModelSchemaConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListSchemas - The data returned from the GraphQL server
 * @returns ModelSchemaConnection - The transformed data
 */
export const ListSchemasOutputFn = <TOutput = ModelSchemaConnection>({ listSchemas }: ListSchemas) =>
  listSchemas as unknown as TOutput;

/**
 * Fetcher function for `ListSchemas`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListSchemasInput` and `ListSchemasOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListSchemasFetcher = <TOutput = ModelSchemaConnection, TInput = ListSchemasVariables>(
  variables?: ListSchemasVariables,
  options?: RequestInit['headers'],
  document = ListSchemasDocument,
  outputFn = ListSchemasOutputFn,
  inputFn = ListSchemasInputFn,
) => fetcher<ListSchemas, ListSchemasVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListSchemas`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listSchemas = (variables?: ListSchemasVariables) => ListSchemasFetcher(variables)();

export const GetTenantDocument = `
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

/**
 * Key maker function for `GetTenant`.
 */
export const GetTenantKeys = (variables: GetTenantVariables) => ['GetTenant', variables];

/**
 * Input transformer function for `GetTenant`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetTenantVariables` - The original variables
 * @returns `GetTenantVariables` - The transformed variables
 */
export const GetTenantInputFn = <TInput = GetTenantVariables>(variables: GetTenantVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetTenant`.
 * It extracts the `getTenant` field from the result and transforms it into a `Tenant` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTenant - The data returned from the GraphQL server
 * @returns Tenant - The transformed data
 */
export const GetTenantOutputFn = <TOutput = Tenant>({ getTenant }: GetTenant) => getTenant as unknown as TOutput;

/**
 * Fetcher function for `GetTenant`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetTenantInput` and `GetTenantOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetTenantFetcher = <TOutput = Tenant, TInput = GetTenantVariables>(
  variables: GetTenantVariables,
  options?: RequestInit['headers'],
  document = GetTenantDocument,
  outputFn = GetTenantOutputFn,
  inputFn = GetTenantInputFn,
) => fetcher<GetTenant, GetTenantVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetTenant`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getTenant = (variables: GetTenantVariables) => GetTenantFetcher(variables)();

export const ListTenantsDocument = `
    query ListTenants($filter: ModelTenantFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListTenants`.
 */
export const ListTenantsKeys = (variables?: ListTenantsVariables) =>
  variables === undefined ? ['ListTenants'] : ['ListTenants', variables];

/**
 * Input transformer function for `ListTenants`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListTenantsVariables` - The original variables
 * @returns `ListTenantsVariables` - The transformed variables
 */
export const ListTenantsInputFn = <TInput = ListTenantsVariables>(variables?: ListTenantsVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListTenants`.
 * It extracts the `listTenants` field from the result and transforms it into a `ModelTenantConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTenants - The data returned from the GraphQL server
 * @returns ModelTenantConnection - The transformed data
 */
export const ListTenantsOutputFn = <TOutput = ModelTenantConnection>({ listTenants }: ListTenants) =>
  listTenants as unknown as TOutput;

/**
 * Fetcher function for `ListTenants`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListTenantsInput` and `ListTenantsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListTenantsFetcher = <TOutput = ModelTenantConnection, TInput = ListTenantsVariables>(
  variables?: ListTenantsVariables,
  options?: RequestInit['headers'],
  document = ListTenantsDocument,
  outputFn = ListTenantsOutputFn,
  inputFn = ListTenantsInputFn,
) => fetcher<ListTenants, ListTenantsVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListTenants`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listTenants = (variables?: ListTenantsVariables) => ListTenantsFetcher(variables)();

export const GetTransformationDocument = `
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

/**
 * Key maker function for `GetTransformation`.
 */
export const GetTransformationKeys = (variables: GetTransformationVariables) => ['GetTransformation', variables];

/**
 * Input transformer function for `GetTransformation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetTransformationVariables` - The original variables
 * @returns `GetTransformationVariables` - The transformed variables
 */
export const GetTransformationInputFn = <TInput = GetTransformationVariables>(variables: GetTransformationVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetTransformation`.
 * It extracts the `getTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const GetTransformationOutputFn = <TOutput = Transformation>({ getTransformation }: GetTransformation) =>
  getTransformation as unknown as TOutput;

/**
 * Fetcher function for `GetTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetTransformationInput` and `GetTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetTransformationFetcher = <TOutput = Transformation, TInput = GetTransformationVariables>(
  variables: GetTransformationVariables,
  options?: RequestInit['headers'],
  document = GetTransformationDocument,
  outputFn = GetTransformationOutputFn,
  inputFn = GetTransformationInputFn,
) =>
  fetcher<GetTransformation, GetTransformationVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetTransformation`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getTransformation = (variables: GetTransformationVariables) => GetTransformationFetcher(variables)();

export const ListTransformationsDocument = `
    query ListTransformations($filter: ModelTransformationFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListTransformations`.
 */
export const ListTransformationsKeys = (variables?: ListTransformationsVariables) =>
  variables === undefined ? ['ListTransformations'] : ['ListTransformations', variables];

/**
 * Input transformer function for `ListTransformations`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListTransformationsVariables` - The original variables
 * @returns `ListTransformationsVariables` - The transformed variables
 */
export const ListTransformationsInputFn = <TInput = ListTransformationsVariables>(
  variables?: ListTransformationsVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListTransformations`.
 * It extracts the `listTransformations` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTransformations - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const ListTransformationsOutputFn = <TOutput = ModelTransformationConnection>({
  listTransformations,
}: ListTransformations) => listTransformations as unknown as TOutput;

/**
 * Fetcher function for `ListTransformations`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListTransformationsInput` and `ListTransformationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListTransformationsFetcher = <
  TOutput = ModelTransformationConnection,
  TInput = ListTransformationsVariables,
>(
  variables?: ListTransformationsVariables,
  options?: RequestInit['headers'],
  document = ListTransformationsDocument,
  outputFn = ListTransformationsOutputFn,
  inputFn = ListTransformationsInputFn,
) =>
  fetcher<ListTransformations, ListTransformationsVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListTransformations`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listTransformations = (variables?: ListTransformationsVariables) =>
  ListTransformationsFetcher(variables)();

export const ListTransformationsByConnectorDocument = `
    query ListTransformationsByConnector($connectorID: ID!, $sortDirection: ModelSortDirection, $filter: ModelTransformationFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListTransformationsByConnector`.
 */
export const ListTransformationsByConnectorKeys = (variables: ListTransformationsByConnectorVariables) => [
  'ListTransformationsByConnector',
  variables,
];

/**
 * Input transformer function for `ListTransformationsByConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListTransformationsByConnectorVariables` - The original variables
 * @returns `ListTransformationsByConnectorVariables` - The transformed variables
 */
export const ListTransformationsByConnectorInputFn = <TInput = ListTransformationsByConnectorVariables>(
  variables: ListTransformationsByConnectorVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListTransformationsByConnector`.
 * It extracts the `listTransformationsByConnector` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTransformationsByConnector - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const ListTransformationsByConnectorOutputFn = <TOutput = ModelTransformationConnection>({
  listTransformationsByConnector,
}: ListTransformationsByConnector) => listTransformationsByConnector as unknown as TOutput;

/**
 * Fetcher function for `ListTransformationsByConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListTransformationsByConnectorInput` and `ListTransformationsByConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListTransformationsByConnectorFetcher = <
  TOutput = ModelTransformationConnection,
  TInput = ListTransformationsByConnectorVariables,
>(
  variables: ListTransformationsByConnectorVariables,
  options?: RequestInit['headers'],
  document = ListTransformationsByConnectorDocument,
  outputFn = ListTransformationsByConnectorOutputFn,
  inputFn = ListTransformationsByConnectorInputFn,
) =>
  fetcher<ListTransformationsByConnector, ListTransformationsByConnectorVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListTransformationsByConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listTransformationsByConnector = (variables: ListTransformationsByConnectorVariables) =>
  ListTransformationsByConnectorFetcher(variables)();

export const ListTransformationsBySchemaEntityDocument = `
    query ListTransformationsBySchemaEntity($schemaEntityID: ID!, $sortDirection: ModelSortDirection, $filter: ModelTransformationFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListTransformationsBySchemaEntity`.
 */
export const ListTransformationsBySchemaEntityKeys = (variables: ListTransformationsBySchemaEntityVariables) => [
  'ListTransformationsBySchemaEntity',
  variables,
];

/**
 * Input transformer function for `ListTransformationsBySchemaEntity`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListTransformationsBySchemaEntityVariables` - The original variables
 * @returns `ListTransformationsBySchemaEntityVariables` - The transformed variables
 */
export const ListTransformationsBySchemaEntityInputFn = <TInput = ListTransformationsBySchemaEntityVariables>(
  variables: ListTransformationsBySchemaEntityVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `ListTransformationsBySchemaEntity`.
 * It extracts the `listTransformationsBySchemaEntity` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTransformationsBySchemaEntity - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const ListTransformationsBySchemaEntityOutputFn = <TOutput = ModelTransformationConnection>({
  listTransformationsBySchemaEntity,
}: ListTransformationsBySchemaEntity) => listTransformationsBySchemaEntity as unknown as TOutput;

/**
 * Fetcher function for `ListTransformationsBySchemaEntity`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListTransformationsBySchemaEntityInput` and `ListTransformationsBySchemaEntityOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListTransformationsBySchemaEntityFetcher = <
  TOutput = ModelTransformationConnection,
  TInput = ListTransformationsBySchemaEntityVariables,
>(
  variables: ListTransformationsBySchemaEntityVariables,
  options?: RequestInit['headers'],
  document = ListTransformationsBySchemaEntityDocument,
  outputFn = ListTransformationsBySchemaEntityOutputFn,
  inputFn = ListTransformationsBySchemaEntityInputFn,
) =>
  fetcher<ListTransformationsBySchemaEntity, ListTransformationsBySchemaEntityVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListTransformationsBySchemaEntity`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listTransformationsBySchemaEntity = (variables: ListTransformationsBySchemaEntityVariables) =>
  ListTransformationsBySchemaEntityFetcher(variables)();

export const SearchGraphDocument = `
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

/**
 * Key maker function for `SearchGraph`.
 */
export const SearchGraphKeys = (variables: SearchGraphVariables) => ['SearchGraph', variables];

/**
 * Input transformer function for `SearchGraph`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `SearchGraphVariables` - The original variables
 * @returns `SearchGraphVariables` - The transformed variables
 */
export const SearchGraphInputFn = <TInput = SearchGraphVariables>(variables: SearchGraphVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `SearchGraph`.
 * It extracts the `searchGraph` field from the result and transforms it into a `SearchGraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data SearchGraph - The data returned from the GraphQL server
 * @returns SearchGraphResult - The transformed data
 */
export const SearchGraphOutputFn = <TOutput = SearchGraphResult>({ searchGraph }: SearchGraph) =>
  searchGraph &&
  ({
    ...searchGraph,
    records: searchGraph.records?.map((record) => ({
      ...record,
      node: {
        ...record?.node,
        properties:
          record?.node?.properties && (JSON.parse(record?.node?.properties as any) as unknown as Scalars['AWSJSON']),
      },
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `SearchGraph`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `SearchGraphInput` and `SearchGraphOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const SearchGraphFetcher = <TOutput = SearchGraphResult, TInput = SearchGraphVariables>(
  variables: SearchGraphVariables,
  options?: RequestInit['headers'],
  document = SearchGraphDocument,
  outputFn = SearchGraphOutputFn,
  inputFn = SearchGraphInputFn,
) => fetcher<SearchGraph, SearchGraphVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `SearchGraph`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const searchGraph = (variables: SearchGraphVariables) => SearchGraphFetcher(variables)();

export const ExpandGraphDocument = `
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

/**
 * Key maker function for `ExpandGraph`.
 */
export const ExpandGraphKeys = (variables: ExpandGraphVariables) => ['ExpandGraph', variables];

/**
 * Input transformer function for `ExpandGraph`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ExpandGraphVariables` - The original variables
 * @returns `ExpandGraphVariables` - The transformed variables
 */
export const ExpandGraphInputFn = <TInput = ExpandGraphVariables>(variables: ExpandGraphVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ExpandGraph`.
 * It extracts the `expandGraph` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ExpandGraph - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const ExpandGraphOutputFn = <TOutput = GraphResult>({ expandGraph }: ExpandGraph) =>
  expandGraph &&
  ({
    ...expandGraph,
    nodes: expandGraph.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: expandGraph.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `ExpandGraph`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ExpandGraphInput` and `ExpandGraphOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ExpandGraphFetcher = <TOutput = GraphResult, TInput = ExpandGraphVariables>(
  variables: ExpandGraphVariables,
  options?: RequestInit['headers'],
  document = ExpandGraphDocument,
  outputFn = ExpandGraphOutputFn,
  inputFn = ExpandGraphInputFn,
) => fetcher<ExpandGraph, ExpandGraphVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ExpandGraph`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const expandGraph = (variables: ExpandGraphVariables) => ExpandGraphFetcher(variables)();

export const GetNodeDocument = `
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

/**
 * Key maker function for `GetNode`.
 */
export const GetNodeKeys = (variables: GetNodeVariables) => ['GetNode', variables];

/**
 * Input transformer function for `GetNode`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetNodeVariables` - The original variables
 * @returns `GetNodeVariables` - The transformed variables
 */
export const GetNodeInputFn = <TInput = GetNodeVariables>(variables: GetNodeVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetNode`.
 * It extracts the `getNode` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetNode - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const GetNodeOutputFn = <TOutput = GraphResult>({ getNode }: GetNode) =>
  getNode &&
  ({
    ...getNode,
    nodes: getNode.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: getNode.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `GetNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetNodeInput` and `GetNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetNodeFetcher = <TOutput = GraphResult, TInput = GetNodeVariables>(
  variables: GetNodeVariables,
  options?: RequestInit['headers'],
  document = GetNodeDocument,
  outputFn = GetNodeOutputFn,
  inputFn = GetNodeInputFn,
) => fetcher<GetNode, GetNodeVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getNode = (variables: GetNodeVariables) => GetNodeFetcher(variables)();

export const GetRelationshipDocument = `
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

/**
 * Key maker function for `GetRelationship`.
 */
export const GetRelationshipKeys = (variables: GetRelationshipVariables) => ['GetRelationship', variables];

/**
 * Input transformer function for `GetRelationship`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetRelationshipVariables` - The original variables
 * @returns `GetRelationshipVariables` - The transformed variables
 */
export const GetRelationshipInputFn = <TInput = GetRelationshipVariables>(variables: GetRelationshipVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetRelationship`.
 * It extracts the `getRelationship` field from the result and transforms it into a `GraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetRelationship - The data returned from the GraphQL server
 * @returns GraphResult - The transformed data
 */
export const GetRelationshipOutputFn = <TOutput = GraphResult>({ getRelationship }: GetRelationship) =>
  getRelationship &&
  ({
    ...getRelationship,
    nodes: getRelationship.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && (JSON.parse(node?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
    relationships: getRelationship.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `GetRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetRelationshipInput` and `GetRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetRelationshipFetcher = <TOutput = GraphResult, TInput = GetRelationshipVariables>(
  variables: GetRelationshipVariables,
  options?: RequestInit['headers'],
  document = GetRelationshipDocument,
  outputFn = GetRelationshipOutputFn,
  inputFn = GetRelationshipInputFn,
) =>
  fetcher<GetRelationship, GetRelationshipVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getRelationship = (variables: GetRelationshipVariables) => GetRelationshipFetcher(variables)();

export const GetUserDocument = `
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

/**
 * Key maker function for `GetUser`.
 */
export const GetUserKeys = (variables: GetUserVariables) => ['GetUser', variables];

/**
 * Input transformer function for `GetUser`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetUserVariables` - The original variables
 * @returns `GetUserVariables` - The transformed variables
 */
export const GetUserInputFn = <TInput = GetUserVariables>(variables: GetUserVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetUser`.
 * It extracts the `getUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const GetUserOutputFn = <TOutput = CognitoUser>({ getUser }: GetUser) =>
  getUser &&
  ({
    ...getUser,
    attributes: getUser.attributes && (JSON.parse(getUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `GetUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetUserInput` and `GetUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetUserFetcher = <TOutput = CognitoUser, TInput = GetUserVariables>(
  variables: GetUserVariables,
  options?: RequestInit['headers'],
  document = GetUserDocument,
  outputFn = GetUserOutputFn,
  inputFn = GetUserInputFn,
) => fetcher<GetUser, GetUserVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getUser = (variables: GetUserVariables) => GetUserFetcher(variables)();

export const ListUsersDocument = `
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

/**
 * Key maker function for `ListUsers`.
 */
export const ListUsersKeys = (variables: ListUsersVariables) => ['ListUsers', variables];

/**
 * Input transformer function for `ListUsers`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListUsersVariables` - The original variables
 * @returns `ListUsersVariables` - The transformed variables
 */
export const ListUsersInputFn = <TInput = ListUsersVariables>(variables: ListUsersVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `ListUsers`.
 * It extracts the `listUsers` field from the result and transforms it into a `CognitoUserList` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListUsers - The data returned from the GraphQL server
 * @returns CognitoUserList - The transformed data
 */
export const ListUsersOutputFn = <TOutput = CognitoUserList>({ listUsers }: ListUsers) =>
  listUsers &&
  ({
    ...listUsers,
    items: listUsers.items?.map((item) => ({
      ...item,
      attributes: item?.attributes && (JSON.parse(item?.attributes as any) as unknown as Scalars['AWSJSON']),
    })),
  } as unknown as TOutput);

/**
 * Fetcher function for `ListUsers`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListUsersInput` and `ListUsersOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListUsersFetcher = <TOutput = CognitoUserList, TInput = ListUsersVariables>(
  variables: ListUsersVariables,
  options?: RequestInit['headers'],
  document = ListUsersDocument,
  outputFn = ListUsersOutputFn,
  inputFn = ListUsersInputFn,
) => fetcher<ListUsers, ListUsersVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListUsers`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listUsers = (variables: ListUsersVariables) => ListUsersFetcher(variables)();

export const GetManifestDocument = `
    query GetManifest($service: ConnectorService!) {
  getManifest(service: $service)
}
    `;

/**
 * Key maker function for `GetManifest`.
 */
export const GetManifestKeys = (variables: GetManifestVariables) => ['GetManifest', variables];

/**
 * Input transformer function for `GetManifest`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetManifestVariables` - The original variables
 * @returns `GetManifestVariables` - The transformed variables
 */
export const GetManifestInputFn = <TInput = GetManifestVariables>(variables: GetManifestVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `GetManifest`.
 * It extracts the `getManifest` field from the result and transforms it into a `Scalars['AWSJSON']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetManifest - The data returned from the GraphQL server
 * @returns Scalars['AWSJSON'] - The transformed data
 */
export const GetManifestOutputFn = <TOutput = Scalars['AWSJSON']>({ getManifest }: GetManifest) =>
  JSON.parse(getManifest as any) as unknown as TOutput;

/**
 * Fetcher function for `GetManifest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetManifestInput` and `GetManifestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetManifestFetcher = <TOutput = Scalars['AWSJSON'], TInput = GetManifestVariables>(
  variables: GetManifestVariables,
  options?: RequestInit['headers'],
  document = GetManifestDocument,
  outputFn = GetManifestOutputFn,
  inputFn = GetManifestInputFn,
) => fetcher<GetManifest, GetManifestVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetManifest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getManifest = (variables: GetManifestVariables) => GetManifestFetcher(variables)();
