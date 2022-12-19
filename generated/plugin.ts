import { fetcher } from '../graphql/fetcher';
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
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
  /** The `AWSJSON` scalar type provided by AWS AppSync, represents a JSON string that complies with [RFC 8259](https://tools.ietf.org/html/rfc8259).  Maps like "**{\\"upvotes\\": 10}**", lists like "**[1,2,3]**", and scalar values like "**\\"AWSJSON example string\\"**", "**1**", and "**true**" are accepted as valid JSON and will automatically be parsed and loaded in the resolver mapping templates as Maps, Lists, or Scalar values rather than as the literal input strings.  Invalid JSON strings like "**{a: 1}**", "**{'a': 1}**" and "**Unquoted string**" will throw GraphQL validation errors. */
  AWSJSON: Record<string, any> | string;
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
  status?: Maybe<UserStatus>;
  tenantID: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  username: Scalars['ID'];
};

export type CognitoUserList = {
  items: Array<Maybe<CognitoUser>>;
  nextToken?: Maybe<Scalars['String']>;
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
  secretCredentials?: Maybe<Scalars['String']>;
  service: ConnectorService;
  stack?: Maybe<Scalars['String']>;
  status?: Maybe<ConnectorStatus>;
  tenantID: Scalars['ID'];
  topics: Array<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export enum ConnectorService {
  Amazon = 'AMAZON',
  Shopify = 'SHOPIFY',
}

export enum ConnectorStatus {
  AuthorizationFailed = 'AuthorizationFailed',
  AuthorizationGranted = 'AuthorizationGranted',
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
  secretCredentials?: InputMaybe<Scalars['String']>;
  service: ConnectorService;
  stack?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ConnectorStatus>;
  tenantID: Scalars['ID'];
  topics: Array<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateNodeInput = {
  labels: Array<Scalars['String']>;
  properties: Scalars['AWSJSON'];
};

export type CreatePerspectiveInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  owner?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Array<PerspectiveParameterInput>>;
  query: Scalars['String'];
  type: PerspectiveType;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateRelationshipInput = {
  end: Scalars['String'];
  properties: Scalars['AWSJSON'];
  start: Scalars['String'];
  type: Scalars['String'];
};

export type CreateSchemaInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  nodes: Array<SchemaNodeInput>;
  relationships: Array<SchemaRelationshipInput>;
  tenantID: Scalars['ID'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateTenantInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  graphID: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  schemaID: Scalars['ID'];
  tenantID: Scalars['ID'];
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
};

export type DeleteConnectorInput = {
  id: Scalars['ID'];
};

export type DeleteNodeInput = {
  identities: Array<Scalars['ID']>;
};

export type DeletePerspectiveInput = {
  id: Scalars['ID'];
};

export type DeleteRelationshipInput = {
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
  username: Scalars['ID'];
};

export type ExpandGraphInput = {
  direction?: InputMaybe<RelationshipDirection>;
  hops?: InputMaybe<Scalars['Int']>;
  identities: Array<Scalars['ID']>;
};

export type FindUsersInput = {
  email?: InputMaybe<Scalars['String']>;
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

export type InitTransformationsInput = {
  connectorID: Scalars['ID'];
  schemaID: Scalars['ID'];
};

export type InitTransformationsResult = {
  transformations: Array<Maybe<Scalars['ID']>>;
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
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
  stack?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelConnectorStatusInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  topics?: InputMaybe<ModelStringInput>;
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
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
  stack?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelConnectorStatusInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  topics?: InputMaybe<ModelStringInput>;
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
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  groups?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelPerspectiveConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPerspectiveConditionInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  query?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelPerspectiveTypeInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelPerspectiveConnection = {
  items: Array<Maybe<Perspective>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelPerspectiveFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPerspectiveFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  groups?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelPerspectiveFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPerspectiveFilterInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  query?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelPerspectiveTypeInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelPerspectiveTypeInput = {
  eq?: InputMaybe<PerspectiveType>;
  ne?: InputMaybe<PerspectiveType>;
};

export type ModelSchemaConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSchemaConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
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
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTenantConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTenantConditionInput>>>;
  schemaID?: InputMaybe<ModelIdInput>;
  tenantID?: InputMaybe<ModelIdInput>;
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
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTenantFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTenantFilterInput>>>;
  schemaID?: InputMaybe<ModelIdInput>;
  tenantID?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
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
  authorizeConnector?: Maybe<Connector>;
  createConnector?: Maybe<Connector>;
  createNode?: Maybe<GraphNode>;
  createPerspective?: Maybe<Perspective>;
  createRelationship?: Maybe<GraphRelationship>;
  createSchema?: Maybe<Schema>;
  createTenant?: Maybe<Tenant>;
  createTransformation?: Maybe<Transformation>;
  createUser?: Maybe<CognitoUser>;
  deleteConnector?: Maybe<Connector>;
  deleteNode?: Maybe<GraphResult>;
  deletePerspective?: Maybe<Perspective>;
  deleteRelationship?: Maybe<GraphResult>;
  deleteSchema?: Maybe<Schema>;
  deleteTenant?: Maybe<Tenant>;
  deleteTransformation?: Maybe<Transformation>;
  deleteUser?: Maybe<CognitoUser>;
  emptyMutation?: Maybe<Scalars['Int']>;
  initTransformations?: Maybe<InitTransformationsResult>;
  requestFileDownload?: Maybe<RequestFileDownloadResult>;
  requestFileUpload?: Maybe<RequestFileUploadResult>;
  runConnector?: Maybe<Scalars['AWSJSON']>;
  runPerspective?: Maybe<RunPerspectiveResult>;
  updateConnector?: Maybe<Connector>;
  updateNode?: Maybe<GraphNode>;
  updatePerspective?: Maybe<Perspective>;
  updateRelationship?: Maybe<GraphRelationship>;
  updateSchema?: Maybe<Schema>;
  updateTenant?: Maybe<Tenant>;
  updateTransformation?: Maybe<Transformation>;
  updateUser?: Maybe<CognitoUser>;
};

export type MutationAuthorizeConnectorArgs = {
  input: AuthorizeConnectorInput;
};

export type MutationCreateConnectorArgs = {
  condition?: InputMaybe<ModelConnectorConditionInput>;
  input: CreateConnectorInput;
};

export type MutationCreateNodeArgs = {
  graphID: Scalars['String'];
  input: CreateNodeInput;
};

export type MutationCreatePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: CreatePerspectiveInput;
};

export type MutationCreateRelationshipArgs = {
  graphID: Scalars['String'];
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
  tenantID: Scalars['ID'];
};

export type MutationDeleteConnectorArgs = {
  condition?: InputMaybe<ModelConnectorConditionInput>;
  input: DeleteConnectorInput;
};

export type MutationDeleteNodeArgs = {
  graphID: Scalars['String'];
  input: DeleteNodeInput;
};

export type MutationDeletePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: DeletePerspectiveInput;
};

export type MutationDeleteRelationshipArgs = {
  graphID: Scalars['String'];
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
  tenantID: Scalars['ID'];
};

export type MutationInitTransformationsArgs = {
  connectorID: Scalars['ID'];
  schemaID: Scalars['ID'];
  tenantID: Scalars['ID'];
};

export type MutationRequestFileDownloadArgs = {
  graphID: Scalars['String'];
  input: RequestFileDownloadInput;
  tenantID: Scalars['ID'];
};

export type MutationRequestFileUploadArgs = {
  graphID: Scalars['String'];
  input: RequestFileUploadInput;
  tenantID: Scalars['ID'];
};

export type MutationRunConnectorArgs = {
  input: RunConnectorInput;
};

export type MutationRunPerspectiveArgs = {
  input: RunPerspectiveInput;
};

export type MutationUpdateConnectorArgs = {
  condition?: InputMaybe<ModelConnectorConditionInput>;
  input: UpdateConnectorInput;
};

export type MutationUpdateNodeArgs = {
  graphID: Scalars['String'];
  input: UpdateNodeInput;
};

export type MutationUpdatePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: UpdatePerspectiveInput;
};

export type MutationUpdateRelationshipArgs = {
  graphID: Scalars['String'];
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
  tenantID: Scalars['ID'];
};

export type Perspective = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  description?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  parameters?: Maybe<Array<PerspectiveParameter>>;
  query: Scalars['String'];
  type: PerspectiveType;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type PerspectiveParameter = {
  definition: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  type: PerspectiveParameterType;
  value?: Maybe<Scalars['String']>;
};

export enum PerspectiveParameterDateOption {
  BeginOfMonth = 'BEGIN_OF_MONTH',
  BeginOfYear = 'BEGIN_OF_YEAR',
  CurrentDay = 'CURRENT_DAY',
  Custom = 'CUSTOM',
  EndOfMonth = 'END_OF_MONTH',
  EndOfYear = 'END_OF_YEAR',
}

export type PerspectiveParameterInput = {
  definition: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  type: PerspectiveParameterType;
  value?: InputMaybe<Scalars['String']>;
};

export enum PerspectiveParameterType {
  Date = 'DATE',
  Datetime = 'DATETIME',
  Number = 'NUMBER',
  String = 'STRING',
  Time = 'TIME',
}

export enum PerspectiveType {
  Chart = 'CHART',
  Graph = 'GRAPH',
  Metric = 'METRIC',
  Table = 'TABLE',
}

export type Query = {
  echo?: Maybe<Scalars['String']>;
  emptyQuery?: Maybe<Scalars['String']>;
  expandGraph?: Maybe<GraphResult>;
  findUsers?: Maybe<CognitoUserList>;
  getConnector?: Maybe<Connector>;
  getConnectorByDataSource?: Maybe<ModelConnectorConnection>;
  getManifest?: Maybe<Scalars['AWSJSON']>;
  getNode?: Maybe<GraphNode>;
  getPerspective?: Maybe<Perspective>;
  getRelationship?: Maybe<GraphRelationship>;
  getSchema?: Maybe<Schema>;
  getTenant?: Maybe<Tenant>;
  getTransformation?: Maybe<Transformation>;
  getUser?: Maybe<CognitoUser>;
  listConnectors?: Maybe<ModelConnectorConnection>;
  listPerspectives?: Maybe<ModelPerspectiveConnection>;
  listSchemas?: Maybe<ModelSchemaConnection>;
  listTenants?: Maybe<ModelTenantConnection>;
  listTransformations?: Maybe<ModelTransformationConnection>;
  listTransformationsByConnector?: Maybe<ModelTransformationConnection>;
  listUsers?: Maybe<CognitoUserList>;
  searchGraph?: Maybe<SearchGraphResult>;
};

export type QueryEchoArgs = {
  msg?: InputMaybe<Scalars['String']>;
};

export type QueryExpandGraphArgs = {
  graphID: Scalars['String'];
  input: ExpandGraphInput;
};

export type QueryFindUsersArgs = {
  input: FindUsersInput;
  tenantID: Scalars['String'];
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

export type QueryGetManifestArgs = {
  service: ConnectorService;
};

export type QueryGetNodeArgs = {
  graphID: Scalars['String'];
  identity: Scalars['ID'];
};

export type QueryGetPerspectiveArgs = {
  id: Scalars['ID'];
};

export type QueryGetRelationshipArgs = {
  graphID: Scalars['String'];
  identity: Scalars['ID'];
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
  tenantID: Scalars['ID'];
  username: Scalars['ID'];
};

export type QueryListConnectorsArgs = {
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListPerspectivesArgs = {
  filter?: InputMaybe<ModelPerspectiveFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
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

export type QueryListUsersArgs = {
  nextToken?: InputMaybe<Scalars['String']>;
  tenantID: Scalars['ID'];
};

export type QuerySearchGraphArgs = {
  graphID: Scalars['String'];
  input: SearchGraphInput;
  schemaID: Scalars['ID'];
};

export enum RelationshipDirection {
  Bidirectional = 'BIDIRECTIONAL',
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING',
}

export type RequestFileDownloadInput = {
  objectKey: Scalars['String'];
};

export type RequestFileDownloadResult = {
  expiresIn: Scalars['Int'];
  signedDownloadUrl: Scalars['String'];
};

export type RequestFileUploadInput = {
  fileName: Scalars['String'];
  nodeID: Scalars['String'];
  prefix: Scalars['String'];
};

export type RequestFileUploadResult = {
  expiresIn: Scalars['Int'];
  objectKey: Scalars['String'];
  signedUploadUrl: Scalars['String'];
};

export type RunConnectorInput = {
  id: Scalars['ID'];
  parameters?: InputMaybe<Array<RunConnectorParameterInput>>;
  topic: Scalars['String'];
};

export type RunConnectorParameterInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type RunPerspectiveInput = {
  id: Scalars['ID'];
  parameters?: InputMaybe<Array<RunPerspectiveParameterInput>>;
};

export type RunPerspectiveParameterInput = {
  key: Scalars['String'];
  type: PerspectiveParameterType;
  value?: InputMaybe<Scalars['String']>;
};

export type RunPerspectiveResult = {
  records: Scalars['AWSJSON'];
};

export type Schema = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
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
  type: SchemaPropertyType;
};

export type SchemaPropertyInput = {
  key: Scalars['String'];
  name: Scalars['String'];
  type: SchemaPropertyType;
};

export enum SchemaPropertyType {
  Boolean = 'BOOLEAN',
  Currency = 'CURRENCY',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Number = 'NUMBER',
  String = 'STRING',
  Time = 'TIME',
  Undefined = 'UNDEFINED',
}

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
  labels?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};

export type SearchGraphRecord = {
  node: GraphNode;
  score: Scalars['String'];
};

export type SearchGraphResult = {
  nextOffset?: Maybe<Scalars['Int']>;
  records?: Maybe<Array<SearchGraphRecord>>;
};

export type Tenant = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  graphID: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  schemaID: Scalars['ID'];
  tenantID: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

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

export type UpdateConnectorInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  dataSource?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extractor?: InputMaybe<Scalars['String']>;
  graphID?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  secretCredentials?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ConnectorService>;
  stack?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ConnectorStatus>;
  tenantID?: InputMaybe<Scalars['ID']>;
  topics?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateNodeInput = {
  identity: Scalars['ID'];
  properties: Scalars['AWSJSON'];
};

export type UpdatePerspectiveInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Array<PerspectiveParameterInput>>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PerspectiveType>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateRelationshipInput = {
  identity: Scalars['ID'];
  properties: Scalars['AWSJSON'];
};

export type UpdateSchemaInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  nodes?: InputMaybe<Array<SchemaNodeInput>>;
  relationships?: InputMaybe<Array<SchemaRelationshipInput>>;
  tenantID?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateTenantInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  graphID?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  schemaID?: InputMaybe<Scalars['ID']>;
  tenantID?: InputMaybe<Scalars['ID']>;
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
  username: Scalars['ID'];
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

export type CreateConnectorVariables = Exact<{
  input: CreateConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type CreateConnector = {
  createConnector?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        topics: Array<string>;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        stack?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
        graphID?: string | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        topics: Array<string>;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        stack?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
        graphID?: string | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        topics: Array<string>;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        stack?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
        graphID?: string | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        query: string;
        parameters?:
          | Array<{
              key: string;
              name: string;
              type: PerspectiveParameterType;
              definition: string;
              value?: string | undefined;
            }>
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        query: string;
        parameters?:
          | Array<{
              key: string;
              name: string;
              type: PerspectiveParameterType;
              definition: string;
              value?: string | undefined;
            }>
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        query: string;
        parameters?:
          | Array<{
              key: string;
              name: string;
              type: PerspectiveParameterType;
              definition: string;
              value?: string | undefined;
            }>
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
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
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
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
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
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        schemaEntityID?: string | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        schemaEntityID?: string | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        schemaEntityID?: string | undefined;
        expression?: string | undefined;
      }
    | undefined;
};

export type RunPerspectiveVariables = Exact<{
  input: RunPerspectiveInput;
}>;

export type RunPerspective = { runPerspective?: { records: Record<string, any> | string } | undefined };

export type AuthorizeConnectorVariables = Exact<{
  input: AuthorizeConnectorInput;
}>;

export type AuthorizeConnector = {
  authorizeConnector?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        topics: Array<string>;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        stack?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
        graphID?: string | undefined;
      }
    | undefined;
};

export type RequestFileUploadVariables = Exact<{
  input: RequestFileUploadInput;
  tenantID: Scalars['ID'];
  graphID: Scalars['String'];
}>;

export type RequestFileUpload = {
  requestFileUpload?: { signedUploadUrl: string; objectKey: string; expiresIn: number } | undefined;
};

export type RequestFileDownloadVariables = Exact<{
  input: RequestFileDownloadInput;
  tenantID: Scalars['ID'];
  graphID: Scalars['String'];
}>;

export type RequestFileDownload = {
  requestFileDownload?: { signedDownloadUrl: string; expiresIn: number } | undefined;
};

export type RunConnectorVariables = Exact<{
  input: RunConnectorInput;
}>;

export type RunConnector = { runConnector?: Record<string, any> | string | undefined };

export type InitTransformationsVariables = Exact<{
  connectorID: Scalars['ID'];
  tenantID: Scalars['ID'];
  schemaID: Scalars['ID'];
}>;

export type InitTransformations = { initTransformations?: { transformations: Array<string | undefined> } | undefined };

export type CreateNodeVariables = Exact<{
  input: CreateNodeInput;
  graphID: Scalars['String'];
}>;

export type CreateNode = {
  createNode?: { identity: string; labels: Array<string>; properties: Record<string, any> | string } | undefined;
};

export type UpdateNodeVariables = Exact<{
  input: UpdateNodeInput;
  graphID: Scalars['String'];
}>;

export type UpdateNode = {
  updateNode?: { identity: string; labels: Array<string>; properties: Record<string, any> | string } | undefined;
};

export type DeleteNodeVariables = Exact<{
  input: DeleteNodeInput;
  graphID: Scalars['String'];
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
  graphID: Scalars['String'];
}>;

export type CreateRelationship = {
  createRelationship?:
    | { identity: string; type: string; start: string; end: string; properties: Record<string, any> | string }
    | undefined;
};

export type UpdateRelationshipVariables = Exact<{
  input: UpdateRelationshipInput;
  graphID: Scalars['String'];
}>;

export type UpdateRelationship = {
  updateRelationship?:
    | { identity: string; type: string; start: string; end: string; properties: Record<string, any> | string }
    | undefined;
};

export type DeleteRelationshipVariables = Exact<{
  input: DeleteRelationshipInput;
  graphID: Scalars['String'];
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

export type CreateUserVariables = Exact<{
  input: CreateUserInput;
  tenantID: Scalars['ID'];
}>;

export type CreateUser = {
  createUser?:
    | {
        username: string;
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
  tenantID: Scalars['ID'];
}>;

export type UpdateUser = {
  updateUser?:
    | {
        username: string;
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
  tenantID: Scalars['ID'];
}>;

export type DeleteUser = {
  deleteUser?:
    | {
        username: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type EmptyQueryVariables = Exact<{ [key: string]: never }>;

export type EmptyQuery = { emptyQuery?: string | undefined };

export type EchoVariables = Exact<{
  msg?: InputMaybe<Scalars['String']>;
}>;

export type Echo = { echo?: string | undefined };

export type GetConnectorVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnector = {
  getConnector?:
    | {
        id: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        description?: string | undefined;
        topics: Array<string>;
        service: ConnectorService;
        active?: boolean | undefined;
        status?: ConnectorStatus | undefined;
        dataSource?: string | undefined;
        stack?: string | undefined;
        secretCredentials?: string | undefined;
        extractor?: string | undefined;
        graphID?: string | undefined;
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
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              description?: string | undefined;
              topics: Array<string>;
              service: ConnectorService;
              active?: boolean | undefined;
              status?: ConnectorStatus | undefined;
              dataSource?: string | undefined;
              stack?: string | undefined;
              secretCredentials?: string | undefined;
              extractor?: string | undefined;
              graphID?: string | undefined;
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
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              description?: string | undefined;
              topics: Array<string>;
              service: ConnectorService;
              active?: boolean | undefined;
              status?: ConnectorStatus | undefined;
              dataSource?: string | undefined;
              stack?: string | undefined;
              secretCredentials?: string | undefined;
              extractor?: string | undefined;
              graphID?: string | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        description?: string | undefined;
        type: PerspectiveType;
        query: string;
        parameters?:
          | Array<{
              key: string;
              name: string;
              type: PerspectiveParameterType;
              definition: string;
              value?: string | undefined;
            }>
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
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              owner?: string | undefined;
              groups?: Array<string | undefined> | undefined;
              name: string;
              description?: string | undefined;
              type: PerspectiveType;
              query: string;
              parameters?:
                | Array<{
                    key: string;
                    name: string;
                    type: PerspectiveParameterType;
                    definition: string;
                    value?: string | undefined;
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
        nodes: Array<{
          id: string;
          label: string;
          idSelector?: Array<string> | undefined;
          descriptionSelector?: Array<string> | undefined;
          avatarSelector?: string | undefined;
          avatarColor: string;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
        }>;
        relationships: Array<{
          id: string;
          startNodeID: string;
          endNodeID: string;
          type: string;
          descriptionSelector?: Array<string> | undefined;
          properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
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
              nodes: Array<{
                id: string;
                label: string;
                idSelector?: Array<string> | undefined;
                descriptionSelector?: Array<string> | undefined;
                avatarSelector?: string | undefined;
                avatarColor: string;
                properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
              }>;
              relationships: Array<{
                id: string;
                startNodeID: string;
                endNodeID: string;
                type: string;
                descriptionSelector?: Array<string> | undefined;
                properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        topics: Array<string>;
        active?: boolean | undefined;
        schemaEntityID?: string | undefined;
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
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              topics: Array<string>;
              active?: boolean | undefined;
              schemaEntityID?: string | undefined;
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
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              topics: Array<string>;
              active?: boolean | undefined;
              schemaEntityID?: string | undefined;
              expression?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type SearchGraphVariables = Exact<{
  input: SearchGraphInput;
  graphID: Scalars['String'];
  schemaID: Scalars['ID'];
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
  graphID: Scalars['String'];
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
  identity: Scalars['ID'];
  graphID: Scalars['String'];
}>;

export type GetNode = {
  getNode?: { identity: string; labels: Array<string>; properties: Record<string, any> | string } | undefined;
};

export type GetRelationshipVariables = Exact<{
  identity: Scalars['ID'];
  graphID: Scalars['String'];
}>;

export type GetRelationship = {
  getRelationship?:
    | { identity: string; type: string; start: string; end: string; properties: Record<string, any> | string }
    | undefined;
};

export type GetUserVariables = Exact<{
  username: Scalars['ID'];
  tenantID: Scalars['ID'];
}>;

export type GetUser = {
  getUser?:
    | {
        username: string;
        tenantID: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
      }
    | undefined;
};

export type FindUsersVariables = Exact<{
  input: FindUsersInput;
  tenantID: Scalars['String'];
}>;

export type FindUsers = {
  findUsers?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              username: string;
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

export type ListUsersVariables = Exact<{
  tenantID: Scalars['ID'];
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListUsers = {
  listUsers?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              username: string;
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

export const CreateConnectorDocument = `
    mutation CreateConnector($input: CreateConnectorInput!, $condition: ModelConnectorConditionInput) {
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

export const RunPerspectiveDocument = `
    mutation RunPerspective($input: RunPerspectiveInput!) {
  runPerspective(input: $input) {
    records
  }
}
    `;

/**
 * Key maker function for `RunPerspective`.
 */
export const RunPerspectiveKeys = () => ['RunPerspective'];

/**
 * Input transformer function for `RunPerspective`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `RunPerspectiveVariables` - The original variables
 * @returns `RunPerspectiveVariables` - The transformed variables
 */
export const RunPerspectiveInputFn = <TInput = RunPerspectiveVariables>(variables: RunPerspectiveVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `RunPerspective`.
 * It extracts the `runPerspective` field from the result and transforms it into a `RunPerspectiveResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RunPerspective - The data returned from the GraphQL server
 * @returns RunPerspectiveResult - The transformed data
 */
export const RunPerspectiveOutputFn = <TOutput = RunPerspectiveResult>({ runPerspective }: RunPerspective) =>
  runPerspective &&
  ({
    ...runPerspective,
    records: runPerspective.records && (JSON.parse(runPerspective.records as any) as unknown as Scalars['AWSJSON']),
  } as unknown as TOutput);

/**
 * Fetcher function for `RunPerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `RunPerspectiveInput` and `RunPerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const RunPerspectiveFetcher = <TOutput = RunPerspectiveResult, TInput = RunPerspectiveVariables>(
  variables: RunPerspectiveVariables,
  options?: RequestInit['headers'],
  document = RunPerspectiveDocument,
  outputFn = RunPerspectiveOutputFn,
  inputFn = RunPerspectiveInputFn,
) => fetcher<RunPerspective, RunPerspectiveVariables, TOutput, TInput>(document, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `RunPerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const runPerspective = (variables: RunPerspectiveVariables) => RunPerspectiveFetcher(variables)();

export const AuthorizeConnectorDocument = `
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

export const RequestFileUploadDocument = `
    mutation RequestFileUpload($input: RequestFileUploadInput!, $tenantID: ID!, $graphID: String!) {
  requestFileUpload(input: $input, tenantID: $tenantID, graphID: $graphID) {
    signedUploadUrl
    objectKey
    expiresIn
  }
}
    `;

/**
 * Key maker function for `RequestFileUpload`.
 */
export const RequestFileUploadKeys = () => ['RequestFileUpload'];

/**
 * Input transformer function for `RequestFileUpload`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `RequestFileUploadVariables` - The original variables
 * @returns `RequestFileUploadVariables` - The transformed variables
 */
export const RequestFileUploadInputFn = <TInput = RequestFileUploadVariables>(variables: RequestFileUploadVariables) =>
  variables as unknown as TInput;

/**
 * Output transformer function for `RequestFileUpload`.
 * It extracts the `requestFileUpload` field from the result and transforms it into a `RequestFileUploadResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RequestFileUpload - The data returned from the GraphQL server
 * @returns RequestFileUploadResult - The transformed data
 */
export const RequestFileUploadOutputFn = <TOutput = RequestFileUploadResult>({
  requestFileUpload,
}: RequestFileUpload) => requestFileUpload as unknown as TOutput;

/**
 * Fetcher function for `RequestFileUpload`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `RequestFileUploadInput` and `RequestFileUploadOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const RequestFileUploadFetcher = <TOutput = RequestFileUploadResult, TInput = RequestFileUploadVariables>(
  variables: RequestFileUploadVariables,
  options?: RequestInit['headers'],
  document = RequestFileUploadDocument,
  outputFn = RequestFileUploadOutputFn,
  inputFn = RequestFileUploadInputFn,
) =>
  fetcher<RequestFileUpload, RequestFileUploadVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `RequestFileUpload`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const requestFileUpload = (variables: RequestFileUploadVariables) => RequestFileUploadFetcher(variables)();

export const RequestFileDownloadDocument = `
    mutation RequestFileDownload($input: RequestFileDownloadInput!, $tenantID: ID!, $graphID: String!) {
  requestFileDownload(input: $input, tenantID: $tenantID, graphID: $graphID) {
    signedDownloadUrl
    expiresIn
  }
}
    `;

/**
 * Key maker function for `RequestFileDownload`.
 */
export const RequestFileDownloadKeys = () => ['RequestFileDownload'];

/**
 * Input transformer function for `RequestFileDownload`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `RequestFileDownloadVariables` - The original variables
 * @returns `RequestFileDownloadVariables` - The transformed variables
 */
export const RequestFileDownloadInputFn = <TInput = RequestFileDownloadVariables>(
  variables: RequestFileDownloadVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `RequestFileDownload`.
 * It extracts the `requestFileDownload` field from the result and transforms it into a `RequestFileDownloadResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RequestFileDownload - The data returned from the GraphQL server
 * @returns RequestFileDownloadResult - The transformed data
 */
export const RequestFileDownloadOutputFn = <TOutput = RequestFileDownloadResult>({
  requestFileDownload,
}: RequestFileDownload) => requestFileDownload as unknown as TOutput;

/**
 * Fetcher function for `RequestFileDownload`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `RequestFileDownloadInput` and `RequestFileDownloadOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const RequestFileDownloadFetcher = <TOutput = RequestFileDownloadResult, TInput = RequestFileDownloadVariables>(
  variables: RequestFileDownloadVariables,
  options?: RequestInit['headers'],
  document = RequestFileDownloadDocument,
  outputFn = RequestFileDownloadOutputFn,
  inputFn = RequestFileDownloadInputFn,
) =>
  fetcher<RequestFileDownload, RequestFileDownloadVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `RequestFileDownload`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const requestFileDownload = (variables: RequestFileDownloadVariables) => RequestFileDownloadFetcher(variables)();

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

export const InitTransformationsDocument = `
    mutation InitTransformations($connectorID: ID!, $tenantID: ID!, $schemaID: ID!) {
  initTransformations(
    connectorID: $connectorID
    tenantID: $tenantID
    schemaID: $schemaID
  ) {
    transformations
  }
}
    `;

/**
 * Key maker function for `InitTransformations`.
 */
export const InitTransformationsKeys = () => ['InitTransformations'];

/**
 * Input transformer function for `InitTransformations`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `InitTransformationsVariables` - The original variables
 * @returns `InitTransformationsVariables` - The transformed variables
 */
export const InitTransformationsInputFn = <TInput = InitTransformationsVariables>(
  variables: InitTransformationsVariables,
) => variables as unknown as TInput;

/**
 * Output transformer function for `InitTransformations`.
 * It extracts the `initTransformations` field from the result and transforms it into a `InitTransformationsResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data InitTransformations - The data returned from the GraphQL server
 * @returns InitTransformationsResult - The transformed data
 */
export const InitTransformationsOutputFn = <TOutput = InitTransformationsResult>({
  initTransformations,
}: InitTransformations) => initTransformations as unknown as TOutput;

/**
 * Fetcher function for `InitTransformations`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `InitTransformationsInput` and `InitTransformationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const InitTransformationsFetcher = <TOutput = InitTransformationsResult, TInput = InitTransformationsVariables>(
  variables: InitTransformationsVariables,
  options?: RequestInit['headers'],
  document = InitTransformationsDocument,
  outputFn = InitTransformationsOutputFn,
  inputFn = InitTransformationsInputFn,
) =>
  fetcher<InitTransformations, InitTransformationsVariables, TOutput, TInput>(
    document,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `InitTransformations`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const initTransformations = (variables: InitTransformationsVariables) => InitTransformationsFetcher(variables)();

export const CreateNodeDocument = `
    mutation CreateNode($input: CreateNodeInput!, $graphID: String!) {
  createNode(input: $input, graphID: $graphID) {
    identity
    labels
    properties
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
 * It extracts the `createNode` field from the result and transforms it into a `GraphNode` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateNode - The data returned from the GraphQL server
 * @returns GraphNode - The transformed data
 */
export const CreateNodeOutputFn = <TOutput = GraphNode>({ createNode }: CreateNode) =>
  createNode &&
  ({
    ...createNode,
    properties: createNode.properties && (JSON.parse(createNode.properties as any) as unknown as Scalars['AWSJSON']),
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
export const CreateNodeFetcher = <TOutput = GraphNode, TInput = CreateNodeVariables>(
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
    mutation UpdateNode($input: UpdateNodeInput!, $graphID: String!) {
  updateNode(input: $input, graphID: $graphID) {
    identity
    labels
    properties
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
 * It extracts the `updateNode` field from the result and transforms it into a `GraphNode` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateNode - The data returned from the GraphQL server
 * @returns GraphNode - The transformed data
 */
export const UpdateNodeOutputFn = <TOutput = GraphNode>({ updateNode }: UpdateNode) =>
  updateNode &&
  ({
    ...updateNode,
    properties: updateNode.properties && (JSON.parse(updateNode.properties as any) as unknown as Scalars['AWSJSON']),
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
export const UpdateNodeFetcher = <TOutput = GraphNode, TInput = UpdateNodeVariables>(
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
    mutation CreateRelationship($input: CreateRelationshipInput!, $graphID: String!) {
  createRelationship(input: $input, graphID: $graphID) {
    identity
    type
    start
    end
    properties
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
 * It extracts the `createRelationship` field from the result and transforms it into a `GraphRelationship` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateRelationship - The data returned from the GraphQL server
 * @returns GraphRelationship - The transformed data
 */
export const CreateRelationshipOutputFn = <TOutput = GraphRelationship>({ createRelationship }: CreateRelationship) =>
  createRelationship &&
  ({
    ...createRelationship,
    properties:
      createRelationship.properties &&
      (JSON.parse(createRelationship.properties as any) as unknown as Scalars['AWSJSON']),
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
export const CreateRelationshipFetcher = <TOutput = GraphRelationship, TInput = CreateRelationshipVariables>(
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
    mutation UpdateRelationship($input: UpdateRelationshipInput!, $graphID: String!) {
  updateRelationship(input: $input, graphID: $graphID) {
    identity
    type
    start
    end
    properties
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
 * It extracts the `updateRelationship` field from the result and transforms it into a `GraphRelationship` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateRelationship - The data returned from the GraphQL server
 * @returns GraphRelationship - The transformed data
 */
export const UpdateRelationshipOutputFn = <TOutput = GraphRelationship>({ updateRelationship }: UpdateRelationship) =>
  updateRelationship &&
  ({
    ...updateRelationship,
    properties:
      updateRelationship.properties &&
      (JSON.parse(updateRelationship.properties as any) as unknown as Scalars['AWSJSON']),
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
export const UpdateRelationshipFetcher = <TOutput = GraphRelationship, TInput = UpdateRelationshipVariables>(
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
    mutation DeleteRelationship($input: DeleteRelationshipInput!, $graphID: String!) {
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

export const CreateUserDocument = `
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

export const UpdateUserDocument = `
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

export const GetConnectorDocument = `
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

export const GetPerspectiveDocument = `
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

export const SearchGraphDocument = `
    query SearchGraph($input: SearchGraphInput!, $graphID: String!, $schemaID: ID!) {
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
    query GetNode($identity: ID!, $graphID: String!) {
  getNode(identity: $identity, graphID: $graphID) {
    identity
    labels
    properties
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
 * It extracts the `getNode` field from the result and transforms it into a `GraphNode` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetNode - The data returned from the GraphQL server
 * @returns GraphNode - The transformed data
 */
export const GetNodeOutputFn = <TOutput = GraphNode>({ getNode }: GetNode) =>
  getNode &&
  ({
    ...getNode,
    properties: getNode.properties && (JSON.parse(getNode.properties as any) as unknown as Scalars['AWSJSON']),
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
export const GetNodeFetcher = <TOutput = GraphNode, TInput = GetNodeVariables>(
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
 * It extracts the `getRelationship` field from the result and transforms it into a `GraphRelationship` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetRelationship - The data returned from the GraphQL server
 * @returns GraphRelationship - The transformed data
 */
export const GetRelationshipOutputFn = <TOutput = GraphRelationship>({ getRelationship }: GetRelationship) =>
  getRelationship &&
  ({
    ...getRelationship,
    properties:
      getRelationship.properties && (JSON.parse(getRelationship.properties as any) as unknown as Scalars['AWSJSON']),
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
export const GetRelationshipFetcher = <TOutput = GraphRelationship, TInput = GetRelationshipVariables>(
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

export const FindUsersDocument = `
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

/**
 * Key maker function for `FindUsers`.
 */
export const FindUsersKeys = (variables: FindUsersVariables) => ['FindUsers', variables];

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

export const ListUsersDocument = `
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
