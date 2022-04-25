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

export type EmptyMutationVariables = Exact<{ [key: string]: never }>;

export type EmptyMutation = { emptyMutation?: number | undefined };

export type RunConnectorVariables = Exact<{
  input: RunConnectorInput;
}>;

export type RunConnector = { runConnector?: Record<string, any> | string | undefined };

export type CreateConnectorCredentialsVariables = Exact<{
  input: CreateConnectorCredentialsInput;
}>;

export type CreateConnectorCredentials = {
  createConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export type UpdateConnectorCredentialsVariables = Exact<{
  input: UpdateConnectorCredentialsInput;
}>;

export type UpdateConnectorCredentials = {
  updateConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export type DeleteConnectorCredentialsVariables = Exact<{
  input: DeleteConnectorCredentialsInput;
}>;

export type DeleteConnectorCredentials = {
  deleteConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export type CreateNodeVariables = Exact<{
  input: CreateNodeInput;
}>;

export type CreateNode = {
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

export type UpdateNodeVariables = Exact<{
  input: UpdateNodeInput;
}>;

export type UpdateNode = {
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

export type DeleteNodeVariables = Exact<{
  input: DeleteNodeInput;
}>;

export type DeleteNode = {
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

export type CreateRelationshipVariables = Exact<{
  input: CreateRelationshipInput;
}>;

export type CreateRelationship = {
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

export type UpdateRelationshipVariables = Exact<{
  input: UpdateRelationshipInput;
}>;

export type UpdateRelationship = {
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

export type DeleteRelationshipVariables = Exact<{
  input: DeleteRelationshipInput;
}>;

export type DeleteRelationship = {
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

export type CreateConnectorVariables = Exact<{
  input: CreateConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type CreateConnector = {
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

export type UpdateConnectorVariables = Exact<{
  input: UpdateConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type UpdateConnector = {
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

export type DeleteConnectorVariables = Exact<{
  input: DeleteConnectorInput;
  condition?: InputMaybe<ModelConnectorConditionInput>;
}>;

export type DeleteConnector = {
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

export type CreateTransformationVariables = Exact<{
  input: CreateTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type CreateTransformation = {
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

export type UpdateTransformationVariables = Exact<{
  input: UpdateTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type UpdateTransformation = {
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

export type DeleteTransformationVariables = Exact<{
  input: DeleteTransformationInput;
  condition?: InputMaybe<ModelTransformationConditionInput>;
}>;

export type DeleteTransformation = {
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

export type UpdateSchemaVariables = Exact<{
  input: UpdateSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type UpdateSchema = {
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

export type DeleteSchemaVariables = Exact<{
  input: DeleteSchemaInput;
  condition?: InputMaybe<ModelSchemaConditionInput>;
}>;

export type DeleteSchema = {
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

export type CreateTestVariables = Exact<{
  input: CreateTestInput;
  condition?: InputMaybe<ModelTestConditionInput>;
}>;

export type CreateTest = {
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

export type UpdateTestVariables = Exact<{
  input: UpdateTestInput;
  condition?: InputMaybe<ModelTestConditionInput>;
}>;

export type UpdateTest = {
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

export type DeleteTestVariables = Exact<{
  input: DeleteTestInput;
  condition?: InputMaybe<ModelTestConditionInput>;
}>;

export type DeleteTest = {
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

export type CreateOrganizationVariables = Exact<{
  input: CreateOrganizationInput;
  condition?: InputMaybe<ModelOrganizationConditionInput>;
}>;

export type CreateOrganization = {
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

export type UpdateOrganizationVariables = Exact<{
  input: UpdateOrganizationInput;
  condition?: InputMaybe<ModelOrganizationConditionInput>;
}>;

export type UpdateOrganization = {
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

export type RunPerspectiveVariables = Exact<{
  input: RunPerspectiveInput;
}>;

export type RunPerspective = { runPerspective?: { records: Record<string, any> | string } | undefined };

export type CreateUserVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUser = {
  createUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type UpdateUserVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUser = {
  updateUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type DeleteUserVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUser = {
  deleteUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type EmptyQueryVariables = Exact<{ [key: string]: never }>;

export type EmptyQuery = { emptyQuery?: string | undefined };

export type EchoVariables = Exact<{
  msg?: InputMaybe<Scalars['String']>;
}>;

export type Echo = { echo?: string | undefined };

export type CustomTestVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CustomTest = {
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

export type GetConnectorManifestVariables = Exact<{
  query: QueryGetConnectorManifestQueryInput;
}>;

export type GetConnectorManifest = {
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

export type GetConnectorVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnector = {
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

export type GetConnectorBySourceVariables = Exact<{
  source: Scalars['String'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelConnectorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type GetConnectorBySource = {
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

export type GetTransformationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTransformation = {
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

export type GetTransformationsByConnectorVariables = Exact<{
  connectorID: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelTransformationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type GetTransformationsByConnector = {
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

export type GetTestVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTest = {
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

export type ListTestsVariables = Exact<{
  filter?: InputMaybe<ModelTestFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListTests = {
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

export type GetOrganizationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetOrganization = {
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

export type ListOrganizationsVariables = Exact<{
  filter?: InputMaybe<ModelOrganizationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListOrganizations = {
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

export type SearchGraphVariables = Exact<{
  input: SearchGraphInput;
}>;

export type SearchGraph = {
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

export type GetNodeVariables = Exact<{
  identity: Scalars['ID'];
}>;

export type GetNode = {
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

export type GetRelationshipVariables = Exact<{
  identity: Scalars['ID'];
}>;

export type GetRelationship = {
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

export type ListNodesVariables = Exact<{
  label: Scalars['String'];
}>;

export type ListNodes = {
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

export type GetUserVariables = Exact<{
  username: Scalars['ID'];
}>;

export type GetUser = {
  getUser?:
    | {
        username: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        attributes: Record<string, any> | string;
      }
    | undefined;
};

export type FindUsersVariables = Exact<{
  input: FindUsersInput;
}>;

export type FindUsers = {
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

export type ListUsersVariables = Exact<{
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListUsers = {
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

export type GetConnectorCredentialsVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnectorCredentials = {
  getConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

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
export const EmptyMutationInput = (variables?: EmptyMutationVariables) => variables as EmptyMutationVariables;

/**
 * Output transformer function for `EmptyMutation`.
 * It extracts the `emptyMutation` field from the result and transforms it into a `Scalars['Int']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyMutation - The data returned from the GraphQL server
 * @returns Scalars['Int'] - The transformed data
 */
export const EmptyMutationOutput = ({ emptyMutation }: EmptyMutation) => emptyMutation as Scalars['Int'];

/**
 * Fetcher function for `EmptyMutation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `EmptyMutationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const EmptyMutationFetcher = (
  variables?: EmptyMutationVariables,
  options?: RequestInit['headers'],
  outputFn = EmptyMutationOutput,
  inputFn = EmptyMutationInput,
) =>
  fetchWithAmplify<EmptyMutation, EmptyMutationVariables, Scalars['Int'], EmptyMutationVariables>(
    EmptyMutationDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `EmptyMutation`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const emptyMutation = (variables?: EmptyMutationVariables) => EmptyMutationFetcher(variables)();

export const useEmptyMutation = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Scalars['Int'] | undefined, TError, EmptyMutationVariables, TContext>,
) =>
  useMutation<Scalars['Int'] | undefined, TError, EmptyMutationVariables, TContext>(
    ['EmptyMutation'],
    (variables?: EmptyMutationVariables) => EmptyMutationFetcher(variables)(),
    options,
  );

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
export const RunConnectorInput = (variables: RunConnectorVariables) => variables as RunConnectorVariables;

/**
 * Output transformer function for `RunConnector`.
 * It extracts the `runConnector` field from the result and transforms it into a `Scalars['AWSJSON']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RunConnector - The data returned from the GraphQL server
 * @returns Scalars['AWSJSON'] - The transformed data
 */
export const RunConnectorOutput = ({ runConnector }: RunConnector) => runConnector as Scalars['AWSJSON'];

/**
 * Fetcher function for `RunConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `RunConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const RunConnectorFetcher = (
  variables: RunConnectorVariables,
  options?: RequestInit['headers'],
  outputFn = RunConnectorOutput,
  inputFn = RunConnectorInput,
) =>
  fetchWithAmplify<RunConnector, RunConnectorVariables, Scalars['AWSJSON'], RunConnectorVariables>(
    RunConnectorDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `RunConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const runConnector = (variables: RunConnectorVariables) => RunConnectorFetcher(variables)();

export const useRunConnector = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Scalars['AWSJSON'] | undefined, TError, RunConnectorVariables, TContext>,
) =>
  useMutation<Scalars['AWSJSON'] | undefined, TError, RunConnectorVariables, TContext>(
    ['RunConnector'],
    (variables: RunConnectorVariables) => RunConnectorFetcher(variables)(),
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
 * Key maker function for `CreateConnectorCredentials`.
 */
export const CreateConnectorCredentialsKeys = () => ['CreateConnectorCredentials'];

/**
 * Input transformer function for `CreateConnectorCredentials`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateConnectorCredentialsVariables` - The original variables
 * @returns `CreateConnectorCredentialsVariables` - The transformed variables
 */
export const CreateConnectorCredentialsInput = (variables: CreateConnectorCredentialsVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      plainCredentials:
        variables.input.plainCredentials &&
        (JSON.stringify(variables.input.plainCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as CreateConnectorCredentialsVariables);

/**
 * Output transformer function for `CreateConnectorCredentials`.
 * It extracts the `createConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const CreateConnectorCredentialsOutput = ({ createConnectorCredentials }: CreateConnectorCredentials) =>
  createConnectorCredentials &&
  ({
    ...createConnectorCredentials,
    plainCredentials:
      createConnectorCredentials.plainCredentials &&
      (JSON.parse(createConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as ConnectorCredentials);

/**
 * Fetcher function for `CreateConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateConnectorCredentialsFetcher = (
  variables: CreateConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = CreateConnectorCredentialsOutput,
  inputFn = CreateConnectorCredentialsInput,
) =>
  fetchWithAmplify<
    CreateConnectorCredentials,
    CreateConnectorCredentialsVariables,
    ConnectorCredentials,
    CreateConnectorCredentialsVariables
  >(CreateConnectorCredentialsDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `CreateConnectorCredentials`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createConnectorCredentials = (variables: CreateConnectorCredentialsVariables) =>
  CreateConnectorCredentialsFetcher(variables)();

export const useCreateConnectorCredentials = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<ConnectorCredentials | undefined, TError, CreateConnectorCredentialsVariables, TContext>,
) =>
  useMutation<ConnectorCredentials | undefined, TError, CreateConnectorCredentialsVariables, TContext>(
    ['CreateConnectorCredentials'],
    (variables: CreateConnectorCredentialsVariables) => CreateConnectorCredentialsFetcher(variables)(),
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
 * Key maker function for `UpdateConnectorCredentials`.
 */
export const UpdateConnectorCredentialsKeys = () => ['UpdateConnectorCredentials'];

/**
 * Input transformer function for `UpdateConnectorCredentials`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateConnectorCredentialsVariables` - The original variables
 * @returns `UpdateConnectorCredentialsVariables` - The transformed variables
 */
export const UpdateConnectorCredentialsInput = (variables: UpdateConnectorCredentialsVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      plainCredentials:
        variables.input.plainCredentials &&
        (JSON.stringify(variables.input.plainCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as UpdateConnectorCredentialsVariables);

/**
 * Output transformer function for `UpdateConnectorCredentials`.
 * It extracts the `updateConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const UpdateConnectorCredentialsOutput = ({ updateConnectorCredentials }: UpdateConnectorCredentials) =>
  updateConnectorCredentials &&
  ({
    ...updateConnectorCredentials,
    plainCredentials:
      updateConnectorCredentials.plainCredentials &&
      (JSON.parse(updateConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as ConnectorCredentials);

/**
 * Fetcher function for `UpdateConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateConnectorCredentialsFetcher = (
  variables: UpdateConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateConnectorCredentialsOutput,
  inputFn = UpdateConnectorCredentialsInput,
) =>
  fetchWithAmplify<
    UpdateConnectorCredentials,
    UpdateConnectorCredentialsVariables,
    ConnectorCredentials,
    UpdateConnectorCredentialsVariables
  >(UpdateConnectorCredentialsDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UpdateConnectorCredentials`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateConnectorCredentials = (variables: UpdateConnectorCredentialsVariables) =>
  UpdateConnectorCredentialsFetcher(variables)();

export const useUpdateConnectorCredentials = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<ConnectorCredentials | undefined, TError, UpdateConnectorCredentialsVariables, TContext>,
) =>
  useMutation<ConnectorCredentials | undefined, TError, UpdateConnectorCredentialsVariables, TContext>(
    ['UpdateConnectorCredentials'],
    (variables: UpdateConnectorCredentialsVariables) => UpdateConnectorCredentialsFetcher(variables)(),
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
 * Key maker function for `DeleteConnectorCredentials`.
 */
export const DeleteConnectorCredentialsKeys = () => ['DeleteConnectorCredentials'];

/**
 * Input transformer function for `DeleteConnectorCredentials`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteConnectorCredentialsVariables` - The original variables
 * @returns `DeleteConnectorCredentialsVariables` - The transformed variables
 */
export const DeleteConnectorCredentialsInput = (variables: DeleteConnectorCredentialsVariables) =>
  variables as DeleteConnectorCredentialsVariables;

/**
 * Output transformer function for `DeleteConnectorCredentials`.
 * It extracts the `deleteConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const DeleteConnectorCredentialsOutput = ({ deleteConnectorCredentials }: DeleteConnectorCredentials) =>
  deleteConnectorCredentials &&
  ({
    ...deleteConnectorCredentials,
    plainCredentials:
      deleteConnectorCredentials.plainCredentials &&
      (JSON.parse(deleteConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as ConnectorCredentials);

/**
 * Fetcher function for `DeleteConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteConnectorCredentialsFetcher = (
  variables: DeleteConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteConnectorCredentialsOutput,
  inputFn = DeleteConnectorCredentialsInput,
) =>
  fetchWithAmplify<
    DeleteConnectorCredentials,
    DeleteConnectorCredentialsVariables,
    ConnectorCredentials,
    DeleteConnectorCredentialsVariables
  >(DeleteConnectorCredentialsDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteConnectorCredentials`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteConnectorCredentials = (variables: DeleteConnectorCredentialsVariables) =>
  DeleteConnectorCredentialsFetcher(variables)();

export const useDeleteConnectorCredentials = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<ConnectorCredentials | undefined, TError, DeleteConnectorCredentialsVariables, TContext>,
) =>
  useMutation<ConnectorCredentials | undefined, TError, DeleteConnectorCredentialsVariables, TContext>(
    ['DeleteConnectorCredentials'],
    (variables: DeleteConnectorCredentialsVariables) => DeleteConnectorCredentialsFetcher(variables)(),
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
export const CreateNodeInput = (variables: CreateNodeVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as CreateNodeVariables);

/**
 * Output transformer function for `CreateNode`.
 * It extracts the `createNode` field from the result and transforms it into a `NodeGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateNode - The data returned from the GraphQL server
 * @returns NodeGraphRecord - The transformed data
 */
export const CreateNodeOutput = ({ createNode }: CreateNode) =>
  createNode &&
  ({
    ...createNode,
    node: {
      ...createNode.node,
      properties:
        createNode.node?.properties &&
        (JSON.parse(createNode.node?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    relationships: createNode.relationships?.map((relationship) => ({
      ...relationship,
      node: {
        ...relationship?.node,
        properties:
          relationship?.node?.properties &&
          (JSON.parse(relationship?.node?.properties as any) as unknown as Scalars['AWSJSON']),
      },
      relationship: {
        ...relationship?.relationship,
        properties:
          relationship?.relationship?.properties &&
          (JSON.parse(relationship?.relationship?.properties as any) as unknown as Scalars['AWSJSON']),
      },
    })),
  } as NodeGraphRecord);

/**
 * Fetcher function for `CreateNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateNodeFetcher = (
  variables: CreateNodeVariables,
  options?: RequestInit['headers'],
  outputFn = CreateNodeOutput,
  inputFn = CreateNodeInput,
) =>
  fetchWithAmplify<CreateNode, CreateNodeVariables, NodeGraphRecord, CreateNodeVariables>(
    CreateNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createNode = (variables: CreateNodeVariables) => CreateNodeFetcher(variables)();

export const useCreateNode = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<NodeGraphRecord | undefined, TError, CreateNodeVariables, TContext>,
) =>
  useMutation<NodeGraphRecord | undefined, TError, CreateNodeVariables, TContext>(
    ['CreateNode'],
    (variables: CreateNodeVariables) => CreateNodeFetcher(variables)(),
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
export const UpdateNodeInput = (variables: UpdateNodeVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as UpdateNodeVariables);

/**
 * Output transformer function for `UpdateNode`.
 * It extracts the `updateNode` field from the result and transforms it into a `NodeGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateNode - The data returned from the GraphQL server
 * @returns NodeGraphRecord - The transformed data
 */
export const UpdateNodeOutput = ({ updateNode }: UpdateNode) =>
  updateNode &&
  ({
    ...updateNode,
    node: {
      ...updateNode.node,
      properties:
        updateNode.node?.properties &&
        (JSON.parse(updateNode.node?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    relationships: updateNode.relationships?.map((relationship) => ({
      ...relationship,
      node: {
        ...relationship?.node,
        properties:
          relationship?.node?.properties &&
          (JSON.parse(relationship?.node?.properties as any) as unknown as Scalars['AWSJSON']),
      },
      relationship: {
        ...relationship?.relationship,
        properties:
          relationship?.relationship?.properties &&
          (JSON.parse(relationship?.relationship?.properties as any) as unknown as Scalars['AWSJSON']),
      },
    })),
  } as NodeGraphRecord);

/**
 * Fetcher function for `UpdateNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateNodeFetcher = (
  variables: UpdateNodeVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateNodeOutput,
  inputFn = UpdateNodeInput,
) =>
  fetchWithAmplify<UpdateNode, UpdateNodeVariables, NodeGraphRecord, UpdateNodeVariables>(
    UpdateNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateNode = (variables: UpdateNodeVariables) => UpdateNodeFetcher(variables)();

export const useUpdateNode = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<NodeGraphRecord | undefined, TError, UpdateNodeVariables, TContext>,
) =>
  useMutation<NodeGraphRecord | undefined, TError, UpdateNodeVariables, TContext>(
    ['UpdateNode'],
    (variables: UpdateNodeVariables) => UpdateNodeFetcher(variables)(),
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
export const DeleteNodeInput = (variables: DeleteNodeVariables) => variables as DeleteNodeVariables;

/**
 * Output transformer function for `DeleteNode`.
 * It extracts the `deleteNode` field from the result and transforms it into a `DeleteNodeRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteNode - The data returned from the GraphQL server
 * @returns DeleteNodeRecord - The transformed data
 */
export const DeleteNodeOutput = ({ deleteNode }: DeleteNode) =>
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
  } as DeleteNodeRecord);

/**
 * Fetcher function for `DeleteNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteNodeFetcher = (
  variables: DeleteNodeVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteNodeOutput,
  inputFn = DeleteNodeInput,
) =>
  fetchWithAmplify<DeleteNode, DeleteNodeVariables, DeleteNodeRecord, DeleteNodeVariables>(
    DeleteNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteNode = (variables: DeleteNodeVariables) => DeleteNodeFetcher(variables)();

export const useDeleteNode = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<DeleteNodeRecord | undefined, TError, DeleteNodeVariables, TContext>,
) =>
  useMutation<DeleteNodeRecord | undefined, TError, DeleteNodeVariables, TContext>(
    ['DeleteNode'],
    (variables: DeleteNodeVariables) => DeleteNodeFetcher(variables)(),
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
export const CreateRelationshipInput = (variables: CreateRelationshipVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as CreateRelationshipVariables);

/**
 * Output transformer function for `CreateRelationship`.
 * It extracts the `createRelationship` field from the result and transforms it into a `RelationshipGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateRelationship - The data returned from the GraphQL server
 * @returns RelationshipGraphRecord - The transformed data
 */
export const CreateRelationshipOutput = ({ createRelationship }: CreateRelationship) =>
  createRelationship &&
  ({
    ...createRelationship,
    end: {
      ...createRelationship.end,
      properties:
        createRelationship.end?.properties &&
        (JSON.parse(createRelationship.end?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    relationship: {
      ...createRelationship.relationship,
      properties:
        createRelationship.relationship?.properties &&
        (JSON.parse(createRelationship.relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    start: {
      ...createRelationship.start,
      properties:
        createRelationship.start?.properties &&
        (JSON.parse(createRelationship.start?.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as RelationshipGraphRecord);

/**
 * Fetcher function for `CreateRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateRelationshipFetcher = (
  variables: CreateRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = CreateRelationshipOutput,
  inputFn = CreateRelationshipInput,
) =>
  fetchWithAmplify<
    CreateRelationship,
    CreateRelationshipVariables,
    RelationshipGraphRecord,
    CreateRelationshipVariables
  >(CreateRelationshipDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `CreateRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createRelationship = (variables: CreateRelationshipVariables) => CreateRelationshipFetcher(variables)();

export const useCreateRelationship = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<RelationshipGraphRecord | undefined, TError, CreateRelationshipVariables, TContext>,
) =>
  useMutation<RelationshipGraphRecord | undefined, TError, CreateRelationshipVariables, TContext>(
    ['CreateRelationship'],
    (variables: CreateRelationshipVariables) => CreateRelationshipFetcher(variables)(),
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
export const UpdateRelationshipInput = (variables: UpdateRelationshipVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as UpdateRelationshipVariables);

/**
 * Output transformer function for `UpdateRelationship`.
 * It extracts the `updateRelationship` field from the result and transforms it into a `RelationshipGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateRelationship - The data returned from the GraphQL server
 * @returns RelationshipGraphRecord - The transformed data
 */
export const UpdateRelationshipOutput = ({ updateRelationship }: UpdateRelationship) =>
  updateRelationship &&
  ({
    ...updateRelationship,
    end: {
      ...updateRelationship.end,
      properties:
        updateRelationship.end?.properties &&
        (JSON.parse(updateRelationship.end?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    relationship: {
      ...updateRelationship.relationship,
      properties:
        updateRelationship.relationship?.properties &&
        (JSON.parse(updateRelationship.relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    start: {
      ...updateRelationship.start,
      properties:
        updateRelationship.start?.properties &&
        (JSON.parse(updateRelationship.start?.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as RelationshipGraphRecord);

/**
 * Fetcher function for `UpdateRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateRelationshipFetcher = (
  variables: UpdateRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateRelationshipOutput,
  inputFn = UpdateRelationshipInput,
) =>
  fetchWithAmplify<
    UpdateRelationship,
    UpdateRelationshipVariables,
    RelationshipGraphRecord,
    UpdateRelationshipVariables
  >(UpdateRelationshipDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `UpdateRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateRelationship = (variables: UpdateRelationshipVariables) => UpdateRelationshipFetcher(variables)();

export const useUpdateRelationship = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<RelationshipGraphRecord | undefined, TError, UpdateRelationshipVariables, TContext>,
) =>
  useMutation<RelationshipGraphRecord | undefined, TError, UpdateRelationshipVariables, TContext>(
    ['UpdateRelationship'],
    (variables: UpdateRelationshipVariables) => UpdateRelationshipFetcher(variables)(),
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
export const DeleteRelationshipInput = (variables: DeleteRelationshipVariables) =>
  variables as DeleteRelationshipVariables;

/**
 * Output transformer function for `DeleteRelationship`.
 * It extracts the `deleteRelationship` field from the result and transforms it into a `DeleteRelationshipRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteRelationship - The data returned from the GraphQL server
 * @returns DeleteRelationshipRecord - The transformed data
 */
export const DeleteRelationshipOutput = ({ deleteRelationship }: DeleteRelationship) =>
  deleteRelationship &&
  ({
    ...deleteRelationship,
    relationships: deleteRelationship.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as DeleteRelationshipRecord);

/**
 * Fetcher function for `DeleteRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteRelationshipFetcher = (
  variables: DeleteRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteRelationshipOutput,
  inputFn = DeleteRelationshipInput,
) =>
  fetchWithAmplify<
    DeleteRelationship,
    DeleteRelationshipVariables,
    DeleteRelationshipRecord,
    DeleteRelationshipVariables
  >(DeleteRelationshipDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `DeleteRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteRelationship = (variables: DeleteRelationshipVariables) => DeleteRelationshipFetcher(variables)();

export const useDeleteRelationship = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<DeleteRelationshipRecord | undefined, TError, DeleteRelationshipVariables, TContext>,
) =>
  useMutation<DeleteRelationshipRecord | undefined, TError, DeleteRelationshipVariables, TContext>(
    ['DeleteRelationship'],
    (variables: DeleteRelationshipVariables) => DeleteRelationshipFetcher(variables)(),
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
export const CreateConnectorInput = (variables: CreateConnectorVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      secretCredentials:
        variables.input.secretCredentials &&
        (JSON.stringify(variables.input.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as CreateConnectorVariables);

/**
 * Output transformer function for `CreateConnector`.
 * It extracts the `createConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const CreateConnectorOutput = ({ createConnector }: CreateConnector) =>
  createConnector &&
  ({
    ...createConnector,
    secretCredentials:
      createConnector.secretCredentials &&
      (JSON.parse(createConnector.secretCredentials as any) as unknown as Scalars['AWSJSON']),
  } as Connector);

/**
 * Fetcher function for `CreateConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateConnectorFetcher = (
  variables: CreateConnectorVariables,
  options?: RequestInit['headers'],
  outputFn = CreateConnectorOutput,
  inputFn = CreateConnectorInput,
) =>
  fetchWithAmplify<CreateConnector, CreateConnectorVariables, Connector, CreateConnectorVariables>(
    CreateConnectorDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createConnector = (variables: CreateConnectorVariables) => CreateConnectorFetcher(variables)();

export const useCreateConnector = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Connector | undefined, TError, CreateConnectorVariables, TContext>,
) =>
  useMutation<Connector | undefined, TError, CreateConnectorVariables, TContext>(
    ['CreateConnector'],
    (variables: CreateConnectorVariables) => CreateConnectorFetcher(variables)(),
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
export const UpdateConnectorInput = (variables: UpdateConnectorVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      secretCredentials:
        variables.input.secretCredentials &&
        (JSON.stringify(variables.input.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as UpdateConnectorVariables);

/**
 * Output transformer function for `UpdateConnector`.
 * It extracts the `updateConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const UpdateConnectorOutput = ({ updateConnector }: UpdateConnector) =>
  updateConnector &&
  ({
    ...updateConnector,
    secretCredentials:
      updateConnector.secretCredentials &&
      (JSON.parse(updateConnector.secretCredentials as any) as unknown as Scalars['AWSJSON']),
  } as Connector);

/**
 * Fetcher function for `UpdateConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateConnectorFetcher = (
  variables: UpdateConnectorVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateConnectorOutput,
  inputFn = UpdateConnectorInput,
) =>
  fetchWithAmplify<UpdateConnector, UpdateConnectorVariables, Connector, UpdateConnectorVariables>(
    UpdateConnectorDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateConnector = (variables: UpdateConnectorVariables) => UpdateConnectorFetcher(variables)();

export const useUpdateConnector = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Connector | undefined, TError, UpdateConnectorVariables, TContext>,
) =>
  useMutation<Connector | undefined, TError, UpdateConnectorVariables, TContext>(
    ['UpdateConnector'],
    (variables: UpdateConnectorVariables) => UpdateConnectorFetcher(variables)(),
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
export const DeleteConnectorInput = (variables: DeleteConnectorVariables) => variables as DeleteConnectorVariables;

/**
 * Output transformer function for `DeleteConnector`.
 * It extracts the `deleteConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const DeleteConnectorOutput = ({ deleteConnector }: DeleteConnector) =>
  deleteConnector &&
  ({
    ...deleteConnector,
    secretCredentials:
      deleteConnector.secretCredentials &&
      (JSON.parse(deleteConnector.secretCredentials as any) as unknown as Scalars['AWSJSON']),
  } as Connector);

/**
 * Fetcher function for `DeleteConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteConnectorFetcher = (
  variables: DeleteConnectorVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteConnectorOutput,
  inputFn = DeleteConnectorInput,
) =>
  fetchWithAmplify<DeleteConnector, DeleteConnectorVariables, Connector, DeleteConnectorVariables>(
    DeleteConnectorDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteConnector = (variables: DeleteConnectorVariables) => DeleteConnectorFetcher(variables)();

export const useDeleteConnector = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Connector | undefined, TError, DeleteConnectorVariables, TContext>,
) =>
  useMutation<Connector | undefined, TError, DeleteConnectorVariables, TContext>(
    ['DeleteConnector'],
    (variables: DeleteConnectorVariables) => DeleteConnectorFetcher(variables)(),
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
export const CreateTransformationInput = (variables: CreateTransformationVariables) =>
  variables as CreateTransformationVariables;

/**
 * Output transformer function for `CreateTransformation`.
 * It extracts the `createTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const CreateTransformationOutput = ({ createTransformation }: CreateTransformation) =>
  createTransformation &&
  ({
    ...createTransformation,
    connector: {
      ...createTransformation.connector,
      secretCredentials:
        createTransformation.connector?.secretCredentials &&
        (JSON.parse(createTransformation.connector?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as Transformation);

/**
 * Fetcher function for `CreateTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateTransformationFetcher = (
  variables: CreateTransformationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateTransformationOutput,
  inputFn = CreateTransformationInput,
) =>
  fetchWithAmplify<CreateTransformation, CreateTransformationVariables, Transformation, CreateTransformationVariables>(
    CreateTransformationDocument,
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

export const useCreateTransformation = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Transformation | undefined, TError, CreateTransformationVariables, TContext>,
) =>
  useMutation<Transformation | undefined, TError, CreateTransformationVariables, TContext>(
    ['CreateTransformation'],
    (variables: CreateTransformationVariables) => CreateTransformationFetcher(variables)(),
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
export const UpdateTransformationInput = (variables: UpdateTransformationVariables) =>
  variables as UpdateTransformationVariables;

/**
 * Output transformer function for `UpdateTransformation`.
 * It extracts the `updateTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const UpdateTransformationOutput = ({ updateTransformation }: UpdateTransformation) =>
  updateTransformation &&
  ({
    ...updateTransformation,
    connector: {
      ...updateTransformation.connector,
      secretCredentials:
        updateTransformation.connector?.secretCredentials &&
        (JSON.parse(updateTransformation.connector?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as Transformation);

/**
 * Fetcher function for `UpdateTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateTransformationFetcher = (
  variables: UpdateTransformationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateTransformationOutput,
  inputFn = UpdateTransformationInput,
) =>
  fetchWithAmplify<UpdateTransformation, UpdateTransformationVariables, Transformation, UpdateTransformationVariables>(
    UpdateTransformationDocument,
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

export const useUpdateTransformation = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Transformation | undefined, TError, UpdateTransformationVariables, TContext>,
) =>
  useMutation<Transformation | undefined, TError, UpdateTransformationVariables, TContext>(
    ['UpdateTransformation'],
    (variables: UpdateTransformationVariables) => UpdateTransformationFetcher(variables)(),
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
export const DeleteTransformationInput = (variables: DeleteTransformationVariables) =>
  variables as DeleteTransformationVariables;

/**
 * Output transformer function for `DeleteTransformation`.
 * It extracts the `deleteTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const DeleteTransformationOutput = ({ deleteTransformation }: DeleteTransformation) =>
  deleteTransformation &&
  ({
    ...deleteTransformation,
    connector: {
      ...deleteTransformation.connector,
      secretCredentials:
        deleteTransformation.connector?.secretCredentials &&
        (JSON.parse(deleteTransformation.connector?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as Transformation);

/**
 * Fetcher function for `DeleteTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteTransformationFetcher = (
  variables: DeleteTransformationVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteTransformationOutput,
  inputFn = DeleteTransformationInput,
) =>
  fetchWithAmplify<DeleteTransformation, DeleteTransformationVariables, Transformation, DeleteTransformationVariables>(
    DeleteTransformationDocument,
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

export const useDeleteTransformation = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Transformation | undefined, TError, DeleteTransformationVariables, TContext>,
) =>
  useMutation<Transformation | undefined, TError, DeleteTransformationVariables, TContext>(
    ['DeleteTransformation'],
    (variables: DeleteTransformationVariables) => DeleteTransformationFetcher(variables)(),
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
export const CreatePerspectiveInput = (variables: CreatePerspectiveVariables) =>
  variables as CreatePerspectiveVariables;

/**
 * Output transformer function for `CreatePerspective`.
 * It extracts the `createPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreatePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const CreatePerspectiveOutput = ({ createPerspective }: CreatePerspective) => createPerspective as Perspective;

/**
 * Fetcher function for `CreatePerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreatePerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreatePerspectiveFetcher = (
  variables: CreatePerspectiveVariables,
  options?: RequestInit['headers'],
  outputFn = CreatePerspectiveOutput,
  inputFn = CreatePerspectiveInput,
) =>
  fetchWithAmplify<CreatePerspective, CreatePerspectiveVariables, Perspective, CreatePerspectiveVariables>(
    CreatePerspectiveDocument,
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

export const useCreatePerspective = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Perspective | undefined, TError, CreatePerspectiveVariables, TContext>,
) =>
  useMutation<Perspective | undefined, TError, CreatePerspectiveVariables, TContext>(
    ['CreatePerspective'],
    (variables: CreatePerspectiveVariables) => CreatePerspectiveFetcher(variables)(),
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
export const UpdatePerspectiveInput = (variables: UpdatePerspectiveVariables) =>
  variables as UpdatePerspectiveVariables;

/**
 * Output transformer function for `UpdatePerspective`.
 * It extracts the `updatePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdatePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const UpdatePerspectiveOutput = ({ updatePerspective }: UpdatePerspective) => updatePerspective as Perspective;

/**
 * Fetcher function for `UpdatePerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdatePerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdatePerspectiveFetcher = (
  variables: UpdatePerspectiveVariables,
  options?: RequestInit['headers'],
  outputFn = UpdatePerspectiveOutput,
  inputFn = UpdatePerspectiveInput,
) =>
  fetchWithAmplify<UpdatePerspective, UpdatePerspectiveVariables, Perspective, UpdatePerspectiveVariables>(
    UpdatePerspectiveDocument,
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

export const useUpdatePerspective = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Perspective | undefined, TError, UpdatePerspectiveVariables, TContext>,
) =>
  useMutation<Perspective | undefined, TError, UpdatePerspectiveVariables, TContext>(
    ['UpdatePerspective'],
    (variables: UpdatePerspectiveVariables) => UpdatePerspectiveFetcher(variables)(),
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
export const DeletePerspectiveInput = (variables: DeletePerspectiveVariables) =>
  variables as DeletePerspectiveVariables;

/**
 * Output transformer function for `DeletePerspective`.
 * It extracts the `deletePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeletePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const DeletePerspectiveOutput = ({ deletePerspective }: DeletePerspective) => deletePerspective as Perspective;

/**
 * Fetcher function for `DeletePerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeletePerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeletePerspectiveFetcher = (
  variables: DeletePerspectiveVariables,
  options?: RequestInit['headers'],
  outputFn = DeletePerspectiveOutput,
  inputFn = DeletePerspectiveInput,
) =>
  fetchWithAmplify<DeletePerspective, DeletePerspectiveVariables, Perspective, DeletePerspectiveVariables>(
    DeletePerspectiveDocument,
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

export const useDeletePerspective = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Perspective | undefined, TError, DeletePerspectiveVariables, TContext>,
) =>
  useMutation<Perspective | undefined, TError, DeletePerspectiveVariables, TContext>(
    ['DeletePerspective'],
    (variables: DeletePerspectiveVariables) => DeletePerspectiveFetcher(variables)(),
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
export const CreateSchemaInput = (variables: CreateSchemaVariables) => variables as CreateSchemaVariables;

/**
 * Output transformer function for `CreateSchema`.
 * It extracts the `createSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const CreateSchemaOutput = ({ createSchema }: CreateSchema) => createSchema as Schema;

/**
 * Fetcher function for `CreateSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateSchemaFetcher = (
  variables: CreateSchemaVariables,
  options?: RequestInit['headers'],
  outputFn = CreateSchemaOutput,
  inputFn = CreateSchemaInput,
) =>
  fetchWithAmplify<CreateSchema, CreateSchemaVariables, Schema, CreateSchemaVariables>(
    CreateSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createSchema = (variables: CreateSchemaVariables) => CreateSchemaFetcher(variables)();

export const useCreateSchema = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Schema | undefined, TError, CreateSchemaVariables, TContext>,
) =>
  useMutation<Schema | undefined, TError, CreateSchemaVariables, TContext>(
    ['CreateSchema'],
    (variables: CreateSchemaVariables) => CreateSchemaFetcher(variables)(),
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
export const UpdateSchemaInput = (variables: UpdateSchemaVariables) => variables as UpdateSchemaVariables;

/**
 * Output transformer function for `UpdateSchema`.
 * It extracts the `updateSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const UpdateSchemaOutput = ({ updateSchema }: UpdateSchema) => updateSchema as Schema;

/**
 * Fetcher function for `UpdateSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateSchemaFetcher = (
  variables: UpdateSchemaVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateSchemaOutput,
  inputFn = UpdateSchemaInput,
) =>
  fetchWithAmplify<UpdateSchema, UpdateSchemaVariables, Schema, UpdateSchemaVariables>(
    UpdateSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateSchema = (variables: UpdateSchemaVariables) => UpdateSchemaFetcher(variables)();

export const useUpdateSchema = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Schema | undefined, TError, UpdateSchemaVariables, TContext>,
) =>
  useMutation<Schema | undefined, TError, UpdateSchemaVariables, TContext>(
    ['UpdateSchema'],
    (variables: UpdateSchemaVariables) => UpdateSchemaFetcher(variables)(),
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
export const DeleteSchemaInput = (variables: DeleteSchemaVariables) => variables as DeleteSchemaVariables;

/**
 * Output transformer function for `DeleteSchema`.
 * It extracts the `deleteSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const DeleteSchemaOutput = ({ deleteSchema }: DeleteSchema) => deleteSchema as Schema;

/**
 * Fetcher function for `DeleteSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteSchemaFetcher = (
  variables: DeleteSchemaVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteSchemaOutput,
  inputFn = DeleteSchemaInput,
) =>
  fetchWithAmplify<DeleteSchema, DeleteSchemaVariables, Schema, DeleteSchemaVariables>(
    DeleteSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteSchema = (variables: DeleteSchemaVariables) => DeleteSchemaFetcher(variables)();

export const useDeleteSchema = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Schema | undefined, TError, DeleteSchemaVariables, TContext>,
) =>
  useMutation<Schema | undefined, TError, DeleteSchemaVariables, TContext>(
    ['DeleteSchema'],
    (variables: DeleteSchemaVariables) => DeleteSchemaFetcher(variables)(),
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
 * Key maker function for `CreateTest`.
 */
export const CreateTestKeys = () => ['CreateTest'];

/**
 * Input transformer function for `CreateTest`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateTestVariables` - The original variables
 * @returns `CreateTestVariables` - The transformed variables
 */
export const CreateTestInput = (variables: CreateTestVariables) => variables as CreateTestVariables;

/**
 * Output transformer function for `CreateTest`.
 * It extracts the `createTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const CreateTestOutput = ({ createTest }: CreateTest) => createTest as Test;

/**
 * Fetcher function for `CreateTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateTestFetcher = (
  variables: CreateTestVariables,
  options?: RequestInit['headers'],
  outputFn = CreateTestOutput,
  inputFn = CreateTestInput,
) =>
  fetchWithAmplify<CreateTest, CreateTestVariables, Test, CreateTestVariables>(
    CreateTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateTest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createTest = (variables: CreateTestVariables) => CreateTestFetcher(variables)();

export const useCreateTest = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Test | undefined, TError, CreateTestVariables, TContext>,
) =>
  useMutation<Test | undefined, TError, CreateTestVariables, TContext>(
    ['CreateTest'],
    (variables: CreateTestVariables) => CreateTestFetcher(variables)(),
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
 * Key maker function for `UpdateTest`.
 */
export const UpdateTestKeys = () => ['UpdateTest'];

/**
 * Input transformer function for `UpdateTest`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateTestVariables` - The original variables
 * @returns `UpdateTestVariables` - The transformed variables
 */
export const UpdateTestInput = (variables: UpdateTestVariables) => variables as UpdateTestVariables;

/**
 * Output transformer function for `UpdateTest`.
 * It extracts the `updateTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const UpdateTestOutput = ({ updateTest }: UpdateTest) => updateTest as Test;

/**
 * Fetcher function for `UpdateTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateTestFetcher = (
  variables: UpdateTestVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateTestOutput,
  inputFn = UpdateTestInput,
) =>
  fetchWithAmplify<UpdateTest, UpdateTestVariables, Test, UpdateTestVariables>(
    UpdateTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateTest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateTest = (variables: UpdateTestVariables) => UpdateTestFetcher(variables)();

export const useUpdateTest = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Test | undefined, TError, UpdateTestVariables, TContext>,
) =>
  useMutation<Test | undefined, TError, UpdateTestVariables, TContext>(
    ['UpdateTest'],
    (variables: UpdateTestVariables) => UpdateTestFetcher(variables)(),
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
 * Key maker function for `DeleteTest`.
 */
export const DeleteTestKeys = () => ['DeleteTest'];

/**
 * Input transformer function for `DeleteTest`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `DeleteTestVariables` - The original variables
 * @returns `DeleteTestVariables` - The transformed variables
 */
export const DeleteTestInput = (variables: DeleteTestVariables) => variables as DeleteTestVariables;

/**
 * Output transformer function for `DeleteTest`.
 * It extracts the `deleteTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const DeleteTestOutput = ({ deleteTest }: DeleteTest) => deleteTest as Test;

/**
 * Fetcher function for `DeleteTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteTestFetcher = (
  variables: DeleteTestVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteTestOutput,
  inputFn = DeleteTestInput,
) =>
  fetchWithAmplify<DeleteTest, DeleteTestVariables, Test, DeleteTestVariables>(
    DeleteTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteTest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteTest = (variables: DeleteTestVariables) => DeleteTestFetcher(variables)();

export const useDeleteTest = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Test | undefined, TError, DeleteTestVariables, TContext>,
) =>
  useMutation<Test | undefined, TError, DeleteTestVariables, TContext>(
    ['DeleteTest'],
    (variables: DeleteTestVariables) => DeleteTestFetcher(variables)(),
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
 * Key maker function for `CreateOrganization`.
 */
export const CreateOrganizationKeys = () => ['CreateOrganization'];

/**
 * Input transformer function for `CreateOrganization`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CreateOrganizationVariables` - The original variables
 * @returns `CreateOrganizationVariables` - The transformed variables
 */
export const CreateOrganizationInput = (variables: CreateOrganizationVariables) =>
  variables as CreateOrganizationVariables;

/**
 * Output transformer function for `CreateOrganization`.
 * It extracts the `createOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateOrganization - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const CreateOrganizationOutput = ({ createOrganization }: CreateOrganization) =>
  createOrganization as Organization;

/**
 * Fetcher function for `CreateOrganization`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateOrganizationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateOrganizationFetcher = (
  variables: CreateOrganizationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateOrganizationOutput,
  inputFn = CreateOrganizationInput,
) =>
  fetchWithAmplify<CreateOrganization, CreateOrganizationVariables, Organization, CreateOrganizationVariables>(
    CreateOrganizationDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateOrganization`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createOrganization = (variables: CreateOrganizationVariables) => CreateOrganizationFetcher(variables)();

export const useCreateOrganization = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Organization | undefined, TError, CreateOrganizationVariables, TContext>,
) =>
  useMutation<Organization | undefined, TError, CreateOrganizationVariables, TContext>(
    ['CreateOrganization'],
    (variables: CreateOrganizationVariables) => CreateOrganizationFetcher(variables)(),
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
 * Key maker function for `UpdateOrganization`.
 */
export const UpdateOrganizationKeys = () => ['UpdateOrganization'];

/**
 * Input transformer function for `UpdateOrganization`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `UpdateOrganizationVariables` - The original variables
 * @returns `UpdateOrganizationVariables` - The transformed variables
 */
export const UpdateOrganizationInput = (variables: UpdateOrganizationVariables) =>
  variables as UpdateOrganizationVariables;

/**
 * Output transformer function for `UpdateOrganization`.
 * It extracts the `updateOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateOrganization - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const UpdateOrganizationOutput = ({ updateOrganization }: UpdateOrganization) =>
  updateOrganization as Organization;

/**
 * Fetcher function for `UpdateOrganization`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateOrganizationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateOrganizationFetcher = (
  variables: UpdateOrganizationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateOrganizationOutput,
  inputFn = UpdateOrganizationInput,
) =>
  fetchWithAmplify<UpdateOrganization, UpdateOrganizationVariables, Organization, UpdateOrganizationVariables>(
    UpdateOrganizationDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateOrganization`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateOrganization = (variables: UpdateOrganizationVariables) => UpdateOrganizationFetcher(variables)();

export const useUpdateOrganization = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<Organization | undefined, TError, UpdateOrganizationVariables, TContext>,
) =>
  useMutation<Organization | undefined, TError, UpdateOrganizationVariables, TContext>(
    ['UpdateOrganization'],
    (variables: UpdateOrganizationVariables) => UpdateOrganizationFetcher(variables)(),
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
export const RunPerspectiveInput = (variables: RunPerspectiveVariables) => variables as RunPerspectiveVariables;

/**
 * Output transformer function for `RunPerspective`.
 * It extracts the `runPerspective` field from the result and transforms it into a `RunPerspectiveResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data RunPerspective - The data returned from the GraphQL server
 * @returns RunPerspectiveResult - The transformed data
 */
export const RunPerspectiveOutput = ({ runPerspective }: RunPerspective) =>
  runPerspective &&
  ({
    ...runPerspective,
    records: runPerspective.records && (JSON.parse(runPerspective.records as any) as unknown as Scalars['AWSJSON']),
  } as RunPerspectiveResult);

/**
 * Fetcher function for `RunPerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `RunPerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const RunPerspectiveFetcher = (
  variables: RunPerspectiveVariables,
  options?: RequestInit['headers'],
  outputFn = RunPerspectiveOutput,
  inputFn = RunPerspectiveInput,
) =>
  fetchWithAmplify<RunPerspective, RunPerspectiveVariables, RunPerspectiveResult, RunPerspectiveVariables>(
    RunPerspectiveDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `RunPerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const runPerspective = (variables: RunPerspectiveVariables) => RunPerspectiveFetcher(variables)();

export const useRunPerspective = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<RunPerspectiveResult | undefined, TError, RunPerspectiveVariables, TContext>,
) =>
  useMutation<RunPerspectiveResult | undefined, TError, RunPerspectiveVariables, TContext>(
    ['RunPerspective'],
    (variables: RunPerspectiveVariables) => RunPerspectiveFetcher(variables)(),
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
export const CreateUserInput = (variables: CreateUserVariables) => variables as CreateUserVariables;

/**
 * Output transformer function for `CreateUser`.
 * It extracts the `createUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const CreateUserOutput = ({ createUser }: CreateUser) =>
  createUser &&
  ({
    ...createUser,
    attributes: createUser.attributes && (JSON.parse(createUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as CognitoUser);

/**
 * Fetcher function for `CreateUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CreateUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CreateUserFetcher = (
  variables: CreateUserVariables,
  options?: RequestInit['headers'],
  outputFn = CreateUserOutput,
  inputFn = CreateUserInput,
) =>
  fetchWithAmplify<CreateUser, CreateUserVariables, CognitoUser, CreateUserVariables>(
    CreateUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CreateUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const createUser = (variables: CreateUserVariables) => CreateUserFetcher(variables)();

export const useCreateUser = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<CognitoUser | undefined, TError, CreateUserVariables, TContext>,
) =>
  useMutation<CognitoUser | undefined, TError, CreateUserVariables, TContext>(
    ['CreateUser'],
    (variables: CreateUserVariables) => CreateUserFetcher(variables)(),
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
export const UpdateUserInput = (variables: UpdateUserVariables) => variables as UpdateUserVariables;

/**
 * Output transformer function for `UpdateUser`.
 * It extracts the `updateUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const UpdateUserOutput = ({ updateUser }: UpdateUser) =>
  updateUser &&
  ({
    ...updateUser,
    attributes: updateUser.attributes && (JSON.parse(updateUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as CognitoUser);

/**
 * Fetcher function for `UpdateUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `UpdateUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const UpdateUserFetcher = (
  variables: UpdateUserVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateUserOutput,
  inputFn = UpdateUserInput,
) =>
  fetchWithAmplify<UpdateUser, UpdateUserVariables, CognitoUser, UpdateUserVariables>(
    UpdateUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `UpdateUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const updateUser = (variables: UpdateUserVariables) => UpdateUserFetcher(variables)();

export const useUpdateUser = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<CognitoUser | undefined, TError, UpdateUserVariables, TContext>,
) =>
  useMutation<CognitoUser | undefined, TError, UpdateUserVariables, TContext>(
    ['UpdateUser'],
    (variables: UpdateUserVariables) => UpdateUserFetcher(variables)(),
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
export const DeleteUserInput = (variables: DeleteUserVariables) => variables as DeleteUserVariables;

/**
 * Output transformer function for `DeleteUser`.
 * It extracts the `deleteUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const DeleteUserOutput = ({ deleteUser }: DeleteUser) =>
  deleteUser &&
  ({
    ...deleteUser,
    attributes: deleteUser.attributes && (JSON.parse(deleteUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as CognitoUser);

/**
 * Fetcher function for `DeleteUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `DeleteUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const DeleteUserFetcher = (
  variables: DeleteUserVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteUserOutput,
  inputFn = DeleteUserInput,
) =>
  fetchWithAmplify<DeleteUser, DeleteUserVariables, CognitoUser, DeleteUserVariables>(
    DeleteUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `DeleteUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const deleteUser = (variables: DeleteUserVariables) => DeleteUserFetcher(variables)();

export const useDeleteUser = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<CognitoUser | undefined, TError, DeleteUserVariables, TContext>,
) =>
  useMutation<CognitoUser | undefined, TError, DeleteUserVariables, TContext>(
    ['DeleteUser'],
    (variables: DeleteUserVariables) => DeleteUserFetcher(variables)(),
    options,
  );

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
export const EmptyQueryInput = (variables?: EmptyQueryVariables) => variables as EmptyQueryVariables;

/**
 * Output transformer function for `EmptyQuery`.
 * It extracts the `emptyQuery` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyQuery - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EmptyQueryOutput = ({ emptyQuery }: EmptyQuery) => emptyQuery as Scalars['String'];

/**
 * Fetcher function for `EmptyQuery`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `EmptyQueryOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const EmptyQueryFetcher = (
  variables?: EmptyQueryVariables,
  options?: RequestInit['headers'],
  outputFn = EmptyQueryOutput,
  inputFn = EmptyQueryInput,
) =>
  fetchWithAmplify<EmptyQuery, EmptyQueryVariables, Scalars['String'], EmptyQueryVariables>(
    EmptyQueryDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `EmptyQuery`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const emptyQuery = (variables?: EmptyQueryVariables) => EmptyQueryFetcher(variables)();

export const useEmptyQuery = <TData = Scalars['String'] | undefined, TError = undefined>(
  variables?: EmptyQueryVariables,
  options?: UseQueryOptions<Scalars['String'] | undefined, TError, TData>,
) =>
  useQuery<Scalars['String'] | undefined, TError, TData>(
    variables === undefined ? ['EmptyQuery'] : ['EmptyQuery', variables],
    EmptyQueryFetcher(variables),
    options,
  );

useEmptyQuery.getKey = EmptyQueryKeys;

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
export const EchoInput = (variables?: EchoVariables) => variables as EchoVariables;

/**
 * Output transformer function for `Echo`.
 * It extracts the `echo` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data Echo - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EchoOutput = ({ echo }: Echo) => echo as Scalars['String'];

/**
 * Fetcher function for `Echo`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `EchoOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const EchoFetcher = (
  variables?: EchoVariables,
  options?: RequestInit['headers'],
  outputFn = EchoOutput,
  inputFn = EchoInput,
) =>
  fetchWithAmplify<Echo, EchoVariables, Scalars['String'], EchoVariables>(
    EchoDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `Echo`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const echo = (variables?: EchoVariables) => EchoFetcher(variables)();

export const useEcho = <TData = Scalars['String'] | undefined, TError = undefined>(
  variables?: EchoVariables,
  options?: UseQueryOptions<Scalars['String'] | undefined, TError, TData>,
) =>
  useQuery<Scalars['String'] | undefined, TError, TData>(
    variables === undefined ? ['Echo'] : ['Echo', variables],
    EchoFetcher(variables),
    options,
  );

useEcho.getKey = EchoKeys;

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
 * Key maker function for `CustomTest`.
 */
export const CustomTestKeys = (variables: CustomTestVariables) => ['CustomTest', variables];

/**
 * Input transformer function for `CustomTest`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `CustomTestVariables` - The original variables
 * @returns `CustomTestVariables` - The transformed variables
 */
export const CustomTestInput = (variables: CustomTestVariables) => variables as CustomTestVariables;

/**
 * Output transformer function for `CustomTest`.
 * It extracts the `customTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CustomTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const CustomTestOutput = ({ customTest }: CustomTest) => customTest as Test;

/**
 * Fetcher function for `CustomTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `CustomTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const CustomTestFetcher = (
  variables: CustomTestVariables,
  options?: RequestInit['headers'],
  outputFn = CustomTestOutput,
  inputFn = CustomTestInput,
) =>
  fetchWithAmplify<CustomTest, CustomTestVariables, Test, CustomTestVariables>(
    CustomTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `CustomTest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const customTest = (variables: CustomTestVariables) => CustomTestFetcher(variables)();

export const useCustomTest = <TData = Test | undefined, TError = undefined>(
  variables: CustomTestVariables,
  options?: UseQueryOptions<Test | undefined, TError, TData>,
) => useQuery<Test | undefined, TError, TData>(['CustomTest', variables], CustomTestFetcher(variables), options);

useCustomTest.getKey = CustomTestKeys;

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
 * Key maker function for `GetConnectorManifest`.
 */
export const GetConnectorManifestKeys = (variables: GetConnectorManifestVariables) => [
  'GetConnectorManifest',
  variables,
];

/**
 * Input transformer function for `GetConnectorManifest`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorManifestVariables` - The original variables
 * @returns `GetConnectorManifestVariables` - The transformed variables
 */
export const GetConnectorManifestInput = (variables: GetConnectorManifestVariables) =>
  variables as GetConnectorManifestVariables;

/**
 * Output transformer function for `GetConnectorManifest`.
 * It extracts the `getConnectorManifest` field from the result and transforms it into a `ConnectorManifest` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorManifest - The data returned from the GraphQL server
 * @returns ConnectorManifest - The transformed data
 */
export const GetConnectorManifestOutput = ({ getConnectorManifest }: GetConnectorManifest) =>
  getConnectorManifest as ConnectorManifest;

/**
 * Fetcher function for `GetConnectorManifest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetConnectorManifestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetConnectorManifestFetcher = (
  variables: GetConnectorManifestVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorManifestOutput,
  inputFn = GetConnectorManifestInput,
) =>
  fetchWithAmplify<
    GetConnectorManifest,
    GetConnectorManifestVariables,
    ConnectorManifest,
    GetConnectorManifestVariables
  >(GetConnectorManifestDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetConnectorManifest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getConnectorManifest = (variables: GetConnectorManifestVariables) =>
  GetConnectorManifestFetcher(variables)();

export const useGetConnectorManifest = <TData = ConnectorManifest | undefined, TError = undefined>(
  variables: GetConnectorManifestVariables,
  options?: UseQueryOptions<ConnectorManifest | undefined, TError, TData>,
) =>
  useQuery<ConnectorManifest | undefined, TError, TData>(
    ['GetConnectorManifest', variables],
    GetConnectorManifestFetcher(variables),
    options,
  );

useGetConnectorManifest.getKey = GetConnectorManifestKeys;

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
export const GetConnectorInput = (variables: GetConnectorVariables) => variables as GetConnectorVariables;

/**
 * Output transformer function for `GetConnector`.
 * It extracts the `getConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const GetConnectorOutput = ({ getConnector }: GetConnector) =>
  getConnector &&
  ({
    ...getConnector,
    secretCredentials:
      getConnector.secretCredentials &&
      (JSON.parse(getConnector.secretCredentials as any) as unknown as Scalars['AWSJSON']),
  } as Connector);

/**
 * Fetcher function for `GetConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetConnectorFetcher = (
  variables: GetConnectorVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorOutput,
  inputFn = GetConnectorInput,
) =>
  fetchWithAmplify<GetConnector, GetConnectorVariables, Connector, GetConnectorVariables>(
    GetConnectorDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getConnector = (variables: GetConnectorVariables) => GetConnectorFetcher(variables)();

export const useGetConnector = <TData = Connector | undefined, TError = undefined>(
  variables: GetConnectorVariables,
  options?: UseQueryOptions<Connector | undefined, TError, TData>,
) =>
  useQuery<Connector | undefined, TError, TData>(['GetConnector', variables], GetConnectorFetcher(variables), options);

useGetConnector.getKey = GetConnectorKeys;

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
export const ListConnectorsInput = (variables?: ListConnectorsVariables) => variables as ListConnectorsVariables;

/**
 * Output transformer function for `ListConnectors`.
 * It extracts the `listConnectors` field from the result and transforms it into a `ModelConnectorConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListConnectors - The data returned from the GraphQL server
 * @returns ModelConnectorConnection - The transformed data
 */
export const ListConnectorsOutput = ({ listConnectors }: ListConnectors) =>
  listConnectors &&
  ({
    ...listConnectors,
    items: listConnectors.items?.map((item) => ({
      ...item,
      secretCredentials:
        item?.secretCredentials && (JSON.parse(item?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    })),
  } as ModelConnectorConnection);

/**
 * Fetcher function for `ListConnectors`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListConnectorsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListConnectorsFetcher = (
  variables?: ListConnectorsVariables,
  options?: RequestInit['headers'],
  outputFn = ListConnectorsOutput,
  inputFn = ListConnectorsInput,
) =>
  fetchWithAmplify<ListConnectors, ListConnectorsVariables, ModelConnectorConnection, ListConnectorsVariables>(
    ListConnectorsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListConnectors`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listConnectors = (variables?: ListConnectorsVariables) => ListConnectorsFetcher(variables)();

export const useListConnectors = <TData = ModelConnectorConnection | undefined, TError = undefined>(
  variables?: ListConnectorsVariables,
  options?: UseQueryOptions<ModelConnectorConnection | undefined, TError, TData>,
) =>
  useQuery<ModelConnectorConnection | undefined, TError, TData>(
    variables === undefined ? ['ListConnectors'] : ['ListConnectors', variables],
    ListConnectorsFetcher(variables),
    options,
  );

useListConnectors.getKey = ListConnectorsKeys;

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
 * Key maker function for `GetConnectorBySource`.
 */
export const GetConnectorBySourceKeys = (variables: GetConnectorBySourceVariables) => [
  'GetConnectorBySource',
  variables,
];

/**
 * Input transformer function for `GetConnectorBySource`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorBySourceVariables` - The original variables
 * @returns `GetConnectorBySourceVariables` - The transformed variables
 */
export const GetConnectorBySourceInput = (variables: GetConnectorBySourceVariables) =>
  variables as GetConnectorBySourceVariables;

/**
 * Output transformer function for `GetConnectorBySource`.
 * It extracts the `getConnectorBySource` field from the result and transforms it into a `ModelConnectorConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorBySource - The data returned from the GraphQL server
 * @returns ModelConnectorConnection - The transformed data
 */
export const GetConnectorBySourceOutput = ({ getConnectorBySource }: GetConnectorBySource) =>
  getConnectorBySource &&
  ({
    ...getConnectorBySource,
    items: getConnectorBySource.items?.map((item) => ({
      ...item,
      secretCredentials:
        item?.secretCredentials && (JSON.parse(item?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    })),
  } as ModelConnectorConnection);

/**
 * Fetcher function for `GetConnectorBySource`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetConnectorBySourceOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetConnectorBySourceFetcher = (
  variables: GetConnectorBySourceVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorBySourceOutput,
  inputFn = GetConnectorBySourceInput,
) =>
  fetchWithAmplify<
    GetConnectorBySource,
    GetConnectorBySourceVariables,
    ModelConnectorConnection,
    GetConnectorBySourceVariables
  >(GetConnectorBySourceDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetConnectorBySource`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getConnectorBySource = (variables: GetConnectorBySourceVariables) =>
  GetConnectorBySourceFetcher(variables)();

export const useGetConnectorBySource = <TData = ModelConnectorConnection | undefined, TError = undefined>(
  variables: GetConnectorBySourceVariables,
  options?: UseQueryOptions<ModelConnectorConnection | undefined, TError, TData>,
) =>
  useQuery<ModelConnectorConnection | undefined, TError, TData>(
    ['GetConnectorBySource', variables],
    GetConnectorBySourceFetcher(variables),
    options,
  );

useGetConnectorBySource.getKey = GetConnectorBySourceKeys;

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
export const GetTransformationInput = (variables: GetTransformationVariables) =>
  variables as GetTransformationVariables;

/**
 * Output transformer function for `GetTransformation`.
 * It extracts the `getTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const GetTransformationOutput = ({ getTransformation }: GetTransformation) =>
  getTransformation &&
  ({
    ...getTransformation,
    connector: {
      ...getTransformation.connector,
      secretCredentials:
        getTransformation.connector?.secretCredentials &&
        (JSON.parse(getTransformation.connector?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as Transformation);

/**
 * Fetcher function for `GetTransformation`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetTransformationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetTransformationFetcher = (
  variables: GetTransformationVariables,
  options?: RequestInit['headers'],
  outputFn = GetTransformationOutput,
  inputFn = GetTransformationInput,
) =>
  fetchWithAmplify<GetTransformation, GetTransformationVariables, Transformation, GetTransformationVariables>(
    GetTransformationDocument,
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

export const useGetTransformation = <TData = Transformation | undefined, TError = undefined>(
  variables: GetTransformationVariables,
  options?: UseQueryOptions<Transformation | undefined, TError, TData>,
) =>
  useQuery<Transformation | undefined, TError, TData>(
    ['GetTransformation', variables],
    GetTransformationFetcher(variables),
    options,
  );

useGetTransformation.getKey = GetTransformationKeys;

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
export const ListTransformationsInput = (variables?: ListTransformationsVariables) =>
  variables as ListTransformationsVariables;

/**
 * Output transformer function for `ListTransformations`.
 * It extracts the `listTransformations` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTransformations - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const ListTransformationsOutput = ({ listTransformations }: ListTransformations) =>
  listTransformations &&
  ({
    ...listTransformations,
    items: listTransformations.items?.map((item) => ({
      ...item,
      connector: {
        ...item?.connector,
        secretCredentials:
          item?.connector?.secretCredentials &&
          (JSON.parse(item?.connector?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
      },
    })),
  } as ModelTransformationConnection);

/**
 * Fetcher function for `ListTransformations`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListTransformationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListTransformationsFetcher = (
  variables?: ListTransformationsVariables,
  options?: RequestInit['headers'],
  outputFn = ListTransformationsOutput,
  inputFn = ListTransformationsInput,
) =>
  fetchWithAmplify<
    ListTransformations,
    ListTransformationsVariables,
    ModelTransformationConnection,
    ListTransformationsVariables
  >(ListTransformationsDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListTransformations`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listTransformations = (variables?: ListTransformationsVariables) =>
  ListTransformationsFetcher(variables)();

export const useListTransformations = <TData = ModelTransformationConnection | undefined, TError = undefined>(
  variables?: ListTransformationsVariables,
  options?: UseQueryOptions<ModelTransformationConnection | undefined, TError, TData>,
) =>
  useQuery<ModelTransformationConnection | undefined, TError, TData>(
    variables === undefined ? ['ListTransformations'] : ['ListTransformations', variables],
    ListTransformationsFetcher(variables),
    options,
  );

useListTransformations.getKey = ListTransformationsKeys;

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
 * Key maker function for `GetTransformationsByConnector`.
 */
export const GetTransformationsByConnectorKeys = (variables: GetTransformationsByConnectorVariables) => [
  'GetTransformationsByConnector',
  variables,
];

/**
 * Input transformer function for `GetTransformationsByConnector`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetTransformationsByConnectorVariables` - The original variables
 * @returns `GetTransformationsByConnectorVariables` - The transformed variables
 */
export const GetTransformationsByConnectorInput = (variables: GetTransformationsByConnectorVariables) =>
  variables as GetTransformationsByConnectorVariables;

/**
 * Output transformer function for `GetTransformationsByConnector`.
 * It extracts the `getTransformationsByConnector` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTransformationsByConnector - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const GetTransformationsByConnectorOutput = ({ getTransformationsByConnector }: GetTransformationsByConnector) =>
  getTransformationsByConnector &&
  ({
    ...getTransformationsByConnector,
    items: getTransformationsByConnector.items?.map((item) => ({
      ...item,
      connector: {
        ...item?.connector,
        secretCredentials:
          item?.connector?.secretCredentials &&
          (JSON.parse(item?.connector?.secretCredentials as any) as unknown as Scalars['AWSJSON']),
      },
    })),
  } as ModelTransformationConnection);

/**
 * Fetcher function for `GetTransformationsByConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetTransformationsByConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetTransformationsByConnectorFetcher = (
  variables: GetTransformationsByConnectorVariables,
  options?: RequestInit['headers'],
  outputFn = GetTransformationsByConnectorOutput,
  inputFn = GetTransformationsByConnectorInput,
) =>
  fetchWithAmplify<
    GetTransformationsByConnector,
    GetTransformationsByConnectorVariables,
    ModelTransformationConnection,
    GetTransformationsByConnectorVariables
  >(GetTransformationsByConnectorDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetTransformationsByConnector`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getTransformationsByConnector = (variables: GetTransformationsByConnectorVariables) =>
  GetTransformationsByConnectorFetcher(variables)();

export const useGetTransformationsByConnector = <TData = ModelTransformationConnection | undefined, TError = undefined>(
  variables: GetTransformationsByConnectorVariables,
  options?: UseQueryOptions<ModelTransformationConnection | undefined, TError, TData>,
) =>
  useQuery<ModelTransformationConnection | undefined, TError, TData>(
    ['GetTransformationsByConnector', variables],
    GetTransformationsByConnectorFetcher(variables),
    options,
  );

useGetTransformationsByConnector.getKey = GetTransformationsByConnectorKeys;

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
export const GetPerspectiveInput = (variables: GetPerspectiveVariables) => variables as GetPerspectiveVariables;

/**
 * Output transformer function for `GetPerspective`.
 * It extracts the `getPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetPerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const GetPerspectiveOutput = ({ getPerspective }: GetPerspective) => getPerspective as Perspective;

/**
 * Fetcher function for `GetPerspective`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetPerspectiveOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetPerspectiveFetcher = (
  variables: GetPerspectiveVariables,
  options?: RequestInit['headers'],
  outputFn = GetPerspectiveOutput,
  inputFn = GetPerspectiveInput,
) =>
  fetchWithAmplify<GetPerspective, GetPerspectiveVariables, Perspective, GetPerspectiveVariables>(
    GetPerspectiveDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetPerspective`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getPerspective = (variables: GetPerspectiveVariables) => GetPerspectiveFetcher(variables)();

export const useGetPerspective = <TData = Perspective | undefined, TError = undefined>(
  variables: GetPerspectiveVariables,
  options?: UseQueryOptions<Perspective | undefined, TError, TData>,
) =>
  useQuery<Perspective | undefined, TError, TData>(
    ['GetPerspective', variables],
    GetPerspectiveFetcher(variables),
    options,
  );

useGetPerspective.getKey = GetPerspectiveKeys;

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
export const ListPerspectivesInput = (variables?: ListPerspectivesVariables) => variables as ListPerspectivesVariables;

/**
 * Output transformer function for `ListPerspectives`.
 * It extracts the `listPerspectives` field from the result and transforms it into a `ModelPerspectiveConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListPerspectives - The data returned from the GraphQL server
 * @returns ModelPerspectiveConnection - The transformed data
 */
export const ListPerspectivesOutput = ({ listPerspectives }: ListPerspectives) =>
  listPerspectives as ModelPerspectiveConnection;

/**
 * Fetcher function for `ListPerspectives`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListPerspectivesOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListPerspectivesFetcher = (
  variables?: ListPerspectivesVariables,
  options?: RequestInit['headers'],
  outputFn = ListPerspectivesOutput,
  inputFn = ListPerspectivesInput,
) =>
  fetchWithAmplify<ListPerspectives, ListPerspectivesVariables, ModelPerspectiveConnection, ListPerspectivesVariables>(
    ListPerspectivesDocument,
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

export const useListPerspectives = <TData = ModelPerspectiveConnection | undefined, TError = undefined>(
  variables?: ListPerspectivesVariables,
  options?: UseQueryOptions<ModelPerspectiveConnection | undefined, TError, TData>,
) =>
  useQuery<ModelPerspectiveConnection | undefined, TError, TData>(
    variables === undefined ? ['ListPerspectives'] : ['ListPerspectives', variables],
    ListPerspectivesFetcher(variables),
    options,
  );

useListPerspectives.getKey = ListPerspectivesKeys;

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
export const GetSchemaInput = (variables: GetSchemaVariables) => variables as GetSchemaVariables;

/**
 * Output transformer function for `GetSchema`.
 * It extracts the `getSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const GetSchemaOutput = ({ getSchema }: GetSchema) => getSchema as Schema;

/**
 * Fetcher function for `GetSchema`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetSchemaOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetSchemaFetcher = (
  variables: GetSchemaVariables,
  options?: RequestInit['headers'],
  outputFn = GetSchemaOutput,
  inputFn = GetSchemaInput,
) =>
  fetchWithAmplify<GetSchema, GetSchemaVariables, Schema, GetSchemaVariables>(
    GetSchemaDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetSchema`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getSchema = (variables: GetSchemaVariables) => GetSchemaFetcher(variables)();

export const useGetSchema = <TData = Schema | undefined, TError = undefined>(
  variables: GetSchemaVariables,
  options?: UseQueryOptions<Schema | undefined, TError, TData>,
) => useQuery<Schema | undefined, TError, TData>(['GetSchema', variables], GetSchemaFetcher(variables), options);

useGetSchema.getKey = GetSchemaKeys;

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
export const ListSchemasInput = (variables?: ListSchemasVariables) => variables as ListSchemasVariables;

/**
 * Output transformer function for `ListSchemas`.
 * It extracts the `listSchemas` field from the result and transforms it into a `ModelSchemaConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListSchemas - The data returned from the GraphQL server
 * @returns ModelSchemaConnection - The transformed data
 */
export const ListSchemasOutput = ({ listSchemas }: ListSchemas) => listSchemas as ModelSchemaConnection;

/**
 * Fetcher function for `ListSchemas`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListSchemasOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListSchemasFetcher = (
  variables?: ListSchemasVariables,
  options?: RequestInit['headers'],
  outputFn = ListSchemasOutput,
  inputFn = ListSchemasInput,
) =>
  fetchWithAmplify<ListSchemas, ListSchemasVariables, ModelSchemaConnection, ListSchemasVariables>(
    ListSchemasDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListSchemas`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listSchemas = (variables?: ListSchemasVariables) => ListSchemasFetcher(variables)();

export const useListSchemas = <TData = ModelSchemaConnection | undefined, TError = undefined>(
  variables?: ListSchemasVariables,
  options?: UseQueryOptions<ModelSchemaConnection | undefined, TError, TData>,
) =>
  useQuery<ModelSchemaConnection | undefined, TError, TData>(
    variables === undefined ? ['ListSchemas'] : ['ListSchemas', variables],
    ListSchemasFetcher(variables),
    options,
  );

useListSchemas.getKey = ListSchemasKeys;

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
 * Key maker function for `GetTest`.
 */
export const GetTestKeys = (variables: GetTestVariables) => ['GetTest', variables];

/**
 * Input transformer function for `GetTest`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetTestVariables` - The original variables
 * @returns `GetTestVariables` - The transformed variables
 */
export const GetTestInput = (variables: GetTestVariables) => variables as GetTestVariables;

/**
 * Output transformer function for `GetTest`.
 * It extracts the `getTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const GetTestOutput = ({ getTest }: GetTest) => getTest as Test;

/**
 * Fetcher function for `GetTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetTestFetcher = (
  variables: GetTestVariables,
  options?: RequestInit['headers'],
  outputFn = GetTestOutput,
  inputFn = GetTestInput,
) =>
  fetchWithAmplify<GetTest, GetTestVariables, Test, GetTestVariables>(
    GetTestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetTest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getTest = (variables: GetTestVariables) => GetTestFetcher(variables)();

export const useGetTest = <TData = Test | undefined, TError = undefined>(
  variables: GetTestVariables,
  options?: UseQueryOptions<Test | undefined, TError, TData>,
) => useQuery<Test | undefined, TError, TData>(['GetTest', variables], GetTestFetcher(variables), options);

useGetTest.getKey = GetTestKeys;

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
 * Key maker function for `ListTests`.
 */
export const ListTestsKeys = (variables?: ListTestsVariables) =>
  variables === undefined ? ['ListTests'] : ['ListTests', variables];

/**
 * Input transformer function for `ListTests`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListTestsVariables` - The original variables
 * @returns `ListTestsVariables` - The transformed variables
 */
export const ListTestsInput = (variables?: ListTestsVariables) => variables as ListTestsVariables;

/**
 * Output transformer function for `ListTests`.
 * It extracts the `listTests` field from the result and transforms it into a `ModelTestConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTests - The data returned from the GraphQL server
 * @returns ModelTestConnection - The transformed data
 */
export const ListTestsOutput = ({ listTests }: ListTests) => listTests as ModelTestConnection;

/**
 * Fetcher function for `ListTests`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListTestsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListTestsFetcher = (
  variables?: ListTestsVariables,
  options?: RequestInit['headers'],
  outputFn = ListTestsOutput,
  inputFn = ListTestsInput,
) =>
  fetchWithAmplify<ListTests, ListTestsVariables, ModelTestConnection, ListTestsVariables>(
    ListTestsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListTests`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listTests = (variables?: ListTestsVariables) => ListTestsFetcher(variables)();

export const useListTests = <TData = ModelTestConnection | undefined, TError = undefined>(
  variables?: ListTestsVariables,
  options?: UseQueryOptions<ModelTestConnection | undefined, TError, TData>,
) =>
  useQuery<ModelTestConnection | undefined, TError, TData>(
    variables === undefined ? ['ListTests'] : ['ListTests', variables],
    ListTestsFetcher(variables),
    options,
  );

useListTests.getKey = ListTestsKeys;

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
 * Key maker function for `GetOrganization`.
 */
export const GetOrganizationKeys = (variables: GetOrganizationVariables) => ['GetOrganization', variables];

/**
 * Input transformer function for `GetOrganization`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetOrganizationVariables` - The original variables
 * @returns `GetOrganizationVariables` - The transformed variables
 */
export const GetOrganizationInput = (variables: GetOrganizationVariables) => variables as GetOrganizationVariables;

/**
 * Output transformer function for `GetOrganization`.
 * It extracts the `getOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetOrganization - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const GetOrganizationOutput = ({ getOrganization }: GetOrganization) => getOrganization as Organization;

/**
 * Fetcher function for `GetOrganization`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetOrganizationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetOrganizationFetcher = (
  variables: GetOrganizationVariables,
  options?: RequestInit['headers'],
  outputFn = GetOrganizationOutput,
  inputFn = GetOrganizationInput,
) =>
  fetchWithAmplify<GetOrganization, GetOrganizationVariables, Organization, GetOrganizationVariables>(
    GetOrganizationDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetOrganization`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getOrganization = (variables: GetOrganizationVariables) => GetOrganizationFetcher(variables)();

export const useGetOrganization = <TData = Organization | undefined, TError = undefined>(
  variables: GetOrganizationVariables,
  options?: UseQueryOptions<Organization | undefined, TError, TData>,
) =>
  useQuery<Organization | undefined, TError, TData>(
    ['GetOrganization', variables],
    GetOrganizationFetcher(variables),
    options,
  );

useGetOrganization.getKey = GetOrganizationKeys;

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
 * Key maker function for `ListOrganizations`.
 */
export const ListOrganizationsKeys = (variables?: ListOrganizationsVariables) =>
  variables === undefined ? ['ListOrganizations'] : ['ListOrganizations', variables];

/**
 * Input transformer function for `ListOrganizations`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListOrganizationsVariables` - The original variables
 * @returns `ListOrganizationsVariables` - The transformed variables
 */
export const ListOrganizationsInput = (variables?: ListOrganizationsVariables) =>
  variables as ListOrganizationsVariables;

/**
 * Output transformer function for `ListOrganizations`.
 * It extracts the `listOrganizations` field from the result and transforms it into a `ModelOrganizationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListOrganizations - The data returned from the GraphQL server
 * @returns ModelOrganizationConnection - The transformed data
 */
export const ListOrganizationsOutput = ({ listOrganizations }: ListOrganizations) =>
  listOrganizations as ModelOrganizationConnection;

/**
 * Fetcher function for `ListOrganizations`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListOrganizationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListOrganizationsFetcher = (
  variables?: ListOrganizationsVariables,
  options?: RequestInit['headers'],
  outputFn = ListOrganizationsOutput,
  inputFn = ListOrganizationsInput,
) =>
  fetchWithAmplify<
    ListOrganizations,
    ListOrganizationsVariables,
    ModelOrganizationConnection,
    ListOrganizationsVariables
  >(ListOrganizationsDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `ListOrganizations`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listOrganizations = (variables?: ListOrganizationsVariables) => ListOrganizationsFetcher(variables)();

export const useListOrganizations = <TData = ModelOrganizationConnection | undefined, TError = undefined>(
  variables?: ListOrganizationsVariables,
  options?: UseQueryOptions<ModelOrganizationConnection | undefined, TError, TData>,
) =>
  useQuery<ModelOrganizationConnection | undefined, TError, TData>(
    variables === undefined ? ['ListOrganizations'] : ['ListOrganizations', variables],
    ListOrganizationsFetcher(variables),
    options,
  );

useListOrganizations.getKey = ListOrganizationsKeys;

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
export const SearchGraphInput = (variables: SearchGraphVariables) => variables as SearchGraphVariables;

/**
 * Output transformer function for `SearchGraph`.
 * It extracts the `searchGraph` field from the result and transforms it into a `SearchGraphResult` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data SearchGraph - The data returned from the GraphQL server
 * @returns SearchGraphResult - The transformed data
 */
export const SearchGraphOutput = ({ searchGraph }: SearchGraph) =>
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
  } as SearchGraphResult);

/**
 * Fetcher function for `SearchGraph`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `SearchGraphOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const SearchGraphFetcher = (
  variables: SearchGraphVariables,
  options?: RequestInit['headers'],
  outputFn = SearchGraphOutput,
  inputFn = SearchGraphInput,
) =>
  fetchWithAmplify<SearchGraph, SearchGraphVariables, SearchGraphResult, SearchGraphVariables>(
    SearchGraphDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `SearchGraph`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const searchGraph = (variables: SearchGraphVariables) => SearchGraphFetcher(variables)();

export const useSearchGraph = <TData = SearchGraphResult | undefined, TError = undefined>(
  variables: SearchGraphVariables,
  options?: UseQueryOptions<SearchGraphResult | undefined, TError, TData>,
) =>
  useQuery<SearchGraphResult | undefined, TError, TData>(
    ['SearchGraph', variables],
    SearchGraphFetcher(variables),
    options,
  );

useSearchGraph.getKey = SearchGraphKeys;

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
export const GetNodeInput = (variables: GetNodeVariables) => variables as GetNodeVariables;

/**
 * Output transformer function for `GetNode`.
 * It extracts the `getNode` field from the result and transforms it into a `NodeGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetNode - The data returned from the GraphQL server
 * @returns NodeGraphRecord - The transformed data
 */
export const GetNodeOutput = ({ getNode }: GetNode) =>
  getNode &&
  ({
    ...getNode,
    node: {
      ...getNode.node,
      properties:
        getNode.node?.properties && (JSON.parse(getNode.node?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    relationships: getNode.relationships?.map((relationship) => ({
      ...relationship,
      node: {
        ...relationship?.node,
        properties:
          relationship?.node?.properties &&
          (JSON.parse(relationship?.node?.properties as any) as unknown as Scalars['AWSJSON']),
      },
      relationship: {
        ...relationship?.relationship,
        properties:
          relationship?.relationship?.properties &&
          (JSON.parse(relationship?.relationship?.properties as any) as unknown as Scalars['AWSJSON']),
      },
    })),
  } as NodeGraphRecord);

/**
 * Fetcher function for `GetNode`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetNodeOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetNodeFetcher = (
  variables: GetNodeVariables,
  options?: RequestInit['headers'],
  outputFn = GetNodeOutput,
  inputFn = GetNodeInput,
) =>
  fetchWithAmplify<GetNode, GetNodeVariables, NodeGraphRecord, GetNodeVariables>(
    GetNodeDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getNode = (variables: GetNodeVariables) => GetNodeFetcher(variables)();

export const useGetNode = <TData = NodeGraphRecord | undefined, TError = undefined>(
  variables: GetNodeVariables,
  options?: UseQueryOptions<NodeGraphRecord | undefined, TError, TData>,
) => useQuery<NodeGraphRecord | undefined, TError, TData>(['GetNode', variables], GetNodeFetcher(variables), options);

useGetNode.getKey = GetNodeKeys;

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
export const GetRelationshipInput = (variables: GetRelationshipVariables) => variables as GetRelationshipVariables;

/**
 * Output transformer function for `GetRelationship`.
 * It extracts the `getRelationship` field from the result and transforms it into a `RelationshipGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetRelationship - The data returned from the GraphQL server
 * @returns RelationshipGraphRecord - The transformed data
 */
export const GetRelationshipOutput = ({ getRelationship }: GetRelationship) =>
  getRelationship &&
  ({
    ...getRelationship,
    end: {
      ...getRelationship.end,
      properties:
        getRelationship.end?.properties &&
        (JSON.parse(getRelationship.end?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    relationship: {
      ...getRelationship.relationship,
      properties:
        getRelationship.relationship?.properties &&
        (JSON.parse(getRelationship.relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    },
    start: {
      ...getRelationship.start,
      properties:
        getRelationship.start?.properties &&
        (JSON.parse(getRelationship.start?.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as RelationshipGraphRecord);

/**
 * Fetcher function for `GetRelationship`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetRelationshipOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetRelationshipFetcher = (
  variables: GetRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = GetRelationshipOutput,
  inputFn = GetRelationshipInput,
) =>
  fetchWithAmplify<GetRelationship, GetRelationshipVariables, RelationshipGraphRecord, GetRelationshipVariables>(
    GetRelationshipDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetRelationship`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getRelationship = (variables: GetRelationshipVariables) => GetRelationshipFetcher(variables)();

export const useGetRelationship = <TData = RelationshipGraphRecord | undefined, TError = undefined>(
  variables: GetRelationshipVariables,
  options?: UseQueryOptions<RelationshipGraphRecord | undefined, TError, TData>,
) =>
  useQuery<RelationshipGraphRecord | undefined, TError, TData>(
    ['GetRelationship', variables],
    GetRelationshipFetcher(variables),
    options,
  );

useGetRelationship.getKey = GetRelationshipKeys;

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
 * Key maker function for `ListNodes`.
 */
export const ListNodesKeys = (variables: ListNodesVariables) => ['ListNodes', variables];

/**
 * Input transformer function for `ListNodes`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListNodesVariables` - The original variables
 * @returns `ListNodesVariables` - The transformed variables
 */
export const ListNodesInput = (variables: ListNodesVariables) => variables as ListNodesVariables;

/**
 * Output transformer function for `ListNodes`.
 * It extracts the `listNodes` field from the result and transforms it into a `NodesGraphRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListNodes - The data returned from the GraphQL server
 * @returns NodesGraphRecord - The transformed data
 */
export const ListNodesOutput = ({ listNodes }: ListNodes) =>
  listNodes &&
  ({
    ...listNodes,
    records: listNodes.records?.map((record) => ({
      ...record,
      node: {
        ...record?.node,
        properties:
          record?.node?.properties && (JSON.parse(record?.node?.properties as any) as unknown as Scalars['AWSJSON']),
      },
      relationships: record?.relationships?.map((relationship) => ({
        ...relationship,
        node: {
          ...relationship?.node,
          properties:
            relationship?.node?.properties &&
            (JSON.parse(relationship?.node?.properties as any) as unknown as Scalars['AWSJSON']),
        },
        relationship: {
          ...relationship?.relationship,
          properties:
            relationship?.relationship?.properties &&
            (JSON.parse(relationship?.relationship?.properties as any) as unknown as Scalars['AWSJSON']),
        },
      })),
    })),
  } as NodesGraphRecord);

/**
 * Fetcher function for `ListNodes`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListNodesOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListNodesFetcher = (
  variables: ListNodesVariables,
  options?: RequestInit['headers'],
  outputFn = ListNodesOutput,
  inputFn = ListNodesInput,
) =>
  fetchWithAmplify<ListNodes, ListNodesVariables, NodesGraphRecord, ListNodesVariables>(
    ListNodesDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListNodes`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listNodes = (variables: ListNodesVariables) => ListNodesFetcher(variables)();

export const useListNodes = <TData = NodesGraphRecord | undefined, TError = undefined>(
  variables: ListNodesVariables,
  options?: UseQueryOptions<NodesGraphRecord | undefined, TError, TData>,
) =>
  useQuery<NodesGraphRecord | undefined, TError, TData>(['ListNodes', variables], ListNodesFetcher(variables), options);

useListNodes.getKey = ListNodesKeys;

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
export const GetUserInput = (variables: GetUserVariables) => variables as GetUserVariables;

/**
 * Output transformer function for `GetUser`.
 * It extracts the `getUser` field from the result and transforms it into a `CognitoUser` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetUser - The data returned from the GraphQL server
 * @returns CognitoUser - The transformed data
 */
export const GetUserOutput = ({ getUser }: GetUser) =>
  getUser &&
  ({
    ...getUser,
    attributes: getUser.attributes && (JSON.parse(getUser.attributes as any) as unknown as Scalars['AWSJSON']),
  } as CognitoUser);

/**
 * Fetcher function for `GetUser`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetUserOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetUserFetcher = (
  variables: GetUserVariables,
  options?: RequestInit['headers'],
  outputFn = GetUserOutput,
  inputFn = GetUserInput,
) =>
  fetchWithAmplify<GetUser, GetUserVariables, CognitoUser, GetUserVariables>(
    GetUserDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetUser`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getUser = (variables: GetUserVariables) => GetUserFetcher(variables)();

export const useGetUser = <TData = CognitoUser | undefined, TError = undefined>(
  variables: GetUserVariables,
  options?: UseQueryOptions<CognitoUser | undefined, TError, TData>,
) => useQuery<CognitoUser | undefined, TError, TData>(['GetUser', variables], GetUserFetcher(variables), options);

useGetUser.getKey = GetUserKeys;

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
export const FindUsersInput = (variables: FindUsersVariables) => variables as FindUsersVariables;

/**
 * Output transformer function for `FindUsers`.
 * It extracts the `findUsers` field from the result and transforms it into a `CognitoUserList` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data FindUsers - The data returned from the GraphQL server
 * @returns CognitoUserList - The transformed data
 */
export const FindUsersOutput = ({ findUsers }: FindUsers) =>
  findUsers &&
  ({
    ...findUsers,
    items: findUsers.items?.map((item) => ({
      ...item,
      attributes: item?.attributes && (JSON.parse(item?.attributes as any) as unknown as Scalars['AWSJSON']),
    })),
  } as CognitoUserList);

/**
 * Fetcher function for `FindUsers`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `FindUsersOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const FindUsersFetcher = (
  variables: FindUsersVariables,
  options?: RequestInit['headers'],
  outputFn = FindUsersOutput,
  inputFn = FindUsersInput,
) =>
  fetchWithAmplify<FindUsers, FindUsersVariables, CognitoUserList, FindUsersVariables>(
    FindUsersDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `FindUsers`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const findUsers = (variables: FindUsersVariables) => FindUsersFetcher(variables)();

export const useFindUsers = <TData = CognitoUserList | undefined, TError = undefined>(
  variables: FindUsersVariables,
  options?: UseQueryOptions<CognitoUserList | undefined, TError, TData>,
) =>
  useQuery<CognitoUserList | undefined, TError, TData>(['FindUsers', variables], FindUsersFetcher(variables), options);

useFindUsers.getKey = FindUsersKeys;

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
 * Key maker function for `ListUsers`.
 */
export const ListUsersKeys = (variables?: ListUsersVariables) =>
  variables === undefined ? ['ListUsers'] : ['ListUsers', variables];

/**
 * Input transformer function for `ListUsers`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `ListUsersVariables` - The original variables
 * @returns `ListUsersVariables` - The transformed variables
 */
export const ListUsersInput = (variables?: ListUsersVariables) => variables as ListUsersVariables;

/**
 * Output transformer function for `ListUsers`.
 * It extracts the `listUsers` field from the result and transforms it into a `CognitoUserList` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListUsers - The data returned from the GraphQL server
 * @returns CognitoUserList - The transformed data
 */
export const ListUsersOutput = ({ listUsers }: ListUsers) =>
  listUsers &&
  ({
    ...listUsers,
    items: listUsers.items?.map((item) => ({
      ...item,
      attributes: item?.attributes && (JSON.parse(item?.attributes as any) as unknown as Scalars['AWSJSON']),
    })),
  } as CognitoUserList);

/**
 * Fetcher function for `ListUsers`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `ListUsersOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const ListUsersFetcher = (
  variables?: ListUsersVariables,
  options?: RequestInit['headers'],
  outputFn = ListUsersOutput,
  inputFn = ListUsersInput,
) =>
  fetchWithAmplify<ListUsers, ListUsersVariables, CognitoUserList, ListUsersVariables>(
    ListUsersDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `ListUsers`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const listUsers = (variables?: ListUsersVariables) => ListUsersFetcher(variables)();

export const useListUsers = <TData = CognitoUserList | undefined, TError = undefined>(
  variables?: ListUsersVariables,
  options?: UseQueryOptions<CognitoUserList | undefined, TError, TData>,
) =>
  useQuery<CognitoUserList | undefined, TError, TData>(
    variables === undefined ? ['ListUsers'] : ['ListUsers', variables],
    ListUsersFetcher(variables),
    options,
  );

useListUsers.getKey = ListUsersKeys;

export const GetConnectorCredentialsDocument = `
    query GetConnectorCredentials($id: ID!) {
  getConnectorCredentials(id: $id) {
    id
    plainCredentials
  }
}
    `;

/**
 * Key maker function for `GetConnectorCredentials`.
 */
export const GetConnectorCredentialsKeys = (variables: GetConnectorCredentialsVariables) => [
  'GetConnectorCredentials',
  variables,
];

/**
 * Input transformer function for `GetConnectorCredentials`.
 * It transforms the fields of the variables into JSON strings.
 * If the variables contain JSON fields, it will automatically JSON stringify these fields and return a new `variables` object.
 * If the variables do not conatain any JSON fields, it will return the orignal `variables` object.
 *
 * @param variables `GetConnectorCredentialsVariables` - The original variables
 * @returns `GetConnectorCredentialsVariables` - The transformed variables
 */
export const GetConnectorCredentialsInput = (variables: GetConnectorCredentialsVariables) =>
  variables as GetConnectorCredentialsVariables;

/**
 * Output transformer function for `GetConnectorCredentials`.
 * It extracts the `getConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const GetConnectorCredentialsOutput = ({ getConnectorCredentials }: GetConnectorCredentials) =>
  getConnectorCredentials &&
  ({
    ...getConnectorCredentials,
    plainCredentials:
      getConnectorCredentials.plainCredentials &&
      (JSON.parse(getConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as ConnectorCredentials);

/**
 * Fetcher function for `GetConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `{operationName}Input` and `GetConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or pass to ReactQuery as fetcher argument.
 */
export const GetConnectorCredentialsFetcher = (
  variables: GetConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorCredentialsOutput,
  inputFn = GetConnectorCredentialsInput,
) =>
  fetchWithAmplify<
    GetConnectorCredentials,
    GetConnectorCredentialsVariables,
    ConnectorCredentials,
    GetConnectorCredentialsVariables
  >(GetConnectorCredentialsDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetConnectorCredentials`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getConnectorCredentials = (variables: GetConnectorCredentialsVariables) =>
  GetConnectorCredentialsFetcher(variables)();

export const useGetConnectorCredentials = <TData = ConnectorCredentials | undefined, TError = undefined>(
  variables: GetConnectorCredentialsVariables,
  options?: UseQueryOptions<ConnectorCredentials | undefined, TError, TData>,
) =>
  useQuery<ConnectorCredentials | undefined, TError, TData>(
    ['GetConnectorCredentials', variables],
    GetConnectorCredentialsFetcher(variables),
    options,
  );

useGetConnectorCredentials.getKey = GetConnectorCredentialsKeys;
