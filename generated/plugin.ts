/* eslint-disable */
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
import { fetchWithAmplify } from '../graphql/fetcher';
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

export type CognitoUser = {
  attributes: Scalars['AWSJSON'];
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  username: Scalars['ID'];
};

export type CognitoUserList = {
  items: Array<Maybe<CognitoUser>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Connector = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  secretCredentials?: Maybe<Scalars['AWSJSON']>;
  service: ConnectorService;
  source?: Maybe<Scalars['String']>;
  status: ConnectorStatus;
  topics?: Maybe<Array<Scalars['String']>>;
  transformations?: Maybe<ModelTransformationConnection>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type ConnectorTransformationsArgs = {
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ConnectorAuthorization = {
  authParams?: Maybe<Array<Scalars['String']>>;
  authUrl?: Maybe<Scalars['String']>;
  callbackParams?: Maybe<Array<Scalars['String']>>;
  type: ConnectorAuthorizationType;
};

export enum ConnectorAuthorizationType {
  Oauth = 'OAUTH',
}

export type ConnectorCredentials = {
  id: Scalars['ID'];
  plainCredentials: Scalars['AWSJSON'];
};

export type ConnectorCredentialsField = {
  field: Scalars['String'];
  pattern?: Maybe<Scalars['String']>;
  type: ConnectorCredentialsFieldType;
};

export enum ConnectorCredentialsFieldType {
  AccessToken = 'ACCESS_TOKEN',
  Domain = 'DOMAIN',
}

export type ConnectorManifest = {
  authorization?: Maybe<ConnectorAuthorization>;
  credentials?: Maybe<Array<ConnectorCredentialsField>>;
  service?: Maybe<ConnectorService>;
  topics?: Maybe<Array<Scalars['String']>>;
  version?: Maybe<Scalars['String']>;
};

export enum ConnectorService {
  Amazon = 'AMAZON',
  Shopify = 'SHOPIFY',
}

export enum ConnectorStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type CreateConnectorCredentialsInput = {
  id: Scalars['ID'];
  plainCredentials: Scalars['AWSJSON'];
};

export type CreateConnectorInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  secretCredentials?: InputMaybe<Scalars['AWSJSON']>;
  service: ConnectorService;
  source?: InputMaybe<Scalars['String']>;
  status: ConnectorStatus;
  topics?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateNodeInput = {
  labels: Array<Scalars['String']>;
  properties: Scalars['AWSJSON'];
};

export type CreateOrganizationInput = {
  adminGroup?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
  userGroup?: InputMaybe<Scalars['String']>;
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
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  nodes?: InputMaybe<Array<SchemaNodeInput>>;
  owner?: InputMaybe<Scalars['String']>;
  relationships?: InputMaybe<Array<SchemaRelationshipInput>>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateTestInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  credentials?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  owner?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateTransformationInput = {
  connectorID: Scalars['ID'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  expression?: InputMaybe<Scalars['String']>;
  graphEntityType: GraphEntityType;
  id?: InputMaybe<Scalars['ID']>;
  schemaEntity: Scalars['String'];
  status: TransformationStatus;
  topics: Array<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
};

export type DeleteConnectorCredentialsInput = {
  id: Scalars['ID'];
};

export type DeleteConnectorInput = {
  id: Scalars['ID'];
};

export type DeleteNodeInput = {
  identities: Array<Scalars['ID']>;
};

export type DeleteNodeRecord = {
  nodes?: Maybe<Array<GraphNode>>;
  relationships?: Maybe<Array<GraphRelationship>>;
};

export type DeletePerspectiveInput = {
  id: Scalars['ID'];
};

export type DeleteRelationshipInput = {
  identities: Array<Scalars['ID']>;
};

export type DeleteRelationshipRecord = {
  relationships?: Maybe<Array<GraphRelationship>>;
};

export type DeleteSchemaInput = {
  id: Scalars['ID'];
};

export type DeleteTestInput = {
  id: Scalars['ID'];
};

export type DeleteTransformationInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  username: Scalars['ID'];
};

export type FindUsersInput = {
  email?: InputMaybe<Scalars['String']>;
};

export enum GraphEntityType {
  Node = 'NODE',
  Relationship = 'RELATIONSHIP',
}

export type GraphNode = {
  identity: Scalars['ID'];
  labels: Array<Scalars['String']>;
  properties: Scalars['AWSJSON'];
};

export type GraphNodeRelationship = {
  node: GraphNode;
  relationship: GraphRelationship;
};

export type GraphRelationship = {
  end: Scalars['String'];
  identity: Scalars['ID'];
  properties: Scalars['AWSJSON'];
  start: Scalars['String'];
  type: Scalars['String'];
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
  and?: InputMaybe<Array<InputMaybe<ModelConnectorConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelConnectorConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelConnectorConditionInput>>>;
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
  source?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelConnectorStatusInput>;
  topics?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelConnectorConnection = {
  items: Array<Maybe<Connector>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelConnectorFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelConnectorFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelConnectorFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelConnectorFilterInput>>>;
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
  source?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelConnectorStatusInput>;
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

export type ModelGraphEntityTypeInput = {
  eq?: InputMaybe<GraphEntityType>;
  ne?: InputMaybe<GraphEntityType>;
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

export type ModelOrganizationConditionInput = {
  adminGroup?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelOrganizationConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelOrganizationConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrganizationConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userGroup?: InputMaybe<ModelStringInput>;
};

export type ModelOrganizationConnection = {
  items: Array<Maybe<Organization>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelOrganizationFilterInput = {
  adminGroup?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelOrganizationFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelOrganizationFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrganizationFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userGroup?: InputMaybe<ModelStringInput>;
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
  groups?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelSchemaConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSchemaConditionInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelSchemaConnection = {
  items: Array<Maybe<Schema>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelSchemaFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSchemaFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  groups?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelSchemaFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSchemaFilterInput>>>;
  owner?: InputMaybe<ModelStringInput>;
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

export type ModelTestConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTestConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  credentials?: InputMaybe<ModelStringInput>;
  groups?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTestConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTestConditionInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelTestConnection = {
  items: Array<Maybe<Test>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTestFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTestFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  credentials?: InputMaybe<ModelStringInput>;
  groups?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTestFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTestFilterInput>>>;
  owner?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelTransformationConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTransformationConditionInput>>>;
  connectorID?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  expression?: InputMaybe<ModelStringInput>;
  graphEntityType?: InputMaybe<ModelGraphEntityTypeInput>;
  not?: InputMaybe<ModelTransformationConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTransformationConditionInput>>>;
  schemaEntity?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelTransformationStatusInput>;
  topics?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelTransformationConnection = {
  items: Array<Maybe<Transformation>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTransformationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTransformationFilterInput>>>;
  connectorID?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  expression?: InputMaybe<ModelStringInput>;
  graphEntityType?: InputMaybe<ModelGraphEntityTypeInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelTransformationFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTransformationFilterInput>>>;
  schemaEntity?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelTransformationStatusInput>;
  topics?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelTransformationStatusInput = {
  eq?: InputMaybe<TransformationStatus>;
  ne?: InputMaybe<TransformationStatus>;
};

export type Mutation = {
  createConnector?: Maybe<Connector>;
  createConnectorCredentials?: Maybe<ConnectorCredentials>;
  createNode?: Maybe<NodeGraphRecord>;
  createOrganization?: Maybe<Organization>;
  createPerspective?: Maybe<Perspective>;
  createRelationship?: Maybe<RelationshipGraphRecord>;
  createSchema?: Maybe<Schema>;
  createTest?: Maybe<Test>;
  createTransformation?: Maybe<Transformation>;
  createUser?: Maybe<CognitoUser>;
  deleteConnector?: Maybe<Connector>;
  deleteConnectorCredentials?: Maybe<ConnectorCredentials>;
  deleteNode?: Maybe<DeleteNodeRecord>;
  deletePerspective?: Maybe<Perspective>;
  deleteRelationship?: Maybe<DeleteRelationshipRecord>;
  deleteSchema?: Maybe<Schema>;
  deleteTest?: Maybe<Test>;
  deleteTransformation?: Maybe<Transformation>;
  deleteUser?: Maybe<CognitoUser>;
  emptyMutation?: Maybe<Scalars['Int']>;
  runConnector?: Maybe<Scalars['AWSJSON']>;
  runPerspective?: Maybe<RunPerspectiveResult>;
  updateConnector?: Maybe<Connector>;
  updateConnectorCredentials?: Maybe<ConnectorCredentials>;
  updateNode?: Maybe<NodeGraphRecord>;
  updateOrganization?: Maybe<Organization>;
  updatePerspective?: Maybe<Perspective>;
  updateRelationship?: Maybe<RelationshipGraphRecord>;
  updateSchema?: Maybe<Schema>;
  updateTest?: Maybe<Test>;
  updateTransformation?: Maybe<Transformation>;
  updateUser?: Maybe<CognitoUser>;
};

export type MutationCreateConnectorArgs = {
  condition?: InputMaybe<ModelConnectorConditionInput>;
  input: CreateConnectorInput;
};

export type MutationCreateConnectorCredentialsArgs = {
  input: CreateConnectorCredentialsInput;
};

export type MutationCreateNodeArgs = {
  input: CreateNodeInput;
};

export type MutationCreateOrganizationArgs = {
  condition?: InputMaybe<ModelOrganizationConditionInput>;
  input: CreateOrganizationInput;
};

export type MutationCreatePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: CreatePerspectiveInput;
};

export type MutationCreateRelationshipArgs = {
  input: CreateRelationshipInput;
};

export type MutationCreateSchemaArgs = {
  condition?: InputMaybe<ModelSchemaConditionInput>;
  input: CreateSchemaInput;
};

export type MutationCreateTestArgs = {
  condition?: InputMaybe<ModelTestConditionInput>;
  input: CreateTestInput;
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

export type MutationDeleteConnectorCredentialsArgs = {
  input: DeleteConnectorCredentialsInput;
};

export type MutationDeleteNodeArgs = {
  input: DeleteNodeInput;
};

export type MutationDeletePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: DeletePerspectiveInput;
};

export type MutationDeleteRelationshipArgs = {
  input: DeleteRelationshipInput;
};

export type MutationDeleteSchemaArgs = {
  condition?: InputMaybe<ModelSchemaConditionInput>;
  input: DeleteSchemaInput;
};

export type MutationDeleteTestArgs = {
  condition?: InputMaybe<ModelTestConditionInput>;
  input: DeleteTestInput;
};

export type MutationDeleteTransformationArgs = {
  condition?: InputMaybe<ModelTransformationConditionInput>;
  input: DeleteTransformationInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
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

export type MutationUpdateConnectorCredentialsArgs = {
  input: UpdateConnectorCredentialsInput;
};

export type MutationUpdateNodeArgs = {
  input: UpdateNodeInput;
};

export type MutationUpdateOrganizationArgs = {
  condition?: InputMaybe<ModelOrganizationConditionInput>;
  input: UpdateOrganizationInput;
};

export type MutationUpdatePerspectiveArgs = {
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
  input: UpdatePerspectiveInput;
};

export type MutationUpdateRelationshipArgs = {
  input: UpdateRelationshipInput;
};

export type MutationUpdateSchemaArgs = {
  condition?: InputMaybe<ModelSchemaConditionInput>;
  input: UpdateSchemaInput;
};

export type MutationUpdateTestArgs = {
  condition?: InputMaybe<ModelTestConditionInput>;
  input: UpdateTestInput;
};

export type MutationUpdateTransformationArgs = {
  condition?: InputMaybe<ModelTransformationConditionInput>;
  input: UpdateTransformationInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type NodeGraphRecord = {
  node: GraphNode;
  relationships?: Maybe<Array<GraphNodeRelationship>>;
};

export type NodesGraphRecord = {
  records?: Maybe<Array<NodeGraphRecord>>;
};

export type Organization = {
  adminGroup?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  userGroup?: Maybe<Scalars['String']>;
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
  customTest?: Maybe<Test>;
  echo?: Maybe<Scalars['String']>;
  emptyQuery?: Maybe<Scalars['String']>;
  findUsers?: Maybe<CognitoUserList>;
  getConnector?: Maybe<Connector>;
  getConnectorBySource?: Maybe<ModelConnectorConnection>;
  getConnectorCredentials?: Maybe<ConnectorCredentials>;
  getConnectorManifest?: Maybe<ConnectorManifest>;
  getNode?: Maybe<NodeGraphRecord>;
  getOrganization?: Maybe<Organization>;
  getPerspective?: Maybe<Perspective>;
  getRelationship?: Maybe<RelationshipGraphRecord>;
  getSchema?: Maybe<Schema>;
  getTest?: Maybe<Test>;
  getTransformation?: Maybe<Transformation>;
  getTransformationsByConnector?: Maybe<ModelTransformationConnection>;
  getUser?: Maybe<CognitoUser>;
  listConnectors?: Maybe<ModelConnectorConnection>;
  listNodes?: Maybe<NodesGraphRecord>;
  listOrganizations?: Maybe<ModelOrganizationConnection>;
  listPerspectives?: Maybe<ModelPerspectiveConnection>;
  listSchemas?: Maybe<ModelSchemaConnection>;
  listTests?: Maybe<ModelTestConnection>;
  listTransformations?: Maybe<ModelTransformationConnection>;
  listUsers?: Maybe<CognitoUserList>;
  searchGraph?: Maybe<SearchGraphResult>;
};

export type QueryCustomTestArgs = {
  id: Scalars['ID'];
};

export type QueryEchoArgs = {
  msg?: InputMaybe<Scalars['String']>;
};

export type QueryFindUsersArgs = {
  input: FindUsersInput;
};

export type QueryGetConnectorArgs = {
  id: Scalars['ID'];
};

export type QueryGetConnectorBySourceArgs = {
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  source: Scalars['String'];
};

export type QueryGetConnectorCredentialsArgs = {
  id: Scalars['ID'];
};

export type QueryGetConnectorManifestArgs = {
  query: QueryGetConnectorManifestQueryInput;
};

export type QueryGetNodeArgs = {
  identity: Scalars['ID'];
};

export type QueryGetOrganizationArgs = {
  id: Scalars['ID'];
};

export type QueryGetPerspectiveArgs = {
  id: Scalars['ID'];
};

export type QueryGetRelationshipArgs = {
  identity: Scalars['ID'];
};

export type QueryGetSchemaArgs = {
  id: Scalars['ID'];
};

export type QueryGetTestArgs = {
  id: Scalars['ID'];
};

export type QueryGetTransformationArgs = {
  id: Scalars['ID'];
};

export type QueryGetTransformationsByConnectorArgs = {
  connectorID: Scalars['ID'];
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryGetUserArgs = {
  username: Scalars['ID'];
};

export type QueryListConnectorsArgs = {
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListNodesArgs = {
  label: Scalars['String'];
};

export type QueryListOrganizationsArgs = {
  filter?: InputMaybe<ModelOrganizationFilterInput>;
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

export type QueryListTestsArgs = {
  filter?: InputMaybe<ModelTestFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListTransformationsArgs = {
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListUsersArgs = {
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QuerySearchGraphArgs = {
  input: SearchGraphInput;
};

export type QueryGetConnectorManifestQueryInput = {
  service: ConnectorService;
};

export type RelationshipGraphRecord = {
  end: GraphNode;
  relationship: GraphRelationship;
  start: GraphNode;
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
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  nodes?: Maybe<Array<SchemaNode>>;
  owner?: Maybe<Scalars['String']>;
  relationships?: Maybe<Array<SchemaRelationship>>;
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
  schemaID: Scalars['ID'];
  term: Scalars['String'];
};

export type SearchGraphRecord = {
  node: GraphNode;
  score: Scalars['String'];
};

export type SearchGraphResult = {
  records?: Maybe<Array<SearchGraphRecord>>;
};

export type Test = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  credentials?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export type Transformation = {
  connector?: Maybe<Connector>;
  connectorID: Scalars['ID'];
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  expression?: Maybe<Scalars['String']>;
  graphEntityType: GraphEntityType;
  id: Scalars['ID'];
  schemaEntity: Scalars['String'];
  status: TransformationStatus;
  topics: Array<Scalars['String']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

export enum TransformationStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
}

export type UpdateConnectorCredentialsInput = {
  id: Scalars['ID'];
  plainCredentials: Scalars['AWSJSON'];
};

export type UpdateConnectorInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  secretCredentials?: InputMaybe<Scalars['AWSJSON']>;
  service?: InputMaybe<ConnectorService>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ConnectorStatus>;
  topics?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateNodeInput = {
  identity: Scalars['ID'];
  properties: Scalars['AWSJSON'];
};

export type UpdateOrganizationInput = {
  adminGroup?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
  userGroup?: InputMaybe<Scalars['String']>;
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
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  nodes?: InputMaybe<Array<SchemaNodeInput>>;
  owner?: InputMaybe<Scalars['String']>;
  relationships?: InputMaybe<Array<SchemaRelationshipInput>>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateTestInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  credentials?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateTransformationInput = {
  connectorID?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  expression?: InputMaybe<Scalars['String']>;
  graphEntityType?: InputMaybe<GraphEntityType>;
  id: Scalars['ID'];
  schemaEntity?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TransformationStatus>;
  topics?: InputMaybe<Array<Scalars['String']>>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateUserInput = {
  email: Scalars['String'];
};

export type EmptyMutationMutationVariables = Exact<{ [key: string]: never }>;

export type EmptyMutationMutation = { emptyMutation?: number | undefined };

export type RunConnectorMutationVariables = Exact<{
  input: RunConnectorInput;
}>;

export type RunConnectorMutation = { runConnector?: Record<string, any> | string | undefined };

export type CreateConnectorCredentialsMutationVariables = Exact<{
  input: CreateConnectorCredentialsInput;
}>;

export type CreateConnectorCredentialsMutation = {
  createConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export type UpdateConnectorCredentialsMutationVariables = Exact<{
  input: UpdateConnectorCredentialsInput;
}>;

export type UpdateConnectorCredentialsMutation = {
  updateConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export type DeleteConnectorCredentialsMutationVariables = Exact<{
  input: DeleteConnectorCredentialsInput;
}>;

export type DeleteConnectorCredentialsMutation = {
  deleteConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export type CreateNodeMutationVariables = Exact<{
  input: CreateNodeInput;
}>;

export type CreateNodeMutation = {
  createNode?:
    | {
        node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        relationships?:
          | Array<{
              node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
              relationship: {
                identity: string;
                type: string;
                start: string;
                end: string;
                properties: Record<string, any> | string;
              };
            }>
          | undefined;
      }
    | undefined;
};

export type UpdateNodeMutationVariables = Exact<{
  input: UpdateNodeInput;
}>;

export type UpdateNodeMutation = {
  updateNode?:
    | {
        node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        relationships?:
          | Array<{
              node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
              relationship: {
                identity: string;
                type: string;
                start: string;
                end: string;
                properties: Record<string, any> | string;
              };
            }>
          | undefined;
      }
    | undefined;
};

export type DeleteNodeMutationVariables = Exact<{
  input: DeleteNodeInput;
}>;

export type DeleteNodeMutation = {
  deleteNode?:
    | {
        nodes?:
          | Array<{ identity: string; labels: Array<string>; properties: Record<string, any> | string }>
          | undefined;
        relationships?:
          | Array<{
              identity: string;
              type: string;
              start: string;
              end: string;
              properties: Record<string, any> | string;
            }>
          | undefined;
      }
    | undefined;
};

export type CreateRelationshipMutationVariables = Exact<{
  input: CreateRelationshipInput;
}>;

export type CreateRelationshipMutation = {
  createRelationship?:
    | {
        start: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        end: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        relationship: {
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        };
      }
    | undefined;
};

export type UpdateRelationshipMutationVariables = Exact<{
  input: UpdateRelationshipInput;
}>;

export type UpdateRelationshipMutation = {
  updateRelationship?:
    | {
        start: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        end: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        relationship: {
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        };
      }
    | undefined;
};

export type DeleteRelationshipMutationVariables = Exact<{
  input: DeleteRelationshipInput;
}>;

export type DeleteRelationshipMutation = {
  deleteRelationship?:
    | {
        relationships?:
          | Array<{
              identity: string;
              type: string;
              start: string;
              end: string;
              properties: Record<string, any> | string;
            }>
          | undefined;
      }
    | undefined;
};

export type CreateConnectorMutationVariables = Exact<{
  input: CreateConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type CreateConnectorMutation = {
  createConnector?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        service: ConnectorService;
        name: string;
        topics?: Array<string> | undefined;
        status: ConnectorStatus;
        secretCredentials?: Record<string, any> | string | undefined;
        source?: string | undefined;
        transformations?:
          | {
              nextToken?: string | undefined;
              items: Array<
                | {
                    id: string;
                    createdAt?: any | undefined;
                    updatedAt?: any | undefined;
                    connectorID: string;
                    topics: Array<string>;
                    schemaEntity: string;
                    graphEntityType: GraphEntityType;
                    status: TransformationStatus;
                    expression?: string | undefined;
                    connector?:
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          service: ConnectorService;
                          name: string;
                          topics?: Array<string> | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: Record<string, any> | string | undefined;
                          source?: string | undefined;
                        }
                      | undefined;
                  }
                | undefined
              >;
            }
          | undefined;
      }
    | undefined;
};

export type UpdateConnectorMutationVariables = Exact<{
  input: UpdateConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type UpdateConnectorMutation = {
  updateConnector?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        service: ConnectorService;
        name: string;
        topics?: Array<string> | undefined;
        status: ConnectorStatus;
        secretCredentials?: Record<string, any> | string | undefined;
        source?: string | undefined;
        transformations?:
          | {
              nextToken?: string | undefined;
              items: Array<
                | {
                    id: string;
                    createdAt?: any | undefined;
                    updatedAt?: any | undefined;
                    connectorID: string;
                    topics: Array<string>;
                    schemaEntity: string;
                    graphEntityType: GraphEntityType;
                    status: TransformationStatus;
                    expression?: string | undefined;
                    connector?:
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          service: ConnectorService;
                          name: string;
                          topics?: Array<string> | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: Record<string, any> | string | undefined;
                          source?: string | undefined;
                        }
                      | undefined;
                  }
                | undefined
              >;
            }
          | undefined;
      }
    | undefined;
};

export type DeleteConnectorMutationVariables = Exact<{
  input: DeleteConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type DeleteConnectorMutation = {
  deleteConnector?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        service: ConnectorService;
        name: string;
        topics?: Array<string> | undefined;
        status: ConnectorStatus;
        secretCredentials?: Record<string, any> | string | undefined;
        source?: string | undefined;
        transformations?:
          | {
              nextToken?: string | undefined;
              items: Array<
                | {
                    id: string;
                    createdAt?: any | undefined;
                    updatedAt?: any | undefined;
                    connectorID: string;
                    topics: Array<string>;
                    schemaEntity: string;
                    graphEntityType: GraphEntityType;
                    status: TransformationStatus;
                    expression?: string | undefined;
                    connector?:
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          service: ConnectorService;
                          name: string;
                          topics?: Array<string> | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: Record<string, any> | string | undefined;
                          source?: string | undefined;
                        }
                      | undefined;
                  }
                | undefined
              >;
            }
          | undefined;
      }
    | undefined;
};

export type CreateTransformationMutationVariables = Exact<{
  input: CreateTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type CreateTransformationMutation = {
  createTransformation?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        connectorID: string;
        topics: Array<string>;
        schemaEntity: string;
        graphEntityType: GraphEntityType;
        status: TransformationStatus;
        expression?: string | undefined;
        connector?:
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              service: ConnectorService;
              name: string;
              topics?: Array<string> | undefined;
              status: ConnectorStatus;
              secretCredentials?: Record<string, any> | string | undefined;
              source?: string | undefined;
              transformations?:
                | {
                    nextToken?: string | undefined;
                    items: Array<
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          connectorID: string;
                          topics: Array<string>;
                          schemaEntity: string;
                          graphEntityType: GraphEntityType;
                          status: TransformationStatus;
                          expression?: string | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type UpdateTransformationMutationVariables = Exact<{
  input: UpdateTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type UpdateTransformationMutation = {
  updateTransformation?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        connectorID: string;
        topics: Array<string>;
        schemaEntity: string;
        graphEntityType: GraphEntityType;
        status: TransformationStatus;
        expression?: string | undefined;
        connector?:
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              service: ConnectorService;
              name: string;
              topics?: Array<string> | undefined;
              status: ConnectorStatus;
              secretCredentials?: Record<string, any> | string | undefined;
              source?: string | undefined;
              transformations?:
                | {
                    nextToken?: string | undefined;
                    items: Array<
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          connectorID: string;
                          topics: Array<string>;
                          schemaEntity: string;
                          graphEntityType: GraphEntityType;
                          status: TransformationStatus;
                          expression?: string | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type DeleteTransformationMutationVariables = Exact<{
  input: DeleteTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type DeleteTransformationMutation = {
  deleteTransformation?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        connectorID: string;
        topics: Array<string>;
        schemaEntity: string;
        graphEntityType: GraphEntityType;
        status: TransformationStatus;
        expression?: string | undefined;
        connector?:
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              service: ConnectorService;
              name: string;
              topics?: Array<string> | undefined;
              status: ConnectorStatus;
              secretCredentials?: Record<string, any> | string | undefined;
              source?: string | undefined;
              transformations?:
                | {
                    nextToken?: string | undefined;
                    items: Array<
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          connectorID: string;
                          topics: Array<string>;
                          schemaEntity: string;
                          graphEntityType: GraphEntityType;
                          status: TransformationStatus;
                          expression?: string | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type CreatePerspectiveMutationVariables = Exact<{
  input: CreatePerspectiveInput;
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
}>;

export type CreatePerspectiveMutation = {
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

export type UpdatePerspectiveMutationVariables = Exact<{
  input: UpdatePerspectiveInput;
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
}>;

export type UpdatePerspectiveMutation = {
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

export type DeletePerspectiveMutationVariables = Exact<{
  input: DeletePerspectiveInput;
  condition?: InputMaybe<ModelPerspectiveConditionInput>;
}>;

export type DeletePerspectiveMutation = {
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

export type CreateSchemaMutationVariables = Exact<{
  input: CreateSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type CreateSchemaMutation = {
  createSchema?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        nodes?:
          | Array<{
              id: string;
              label: string;
              idSelector?: Array<string> | undefined;
              descriptionSelector?: Array<string> | undefined;
              avatarSelector?: string | undefined;
              avatarColor: string;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
        relationships?:
          | Array<{
              id: string;
              startNodeID: string;
              endNodeID: string;
              type: string;
              descriptionSelector?: Array<string> | undefined;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type UpdateSchemaMutationVariables = Exact<{
  input: UpdateSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type UpdateSchemaMutation = {
  updateSchema?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        nodes?:
          | Array<{
              id: string;
              label: string;
              idSelector?: Array<string> | undefined;
              descriptionSelector?: Array<string> | undefined;
              avatarSelector?: string | undefined;
              avatarColor: string;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
        relationships?:
          | Array<{
              id: string;
              startNodeID: string;
              endNodeID: string;
              type: string;
              descriptionSelector?: Array<string> | undefined;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type DeleteSchemaMutationVariables = Exact<{
  input: DeleteSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type DeleteSchemaMutation = {
  deleteSchema?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        nodes?:
          | Array<{
              id: string;
              label: string;
              idSelector?: Array<string> | undefined;
              descriptionSelector?: Array<string> | undefined;
              avatarSelector?: string | undefined;
              avatarColor: string;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
        relationships?:
          | Array<{
              id: string;
              startNodeID: string;
              endNodeID: string;
              type: string;
              descriptionSelector?: Array<string> | undefined;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type CreateTestMutationVariables = Exact<{
  input: CreateTestInput;
  condition?: InputMaybe<ModelTestConditionInput>;
}>;

export type CreateTestMutation = {
  createTest?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        credentials?: string | undefined;
      }
    | undefined;
};

export type UpdateTestMutationVariables = Exact<{
  input: UpdateTestInput;
  condition?: InputMaybe<ModelTestConditionInput>;
}>;

export type UpdateTestMutation = {
  updateTest?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        credentials?: string | undefined;
      }
    | undefined;
};

export type DeleteTestMutationVariables = Exact<{
  input: DeleteTestInput;
  condition?: InputMaybe<ModelTestConditionInput>;
}>;

export type DeleteTestMutation = {
  deleteTest?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        credentials?: string | undefined;
      }
    | undefined;
};

export type CreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationInput;
  condition?: InputMaybe<ModelOrganizationConditionInput>;
}>;

export type CreateOrganizationMutation = {
  createOrganization?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        adminGroup?: string | undefined;
        userGroup?: string | undefined;
        name: string;
      }
    | undefined;
};

export type UpdateOrganizationMutationVariables = Exact<{
  input: UpdateOrganizationInput;
  condition?: InputMaybe<ModelOrganizationConditionInput>;
}>;

export type UpdateOrganizationMutation = {
  updateOrganization?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        adminGroup?: string | undefined;
        userGroup?: string | undefined;
        name: string;
      }
    | undefined;
};

export type RunPerspectiveMutationVariables = Exact<{
  input: RunPerspectiveInput;
}>;

export type RunPerspectiveMutation = { runPerspective?: { records: Record<string, any> | string } | undefined };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  createUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  updateUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUserMutation = {
  deleteUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type EmptyQueryQueryVariables = Exact<{ [key: string]: never }>;

export type EmptyQueryQuery = { emptyQuery?: string | undefined };

export type EchoQueryVariables = Exact<{
  msg?: InputMaybe<Scalars['String']>;
}>;

export type EchoQuery = { echo?: string | undefined };

export type CustomTestQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CustomTestQuery = {
  customTest?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        credentials?: string | undefined;
      }
    | undefined;
};

export type GetConnectorManifestQueryVariables = Exact<{
  query: QueryGetConnectorManifestQueryInput;
}>;

export type GetConnectorManifestQuery = {
  getConnectorManifest?:
    | {
        version?: string | undefined;
        service?: ConnectorService | undefined;
        topics?: Array<string> | undefined;
        credentials?:
          | Array<{ field: string; type: ConnectorCredentialsFieldType; pattern?: string | undefined }>
          | undefined;
        authorization?:
          | {
              type: ConnectorAuthorizationType;
              authUrl?: string | undefined;
              authParams?: Array<string> | undefined;
              callbackParams?: Array<string> | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type GetConnectorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnectorQuery = {
  getConnector?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        service: ConnectorService;
        name: string;
        topics?: Array<string> | undefined;
        status: ConnectorStatus;
        secretCredentials?: Record<string, any> | string | undefined;
        source?: string | undefined;
        transformations?:
          | {
              nextToken?: string | undefined;
              items: Array<
                | {
                    id: string;
                    createdAt?: any | undefined;
                    updatedAt?: any | undefined;
                    connectorID: string;
                    topics: Array<string>;
                    schemaEntity: string;
                    graphEntityType: GraphEntityType;
                    status: TransformationStatus;
                    expression?: string | undefined;
                    connector?:
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          service: ConnectorService;
                          name: string;
                          topics?: Array<string> | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: Record<string, any> | string | undefined;
                          source?: string | undefined;
                        }
                      | undefined;
                  }
                | undefined
              >;
            }
          | undefined;
      }
    | undefined;
};

export type ListConnectorsQueryVariables = Exact<{
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListConnectorsQuery = {
  listConnectors?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              service: ConnectorService;
              name: string;
              topics?: Array<string> | undefined;
              status: ConnectorStatus;
              secretCredentials?: Record<string, any> | string | undefined;
              source?: string | undefined;
              transformations?:
                | {
                    nextToken?: string | undefined;
                    items: Array<
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          connectorID: string;
                          topics: Array<string>;
                          schemaEntity: string;
                          graphEntityType: GraphEntityType;
                          status: TransformationStatus;
                          expression?: string | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetConnectorBySourceQueryVariables = Exact<{
  source: Scalars['String'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type GetConnectorBySourceQuery = {
  getConnectorBySource?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              service: ConnectorService;
              name: string;
              topics?: Array<string> | undefined;
              status: ConnectorStatus;
              secretCredentials?: Record<string, any> | string | undefined;
              source?: string | undefined;
              transformations?:
                | {
                    nextToken?: string | undefined;
                    items: Array<
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          connectorID: string;
                          topics: Array<string>;
                          schemaEntity: string;
                          graphEntityType: GraphEntityType;
                          status: TransformationStatus;
                          expression?: string | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetTransformationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTransformationQuery = {
  getTransformation?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        connectorID: string;
        topics: Array<string>;
        schemaEntity: string;
        graphEntityType: GraphEntityType;
        status: TransformationStatus;
        expression?: string | undefined;
        connector?:
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              service: ConnectorService;
              name: string;
              topics?: Array<string> | undefined;
              status: ConnectorStatus;
              secretCredentials?: Record<string, any> | string | undefined;
              source?: string | undefined;
              transformations?:
                | {
                    nextToken?: string | undefined;
                    items: Array<
                      | {
                          id: string;
                          createdAt?: any | undefined;
                          updatedAt?: any | undefined;
                          connectorID: string;
                          topics: Array<string>;
                          schemaEntity: string;
                          graphEntityType: GraphEntityType;
                          status: TransformationStatus;
                          expression?: string | undefined;
                        }
                      | undefined
                    >;
                  }
                | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type ListTransformationsQueryVariables = Exact<{
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListTransformationsQuery = {
  listTransformations?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              connectorID: string;
              topics: Array<string>;
              schemaEntity: string;
              graphEntityType: GraphEntityType;
              status: TransformationStatus;
              expression?: string | undefined;
              connector?:
                | {
                    id: string;
                    createdAt?: any | undefined;
                    updatedAt?: any | undefined;
                    service: ConnectorService;
                    name: string;
                    topics?: Array<string> | undefined;
                    status: ConnectorStatus;
                    secretCredentials?: Record<string, any> | string | undefined;
                    source?: string | undefined;
                    transformations?: { nextToken?: string | undefined } | undefined;
                  }
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetTransformationsByConnectorQueryVariables = Exact<{
  connectorID: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type GetTransformationsByConnectorQuery = {
  getTransformationsByConnector?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              connectorID: string;
              topics: Array<string>;
              schemaEntity: string;
              graphEntityType: GraphEntityType;
              status: TransformationStatus;
              expression?: string | undefined;
              connector?:
                | {
                    id: string;
                    createdAt?: any | undefined;
                    updatedAt?: any | undefined;
                    service: ConnectorService;
                    name: string;
                    topics?: Array<string> | undefined;
                    status: ConnectorStatus;
                    secretCredentials?: Record<string, any> | string | undefined;
                    source?: string | undefined;
                    transformations?: { nextToken?: string | undefined } | undefined;
                  }
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetPerspectiveQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetPerspectiveQuery = {
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

export type ListPerspectivesQueryVariables = Exact<{
  filter?: InputMaybe<ModelPerspectiveFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListPerspectivesQuery = {
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

export type GetSchemaQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetSchemaQuery = {
  getSchema?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        nodes?:
          | Array<{
              id: string;
              label: string;
              idSelector?: Array<string> | undefined;
              descriptionSelector?: Array<string> | undefined;
              avatarSelector?: string | undefined;
              avatarColor: string;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
        relationships?:
          | Array<{
              id: string;
              startNodeID: string;
              endNodeID: string;
              type: string;
              descriptionSelector?: Array<string> | undefined;
              properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type ListSchemasQueryVariables = Exact<{
  filter?: InputMaybe<ModelSchemaFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListSchemasQuery = {
  listSchemas?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              owner?: string | undefined;
              groups?: Array<string | undefined> | undefined;
              nodes?:
                | Array<{
                    id: string;
                    label: string;
                    idSelector?: Array<string> | undefined;
                    descriptionSelector?: Array<string> | undefined;
                    avatarSelector?: string | undefined;
                    avatarColor: string;
                    properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
                  }>
                | undefined;
              relationships?:
                | Array<{
                    id: string;
                    startNodeID: string;
                    endNodeID: string;
                    type: string;
                    descriptionSelector?: Array<string> | undefined;
                    properties?: Array<{ key: string; name: string; type: SchemaPropertyType }> | undefined;
                  }>
                | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetTestQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTestQuery = {
  getTest?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        owner?: string | undefined;
        groups?: Array<string | undefined> | undefined;
        name: string;
        credentials?: string | undefined;
      }
    | undefined;
};

export type ListTestsQueryVariables = Exact<{
  filter?: InputMaybe<ModelTestFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListTestsQuery = {
  listTests?:
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
              credentials?: string | undefined;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetOrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetOrganizationQuery = {
  getOrganization?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        adminGroup?: string | undefined;
        userGroup?: string | undefined;
        name: string;
      }
    | undefined;
};

export type ListOrganizationsQueryVariables = Exact<{
  filter?: InputMaybe<ModelOrganizationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListOrganizationsQuery = {
  listOrganizations?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              id: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              adminGroup?: string | undefined;
              userGroup?: string | undefined;
              name: string;
            }
          | undefined
        >;
      }
    | undefined;
};

export type SearchGraphQueryVariables = Exact<{
  input: SearchGraphInput;
}>;

export type SearchGraphQuery = {
  searchGraph?:
    | {
        records?:
          | Array<{
              score: string;
              node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
            }>
          | undefined;
      }
    | undefined;
};

export type GetNodeQueryVariables = Exact<{
  identity: Scalars['ID'];
}>;

export type GetNodeQuery = {
  getNode?:
    | {
        node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        relationships?:
          | Array<{
              node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
              relationship: {
                identity: string;
                type: string;
                start: string;
                end: string;
                properties: Record<string, any> | string;
              };
            }>
          | undefined;
      }
    | undefined;
};

export type GetRelationshipQueryVariables = Exact<{
  identity: Scalars['ID'];
}>;

export type GetRelationshipQuery = {
  getRelationship?:
    | {
        start: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        end: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
        relationship: {
          identity: string;
          type: string;
          start: string;
          end: string;
          properties: Record<string, any> | string;
        };
      }
    | undefined;
};

export type ListNodesQueryVariables = Exact<{
  label: Scalars['String'];
}>;

export type ListNodesQuery = {
  listNodes?:
    | {
        records?:
          | Array<{
              node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
              relationships?:
                | Array<{
                    node: { identity: string; labels: Array<string>; properties: Record<string, any> | string };
                    relationship: {
                      identity: string;
                      type: string;
                      start: string;
                      end: string;
                      properties: Record<string, any> | string;
                    };
                  }>
                | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type GetUserQueryVariables = Exact<{
  username: Scalars['ID'];
}>;

export type GetUserQuery = {
  getUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type FindUsersQueryVariables = Exact<{
  input: FindUsersInput;
}>;

export type FindUsersQuery = {
  findUsers?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              username: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              attributes: Record<string, any> | string;
            }
          | undefined
        >;
      }
    | undefined;
};

export type ListUsersQueryVariables = Exact<{
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListUsersQuery = {
  listUsers?:
    | {
        nextToken?: string | undefined;
        items: Array<
          | {
              username: string;
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              attributes: Record<string, any> | string;
            }
          | undefined
        >;
      }
    | undefined;
};

export type GetConnectorCredentialsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnectorCredentialsQuery = {
  getConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export const EmptyMutationDocument = `
    mutation EmptyMutation {
  emptyMutation
}
    `;

/**
 * Key maker function for `EmptyMutationMutation`.
 */
export const EmptyMutationMutationKeys = () => ['EmptyMutation'];

/**
 * Input transformer function for `EmptyMutationMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `EmptyMutationMutationVariables` - The original variables
 * @returns `EmptyMutationMutationVariables` - The transformed variables
 */
export const EmptyMutationMutationInput = (variables?: EmptyMutationMutationVariables) =>
  variables as EmptyMutationMutationVariables;

/**
 * Output transformer function for `EmptyMutationMutation`.
 * It extracts the `emptyMutation` field from the result and transforms it into a `Scalars['Int']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyMutationMutation - The data returned from the GraphQL server
 * @returns Scalars['Int'] - The transformed data
 */
export const EmptyMutationMutationOutput = ({ emptyMutation }: EmptyMutationMutation) =>
  emptyMutation as Scalars['Int'];

/**
 * Fetcher function for `EmptyMutationMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const EmptyMutationMutationFetcher = (
  variables?: EmptyMutationMutationVariables,
  options?: RequestInit['headers'],
  outputFn = EmptyMutationMutationOutput,
  inputFn = EmptyMutationMutationInput,
) =>
  fetchWithAmplify<
    EmptyMutationMutation,
    EmptyMutationMutationVariables,
    Scalars['Int'],
    EmptyMutationMutationVariables
  >(EmptyMutationDocument, variables, options, outputFn, inputFn);
export const useEmptyMutationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Scalars['Int'], TError, EmptyMutationMutationVariables, TContext>,
) =>
  useMutation<Scalars['Int'], TError, EmptyMutationMutationVariables, TContext>(
    ['EmptyMutation'],
    (variables?: EmptyMutationMutationVariables) => EmptyMutationMutationFetcher(variables)(),
    options,
  );
export const RunConnectorDocument = `
    mutation RunConnector($input: RunConnectorInput!) {
  runConnector(input: $input)
}
    `;

/**
 * Key maker function for `RunConnectorMutation`.
 */
export const RunConnectorMutationKeys = () => ['RunConnector'];

/**
 * Input transformer function for `RunConnectorMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `RunConnectorMutationVariables` - The original variables
 * @returns `RunConnectorMutationVariables` - The transformed variables
 */
export const RunConnectorMutationInput = (variables: RunConnectorMutationVariables) =>
  variables as RunConnectorMutationVariables;

/**
 * Output transformer function for `RunConnectorMutation`.
 * It extracts the `runConnector` field from the result and transforms it into a `Scalars['AWSJSON']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RunConnectorMutation - The data returned from the GraphQL server
 * @returns Scalars['AWSJSON'] - The transformed data
 */
export const RunConnectorMutationOutput = ({ runConnector }: RunConnectorMutation) =>
  runConnector as Scalars['AWSJSON'];

/**
 * Fetcher function for `RunConnectorMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const RunConnectorMutationFetcher = (
  variables: RunConnectorMutationVariables,
  options?: RequestInit['headers'],
  outputFn = RunConnectorMutationOutput,
  inputFn = RunConnectorMutationInput,
) =>
  fetchWithAmplify<
    RunConnectorMutation,
    RunConnectorMutationVariables,
    Scalars['AWSJSON'],
    RunConnectorMutationVariables
  >(RunConnectorDocument, variables, options, outputFn, inputFn);
export const useRunConnectorMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Scalars['AWSJSON'], TError, RunConnectorMutationVariables, TContext>,
) =>
  useMutation<Scalars['AWSJSON'], TError, RunConnectorMutationVariables, TContext>(
    ['RunConnector'],
    (variables?: RunConnectorMutationVariables) => RunConnectorMutationFetcher(variables)(),
    options,
  );
export const CreateConnectorCredentialsDocument = `
    mutation CreateConnectorCredentials($input: CreateConnectorCredentialsInput!) {
  createConnectorCredentials(input: $input) {
    id
    plainCredentials
  }
}
    `;

/**
 * Key maker function for `CreateConnectorCredentialsMutation`.
 */
export const CreateConnectorCredentialsMutationKeys = () => ['CreateConnectorCredentials'];

/**
 * Input transformer function for `CreateConnectorCredentialsMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateConnectorCredentialsMutationVariables` - The original variables
 * @returns `CreateConnectorCredentialsMutationVariables` - The transformed variables
 */
export const CreateConnectorCredentialsMutationInput = (variables: CreateConnectorCredentialsMutationVariables) =>
  ({
    ...variables,
    input: {
      plainCredentials: variables.input.plainCredentials && JSON.stringify(variables.input.plainCredentials as any),
    },
  } as CreateConnectorCredentialsMutationVariables);

/**
 * Output transformer function for `CreateConnectorCredentialsMutation`.
 * It extracts the `createConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateConnectorCredentialsMutation - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const CreateConnectorCredentialsMutationOutput = ({
  createConnectorCredentials,
}: CreateConnectorCredentialsMutation) =>
  createConnectorCredentials &&
  ({
    ...createConnectorCredentials,
    plainCredentials:
      createConnectorCredentials.plainCredentials && JSON.parse(createConnectorCredentials.plainCredentials as any),
  } as ConnectorCredentials);

/**
 * Fetcher function for `CreateConnectorCredentialsMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateConnectorCredentialsMutationFetcher = (
  variables: CreateConnectorCredentialsMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateConnectorCredentialsMutationOutput,
  inputFn = CreateConnectorCredentialsMutationInput,
) =>
  fetchWithAmplify<
    CreateConnectorCredentialsMutation,
    CreateConnectorCredentialsMutationVariables,
    ConnectorCredentials,
    CreateConnectorCredentialsMutationVariables
  >(CreateConnectorCredentialsDocument, variables, options, outputFn, inputFn);
export const useCreateConnectorCredentialsMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<ConnectorCredentials, TError, CreateConnectorCredentialsMutationVariables, TContext>,
) =>
  useMutation<ConnectorCredentials, TError, CreateConnectorCredentialsMutationVariables, TContext>(
    ['CreateConnectorCredentials'],
    (variables?: CreateConnectorCredentialsMutationVariables) => CreateConnectorCredentialsMutationFetcher(variables)(),
    options,
  );
export const UpdateConnectorCredentialsDocument = `
    mutation UpdateConnectorCredentials($input: UpdateConnectorCredentialsInput!) {
  updateConnectorCredentials(input: $input) {
    id
    plainCredentials
  }
}
    `;

/**
 * Key maker function for `UpdateConnectorCredentialsMutation`.
 */
export const UpdateConnectorCredentialsMutationKeys = () => ['UpdateConnectorCredentials'];

/**
 * Input transformer function for `UpdateConnectorCredentialsMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateConnectorCredentialsMutationVariables` - The original variables
 * @returns `UpdateConnectorCredentialsMutationVariables` - The transformed variables
 */
export const UpdateConnectorCredentialsMutationInput = (variables: UpdateConnectorCredentialsMutationVariables) =>
  ({
    ...variables,
    input: {
      plainCredentials: variables.input.plainCredentials && JSON.stringify(variables.input.plainCredentials as any),
    },
  } as UpdateConnectorCredentialsMutationVariables);

/**
 * Output transformer function for `UpdateConnectorCredentialsMutation`.
 * It extracts the `updateConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateConnectorCredentialsMutation - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const UpdateConnectorCredentialsMutationOutput = ({
  updateConnectorCredentials,
}: UpdateConnectorCredentialsMutation) =>
  updateConnectorCredentials &&
  ({
    ...updateConnectorCredentials,
    plainCredentials:
      updateConnectorCredentials.plainCredentials && JSON.parse(updateConnectorCredentials.plainCredentials as any),
  } as ConnectorCredentials);

/**
 * Fetcher function for `UpdateConnectorCredentialsMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateConnectorCredentialsMutationFetcher = (
  variables: UpdateConnectorCredentialsMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateConnectorCredentialsMutationOutput,
  inputFn = UpdateConnectorCredentialsMutationInput,
) =>
  fetchWithAmplify<
    UpdateConnectorCredentialsMutation,
    UpdateConnectorCredentialsMutationVariables,
    ConnectorCredentials,
    UpdateConnectorCredentialsMutationVariables
  >(UpdateConnectorCredentialsDocument, variables, options, outputFn, inputFn);
export const useUpdateConnectorCredentialsMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<ConnectorCredentials, TError, UpdateConnectorCredentialsMutationVariables, TContext>,
) =>
  useMutation<ConnectorCredentials, TError, UpdateConnectorCredentialsMutationVariables, TContext>(
    ['UpdateConnectorCredentials'],
    (variables?: UpdateConnectorCredentialsMutationVariables) => UpdateConnectorCredentialsMutationFetcher(variables)(),
    options,
  );
export const DeleteConnectorCredentialsDocument = `
    mutation DeleteConnectorCredentials($input: DeleteConnectorCredentialsInput!) {
  deleteConnectorCredentials(input: $input) {
    id
    plainCredentials
  }
}
    `;

/**
 * Key maker function for `DeleteConnectorCredentialsMutation`.
 */
export const DeleteConnectorCredentialsMutationKeys = () => ['DeleteConnectorCredentials'];

/**
 * Input transformer function for `DeleteConnectorCredentialsMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteConnectorCredentialsMutationVariables` - The original variables
 * @returns `DeleteConnectorCredentialsMutationVariables` - The transformed variables
 */
export const DeleteConnectorCredentialsMutationInput = (variables: DeleteConnectorCredentialsMutationVariables) =>
  variables as DeleteConnectorCredentialsMutationVariables;

/**
 * Output transformer function for `DeleteConnectorCredentialsMutation`.
 * It extracts the `deleteConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteConnectorCredentialsMutation - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const DeleteConnectorCredentialsMutationOutput = ({
  deleteConnectorCredentials,
}: DeleteConnectorCredentialsMutation) =>
  deleteConnectorCredentials &&
  ({
    ...deleteConnectorCredentials,
    plainCredentials:
      deleteConnectorCredentials.plainCredentials && JSON.parse(deleteConnectorCredentials.plainCredentials as any),
  } as ConnectorCredentials);

/**
 * Fetcher function for `DeleteConnectorCredentialsMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteConnectorCredentialsMutationFetcher = (
  variables: DeleteConnectorCredentialsMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteConnectorCredentialsMutationOutput,
  inputFn = DeleteConnectorCredentialsMutationInput,
) =>
  fetchWithAmplify<
    DeleteConnectorCredentialsMutation,
    DeleteConnectorCredentialsMutationVariables,
    ConnectorCredentials,
    DeleteConnectorCredentialsMutationVariables
  >(DeleteConnectorCredentialsDocument, variables, options, outputFn, inputFn);
export const useDeleteConnectorCredentialsMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<ConnectorCredentials, TError, DeleteConnectorCredentialsMutationVariables, TContext>,
) =>
  useMutation<ConnectorCredentials, TError, DeleteConnectorCredentialsMutationVariables, TContext>(
    ['DeleteConnectorCredentials'],
    (variables?: DeleteConnectorCredentialsMutationVariables) => DeleteConnectorCredentialsMutationFetcher(variables)(),
    options,
  );
export const CreateNodeDocument = `
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

/**
 * Key maker function for `CreateNodeMutation`.
 */
export const CreateNodeMutationKeys = () => ['CreateNode'];

/**
 * Input transformer function for `CreateNodeMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateNodeMutationVariables` - The original variables
 * @returns `CreateNodeMutationVariables` - The transformed variables
 */
export const CreateNodeMutationInput = (variables: CreateNodeMutationVariables) =>
  ({
    ...variables,
    input: { properties: variables.input.properties && JSON.stringify(variables.input.properties as any) },
  } as CreateNodeMutationVariables);

/**
 * Output transformer function for `CreateNodeMutation`.
 * It extracts the `createNode` field from the result and transforms it into a `NodeGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateNodeMutation - The data returned from the GraphQL server
 * @returns NodeGraphRecord - The transformed data
 */
export const CreateNodeMutationOutput = ({ createNode }: CreateNodeMutation) =>
  createNode &&
  ({
    ...createNode,
    node: {
      ...createNode.node,
      properties: createNode.node?.properties && JSON.parse(createNode.node?.properties as any),
    },
    relationships: createNode.relationships?.map((relationship) => ({
      ...relationship,
      node: {
        ...relationship?.node,
        properties: relationship?.node?.properties && JSON.parse(relationship?.node?.properties as any),
      },
      relationship: {
        ...relationship?.relationship,
        properties: relationship?.relationship?.properties && JSON.parse(relationship?.relationship?.properties as any),
      },
    })),
  } as NodeGraphRecord);

/**
 * Fetcher function for `CreateNodeMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateNodeMutationFetcher = (
  variables: CreateNodeMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateNodeMutationOutput,
  inputFn = CreateNodeMutationInput,
) =>
  fetchWithAmplify<CreateNodeMutation, CreateNodeMutationVariables, NodeGraphRecord, CreateNodeMutationVariables>(
    CreateNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useCreateNodeMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<NodeGraphRecord, TError, CreateNodeMutationVariables, TContext>,
) =>
  useMutation<NodeGraphRecord, TError, CreateNodeMutationVariables, TContext>(
    ['CreateNode'],
    (variables?: CreateNodeMutationVariables) => CreateNodeMutationFetcher(variables)(),
    options,
  );
export const UpdateNodeDocument = `
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

/**
 * Key maker function for `UpdateNodeMutation`.
 */
export const UpdateNodeMutationKeys = () => ['UpdateNode'];

/**
 * Input transformer function for `UpdateNodeMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateNodeMutationVariables` - The original variables
 * @returns `UpdateNodeMutationVariables` - The transformed variables
 */
export const UpdateNodeMutationInput = (variables: UpdateNodeMutationVariables) =>
  ({
    ...variables,
    input: { properties: variables.input.properties && JSON.stringify(variables.input.properties as any) },
  } as UpdateNodeMutationVariables);

/**
 * Output transformer function for `UpdateNodeMutation`.
 * It extracts the `updateNode` field from the result and transforms it into a `NodeGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateNodeMutation - The data returned from the GraphQL server
 * @returns NodeGraphRecord - The transformed data
 */
export const UpdateNodeMutationOutput = ({ updateNode }: UpdateNodeMutation) =>
  updateNode &&
  ({
    ...updateNode,
    node: {
      ...updateNode.node,
      properties: updateNode.node?.properties && JSON.parse(updateNode.node?.properties as any),
    },
    relationships: updateNode.relationships?.map((relationship) => ({
      ...relationship,
      node: {
        ...relationship?.node,
        properties: relationship?.node?.properties && JSON.parse(relationship?.node?.properties as any),
      },
      relationship: {
        ...relationship?.relationship,
        properties: relationship?.relationship?.properties && JSON.parse(relationship?.relationship?.properties as any),
      },
    })),
  } as NodeGraphRecord);

/**
 * Fetcher function for `UpdateNodeMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateNodeMutationFetcher = (
  variables: UpdateNodeMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateNodeMutationOutput,
  inputFn = UpdateNodeMutationInput,
) =>
  fetchWithAmplify<UpdateNodeMutation, UpdateNodeMutationVariables, NodeGraphRecord, UpdateNodeMutationVariables>(
    UpdateNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useUpdateNodeMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<NodeGraphRecord, TError, UpdateNodeMutationVariables, TContext>,
) =>
  useMutation<NodeGraphRecord, TError, UpdateNodeMutationVariables, TContext>(
    ['UpdateNode'],
    (variables?: UpdateNodeMutationVariables) => UpdateNodeMutationFetcher(variables)(),
    options,
  );
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
 * Key maker function for `DeleteNodeMutation`.
 */
export const DeleteNodeMutationKeys = () => ['DeleteNode'];

/**
 * Input transformer function for `DeleteNodeMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteNodeMutationVariables` - The original variables
 * @returns `DeleteNodeMutationVariables` - The transformed variables
 */
export const DeleteNodeMutationInput = (variables: DeleteNodeMutationVariables) =>
  variables as DeleteNodeMutationVariables;

/**
 * Output transformer function for `DeleteNodeMutation`.
 * It extracts the `deleteNode` field from the result and transforms it into a `DeleteNodeRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteNodeMutation - The data returned from the GraphQL server
 * @returns DeleteNodeRecord - The transformed data
 */
export const DeleteNodeMutationOutput = ({ deleteNode }: DeleteNodeMutation) =>
  deleteNode &&
  ({
    ...deleteNode,
    nodes: deleteNode.nodes?.map((node) => ({
      ...node,
      properties: node?.properties && JSON.parse(node?.properties as any),
    })),
    relationships: deleteNode.relationships?.map((relationship) => ({
      ...relationship,
      properties: relationship?.properties && JSON.parse(relationship?.properties as any),
    })),
  } as DeleteNodeRecord);

/**
 * Fetcher function for `DeleteNodeMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteNodeMutationFetcher = (
  variables: DeleteNodeMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteNodeMutationOutput,
  inputFn = DeleteNodeMutationInput,
) =>
  fetchWithAmplify<DeleteNodeMutation, DeleteNodeMutationVariables, DeleteNodeRecord, DeleteNodeMutationVariables>(
    DeleteNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useDeleteNodeMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<DeleteNodeRecord, TError, DeleteNodeMutationVariables, TContext>,
) =>
  useMutation<DeleteNodeRecord, TError, DeleteNodeMutationVariables, TContext>(
    ['DeleteNode'],
    (variables?: DeleteNodeMutationVariables) => DeleteNodeMutationFetcher(variables)(),
    options,
  );
export const CreateRelationshipDocument = `
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

/**
 * Key maker function for `CreateRelationshipMutation`.
 */
export const CreateRelationshipMutationKeys = () => ['CreateRelationship'];

/**
 * Input transformer function for `CreateRelationshipMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateRelationshipMutationVariables` - The original variables
 * @returns `CreateRelationshipMutationVariables` - The transformed variables
 */
export const CreateRelationshipMutationInput = (variables: CreateRelationshipMutationVariables) =>
  ({
    ...variables,
    input: { properties: variables.input.properties && JSON.stringify(variables.input.properties as any) },
  } as CreateRelationshipMutationVariables);

/**
 * Output transformer function for `CreateRelationshipMutation`.
 * It extracts the `createRelationship` field from the result and transforms it into a `RelationshipGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateRelationshipMutation - The data returned from the GraphQL server
 * @returns RelationshipGraphRecord - The transformed data
 */
export const CreateRelationshipMutationOutput = ({ createRelationship }: CreateRelationshipMutation) =>
  createRelationship &&
  ({
    ...createRelationship,
    end: {
      ...createRelationship.end,
      properties: createRelationship.end?.properties && JSON.parse(createRelationship.end?.properties as any),
    },
    relationship: {
      ...createRelationship.relationship,
      properties:
        createRelationship.relationship?.properties && JSON.parse(createRelationship.relationship?.properties as any),
    },
    start: {
      ...createRelationship.start,
      properties: createRelationship.start?.properties && JSON.parse(createRelationship.start?.properties as any),
    },
  } as RelationshipGraphRecord);

/**
 * Fetcher function for `CreateRelationshipMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateRelationshipMutationFetcher = (
  variables: CreateRelationshipMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateRelationshipMutationOutput,
  inputFn = CreateRelationshipMutationInput,
) =>
  fetchWithAmplify<
    CreateRelationshipMutation,
    CreateRelationshipMutationVariables,
    RelationshipGraphRecord,
    CreateRelationshipMutationVariables
  >(CreateRelationshipDocument, variables, options, outputFn, inputFn);
export const useCreateRelationshipMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<RelationshipGraphRecord, TError, CreateRelationshipMutationVariables, TContext>,
) =>
  useMutation<RelationshipGraphRecord, TError, CreateRelationshipMutationVariables, TContext>(
    ['CreateRelationship'],
    (variables?: CreateRelationshipMutationVariables) => CreateRelationshipMutationFetcher(variables)(),
    options,
  );
export const UpdateRelationshipDocument = `
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

/**
 * Key maker function for `UpdateRelationshipMutation`.
 */
export const UpdateRelationshipMutationKeys = () => ['UpdateRelationship'];

/**
 * Input transformer function for `UpdateRelationshipMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateRelationshipMutationVariables` - The original variables
 * @returns `UpdateRelationshipMutationVariables` - The transformed variables
 */
export const UpdateRelationshipMutationInput = (variables: UpdateRelationshipMutationVariables) =>
  ({
    ...variables,
    input: { properties: variables.input.properties && JSON.stringify(variables.input.properties as any) },
  } as UpdateRelationshipMutationVariables);

/**
 * Output transformer function for `UpdateRelationshipMutation`.
 * It extracts the `updateRelationship` field from the result and transforms it into a `RelationshipGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateRelationshipMutation - The data returned from the GraphQL server
 * @returns RelationshipGraphRecord - The transformed data
 */
export const UpdateRelationshipMutationOutput = ({ updateRelationship }: UpdateRelationshipMutation) =>
  updateRelationship &&
  ({
    ...updateRelationship,
    end: {
      ...updateRelationship.end,
      properties: updateRelationship.end?.properties && JSON.parse(updateRelationship.end?.properties as any),
    },
    relationship: {
      ...updateRelationship.relationship,
      properties:
        updateRelationship.relationship?.properties && JSON.parse(updateRelationship.relationship?.properties as any),
    },
    start: {
      ...updateRelationship.start,
      properties: updateRelationship.start?.properties && JSON.parse(updateRelationship.start?.properties as any),
    },
  } as RelationshipGraphRecord);

/**
 * Fetcher function for `UpdateRelationshipMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateRelationshipMutationFetcher = (
  variables: UpdateRelationshipMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateRelationshipMutationOutput,
  inputFn = UpdateRelationshipMutationInput,
) =>
  fetchWithAmplify<
    UpdateRelationshipMutation,
    UpdateRelationshipMutationVariables,
    RelationshipGraphRecord,
    UpdateRelationshipMutationVariables
  >(UpdateRelationshipDocument, variables, options, outputFn, inputFn);
export const useUpdateRelationshipMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<RelationshipGraphRecord, TError, UpdateRelationshipMutationVariables, TContext>,
) =>
  useMutation<RelationshipGraphRecord, TError, UpdateRelationshipMutationVariables, TContext>(
    ['UpdateRelationship'],
    (variables?: UpdateRelationshipMutationVariables) => UpdateRelationshipMutationFetcher(variables)(),
    options,
  );
export const DeleteRelationshipDocument = `
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

/**
 * Key maker function for `DeleteRelationshipMutation`.
 */
export const DeleteRelationshipMutationKeys = () => ['DeleteRelationship'];

/**
 * Input transformer function for `DeleteRelationshipMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteRelationshipMutationVariables` - The original variables
 * @returns `DeleteRelationshipMutationVariables` - The transformed variables
 */
export const DeleteRelationshipMutationInput = (variables: DeleteRelationshipMutationVariables) =>
  variables as DeleteRelationshipMutationVariables;

/**
 * Output transformer function for `DeleteRelationshipMutation`.
 * It extracts the `deleteRelationship` field from the result and transforms it into a `DeleteRelationshipRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteRelationshipMutation - The data returned from the GraphQL server
 * @returns DeleteRelationshipRecord - The transformed data
 */
export const DeleteRelationshipMutationOutput = ({ deleteRelationship }: DeleteRelationshipMutation) =>
  deleteRelationship &&
  ({
    ...deleteRelationship,
    relationships: deleteRelationship.relationships?.map((relationship) => ({
      ...relationship,
      properties: relationship?.properties && JSON.parse(relationship?.properties as any),
    })),
  } as DeleteRelationshipRecord);

/**
 * Fetcher function for `DeleteRelationshipMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteRelationshipMutationFetcher = (
  variables: DeleteRelationshipMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteRelationshipMutationOutput,
  inputFn = DeleteRelationshipMutationInput,
) =>
  fetchWithAmplify<
    DeleteRelationshipMutation,
    DeleteRelationshipMutationVariables,
    DeleteRelationshipRecord,
    DeleteRelationshipMutationVariables
  >(DeleteRelationshipDocument, variables, options, outputFn, inputFn);
export const useDeleteRelationshipMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<DeleteRelationshipRecord, TError, DeleteRelationshipMutationVariables, TContext>,
) =>
  useMutation<DeleteRelationshipRecord, TError, DeleteRelationshipMutationVariables, TContext>(
    ['DeleteRelationship'],
    (variables?: DeleteRelationshipMutationVariables) => DeleteRelationshipMutationFetcher(variables)(),
    options,
  );
export const CreateConnectorDocument = `
    mutation CreateConnector($input: CreateConnectorInput!, $condition: ModelConnectorConditionInput) {
  createConnector(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    service
    name
    topics
    status
    secretCredentials
    source
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
          service
          name
          topics
          status
          secretCredentials
          source
        }
      }
      nextToken
    }
  }
}
    `;

/**
 * Key maker function for `CreateConnectorMutation`.
 */
export const CreateConnectorMutationKeys = () => ['CreateConnector'];

/**
 * Input transformer function for `CreateConnectorMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateConnectorMutationVariables` - The original variables
 * @returns `CreateConnectorMutationVariables` - The transformed variables
 */
export const CreateConnectorMutationInput = (variables: CreateConnectorMutationVariables) =>
  ({
    ...variables,
    input: {
      secretCredentials: variables.input.secretCredentials && JSON.stringify(variables.input.secretCredentials as any),
    },
  } as CreateConnectorMutationVariables);

/**
 * Output transformer function for `CreateConnectorMutation`.
 * It extracts the `createConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateConnectorMutation - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const CreateConnectorMutationOutput = ({ createConnector }: CreateConnectorMutation) =>
  createConnector &&
  ({
    ...createConnector,
    secretCredentials: createConnector.secretCredentials && JSON.parse(createConnector.secretCredentials as any),
  } as Connector);

/**
 * Fetcher function for `CreateConnectorMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateConnectorMutationFetcher = (
  variables: CreateConnectorMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateConnectorMutationOutput,
  inputFn = CreateConnectorMutationInput,
) =>
  fetchWithAmplify<
    CreateConnectorMutation,
    CreateConnectorMutationVariables,
    Connector,
    CreateConnectorMutationVariables
  >(CreateConnectorDocument, variables, options, outputFn, inputFn);
export const useCreateConnectorMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Connector, TError, CreateConnectorMutationVariables, TContext>,
) =>
  useMutation<Connector, TError, CreateConnectorMutationVariables, TContext>(
    ['CreateConnector'],
    (variables?: CreateConnectorMutationVariables) => CreateConnectorMutationFetcher(variables)(),
    options,
  );
export const UpdateConnectorDocument = `
    mutation UpdateConnector($input: UpdateConnectorInput!, $condition: ModelConnectorConditionInput) {
  updateConnector(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    service
    name
    topics
    status
    secretCredentials
    source
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
          service
          name
          topics
          status
          secretCredentials
          source
        }
      }
      nextToken
    }
  }
}
    `;

/**
 * Key maker function for `UpdateConnectorMutation`.
 */
export const UpdateConnectorMutationKeys = () => ['UpdateConnector'];

/**
 * Input transformer function for `UpdateConnectorMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateConnectorMutationVariables` - The original variables
 * @returns `UpdateConnectorMutationVariables` - The transformed variables
 */
export const UpdateConnectorMutationInput = (variables: UpdateConnectorMutationVariables) =>
  ({
    ...variables,
    input: {
      secretCredentials: variables.input.secretCredentials && JSON.stringify(variables.input.secretCredentials as any),
    },
  } as UpdateConnectorMutationVariables);

/**
 * Output transformer function for `UpdateConnectorMutation`.
 * It extracts the `updateConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateConnectorMutation - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const UpdateConnectorMutationOutput = ({ updateConnector }: UpdateConnectorMutation) =>
  updateConnector &&
  ({
    ...updateConnector,
    secretCredentials: updateConnector.secretCredentials && JSON.parse(updateConnector.secretCredentials as any),
  } as Connector);

/**
 * Fetcher function for `UpdateConnectorMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateConnectorMutationFetcher = (
  variables: UpdateConnectorMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateConnectorMutationOutput,
  inputFn = UpdateConnectorMutationInput,
) =>
  fetchWithAmplify<
    UpdateConnectorMutation,
    UpdateConnectorMutationVariables,
    Connector,
    UpdateConnectorMutationVariables
  >(UpdateConnectorDocument, variables, options, outputFn, inputFn);
export const useUpdateConnectorMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Connector, TError, UpdateConnectorMutationVariables, TContext>,
) =>
  useMutation<Connector, TError, UpdateConnectorMutationVariables, TContext>(
    ['UpdateConnector'],
    (variables?: UpdateConnectorMutationVariables) => UpdateConnectorMutationFetcher(variables)(),
    options,
  );
export const DeleteConnectorDocument = `
    mutation DeleteConnector($input: DeleteConnectorInput!, $condition: ModelConnectorConditionInput) {
  deleteConnector(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    service
    name
    topics
    status
    secretCredentials
    source
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
          service
          name
          topics
          status
          secretCredentials
          source
        }
      }
      nextToken
    }
  }
}
    `;

/**
 * Key maker function for `DeleteConnectorMutation`.
 */
export const DeleteConnectorMutationKeys = () => ['DeleteConnector'];

/**
 * Input transformer function for `DeleteConnectorMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteConnectorMutationVariables` - The original variables
 * @returns `DeleteConnectorMutationVariables` - The transformed variables
 */
export const DeleteConnectorMutationInput = (variables: DeleteConnectorMutationVariables) =>
  variables as DeleteConnectorMutationVariables;

/**
 * Output transformer function for `DeleteConnectorMutation`.
 * It extracts the `deleteConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteConnectorMutation - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const DeleteConnectorMutationOutput = ({ deleteConnector }: DeleteConnectorMutation) =>
  deleteConnector &&
  ({
    ...deleteConnector,
    secretCredentials: deleteConnector.secretCredentials && JSON.parse(deleteConnector.secretCredentials as any),
  } as Connector);

/**
 * Fetcher function for `DeleteConnectorMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteConnectorMutationFetcher = (
  variables: DeleteConnectorMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteConnectorMutationOutput,
  inputFn = DeleteConnectorMutationInput,
) =>
  fetchWithAmplify<
    DeleteConnectorMutation,
    DeleteConnectorMutationVariables,
    Connector,
    DeleteConnectorMutationVariables
  >(DeleteConnectorDocument, variables, options, outputFn, inputFn);
export const useDeleteConnectorMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Connector, TError, DeleteConnectorMutationVariables, TContext>,
) =>
  useMutation<Connector, TError, DeleteConnectorMutationVariables, TContext>(
    ['DeleteConnector'],
    (variables?: DeleteConnectorMutationVariables) => DeleteConnectorMutationFetcher(variables)(),
    options,
  );
export const CreateTransformationDocument = `
    mutation CreateTransformation($input: CreateTransformationInput!, $condition: ModelTransformationConditionInput) {
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
      service
      name
      topics
      status
      secretCredentials
      source
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

/**
 * Key maker function for `CreateTransformationMutation`.
 */
export const CreateTransformationMutationKeys = () => ['CreateTransformation'];

/**
 * Input transformer function for `CreateTransformationMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateTransformationMutationVariables` - The original variables
 * @returns `CreateTransformationMutationVariables` - The transformed variables
 */
export const CreateTransformationMutationInput = (variables: CreateTransformationMutationVariables) =>
  variables as CreateTransformationMutationVariables;

/**
 * Output transformer function for `CreateTransformationMutation`.
 * It extracts the `createTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateTransformationMutation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const CreateTransformationMutationOutput = ({ createTransformation }: CreateTransformationMutation) =>
  createTransformation &&
  ({
    ...createTransformation,
    connector: {
      ...createTransformation.connector,
      secretCredentials:
        createTransformation.connector?.secretCredentials &&
        JSON.parse(createTransformation.connector?.secretCredentials as any),
    },
  } as Transformation);

/**
 * Fetcher function for `CreateTransformationMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateTransformationMutationFetcher = (
  variables: CreateTransformationMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateTransformationMutationOutput,
  inputFn = CreateTransformationMutationInput,
) =>
  fetchWithAmplify<
    CreateTransformationMutation,
    CreateTransformationMutationVariables,
    Transformation,
    CreateTransformationMutationVariables
  >(CreateTransformationDocument, variables, options, outputFn, inputFn);
export const useCreateTransformationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Transformation, TError, CreateTransformationMutationVariables, TContext>,
) =>
  useMutation<Transformation, TError, CreateTransformationMutationVariables, TContext>(
    ['CreateTransformation'],
    (variables?: CreateTransformationMutationVariables) => CreateTransformationMutationFetcher(variables)(),
    options,
  );
export const UpdateTransformationDocument = `
    mutation UpdateTransformation($input: UpdateTransformationInput!, $condition: ModelTransformationConditionInput) {
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
      service
      name
      topics
      status
      secretCredentials
      source
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

/**
 * Key maker function for `UpdateTransformationMutation`.
 */
export const UpdateTransformationMutationKeys = () => ['UpdateTransformation'];

/**
 * Input transformer function for `UpdateTransformationMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateTransformationMutationVariables` - The original variables
 * @returns `UpdateTransformationMutationVariables` - The transformed variables
 */
export const UpdateTransformationMutationInput = (variables: UpdateTransformationMutationVariables) =>
  variables as UpdateTransformationMutationVariables;

/**
 * Output transformer function for `UpdateTransformationMutation`.
 * It extracts the `updateTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateTransformationMutation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const UpdateTransformationMutationOutput = ({ updateTransformation }: UpdateTransformationMutation) =>
  updateTransformation &&
  ({
    ...updateTransformation,
    connector: {
      ...updateTransformation.connector,
      secretCredentials:
        updateTransformation.connector?.secretCredentials &&
        JSON.parse(updateTransformation.connector?.secretCredentials as any),
    },
  } as Transformation);

/**
 * Fetcher function for `UpdateTransformationMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateTransformationMutationFetcher = (
  variables: UpdateTransformationMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateTransformationMutationOutput,
  inputFn = UpdateTransformationMutationInput,
) =>
  fetchWithAmplify<
    UpdateTransformationMutation,
    UpdateTransformationMutationVariables,
    Transformation,
    UpdateTransformationMutationVariables
  >(UpdateTransformationDocument, variables, options, outputFn, inputFn);
export const useUpdateTransformationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Transformation, TError, UpdateTransformationMutationVariables, TContext>,
) =>
  useMutation<Transformation, TError, UpdateTransformationMutationVariables, TContext>(
    ['UpdateTransformation'],
    (variables?: UpdateTransformationMutationVariables) => UpdateTransformationMutationFetcher(variables)(),
    options,
  );
export const DeleteTransformationDocument = `
    mutation DeleteTransformation($input: DeleteTransformationInput!, $condition: ModelTransformationConditionInput) {
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
      service
      name
      topics
      status
      secretCredentials
      source
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

/**
 * Key maker function for `DeleteTransformationMutation`.
 */
export const DeleteTransformationMutationKeys = () => ['DeleteTransformation'];

/**
 * Input transformer function for `DeleteTransformationMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteTransformationMutationVariables` - The original variables
 * @returns `DeleteTransformationMutationVariables` - The transformed variables
 */
export const DeleteTransformationMutationInput = (variables: DeleteTransformationMutationVariables) =>
  variables as DeleteTransformationMutationVariables;

/**
 * Output transformer function for `DeleteTransformationMutation`.
 * It extracts the `deleteTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteTransformationMutation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const DeleteTransformationMutationOutput = ({ deleteTransformation }: DeleteTransformationMutation) =>
  deleteTransformation &&
  ({
    ...deleteTransformation,
    connector: {
      ...deleteTransformation.connector,
      secretCredentials:
        deleteTransformation.connector?.secretCredentials &&
        JSON.parse(deleteTransformation.connector?.secretCredentials as any),
    },
  } as Transformation);

/**
 * Fetcher function for `DeleteTransformationMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteTransformationMutationFetcher = (
  variables: DeleteTransformationMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteTransformationMutationOutput,
  inputFn = DeleteTransformationMutationInput,
) =>
  fetchWithAmplify<
    DeleteTransformationMutation,
    DeleteTransformationMutationVariables,
    Transformation,
    DeleteTransformationMutationVariables
  >(DeleteTransformationDocument, variables, options, outputFn, inputFn);
export const useDeleteTransformationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Transformation, TError, DeleteTransformationMutationVariables, TContext>,
) =>
  useMutation<Transformation, TError, DeleteTransformationMutationVariables, TContext>(
    ['DeleteTransformation'],
    (variables?: DeleteTransformationMutationVariables) => DeleteTransformationMutationFetcher(variables)(),
    options,
  );
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
 * Key maker function for `CreatePerspectiveMutation`.
 */
export const CreatePerspectiveMutationKeys = () => ['CreatePerspective'];

/**
 * Input transformer function for `CreatePerspectiveMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreatePerspectiveMutationVariables` - The original variables
 * @returns `CreatePerspectiveMutationVariables` - The transformed variables
 */
export const CreatePerspectiveMutationInput = (variables: CreatePerspectiveMutationVariables) =>
  variables as CreatePerspectiveMutationVariables;

/**
 * Output transformer function for `CreatePerspectiveMutation`.
 * It extracts the `createPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreatePerspectiveMutation - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const CreatePerspectiveMutationOutput = ({ createPerspective }: CreatePerspectiveMutation) =>
  createPerspective as Perspective;

/**
 * Fetcher function for `CreatePerspectiveMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreatePerspectiveMutationFetcher = (
  variables: CreatePerspectiveMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreatePerspectiveMutationOutput,
  inputFn = CreatePerspectiveMutationInput,
) =>
  fetchWithAmplify<
    CreatePerspectiveMutation,
    CreatePerspectiveMutationVariables,
    Perspective,
    CreatePerspectiveMutationVariables
  >(CreatePerspectiveDocument, variables, options, outputFn, inputFn);
export const useCreatePerspectiveMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Perspective, TError, CreatePerspectiveMutationVariables, TContext>,
) =>
  useMutation<Perspective, TError, CreatePerspectiveMutationVariables, TContext>(
    ['CreatePerspective'],
    (variables?: CreatePerspectiveMutationVariables) => CreatePerspectiveMutationFetcher(variables)(),
    options,
  );
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
 * Key maker function for `UpdatePerspectiveMutation`.
 */
export const UpdatePerspectiveMutationKeys = () => ['UpdatePerspective'];

/**
 * Input transformer function for `UpdatePerspectiveMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdatePerspectiveMutationVariables` - The original variables
 * @returns `UpdatePerspectiveMutationVariables` - The transformed variables
 */
export const UpdatePerspectiveMutationInput = (variables: UpdatePerspectiveMutationVariables) =>
  variables as UpdatePerspectiveMutationVariables;

/**
 * Output transformer function for `UpdatePerspectiveMutation`.
 * It extracts the `updatePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdatePerspectiveMutation - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const UpdatePerspectiveMutationOutput = ({ updatePerspective }: UpdatePerspectiveMutation) =>
  updatePerspective as Perspective;

/**
 * Fetcher function for `UpdatePerspectiveMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdatePerspectiveMutationFetcher = (
  variables: UpdatePerspectiveMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdatePerspectiveMutationOutput,
  inputFn = UpdatePerspectiveMutationInput,
) =>
  fetchWithAmplify<
    UpdatePerspectiveMutation,
    UpdatePerspectiveMutationVariables,
    Perspective,
    UpdatePerspectiveMutationVariables
  >(UpdatePerspectiveDocument, variables, options, outputFn, inputFn);
export const useUpdatePerspectiveMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Perspective, TError, UpdatePerspectiveMutationVariables, TContext>,
) =>
  useMutation<Perspective, TError, UpdatePerspectiveMutationVariables, TContext>(
    ['UpdatePerspective'],
    (variables?: UpdatePerspectiveMutationVariables) => UpdatePerspectiveMutationFetcher(variables)(),
    options,
  );
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
 * Key maker function for `DeletePerspectiveMutation`.
 */
export const DeletePerspectiveMutationKeys = () => ['DeletePerspective'];

/**
 * Input transformer function for `DeletePerspectiveMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeletePerspectiveMutationVariables` - The original variables
 * @returns `DeletePerspectiveMutationVariables` - The transformed variables
 */
export const DeletePerspectiveMutationInput = (variables: DeletePerspectiveMutationVariables) =>
  variables as DeletePerspectiveMutationVariables;

/**
 * Output transformer function for `DeletePerspectiveMutation`.
 * It extracts the `deletePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeletePerspectiveMutation - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const DeletePerspectiveMutationOutput = ({ deletePerspective }: DeletePerspectiveMutation) =>
  deletePerspective as Perspective;

/**
 * Fetcher function for `DeletePerspectiveMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeletePerspectiveMutationFetcher = (
  variables: DeletePerspectiveMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeletePerspectiveMutationOutput,
  inputFn = DeletePerspectiveMutationInput,
) =>
  fetchWithAmplify<
    DeletePerspectiveMutation,
    DeletePerspectiveMutationVariables,
    Perspective,
    DeletePerspectiveMutationVariables
  >(DeletePerspectiveDocument, variables, options, outputFn, inputFn);
export const useDeletePerspectiveMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Perspective, TError, DeletePerspectiveMutationVariables, TContext>,
) =>
  useMutation<Perspective, TError, DeletePerspectiveMutationVariables, TContext>(
    ['DeletePerspective'],
    (variables?: DeletePerspectiveMutationVariables) => DeletePerspectiveMutationFetcher(variables)(),
    options,
  );
export const CreateSchemaDocument = `
    mutation CreateSchema($input: CreateSchemaInput!, $condition: ModelSchemaConditionInput) {
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

/**
 * Key maker function for `CreateSchemaMutation`.
 */
export const CreateSchemaMutationKeys = () => ['CreateSchema'];

/**
 * Input transformer function for `CreateSchemaMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateSchemaMutationVariables` - The original variables
 * @returns `CreateSchemaMutationVariables` - The transformed variables
 */
export const CreateSchemaMutationInput = (variables: CreateSchemaMutationVariables) =>
  variables as CreateSchemaMutationVariables;

/**
 * Output transformer function for `CreateSchemaMutation`.
 * It extracts the `createSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateSchemaMutation - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const CreateSchemaMutationOutput = ({ createSchema }: CreateSchemaMutation) => createSchema as Schema;

/**
 * Fetcher function for `CreateSchemaMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateSchemaMutationFetcher = (
  variables: CreateSchemaMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateSchemaMutationOutput,
  inputFn = CreateSchemaMutationInput,
) =>
  fetchWithAmplify<CreateSchemaMutation, CreateSchemaMutationVariables, Schema, CreateSchemaMutationVariables>(
    CreateSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useCreateSchemaMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Schema, TError, CreateSchemaMutationVariables, TContext>,
) =>
  useMutation<Schema, TError, CreateSchemaMutationVariables, TContext>(
    ['CreateSchema'],
    (variables?: CreateSchemaMutationVariables) => CreateSchemaMutationFetcher(variables)(),
    options,
  );
export const UpdateSchemaDocument = `
    mutation UpdateSchema($input: UpdateSchemaInput!, $condition: ModelSchemaConditionInput) {
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

/**
 * Key maker function for `UpdateSchemaMutation`.
 */
export const UpdateSchemaMutationKeys = () => ['UpdateSchema'];

/**
 * Input transformer function for `UpdateSchemaMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateSchemaMutationVariables` - The original variables
 * @returns `UpdateSchemaMutationVariables` - The transformed variables
 */
export const UpdateSchemaMutationInput = (variables: UpdateSchemaMutationVariables) =>
  variables as UpdateSchemaMutationVariables;

/**
 * Output transformer function for `UpdateSchemaMutation`.
 * It extracts the `updateSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateSchemaMutation - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const UpdateSchemaMutationOutput = ({ updateSchema }: UpdateSchemaMutation) => updateSchema as Schema;

/**
 * Fetcher function for `UpdateSchemaMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateSchemaMutationFetcher = (
  variables: UpdateSchemaMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateSchemaMutationOutput,
  inputFn = UpdateSchemaMutationInput,
) =>
  fetchWithAmplify<UpdateSchemaMutation, UpdateSchemaMutationVariables, Schema, UpdateSchemaMutationVariables>(
    UpdateSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useUpdateSchemaMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Schema, TError, UpdateSchemaMutationVariables, TContext>,
) =>
  useMutation<Schema, TError, UpdateSchemaMutationVariables, TContext>(
    ['UpdateSchema'],
    (variables?: UpdateSchemaMutationVariables) => UpdateSchemaMutationFetcher(variables)(),
    options,
  );
export const DeleteSchemaDocument = `
    mutation DeleteSchema($input: DeleteSchemaInput!, $condition: ModelSchemaConditionInput) {
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

/**
 * Key maker function for `DeleteSchemaMutation`.
 */
export const DeleteSchemaMutationKeys = () => ['DeleteSchema'];

/**
 * Input transformer function for `DeleteSchemaMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteSchemaMutationVariables` - The original variables
 * @returns `DeleteSchemaMutationVariables` - The transformed variables
 */
export const DeleteSchemaMutationInput = (variables: DeleteSchemaMutationVariables) =>
  variables as DeleteSchemaMutationVariables;

/**
 * Output transformer function for `DeleteSchemaMutation`.
 * It extracts the `deleteSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteSchemaMutation - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const DeleteSchemaMutationOutput = ({ deleteSchema }: DeleteSchemaMutation) => deleteSchema as Schema;

/**
 * Fetcher function for `DeleteSchemaMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteSchemaMutationFetcher = (
  variables: DeleteSchemaMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteSchemaMutationOutput,
  inputFn = DeleteSchemaMutationInput,
) =>
  fetchWithAmplify<DeleteSchemaMutation, DeleteSchemaMutationVariables, Schema, DeleteSchemaMutationVariables>(
    DeleteSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useDeleteSchemaMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Schema, TError, DeleteSchemaMutationVariables, TContext>,
) =>
  useMutation<Schema, TError, DeleteSchemaMutationVariables, TContext>(
    ['DeleteSchema'],
    (variables?: DeleteSchemaMutationVariables) => DeleteSchemaMutationFetcher(variables)(),
    options,
  );
export const CreateTestDocument = `
    mutation CreateTest($input: CreateTestInput!, $condition: ModelTestConditionInput) {
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

/**
 * Key maker function for `CreateTestMutation`.
 */
export const CreateTestMutationKeys = () => ['CreateTest'];

/**
 * Input transformer function for `CreateTestMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateTestMutationVariables` - The original variables
 * @returns `CreateTestMutationVariables` - The transformed variables
 */
export const CreateTestMutationInput = (variables: CreateTestMutationVariables) =>
  variables as CreateTestMutationVariables;

/**
 * Output transformer function for `CreateTestMutation`.
 * It extracts the `createTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateTestMutation - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const CreateTestMutationOutput = ({ createTest }: CreateTestMutation) => createTest as Test;

/**
 * Fetcher function for `CreateTestMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateTestMutationFetcher = (
  variables: CreateTestMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateTestMutationOutput,
  inputFn = CreateTestMutationInput,
) =>
  fetchWithAmplify<CreateTestMutation, CreateTestMutationVariables, Test, CreateTestMutationVariables>(
    CreateTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useCreateTestMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Test, TError, CreateTestMutationVariables, TContext>,
) =>
  useMutation<Test, TError, CreateTestMutationVariables, TContext>(
    ['CreateTest'],
    (variables?: CreateTestMutationVariables) => CreateTestMutationFetcher(variables)(),
    options,
  );
export const UpdateTestDocument = `
    mutation UpdateTest($input: UpdateTestInput!, $condition: ModelTestConditionInput) {
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

/**
 * Key maker function for `UpdateTestMutation`.
 */
export const UpdateTestMutationKeys = () => ['UpdateTest'];

/**
 * Input transformer function for `UpdateTestMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateTestMutationVariables` - The original variables
 * @returns `UpdateTestMutationVariables` - The transformed variables
 */
export const UpdateTestMutationInput = (variables: UpdateTestMutationVariables) =>
  variables as UpdateTestMutationVariables;

/**
 * Output transformer function for `UpdateTestMutation`.
 * It extracts the `updateTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateTestMutation - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const UpdateTestMutationOutput = ({ updateTest }: UpdateTestMutation) => updateTest as Test;

/**
 * Fetcher function for `UpdateTestMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateTestMutationFetcher = (
  variables: UpdateTestMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateTestMutationOutput,
  inputFn = UpdateTestMutationInput,
) =>
  fetchWithAmplify<UpdateTestMutation, UpdateTestMutationVariables, Test, UpdateTestMutationVariables>(
    UpdateTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useUpdateTestMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Test, TError, UpdateTestMutationVariables, TContext>,
) =>
  useMutation<Test, TError, UpdateTestMutationVariables, TContext>(
    ['UpdateTest'],
    (variables?: UpdateTestMutationVariables) => UpdateTestMutationFetcher(variables)(),
    options,
  );
export const DeleteTestDocument = `
    mutation DeleteTest($input: DeleteTestInput!, $condition: ModelTestConditionInput) {
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

/**
 * Key maker function for `DeleteTestMutation`.
 */
export const DeleteTestMutationKeys = () => ['DeleteTest'];

/**
 * Input transformer function for `DeleteTestMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteTestMutationVariables` - The original variables
 * @returns `DeleteTestMutationVariables` - The transformed variables
 */
export const DeleteTestMutationInput = (variables: DeleteTestMutationVariables) =>
  variables as DeleteTestMutationVariables;

/**
 * Output transformer function for `DeleteTestMutation`.
 * It extracts the `deleteTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteTestMutation - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const DeleteTestMutationOutput = ({ deleteTest }: DeleteTestMutation) => deleteTest as Test;

/**
 * Fetcher function for `DeleteTestMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteTestMutationFetcher = (
  variables: DeleteTestMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteTestMutationOutput,
  inputFn = DeleteTestMutationInput,
) =>
  fetchWithAmplify<DeleteTestMutation, DeleteTestMutationVariables, Test, DeleteTestMutationVariables>(
    DeleteTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useDeleteTestMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Test, TError, DeleteTestMutationVariables, TContext>,
) =>
  useMutation<Test, TError, DeleteTestMutationVariables, TContext>(
    ['DeleteTest'],
    (variables?: DeleteTestMutationVariables) => DeleteTestMutationFetcher(variables)(),
    options,
  );
export const CreateOrganizationDocument = `
    mutation CreateOrganization($input: CreateOrganizationInput!, $condition: ModelOrganizationConditionInput) {
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

/**
 * Key maker function for `CreateOrganizationMutation`.
 */
export const CreateOrganizationMutationKeys = () => ['CreateOrganization'];

/**
 * Input transformer function for `CreateOrganizationMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateOrganizationMutationVariables` - The original variables
 * @returns `CreateOrganizationMutationVariables` - The transformed variables
 */
export const CreateOrganizationMutationInput = (variables: CreateOrganizationMutationVariables) =>
  variables as CreateOrganizationMutationVariables;

/**
 * Output transformer function for `CreateOrganizationMutation`.
 * It extracts the `createOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateOrganizationMutation - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const CreateOrganizationMutationOutput = ({ createOrganization }: CreateOrganizationMutation) =>
  createOrganization as Organization;

/**
 * Fetcher function for `CreateOrganizationMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateOrganizationMutationFetcher = (
  variables: CreateOrganizationMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateOrganizationMutationOutput,
  inputFn = CreateOrganizationMutationInput,
) =>
  fetchWithAmplify<
    CreateOrganizationMutation,
    CreateOrganizationMutationVariables,
    Organization,
    CreateOrganizationMutationVariables
  >(CreateOrganizationDocument, variables, options, outputFn, inputFn);
export const useCreateOrganizationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Organization, TError, CreateOrganizationMutationVariables, TContext>,
) =>
  useMutation<Organization, TError, CreateOrganizationMutationVariables, TContext>(
    ['CreateOrganization'],
    (variables?: CreateOrganizationMutationVariables) => CreateOrganizationMutationFetcher(variables)(),
    options,
  );
export const UpdateOrganizationDocument = `
    mutation UpdateOrganization($input: UpdateOrganizationInput!, $condition: ModelOrganizationConditionInput) {
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

/**
 * Key maker function for `UpdateOrganizationMutation`.
 */
export const UpdateOrganizationMutationKeys = () => ['UpdateOrganization'];

/**
 * Input transformer function for `UpdateOrganizationMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateOrganizationMutationVariables` - The original variables
 * @returns `UpdateOrganizationMutationVariables` - The transformed variables
 */
export const UpdateOrganizationMutationInput = (variables: UpdateOrganizationMutationVariables) =>
  variables as UpdateOrganizationMutationVariables;

/**
 * Output transformer function for `UpdateOrganizationMutation`.
 * It extracts the `updateOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateOrganizationMutation - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const UpdateOrganizationMutationOutput = ({ updateOrganization }: UpdateOrganizationMutation) =>
  updateOrganization as Organization;

/**
 * Fetcher function for `UpdateOrganizationMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateOrganizationMutationFetcher = (
  variables: UpdateOrganizationMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateOrganizationMutationOutput,
  inputFn = UpdateOrganizationMutationInput,
) =>
  fetchWithAmplify<
    UpdateOrganizationMutation,
    UpdateOrganizationMutationVariables,
    Organization,
    UpdateOrganizationMutationVariables
  >(UpdateOrganizationDocument, variables, options, outputFn, inputFn);
export const useUpdateOrganizationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<Organization, TError, UpdateOrganizationMutationVariables, TContext>,
) =>
  useMutation<Organization, TError, UpdateOrganizationMutationVariables, TContext>(
    ['UpdateOrganization'],
    (variables?: UpdateOrganizationMutationVariables) => UpdateOrganizationMutationFetcher(variables)(),
    options,
  );
export const RunPerspectiveDocument = `
    mutation RunPerspective($input: RunPerspectiveInput!) {
  runPerspective(input: $input) {
    records
  }
}
    `;

/**
 * Key maker function for `RunPerspectiveMutation`.
 */
export const RunPerspectiveMutationKeys = () => ['RunPerspective'];

/**
 * Input transformer function for `RunPerspectiveMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `RunPerspectiveMutationVariables` - The original variables
 * @returns `RunPerspectiveMutationVariables` - The transformed variables
 */
export const RunPerspectiveMutationInput = (variables: RunPerspectiveMutationVariables) =>
  variables as RunPerspectiveMutationVariables;

/**
 * Output transformer function for `RunPerspectiveMutation`.
 * It extracts the `runPerspective` field from the result and transforms it into a `RunPerspectiveResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RunPerspectiveMutation - The data returned from the GraphQL server
 * @returns RunPerspectiveResult - The transformed data
 */
export const RunPerspectiveMutationOutput = ({ runPerspective }: RunPerspectiveMutation) =>
  runPerspective &&
  ({
    ...runPerspective,
    records: runPerspective.records && JSON.parse(runPerspective.records as any),
  } as RunPerspectiveResult);

/**
 * Fetcher function for `RunPerspectiveMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const RunPerspectiveMutationFetcher = (
  variables: RunPerspectiveMutationVariables,
  options?: RequestInit['headers'],
  outputFn = RunPerspectiveMutationOutput,
  inputFn = RunPerspectiveMutationInput,
) =>
  fetchWithAmplify<
    RunPerspectiveMutation,
    RunPerspectiveMutationVariables,
    RunPerspectiveResult,
    RunPerspectiveMutationVariables
  >(RunPerspectiveDocument, variables, options, outputFn, inputFn);
export const useRunPerspectiveMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<RunPerspectiveResult, TError, RunPerspectiveMutationVariables, TContext>,
) =>
  useMutation<RunPerspectiveResult, TError, RunPerspectiveMutationVariables, TContext>(
    ['RunPerspective'],
    (variables?: RunPerspectiveMutationVariables) => RunPerspectiveMutationFetcher(variables)(),
    options,
  );
export const CreateUserDocument = `
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    username
    createdAt
    updatedAt
    attributes
  }
}
    `;

/**
 * Key maker function for `CreateUserMutation`.
 */
export const CreateUserMutationKeys = () => ['CreateUser'];

/**
 * Input transformer function for `CreateUserMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateUserMutationVariables` - The original variables
 * @returns `CreateUserMutationVariables` - The transformed variables
 */
export const CreateUserMutationInput = (variables: CreateUserMutationVariables) =>
  variables as CreateUserMutationVariables;

/**
 * Output transformer function for `CreateUserMutation`.
 * It extracts the `createUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateUserMutation - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const CreateUserMutationOutput = ({ createUser }: CreateUserMutation) =>
  createUser &&
  ({ ...createUser, attributes: createUser.attributes && JSON.parse(createUser.attributes as any) } as CognitoUser);

/**
 * Fetcher function for `CreateUserMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CreateUserMutationFetcher = (
  variables: CreateUserMutationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateUserMutationOutput,
  inputFn = CreateUserMutationInput,
) =>
  fetchWithAmplify<CreateUserMutation, CreateUserMutationVariables, CognitoUser, CreateUserMutationVariables>(
    CreateUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CognitoUser, TError, CreateUserMutationVariables, TContext>,
) =>
  useMutation<CognitoUser, TError, CreateUserMutationVariables, TContext>(
    ['CreateUser'],
    (variables?: CreateUserMutationVariables) => CreateUserMutationFetcher(variables)(),
    options,
  );
export const UpdateUserDocument = `
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    username
    createdAt
    updatedAt
    attributes
  }
}
    `;

/**
 * Key maker function for `UpdateUserMutation`.
 */
export const UpdateUserMutationKeys = () => ['UpdateUser'];

/**
 * Input transformer function for `UpdateUserMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateUserMutationVariables` - The original variables
 * @returns `UpdateUserMutationVariables` - The transformed variables
 */
export const UpdateUserMutationInput = (variables: UpdateUserMutationVariables) =>
  variables as UpdateUserMutationVariables;

/**
 * Output transformer function for `UpdateUserMutation`.
 * It extracts the `updateUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateUserMutation - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const UpdateUserMutationOutput = ({ updateUser }: UpdateUserMutation) =>
  updateUser &&
  ({ ...updateUser, attributes: updateUser.attributes && JSON.parse(updateUser.attributes as any) } as CognitoUser);

/**
 * Fetcher function for `UpdateUserMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const UpdateUserMutationFetcher = (
  variables: UpdateUserMutationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateUserMutationOutput,
  inputFn = UpdateUserMutationInput,
) =>
  fetchWithAmplify<UpdateUserMutation, UpdateUserMutationVariables, CognitoUser, UpdateUserMutationVariables>(
    UpdateUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CognitoUser, TError, UpdateUserMutationVariables, TContext>,
) =>
  useMutation<CognitoUser, TError, UpdateUserMutationVariables, TContext>(
    ['UpdateUser'],
    (variables?: UpdateUserMutationVariables) => UpdateUserMutationFetcher(variables)(),
    options,
  );
export const DeleteUserDocument = `
    mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    username
    createdAt
    updatedAt
    attributes
  }
}
    `;

/**
 * Key maker function for `DeleteUserMutation`.
 */
export const DeleteUserMutationKeys = () => ['DeleteUser'];

/**
 * Input transformer function for `DeleteUserMutation`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteUserMutationVariables` - The original variables
 * @returns `DeleteUserMutationVariables` - The transformed variables
 */
export const DeleteUserMutationInput = (variables: DeleteUserMutationVariables) =>
  variables as DeleteUserMutationVariables;

/**
 * Output transformer function for `DeleteUserMutation`.
 * It extracts the `deleteUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteUserMutation - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const DeleteUserMutationOutput = ({ deleteUser }: DeleteUserMutation) =>
  deleteUser &&
  ({ ...deleteUser, attributes: deleteUser.attributes && JSON.parse(deleteUser.attributes as any) } as CognitoUser);

/**
 * Fetcher function for `DeleteUserMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const DeleteUserMutationFetcher = (
  variables: DeleteUserMutationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteUserMutationOutput,
  inputFn = DeleteUserMutationInput,
) =>
  fetchWithAmplify<DeleteUserMutation, DeleteUserMutationVariables, CognitoUser, DeleteUserMutationVariables>(
    DeleteUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useDeleteUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CognitoUser, TError, DeleteUserMutationVariables, TContext>,
) =>
  useMutation<CognitoUser, TError, DeleteUserMutationVariables, TContext>(
    ['DeleteUser'],
    (variables?: DeleteUserMutationVariables) => DeleteUserMutationFetcher(variables)(),
    options,
  );
export const EmptyQueryDocument = `
    query EmptyQuery {
  emptyQuery
}
    `;

/**
 * Key maker function for `EmptyQueryQuery`.
 */
export const EmptyQueryQueryKeys = (variables?: EmptyQueryQueryVariables) =>
  variables === undefined ? ['EmptyQuery'] : ['EmptyQuery', variables];

/**
 * Input transformer function for `EmptyQueryQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `EmptyQueryQueryVariables` - The original variables
 * @returns `EmptyQueryQueryVariables` - The transformed variables
 */
export const EmptyQueryQueryInput = (variables?: EmptyQueryQueryVariables) => variables as EmptyQueryQueryVariables;

/**
 * Output transformer function for `EmptyQueryQuery`.
 * It extracts the `emptyQuery` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyQueryQuery - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EmptyQueryQueryOutput = ({ emptyQuery }: EmptyQueryQuery) => emptyQuery as Scalars['String'];

/**
 * Fetcher function for `EmptyQueryQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const EmptyQueryQueryFetcher = (
  variables?: EmptyQueryQueryVariables,
  options?: RequestInit['headers'],
  outputFn = EmptyQueryQueryOutput,
  inputFn = EmptyQueryQueryInput,
) =>
  fetchWithAmplify<EmptyQueryQuery, EmptyQueryQueryVariables, Scalars['String'], EmptyQueryQueryVariables>(
    EmptyQueryDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useEmptyQueryQuery = <TData = Scalars['String'], TError = unknown>(
  variables?: EmptyQueryQueryVariables,
  options?: UseQueryOptions<Scalars['String'], TError, TData>,
) =>
  useQuery<Scalars['String'], TError, TData>(
    variables === undefined ? ['EmptyQuery'] : ['EmptyQuery', variables],
    EmptyQueryQueryFetcher(variables),
    options,
  );
useEmptyQueryQuery.getKey = EmptyQueryQueryKeys;

export const EchoDocument = `
    query Echo($msg: String) {
  echo(msg: $msg)
}
    `;

/**
 * Key maker function for `EchoQuery`.
 */
export const EchoQueryKeys = (variables?: EchoQueryVariables) =>
  variables === undefined ? ['Echo'] : ['Echo', variables];

/**
 * Input transformer function for `EchoQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `EchoQueryVariables` - The original variables
 * @returns `EchoQueryVariables` - The transformed variables
 */
export const EchoQueryInput = (variables?: EchoQueryVariables) => variables as EchoQueryVariables;

/**
 * Output transformer function for `EchoQuery`.
 * It extracts the `echo` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EchoQuery - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EchoQueryOutput = ({ echo }: EchoQuery) => echo as Scalars['String'];

/**
 * Fetcher function for `EchoQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const EchoQueryFetcher = (
  variables?: EchoQueryVariables,
  options?: RequestInit['headers'],
  outputFn = EchoQueryOutput,
  inputFn = EchoQueryInput,
) =>
  fetchWithAmplify<EchoQuery, EchoQueryVariables, Scalars['String'], EchoQueryVariables>(
    EchoDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useEchoQuery = <TData = Scalars['String'], TError = unknown>(
  variables?: EchoQueryVariables,
  options?: UseQueryOptions<Scalars['String'], TError, TData>,
) =>
  useQuery<Scalars['String'], TError, TData>(
    variables === undefined ? ['Echo'] : ['Echo', variables],
    EchoQueryFetcher(variables),
    options,
  );
useEchoQuery.getKey = EchoQueryKeys;

export const CustomTestDocument = `
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

/**
 * Key maker function for `CustomTestQuery`.
 */
export const CustomTestQueryKeys = (variables: CustomTestQueryVariables) => ['CustomTest', variables];

/**
 * Input transformer function for `CustomTestQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CustomTestQueryVariables` - The original variables
 * @returns `CustomTestQueryVariables` - The transformed variables
 */
export const CustomTestQueryInput = (variables: CustomTestQueryVariables) => variables as CustomTestQueryVariables;

/**
 * Output transformer function for `CustomTestQuery`.
 * It extracts the `customTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CustomTestQuery - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const CustomTestQueryOutput = ({ customTest }: CustomTestQuery) => customTest as Test;

/**
 * Fetcher function for `CustomTestQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const CustomTestQueryFetcher = (
  variables: CustomTestQueryVariables,
  options?: RequestInit['headers'],
  outputFn = CustomTestQueryOutput,
  inputFn = CustomTestQueryInput,
) =>
  fetchWithAmplify<CustomTestQuery, CustomTestQueryVariables, Test, CustomTestQueryVariables>(
    CustomTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useCustomTestQuery = <TData = Test, TError = unknown>(
  variables: CustomTestQueryVariables,
  options?: UseQueryOptions<Test, TError, TData>,
) => useQuery<Test, TError, TData>(['CustomTest', variables], CustomTestQueryFetcher(variables), options);
useCustomTestQuery.getKey = CustomTestQueryKeys;

export const GetConnectorManifestDocument = `
    query GetConnectorManifest($query: QueryGetConnectorManifestQueryInput!) {
  getConnectorManifest(query: $query) {
    version
    service
    credentials {
      field
      type
      pattern
    }
    authorization {
      type
      authUrl
      authParams
      callbackParams
    }
    topics
  }
}
    `;

/**
 * Key maker function for `GetConnectorManifestQuery`.
 */
export const GetConnectorManifestQueryKeys = (variables: GetConnectorManifestQueryVariables) => [
  'GetConnectorManifest',
  variables,
];

/**
 * Input transformer function for `GetConnectorManifestQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorManifestQueryVariables` - The original variables
 * @returns `GetConnectorManifestQueryVariables` - The transformed variables
 */
export const GetConnectorManifestQueryInput = (variables: GetConnectorManifestQueryVariables) =>
  variables as GetConnectorManifestQueryVariables;

/**
 * Output transformer function for `GetConnectorManifestQuery`.
 * It extracts the `getConnectorManifest` field from the result and transforms it into a `ConnectorManifest` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorManifestQuery - The data returned from the GraphQL server
 * @returns ConnectorManifest - The transformed data
 */
export const GetConnectorManifestQueryOutput = ({ getConnectorManifest }: GetConnectorManifestQuery) =>
  getConnectorManifest as ConnectorManifest;

/**
 * Fetcher function for `GetConnectorManifestQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetConnectorManifestQueryFetcher = (
  variables: GetConnectorManifestQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorManifestQueryOutput,
  inputFn = GetConnectorManifestQueryInput,
) =>
  fetchWithAmplify<
    GetConnectorManifestQuery,
    GetConnectorManifestQueryVariables,
    ConnectorManifest,
    GetConnectorManifestQueryVariables
  >(GetConnectorManifestDocument, variables, options, outputFn, inputFn);
export const useGetConnectorManifestQuery = <TData = ConnectorManifest, TError = unknown>(
  variables: GetConnectorManifestQueryVariables,
  options?: UseQueryOptions<ConnectorManifest, TError, TData>,
) =>
  useQuery<ConnectorManifest, TError, TData>(
    ['GetConnectorManifest', variables],
    GetConnectorManifestQueryFetcher(variables),
    options,
  );
useGetConnectorManifestQuery.getKey = GetConnectorManifestQueryKeys;

export const GetConnectorDocument = `
    query GetConnector($id: ID!) {
  getConnector(id: $id) {
    id
    createdAt
    updatedAt
    service
    name
    topics
    status
    secretCredentials
    source
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
          service
          name
          topics
          status
          secretCredentials
          source
        }
      }
      nextToken
    }
  }
}
    `;

/**
 * Key maker function for `GetConnectorQuery`.
 */
export const GetConnectorQueryKeys = (variables: GetConnectorQueryVariables) => ['GetConnector', variables];

/**
 * Input transformer function for `GetConnectorQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorQueryVariables` - The original variables
 * @returns `GetConnectorQueryVariables` - The transformed variables
 */
export const GetConnectorQueryInput = (variables: GetConnectorQueryVariables) =>
  variables as GetConnectorQueryVariables;

/**
 * Output transformer function for `GetConnectorQuery`.
 * It extracts the `getConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorQuery - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const GetConnectorQueryOutput = ({ getConnector }: GetConnectorQuery) =>
  getConnector &&
  ({
    ...getConnector,
    secretCredentials: getConnector.secretCredentials && JSON.parse(getConnector.secretCredentials as any),
  } as Connector);

/**
 * Fetcher function for `GetConnectorQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetConnectorQueryFetcher = (
  variables: GetConnectorQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorQueryOutput,
  inputFn = GetConnectorQueryInput,
) =>
  fetchWithAmplify<GetConnectorQuery, GetConnectorQueryVariables, Connector, GetConnectorQueryVariables>(
    GetConnectorDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useGetConnectorQuery = <TData = Connector, TError = unknown>(
  variables: GetConnectorQueryVariables,
  options?: UseQueryOptions<Connector, TError, TData>,
) => useQuery<Connector, TError, TData>(['GetConnector', variables], GetConnectorQueryFetcher(variables), options);
useGetConnectorQuery.getKey = GetConnectorQueryKeys;

export const ListConnectorsDocument = `
    query ListConnectors($filter: ModelConnectorFilterInput, $limit: Int, $nextToken: String) {
  listConnectors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      service
      name
      topics
      status
      secretCredentials
      source
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

/**
 * Key maker function for `ListConnectorsQuery`.
 */
export const ListConnectorsQueryKeys = (variables?: ListConnectorsQueryVariables) =>
  variables === undefined ? ['ListConnectors'] : ['ListConnectors', variables];

/**
 * Input transformer function for `ListConnectorsQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListConnectorsQueryVariables` - The original variables
 * @returns `ListConnectorsQueryVariables` - The transformed variables
 */
export const ListConnectorsQueryInput = (variables?: ListConnectorsQueryVariables) =>
  variables as ListConnectorsQueryVariables;

/**
 * Output transformer function for `ListConnectorsQuery`.
 * It extracts the `listConnectors` field from the result and transforms it into a `ModelConnectorConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListConnectorsQuery - The data returned from the GraphQL server
 * @returns ModelConnectorConnection - The transformed data
 */
export const ListConnectorsQueryOutput = ({ listConnectors }: ListConnectorsQuery) =>
  listConnectors &&
  ({
    ...listConnectors,
    items: listConnectors.items?.map((item) => ({
      ...item,
      secretCredentials: item?.secretCredentials && JSON.parse(item?.secretCredentials as any),
    })),
  } as ModelConnectorConnection);

/**
 * Fetcher function for `ListConnectorsQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListConnectorsQueryFetcher = (
  variables?: ListConnectorsQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListConnectorsQueryOutput,
  inputFn = ListConnectorsQueryInput,
) =>
  fetchWithAmplify<
    ListConnectorsQuery,
    ListConnectorsQueryVariables,
    ModelConnectorConnection,
    ListConnectorsQueryVariables
  >(ListConnectorsDocument, variables, options, outputFn, inputFn);
export const useListConnectorsQuery = <TData = ModelConnectorConnection, TError = unknown>(
  variables?: ListConnectorsQueryVariables,
  options?: UseQueryOptions<ModelConnectorConnection, TError, TData>,
) =>
  useQuery<ModelConnectorConnection, TError, TData>(
    variables === undefined ? ['ListConnectors'] : ['ListConnectors', variables],
    ListConnectorsQueryFetcher(variables),
    options,
  );
useListConnectorsQuery.getKey = ListConnectorsQueryKeys;

export const GetConnectorBySourceDocument = `
    query GetConnectorBySource($source: String!, $sortDirection: ModelSortDirection, $filter: ModelConnectorFilterInput, $limit: Int, $nextToken: String) {
  getConnectorBySource(
    source: $source
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      service
      name
      topics
      status
      secretCredentials
      source
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

/**
 * Key maker function for `GetConnectorBySourceQuery`.
 */
export const GetConnectorBySourceQueryKeys = (variables: GetConnectorBySourceQueryVariables) => [
  'GetConnectorBySource',
  variables,
];

/**
 * Input transformer function for `GetConnectorBySourceQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorBySourceQueryVariables` - The original variables
 * @returns `GetConnectorBySourceQueryVariables` - The transformed variables
 */
export const GetConnectorBySourceQueryInput = (variables: GetConnectorBySourceQueryVariables) =>
  variables as GetConnectorBySourceQueryVariables;

/**
 * Output transformer function for `GetConnectorBySourceQuery`.
 * It extracts the `getConnectorBySource` field from the result and transforms it into a `ModelConnectorConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorBySourceQuery - The data returned from the GraphQL server
 * @returns ModelConnectorConnection - The transformed data
 */
export const GetConnectorBySourceQueryOutput = ({ getConnectorBySource }: GetConnectorBySourceQuery) =>
  getConnectorBySource &&
  ({
    ...getConnectorBySource,
    items: getConnectorBySource.items?.map((item) => ({
      ...item,
      secretCredentials: item?.secretCredentials && JSON.parse(item?.secretCredentials as any),
    })),
  } as ModelConnectorConnection);

/**
 * Fetcher function for `GetConnectorBySourceQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetConnectorBySourceQueryFetcher = (
  variables: GetConnectorBySourceQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorBySourceQueryOutput,
  inputFn = GetConnectorBySourceQueryInput,
) =>
  fetchWithAmplify<
    GetConnectorBySourceQuery,
    GetConnectorBySourceQueryVariables,
    ModelConnectorConnection,
    GetConnectorBySourceQueryVariables
  >(GetConnectorBySourceDocument, variables, options, outputFn, inputFn);
export const useGetConnectorBySourceQuery = <TData = ModelConnectorConnection, TError = unknown>(
  variables: GetConnectorBySourceQueryVariables,
  options?: UseQueryOptions<ModelConnectorConnection, TError, TData>,
) =>
  useQuery<ModelConnectorConnection, TError, TData>(
    ['GetConnectorBySource', variables],
    GetConnectorBySourceQueryFetcher(variables),
    options,
  );
useGetConnectorBySourceQuery.getKey = GetConnectorBySourceQueryKeys;

export const GetTransformationDocument = `
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
      service
      name
      topics
      status
      secretCredentials
      source
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

/**
 * Key maker function for `GetTransformationQuery`.
 */
export const GetTransformationQueryKeys = (variables: GetTransformationQueryVariables) => [
  'GetTransformation',
  variables,
];

/**
 * Input transformer function for `GetTransformationQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetTransformationQueryVariables` - The original variables
 * @returns `GetTransformationQueryVariables` - The transformed variables
 */
export const GetTransformationQueryInput = (variables: GetTransformationQueryVariables) =>
  variables as GetTransformationQueryVariables;

/**
 * Output transformer function for `GetTransformationQuery`.
 * It extracts the `getTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTransformationQuery - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const GetTransformationQueryOutput = ({ getTransformation }: GetTransformationQuery) =>
  getTransformation &&
  ({
    ...getTransformation,
    connector: {
      ...getTransformation.connector,
      secretCredentials:
        getTransformation.connector?.secretCredentials &&
        JSON.parse(getTransformation.connector?.secretCredentials as any),
    },
  } as Transformation);

/**
 * Fetcher function for `GetTransformationQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetTransformationQueryFetcher = (
  variables: GetTransformationQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetTransformationQueryOutput,
  inputFn = GetTransformationQueryInput,
) =>
  fetchWithAmplify<
    GetTransformationQuery,
    GetTransformationQueryVariables,
    Transformation,
    GetTransformationQueryVariables
  >(GetTransformationDocument, variables, options, outputFn, inputFn);
export const useGetTransformationQuery = <TData = Transformation, TError = unknown>(
  variables: GetTransformationQueryVariables,
  options?: UseQueryOptions<Transformation, TError, TData>,
) =>
  useQuery<Transformation, TError, TData>(
    ['GetTransformation', variables],
    GetTransformationQueryFetcher(variables),
    options,
  );
useGetTransformationQuery.getKey = GetTransformationQueryKeys;

export const ListTransformationsDocument = `
    query ListTransformations($filter: ModelTransformationFilterInput, $limit: Int, $nextToken: String) {
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
        service
        name
        topics
        status
        secretCredentials
        source
        transformations {
          nextToken
        }
      }
    }
    nextToken
  }
}
    `;

/**
 * Key maker function for `ListTransformationsQuery`.
 */
export const ListTransformationsQueryKeys = (variables?: ListTransformationsQueryVariables) =>
  variables === undefined ? ['ListTransformations'] : ['ListTransformations', variables];

/**
 * Input transformer function for `ListTransformationsQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListTransformationsQueryVariables` - The original variables
 * @returns `ListTransformationsQueryVariables` - The transformed variables
 */
export const ListTransformationsQueryInput = (variables?: ListTransformationsQueryVariables) =>
  variables as ListTransformationsQueryVariables;

/**
 * Output transformer function for `ListTransformationsQuery`.
 * It extracts the `listTransformations` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTransformationsQuery - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const ListTransformationsQueryOutput = ({ listTransformations }: ListTransformationsQuery) =>
  listTransformations &&
  ({
    ...listTransformations,
    items: listTransformations.items?.map((item) => ({
      ...item,
      connector: {
        ...item?.connector,
        secretCredentials: item?.connector?.secretCredentials && JSON.parse(item?.connector?.secretCredentials as any),
      },
    })),
  } as ModelTransformationConnection);

/**
 * Fetcher function for `ListTransformationsQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListTransformationsQueryFetcher = (
  variables?: ListTransformationsQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListTransformationsQueryOutput,
  inputFn = ListTransformationsQueryInput,
) =>
  fetchWithAmplify<
    ListTransformationsQuery,
    ListTransformationsQueryVariables,
    ModelTransformationConnection,
    ListTransformationsQueryVariables
  >(ListTransformationsDocument, variables, options, outputFn, inputFn);
export const useListTransformationsQuery = <TData = ModelTransformationConnection, TError = unknown>(
  variables?: ListTransformationsQueryVariables,
  options?: UseQueryOptions<ModelTransformationConnection, TError, TData>,
) =>
  useQuery<ModelTransformationConnection, TError, TData>(
    variables === undefined ? ['ListTransformations'] : ['ListTransformations', variables],
    ListTransformationsQueryFetcher(variables),
    options,
  );
useListTransformationsQuery.getKey = ListTransformationsQueryKeys;

export const GetTransformationsByConnectorDocument = `
    query GetTransformationsByConnector($connectorID: ID!, $sortDirection: ModelSortDirection, $filter: ModelTransformationFilterInput, $limit: Int, $nextToken: String) {
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
        service
        name
        topics
        status
        secretCredentials
        source
        transformations {
          nextToken
        }
      }
    }
    nextToken
  }
}
    `;

/**
 * Key maker function for `GetTransformationsByConnectorQuery`.
 */
export const GetTransformationsByConnectorQueryKeys = (variables: GetTransformationsByConnectorQueryVariables) => [
  'GetTransformationsByConnector',
  variables,
];

/**
 * Input transformer function for `GetTransformationsByConnectorQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetTransformationsByConnectorQueryVariables` - The original variables
 * @returns `GetTransformationsByConnectorQueryVariables` - The transformed variables
 */
export const GetTransformationsByConnectorQueryInput = (variables: GetTransformationsByConnectorQueryVariables) =>
  variables as GetTransformationsByConnectorQueryVariables;

/**
 * Output transformer function for `GetTransformationsByConnectorQuery`.
 * It extracts the `getTransformationsByConnector` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTransformationsByConnectorQuery - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const GetTransformationsByConnectorQueryOutput = ({
  getTransformationsByConnector,
}: GetTransformationsByConnectorQuery) =>
  getTransformationsByConnector &&
  ({
    ...getTransformationsByConnector,
    items: getTransformationsByConnector.items?.map((item) => ({
      ...item,
      connector: {
        ...item?.connector,
        secretCredentials: item?.connector?.secretCredentials && JSON.parse(item?.connector?.secretCredentials as any),
      },
    })),
  } as ModelTransformationConnection);

/**
 * Fetcher function for `GetTransformationsByConnectorQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetTransformationsByConnectorQueryFetcher = (
  variables: GetTransformationsByConnectorQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetTransformationsByConnectorQueryOutput,
  inputFn = GetTransformationsByConnectorQueryInput,
) =>
  fetchWithAmplify<
    GetTransformationsByConnectorQuery,
    GetTransformationsByConnectorQueryVariables,
    ModelTransformationConnection,
    GetTransformationsByConnectorQueryVariables
  >(GetTransformationsByConnectorDocument, variables, options, outputFn, inputFn);
export const useGetTransformationsByConnectorQuery = <TData = ModelTransformationConnection, TError = unknown>(
  variables: GetTransformationsByConnectorQueryVariables,
  options?: UseQueryOptions<ModelTransformationConnection, TError, TData>,
) =>
  useQuery<ModelTransformationConnection, TError, TData>(
    ['GetTransformationsByConnector', variables],
    GetTransformationsByConnectorQueryFetcher(variables),
    options,
  );
useGetTransformationsByConnectorQuery.getKey = GetTransformationsByConnectorQueryKeys;

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
 * Key maker function for `GetPerspectiveQuery`.
 */
export const GetPerspectiveQueryKeys = (variables: GetPerspectiveQueryVariables) => ['GetPerspective', variables];

/**
 * Input transformer function for `GetPerspectiveQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetPerspectiveQueryVariables` - The original variables
 * @returns `GetPerspectiveQueryVariables` - The transformed variables
 */
export const GetPerspectiveQueryInput = (variables: GetPerspectiveQueryVariables) =>
  variables as GetPerspectiveQueryVariables;

/**
 * Output transformer function for `GetPerspectiveQuery`.
 * It extracts the `getPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetPerspectiveQuery - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const GetPerspectiveQueryOutput = ({ getPerspective }: GetPerspectiveQuery) => getPerspective as Perspective;

/**
 * Fetcher function for `GetPerspectiveQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetPerspectiveQueryFetcher = (
  variables: GetPerspectiveQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetPerspectiveQueryOutput,
  inputFn = GetPerspectiveQueryInput,
) =>
  fetchWithAmplify<GetPerspectiveQuery, GetPerspectiveQueryVariables, Perspective, GetPerspectiveQueryVariables>(
    GetPerspectiveDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useGetPerspectiveQuery = <TData = Perspective, TError = unknown>(
  variables: GetPerspectiveQueryVariables,
  options?: UseQueryOptions<Perspective, TError, TData>,
) =>
  useQuery<Perspective, TError, TData>(['GetPerspective', variables], GetPerspectiveQueryFetcher(variables), options);
useGetPerspectiveQuery.getKey = GetPerspectiveQueryKeys;

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
 * Key maker function for `ListPerspectivesQuery`.
 */
export const ListPerspectivesQueryKeys = (variables?: ListPerspectivesQueryVariables) =>
  variables === undefined ? ['ListPerspectives'] : ['ListPerspectives', variables];

/**
 * Input transformer function for `ListPerspectivesQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListPerspectivesQueryVariables` - The original variables
 * @returns `ListPerspectivesQueryVariables` - The transformed variables
 */
export const ListPerspectivesQueryInput = (variables?: ListPerspectivesQueryVariables) =>
  variables as ListPerspectivesQueryVariables;

/**
 * Output transformer function for `ListPerspectivesQuery`.
 * It extracts the `listPerspectives` field from the result and transforms it into a `ModelPerspectiveConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListPerspectivesQuery - The data returned from the GraphQL server
 * @returns ModelPerspectiveConnection - The transformed data
 */
export const ListPerspectivesQueryOutput = ({ listPerspectives }: ListPerspectivesQuery) =>
  listPerspectives as ModelPerspectiveConnection;

/**
 * Fetcher function for `ListPerspectivesQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListPerspectivesQueryFetcher = (
  variables?: ListPerspectivesQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListPerspectivesQueryOutput,
  inputFn = ListPerspectivesQueryInput,
) =>
  fetchWithAmplify<
    ListPerspectivesQuery,
    ListPerspectivesQueryVariables,
    ModelPerspectiveConnection,
    ListPerspectivesQueryVariables
  >(ListPerspectivesDocument, variables, options, outputFn, inputFn);
export const useListPerspectivesQuery = <TData = ModelPerspectiveConnection, TError = unknown>(
  variables?: ListPerspectivesQueryVariables,
  options?: UseQueryOptions<ModelPerspectiveConnection, TError, TData>,
) =>
  useQuery<ModelPerspectiveConnection, TError, TData>(
    variables === undefined ? ['ListPerspectives'] : ['ListPerspectives', variables],
    ListPerspectivesQueryFetcher(variables),
    options,
  );
useListPerspectivesQuery.getKey = ListPerspectivesQueryKeys;

export const GetSchemaDocument = `
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

/**
 * Key maker function for `GetSchemaQuery`.
 */
export const GetSchemaQueryKeys = (variables: GetSchemaQueryVariables) => ['GetSchema', variables];

/**
 * Input transformer function for `GetSchemaQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetSchemaQueryVariables` - The original variables
 * @returns `GetSchemaQueryVariables` - The transformed variables
 */
export const GetSchemaQueryInput = (variables: GetSchemaQueryVariables) => variables as GetSchemaQueryVariables;

/**
 * Output transformer function for `GetSchemaQuery`.
 * It extracts the `getSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetSchemaQuery - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const GetSchemaQueryOutput = ({ getSchema }: GetSchemaQuery) => getSchema as Schema;

/**
 * Fetcher function for `GetSchemaQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetSchemaQueryFetcher = (
  variables: GetSchemaQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetSchemaQueryOutput,
  inputFn = GetSchemaQueryInput,
) =>
  fetchWithAmplify<GetSchemaQuery, GetSchemaQueryVariables, Schema, GetSchemaQueryVariables>(
    GetSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useGetSchemaQuery = <TData = Schema, TError = unknown>(
  variables: GetSchemaQueryVariables,
  options?: UseQueryOptions<Schema, TError, TData>,
) => useQuery<Schema, TError, TData>(['GetSchema', variables], GetSchemaQueryFetcher(variables), options);
useGetSchemaQuery.getKey = GetSchemaQueryKeys;

export const ListSchemasDocument = `
    query ListSchemas($filter: ModelSchemaFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListSchemasQuery`.
 */
export const ListSchemasQueryKeys = (variables?: ListSchemasQueryVariables) =>
  variables === undefined ? ['ListSchemas'] : ['ListSchemas', variables];

/**
 * Input transformer function for `ListSchemasQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListSchemasQueryVariables` - The original variables
 * @returns `ListSchemasQueryVariables` - The transformed variables
 */
export const ListSchemasQueryInput = (variables?: ListSchemasQueryVariables) => variables as ListSchemasQueryVariables;

/**
 * Output transformer function for `ListSchemasQuery`.
 * It extracts the `listSchemas` field from the result and transforms it into a `ModelSchemaConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListSchemasQuery - The data returned from the GraphQL server
 * @returns ModelSchemaConnection - The transformed data
 */
export const ListSchemasQueryOutput = ({ listSchemas }: ListSchemasQuery) => listSchemas as ModelSchemaConnection;

/**
 * Fetcher function for `ListSchemasQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListSchemasQueryFetcher = (
  variables?: ListSchemasQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListSchemasQueryOutput,
  inputFn = ListSchemasQueryInput,
) =>
  fetchWithAmplify<ListSchemasQuery, ListSchemasQueryVariables, ModelSchemaConnection, ListSchemasQueryVariables>(
    ListSchemasDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useListSchemasQuery = <TData = ModelSchemaConnection, TError = unknown>(
  variables?: ListSchemasQueryVariables,
  options?: UseQueryOptions<ModelSchemaConnection, TError, TData>,
) =>
  useQuery<ModelSchemaConnection, TError, TData>(
    variables === undefined ? ['ListSchemas'] : ['ListSchemas', variables],
    ListSchemasQueryFetcher(variables),
    options,
  );
useListSchemasQuery.getKey = ListSchemasQueryKeys;

export const GetTestDocument = `
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

/**
 * Key maker function for `GetTestQuery`.
 */
export const GetTestQueryKeys = (variables: GetTestQueryVariables) => ['GetTest', variables];

/**
 * Input transformer function for `GetTestQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetTestQueryVariables` - The original variables
 * @returns `GetTestQueryVariables` - The transformed variables
 */
export const GetTestQueryInput = (variables: GetTestQueryVariables) => variables as GetTestQueryVariables;

/**
 * Output transformer function for `GetTestQuery`.
 * It extracts the `getTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTestQuery - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const GetTestQueryOutput = ({ getTest }: GetTestQuery) => getTest as Test;

/**
 * Fetcher function for `GetTestQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetTestQueryFetcher = (
  variables: GetTestQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetTestQueryOutput,
  inputFn = GetTestQueryInput,
) =>
  fetchWithAmplify<GetTestQuery, GetTestQueryVariables, Test, GetTestQueryVariables>(
    GetTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useGetTestQuery = <TData = Test, TError = unknown>(
  variables: GetTestQueryVariables,
  options?: UseQueryOptions<Test, TError, TData>,
) => useQuery<Test, TError, TData>(['GetTest', variables], GetTestQueryFetcher(variables), options);
useGetTestQuery.getKey = GetTestQueryKeys;

export const ListTestsDocument = `
    query ListTests($filter: ModelTestFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListTestsQuery`.
 */
export const ListTestsQueryKeys = (variables?: ListTestsQueryVariables) =>
  variables === undefined ? ['ListTests'] : ['ListTests', variables];

/**
 * Input transformer function for `ListTestsQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListTestsQueryVariables` - The original variables
 * @returns `ListTestsQueryVariables` - The transformed variables
 */
export const ListTestsQueryInput = (variables?: ListTestsQueryVariables) => variables as ListTestsQueryVariables;

/**
 * Output transformer function for `ListTestsQuery`.
 * It extracts the `listTests` field from the result and transforms it into a `ModelTestConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTestsQuery - The data returned from the GraphQL server
 * @returns ModelTestConnection - The transformed data
 */
export const ListTestsQueryOutput = ({ listTests }: ListTestsQuery) => listTests as ModelTestConnection;

/**
 * Fetcher function for `ListTestsQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListTestsQueryFetcher = (
  variables?: ListTestsQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListTestsQueryOutput,
  inputFn = ListTestsQueryInput,
) =>
  fetchWithAmplify<ListTestsQuery, ListTestsQueryVariables, ModelTestConnection, ListTestsQueryVariables>(
    ListTestsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useListTestsQuery = <TData = ModelTestConnection, TError = unknown>(
  variables?: ListTestsQueryVariables,
  options?: UseQueryOptions<ModelTestConnection, TError, TData>,
) =>
  useQuery<ModelTestConnection, TError, TData>(
    variables === undefined ? ['ListTests'] : ['ListTests', variables],
    ListTestsQueryFetcher(variables),
    options,
  );
useListTestsQuery.getKey = ListTestsQueryKeys;

export const GetOrganizationDocument = `
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

/**
 * Key maker function for `GetOrganizationQuery`.
 */
export const GetOrganizationQueryKeys = (variables: GetOrganizationQueryVariables) => ['GetOrganization', variables];

/**
 * Input transformer function for `GetOrganizationQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetOrganizationQueryVariables` - The original variables
 * @returns `GetOrganizationQueryVariables` - The transformed variables
 */
export const GetOrganizationQueryInput = (variables: GetOrganizationQueryVariables) =>
  variables as GetOrganizationQueryVariables;

/**
 * Output transformer function for `GetOrganizationQuery`.
 * It extracts the `getOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetOrganizationQuery - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const GetOrganizationQueryOutput = ({ getOrganization }: GetOrganizationQuery) =>
  getOrganization as Organization;

/**
 * Fetcher function for `GetOrganizationQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetOrganizationQueryFetcher = (
  variables: GetOrganizationQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetOrganizationQueryOutput,
  inputFn = GetOrganizationQueryInput,
) =>
  fetchWithAmplify<GetOrganizationQuery, GetOrganizationQueryVariables, Organization, GetOrganizationQueryVariables>(
    GetOrganizationDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useGetOrganizationQuery = <TData = Organization, TError = unknown>(
  variables: GetOrganizationQueryVariables,
  options?: UseQueryOptions<Organization, TError, TData>,
) =>
  useQuery<Organization, TError, TData>(
    ['GetOrganization', variables],
    GetOrganizationQueryFetcher(variables),
    options,
  );
useGetOrganizationQuery.getKey = GetOrganizationQueryKeys;

export const ListOrganizationsDocument = `
    query ListOrganizations($filter: ModelOrganizationFilterInput, $limit: Int, $nextToken: String) {
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

/**
 * Key maker function for `ListOrganizationsQuery`.
 */
export const ListOrganizationsQueryKeys = (variables?: ListOrganizationsQueryVariables) =>
  variables === undefined ? ['ListOrganizations'] : ['ListOrganizations', variables];

/**
 * Input transformer function for `ListOrganizationsQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListOrganizationsQueryVariables` - The original variables
 * @returns `ListOrganizationsQueryVariables` - The transformed variables
 */
export const ListOrganizationsQueryInput = (variables?: ListOrganizationsQueryVariables) =>
  variables as ListOrganizationsQueryVariables;

/**
 * Output transformer function for `ListOrganizationsQuery`.
 * It extracts the `listOrganizations` field from the result and transforms it into a `ModelOrganizationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListOrganizationsQuery - The data returned from the GraphQL server
 * @returns ModelOrganizationConnection - The transformed data
 */
export const ListOrganizationsQueryOutput = ({ listOrganizations }: ListOrganizationsQuery) =>
  listOrganizations as ModelOrganizationConnection;

/**
 * Fetcher function for `ListOrganizationsQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListOrganizationsQueryFetcher = (
  variables?: ListOrganizationsQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListOrganizationsQueryOutput,
  inputFn = ListOrganizationsQueryInput,
) =>
  fetchWithAmplify<
    ListOrganizationsQuery,
    ListOrganizationsQueryVariables,
    ModelOrganizationConnection,
    ListOrganizationsQueryVariables
  >(ListOrganizationsDocument, variables, options, outputFn, inputFn);
export const useListOrganizationsQuery = <TData = ModelOrganizationConnection, TError = unknown>(
  variables?: ListOrganizationsQueryVariables,
  options?: UseQueryOptions<ModelOrganizationConnection, TError, TData>,
) =>
  useQuery<ModelOrganizationConnection, TError, TData>(
    variables === undefined ? ['ListOrganizations'] : ['ListOrganizations', variables],
    ListOrganizationsQueryFetcher(variables),
    options,
  );
useListOrganizationsQuery.getKey = ListOrganizationsQueryKeys;

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
  }
}
    `;

/**
 * Key maker function for `SearchGraphQuery`.
 */
export const SearchGraphQueryKeys = (variables: SearchGraphQueryVariables) => ['SearchGraph', variables];

/**
 * Input transformer function for `SearchGraphQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `SearchGraphQueryVariables` - The original variables
 * @returns `SearchGraphQueryVariables` - The transformed variables
 */
export const SearchGraphQueryInput = (variables: SearchGraphQueryVariables) => variables as SearchGraphQueryVariables;

/**
 * Output transformer function for `SearchGraphQuery`.
 * It extracts the `searchGraph` field from the result and transforms it into a `SearchGraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data SearchGraphQuery - The data returned from the GraphQL server
 * @returns SearchGraphResult - The transformed data
 */
export const SearchGraphQueryOutput = ({ searchGraph }: SearchGraphQuery) =>
  searchGraph &&
  ({
    ...searchGraph,
    records: searchGraph.records?.map((record) => ({
      ...record,
      node: {
        ...record?.node,
        properties: record?.node?.properties && JSON.parse(record?.node?.properties as any),
      },
    })),
  } as SearchGraphResult);

/**
 * Fetcher function for `SearchGraphQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const SearchGraphQueryFetcher = (
  variables: SearchGraphQueryVariables,
  options?: RequestInit['headers'],
  outputFn = SearchGraphQueryOutput,
  inputFn = SearchGraphQueryInput,
) =>
  fetchWithAmplify<SearchGraphQuery, SearchGraphQueryVariables, SearchGraphResult, SearchGraphQueryVariables>(
    SearchGraphDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useSearchGraphQuery = <TData = SearchGraphResult, TError = unknown>(
  variables: SearchGraphQueryVariables,
  options?: UseQueryOptions<SearchGraphResult, TError, TData>,
) =>
  useQuery<SearchGraphResult, TError, TData>(['SearchGraph', variables], SearchGraphQueryFetcher(variables), options);
useSearchGraphQuery.getKey = SearchGraphQueryKeys;

export const GetNodeDocument = `
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

/**
 * Key maker function for `GetNodeQuery`.
 */
export const GetNodeQueryKeys = (variables: GetNodeQueryVariables) => ['GetNode', variables];

/**
 * Input transformer function for `GetNodeQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetNodeQueryVariables` - The original variables
 * @returns `GetNodeQueryVariables` - The transformed variables
 */
export const GetNodeQueryInput = (variables: GetNodeQueryVariables) => variables as GetNodeQueryVariables;

/**
 * Output transformer function for `GetNodeQuery`.
 * It extracts the `getNode` field from the result and transforms it into a `NodeGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetNodeQuery - The data returned from the GraphQL server
 * @returns NodeGraphRecord - The transformed data
 */
export const GetNodeQueryOutput = ({ getNode }: GetNodeQuery) =>
  getNode &&
  ({
    ...getNode,
    node: {
      ...getNode.node,
      properties: getNode.node?.properties && JSON.parse(getNode.node?.properties as any),
    },
    relationships: getNode.relationships?.map((relationship) => ({
      ...relationship,
      node: {
        ...relationship?.node,
        properties: relationship?.node?.properties && JSON.parse(relationship?.node?.properties as any),
      },
      relationship: {
        ...relationship?.relationship,
        properties: relationship?.relationship?.properties && JSON.parse(relationship?.relationship?.properties as any),
      },
    })),
  } as NodeGraphRecord);

/**
 * Fetcher function for `GetNodeQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetNodeQueryFetcher = (
  variables: GetNodeQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetNodeQueryOutput,
  inputFn = GetNodeQueryInput,
) =>
  fetchWithAmplify<GetNodeQuery, GetNodeQueryVariables, NodeGraphRecord, GetNodeQueryVariables>(
    GetNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useGetNodeQuery = <TData = NodeGraphRecord, TError = unknown>(
  variables: GetNodeQueryVariables,
  options?: UseQueryOptions<NodeGraphRecord, TError, TData>,
) => useQuery<NodeGraphRecord, TError, TData>(['GetNode', variables], GetNodeQueryFetcher(variables), options);
useGetNodeQuery.getKey = GetNodeQueryKeys;

export const GetRelationshipDocument = `
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

/**
 * Key maker function for `GetRelationshipQuery`.
 */
export const GetRelationshipQueryKeys = (variables: GetRelationshipQueryVariables) => ['GetRelationship', variables];

/**
 * Input transformer function for `GetRelationshipQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetRelationshipQueryVariables` - The original variables
 * @returns `GetRelationshipQueryVariables` - The transformed variables
 */
export const GetRelationshipQueryInput = (variables: GetRelationshipQueryVariables) =>
  variables as GetRelationshipQueryVariables;

/**
 * Output transformer function for `GetRelationshipQuery`.
 * It extracts the `getRelationship` field from the result and transforms it into a `RelationshipGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetRelationshipQuery - The data returned from the GraphQL server
 * @returns RelationshipGraphRecord - The transformed data
 */
export const GetRelationshipQueryOutput = ({ getRelationship }: GetRelationshipQuery) =>
  getRelationship &&
  ({
    ...getRelationship,
    end: {
      ...getRelationship.end,
      properties: getRelationship.end?.properties && JSON.parse(getRelationship.end?.properties as any),
    },
    relationship: {
      ...getRelationship.relationship,
      properties:
        getRelationship.relationship?.properties && JSON.parse(getRelationship.relationship?.properties as any),
    },
    start: {
      ...getRelationship.start,
      properties: getRelationship.start?.properties && JSON.parse(getRelationship.start?.properties as any),
    },
  } as RelationshipGraphRecord);

/**
 * Fetcher function for `GetRelationshipQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetRelationshipQueryFetcher = (
  variables: GetRelationshipQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetRelationshipQueryOutput,
  inputFn = GetRelationshipQueryInput,
) =>
  fetchWithAmplify<
    GetRelationshipQuery,
    GetRelationshipQueryVariables,
    RelationshipGraphRecord,
    GetRelationshipQueryVariables
  >(GetRelationshipDocument, variables, options, outputFn, inputFn);
export const useGetRelationshipQuery = <TData = RelationshipGraphRecord, TError = unknown>(
  variables: GetRelationshipQueryVariables,
  options?: UseQueryOptions<RelationshipGraphRecord, TError, TData>,
) =>
  useQuery<RelationshipGraphRecord, TError, TData>(
    ['GetRelationship', variables],
    GetRelationshipQueryFetcher(variables),
    options,
  );
useGetRelationshipQuery.getKey = GetRelationshipQueryKeys;

export const ListNodesDocument = `
    query ListNodes($label: String!) {
  listNodes(label: $label) {
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

/**
 * Key maker function for `ListNodesQuery`.
 */
export const ListNodesQueryKeys = (variables: ListNodesQueryVariables) => ['ListNodes', variables];

/**
 * Input transformer function for `ListNodesQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListNodesQueryVariables` - The original variables
 * @returns `ListNodesQueryVariables` - The transformed variables
 */
export const ListNodesQueryInput = (variables: ListNodesQueryVariables) => variables as ListNodesQueryVariables;

/**
 * Output transformer function for `ListNodesQuery`.
 * It extracts the `listNodes` field from the result and transforms it into a `NodesGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListNodesQuery - The data returned from the GraphQL server
 * @returns NodesGraphRecord - The transformed data
 */
export const ListNodesQueryOutput = ({ listNodes }: ListNodesQuery) =>
  listNodes &&
  ({
    ...listNodes,
    records: listNodes.records?.map((record) => ({
      ...record,
      node: {
        ...record?.node,
        properties: record?.node?.properties && JSON.parse(record?.node?.properties as any),
      },
      relationships: record?.relationships?.map((relationship) => ({
        ...relationship,
        node: {
          ...relationship?.node,
          properties: relationship?.node?.properties && JSON.parse(relationship?.node?.properties as any),
        },
        relationship: {
          ...relationship?.relationship,
          properties:
            relationship?.relationship?.properties && JSON.parse(relationship?.relationship?.properties as any),
        },
      })),
    })),
  } as NodesGraphRecord);

/**
 * Fetcher function for `ListNodesQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListNodesQueryFetcher = (
  variables: ListNodesQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListNodesQueryOutput,
  inputFn = ListNodesQueryInput,
) =>
  fetchWithAmplify<ListNodesQuery, ListNodesQueryVariables, NodesGraphRecord, ListNodesQueryVariables>(
    ListNodesDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useListNodesQuery = <TData = NodesGraphRecord, TError = unknown>(
  variables: ListNodesQueryVariables,
  options?: UseQueryOptions<NodesGraphRecord, TError, TData>,
) => useQuery<NodesGraphRecord, TError, TData>(['ListNodes', variables], ListNodesQueryFetcher(variables), options);
useListNodesQuery.getKey = ListNodesQueryKeys;

export const GetUserDocument = `
    query GetUser($username: ID!) {
  getUser(username: $username) {
    username
    createdAt
    updatedAt
    attributes
  }
}
    `;

/**
 * Key maker function for `GetUserQuery`.
 */
export const GetUserQueryKeys = (variables: GetUserQueryVariables) => ['GetUser', variables];

/**
 * Input transformer function for `GetUserQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetUserQueryVariables` - The original variables
 * @returns `GetUserQueryVariables` - The transformed variables
 */
export const GetUserQueryInput = (variables: GetUserQueryVariables) => variables as GetUserQueryVariables;

/**
 * Output transformer function for `GetUserQuery`.
 * It extracts the `getUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetUserQuery - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const GetUserQueryOutput = ({ getUser }: GetUserQuery) =>
  getUser && ({ ...getUser, attributes: getUser.attributes && JSON.parse(getUser.attributes as any) } as CognitoUser);

/**
 * Fetcher function for `GetUserQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetUserQueryFetcher = (
  variables: GetUserQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetUserQueryOutput,
  inputFn = GetUserQueryInput,
) =>
  fetchWithAmplify<GetUserQuery, GetUserQueryVariables, CognitoUser, GetUserQueryVariables>(
    GetUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useGetUserQuery = <TData = CognitoUser, TError = unknown>(
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<CognitoUser, TError, TData>,
) => useQuery<CognitoUser, TError, TData>(['GetUser', variables], GetUserQueryFetcher(variables), options);
useGetUserQuery.getKey = GetUserQueryKeys;

export const FindUsersDocument = `
    query FindUsers($input: FindUsersInput!) {
  findUsers(input: $input) {
    items {
      username
      createdAt
      updatedAt
      attributes
    }
    nextToken
  }
}
    `;

/**
 * Key maker function for `FindUsersQuery`.
 */
export const FindUsersQueryKeys = (variables: FindUsersQueryVariables) => ['FindUsers', variables];

/**
 * Input transformer function for `FindUsersQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `FindUsersQueryVariables` - The original variables
 * @returns `FindUsersQueryVariables` - The transformed variables
 */
export const FindUsersQueryInput = (variables: FindUsersQueryVariables) => variables as FindUsersQueryVariables;

/**
 * Output transformer function for `FindUsersQuery`.
 * It extracts the `findUsers` field from the result and transforms it into a `CognitoUserList` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data FindUsersQuery - The data returned from the GraphQL server
 * @returns CognitoUserList - The transformed data
 */
export const FindUsersQueryOutput = ({ findUsers }: FindUsersQuery) =>
  findUsers &&
  ({
    ...findUsers,
    items: findUsers.items?.map((item) => ({
      ...item,
      attributes: item?.attributes && JSON.parse(item?.attributes as any),
    })),
  } as CognitoUserList);

/**
 * Fetcher function for `FindUsersQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const FindUsersQueryFetcher = (
  variables: FindUsersQueryVariables,
  options?: RequestInit['headers'],
  outputFn = FindUsersQueryOutput,
  inputFn = FindUsersQueryInput,
) =>
  fetchWithAmplify<FindUsersQuery, FindUsersQueryVariables, CognitoUserList, FindUsersQueryVariables>(
    FindUsersDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useFindUsersQuery = <TData = CognitoUserList, TError = unknown>(
  variables: FindUsersQueryVariables,
  options?: UseQueryOptions<CognitoUserList, TError, TData>,
) => useQuery<CognitoUserList, TError, TData>(['FindUsers', variables], FindUsersQueryFetcher(variables), options);
useFindUsersQuery.getKey = FindUsersQueryKeys;

export const ListUsersDocument = `
    query ListUsers($nextToken: String) {
  listUsers(nextToken: $nextToken) {
    items {
      username
      createdAt
      updatedAt
      attributes
    }
    nextToken
  }
}
    `;

/**
 * Key maker function for `ListUsersQuery`.
 */
export const ListUsersQueryKeys = (variables?: ListUsersQueryVariables) =>
  variables === undefined ? ['ListUsers'] : ['ListUsers', variables];

/**
 * Input transformer function for `ListUsersQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListUsersQueryVariables` - The original variables
 * @returns `ListUsersQueryVariables` - The transformed variables
 */
export const ListUsersQueryInput = (variables?: ListUsersQueryVariables) => variables as ListUsersQueryVariables;

/**
 * Output transformer function for `ListUsersQuery`.
 * It extracts the `listUsers` field from the result and transforms it into a `CognitoUserList` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListUsersQuery - The data returned from the GraphQL server
 * @returns CognitoUserList - The transformed data
 */
export const ListUsersQueryOutput = ({ listUsers }: ListUsersQuery) =>
  listUsers &&
  ({
    ...listUsers,
    items: listUsers.items?.map((item) => ({
      ...item,
      attributes: item?.attributes && JSON.parse(item?.attributes as any),
    })),
  } as CognitoUserList);

/**
 * Fetcher function for `ListUsersQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const ListUsersQueryFetcher = (
  variables?: ListUsersQueryVariables,
  options?: RequestInit['headers'],
  outputFn = ListUsersQueryOutput,
  inputFn = ListUsersQueryInput,
) =>
  fetchWithAmplify<ListUsersQuery, ListUsersQueryVariables, CognitoUserList, ListUsersQueryVariables>(
    ListUsersDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );
export const useListUsersQuery = <TData = CognitoUserList, TError = unknown>(
  variables?: ListUsersQueryVariables,
  options?: UseQueryOptions<CognitoUserList, TError, TData>,
) =>
  useQuery<CognitoUserList, TError, TData>(
    variables === undefined ? ['ListUsers'] : ['ListUsers', variables],
    ListUsersQueryFetcher(variables),
    options,
  );
useListUsersQuery.getKey = ListUsersQueryKeys;

export const GetConnectorCredentialsDocument = `
    query GetConnectorCredentials($id: ID!) {
  getConnectorCredentials(id: $id) {
    id
    plainCredentials
  }
}
    `;

/**
 * Key maker function for `GetConnectorCredentialsQuery`.
 */
export const GetConnectorCredentialsQueryKeys = (variables: GetConnectorCredentialsQueryVariables) => [
  'GetConnectorCredentials',
  variables,
];

/**
 * Input transformer function for `GetConnectorCredentialsQuery`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorCredentialsQueryVariables` - The original variables
 * @returns `GetConnectorCredentialsQueryVariables` - The transformed variables
 */
export const GetConnectorCredentialsQueryInput = (variables: GetConnectorCredentialsQueryVariables) =>
  variables as GetConnectorCredentialsQueryVariables;

/**
 * Output transformer function for `GetConnectorCredentialsQuery`.
 * It extracts the `getConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorCredentialsQuery - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const GetConnectorCredentialsQueryOutput = ({ getConnectorCredentials }: GetConnectorCredentialsQuery) =>
  getConnectorCredentials &&
  ({
    ...getConnectorCredentials,
    plainCredentials:
      getConnectorCredentials.plainCredentials && JSON.parse(getConnectorCredentials.plainCredentials as any),
  } as ConnectorCredentials);

/**
 * Fetcher function for `GetConnectorCredentialsQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function, if available, must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function, if available, must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 */
export const GetConnectorCredentialsQueryFetcher = (
  variables: GetConnectorCredentialsQueryVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorCredentialsQueryOutput,
  inputFn = GetConnectorCredentialsQueryInput,
) =>
  fetchWithAmplify<
    GetConnectorCredentialsQuery,
    GetConnectorCredentialsQueryVariables,
    ConnectorCredentials,
    GetConnectorCredentialsQueryVariables
  >(GetConnectorCredentialsDocument, variables, options, outputFn, inputFn);
export const useGetConnectorCredentialsQuery = <TData = ConnectorCredentials, TError = unknown>(
  variables: GetConnectorCredentialsQueryVariables,
  options?: UseQueryOptions<ConnectorCredentials, TError, TData>,
) =>
  useQuery<ConnectorCredentials, TError, TData>(
    ['GetConnectorCredentials', variables],
    GetConnectorCredentialsQueryFetcher(variables),
    options,
  );
useGetConnectorCredentialsQuery.getKey = GetConnectorCredentialsQueryKeys;
