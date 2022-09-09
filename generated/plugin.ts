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
  enabled?: Maybe<Scalars['Boolean']>;
  status?: Maybe<UserStatus>;
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
  descritpion?: Maybe<Scalars['String']>;
  extractor?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  resourceName: Scalars['String'];
  secretCredentials?: Maybe<Scalars['String']>;
  service: ConnectorService;
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

export type ConnectorCredentials = {
  id: Scalars['ID'];
  plainCredentials?: Maybe<Scalars['AWSJSON']>;
  secretCredentials?: Maybe<Scalars['String']>;
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
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  dataSource?: InputMaybe<Scalars['String']>;
  descritpion?: InputMaybe<Scalars['String']>;
  extractor?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  resourceName: Scalars['String'];
  secretCredentials?: InputMaybe<Scalars['String']>;
  service: ConnectorService;
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

export type GraphNodeRecord = {
  node: GraphNode;
  relationships?: Maybe<Array<GraphNodeRelationship>>;
};

export type GraphNodeRecords = {
  records?: Maybe<Array<GraphNodeRecord>>;
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

export type GraphRelationshipRecord = {
  end: GraphNode;
  relationship: GraphRelationship;
  start: GraphNode;
};

export type ListNodesInput = {
  identities: Array<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
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
  descritpion?: InputMaybe<ModelStringInput>;
  extractor?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelConnectorConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelConnectorConditionInput>>>;
  resourceName?: InputMaybe<ModelStringInput>;
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
  status?: InputMaybe<ModelConnectorStatusInput>;
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
  descritpion?: InputMaybe<ModelStringInput>;
  extractor?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelConnectorFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelConnectorFilterInput>>>;
  resourceName?: InputMaybe<ModelStringInput>;
  secretCredentials?: InputMaybe<ModelStringInput>;
  service?: InputMaybe<ModelConnectorServiceInput>;
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
  createNode?: Maybe<GraphNodeRecord>;
  createOrganization?: Maybe<Organization>;
  createPerspective?: Maybe<Perspective>;
  createRelationship?: Maybe<GraphRelationshipRecord>;
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
  updateNode?: Maybe<GraphNodeRecord>;
  updateOrganization?: Maybe<Organization>;
  updatePerspective?: Maybe<Perspective>;
  updateRelationship?: Maybe<GraphRelationshipRecord>;
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
  getConnectorByDataSource?: Maybe<ModelConnectorConnection>;
  getConnectorCredentials?: Maybe<ConnectorCredentials>;
  getManifest?: Maybe<Scalars['AWSJSON']>;
  getNode?: Maybe<GraphNodeRecord>;
  getOrganization?: Maybe<Organization>;
  getPerspective?: Maybe<Perspective>;
  getRelationship?: Maybe<GraphRelationshipRecord>;
  getSchema?: Maybe<Schema>;
  getTest?: Maybe<Test>;
  getTransformation?: Maybe<Transformation>;
  getTransformationsByConnector?: Maybe<ModelTransformationConnection>;
  getUser?: Maybe<CognitoUser>;
  listConnectors?: Maybe<ModelConnectorConnection>;
  listNodes?: Maybe<GraphNodeRecords>;
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

export type QueryGetConnectorByDataSourceArgs = {
  dataSource: Scalars['String'];
  filter?: InputMaybe<ModelConnectorFilterInput>;
  id?: InputMaybe<ModelIdKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryGetConnectorCredentialsArgs = {
  id: Scalars['ID'];
};

export type QueryGetManifestArgs = {
  service: ConnectorService;
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
  input: ListNodesInput;
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
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  dataSource?: InputMaybe<Scalars['String']>;
  descritpion?: InputMaybe<Scalars['String']>;
  extractor?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  resourceName?: InputMaybe<Scalars['String']>;
  secretCredentials?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<ConnectorService>;
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
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        descritpion?: string | undefined;
        resourceName: string;
        extractor?: string | undefined;
        topics?: Array<string> | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status: ConnectorStatus;
        secretCredentials?: string | undefined;
        dataSource?: string | undefined;
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
                          name: string;
                          descritpion?: string | undefined;
                          resourceName: string;
                          extractor?: string | undefined;
                          topics?: Array<string> | undefined;
                          service: ConnectorService;
                          active?: boolean | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: string | undefined;
                          dataSource?: string | undefined;
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
        name: string;
        descritpion?: string | undefined;
        resourceName: string;
        extractor?: string | undefined;
        topics?: Array<string> | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status: ConnectorStatus;
        secretCredentials?: string | undefined;
        dataSource?: string | undefined;
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
                          name: string;
                          descritpion?: string | undefined;
                          resourceName: string;
                          extractor?: string | undefined;
                          topics?: Array<string> | undefined;
                          service: ConnectorService;
                          active?: boolean | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: string | undefined;
                          dataSource?: string | undefined;
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
        name: string;
        descritpion?: string | undefined;
        resourceName: string;
        extractor?: string | undefined;
        topics?: Array<string> | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status: ConnectorStatus;
        secretCredentials?: string | undefined;
        dataSource?: string | undefined;
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
                          name: string;
                          descritpion?: string | undefined;
                          resourceName: string;
                          extractor?: string | undefined;
                          topics?: Array<string> | undefined;
                          service: ConnectorService;
                          active?: boolean | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: string | undefined;
                          dataSource?: string | undefined;
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
              name: string;
              descritpion?: string | undefined;
              resourceName: string;
              extractor?: string | undefined;
              topics?: Array<string> | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status: ConnectorStatus;
              secretCredentials?: string | undefined;
              dataSource?: string | undefined;
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
              name: string;
              descritpion?: string | undefined;
              resourceName: string;
              extractor?: string | undefined;
              topics?: Array<string> | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status: ConnectorStatus;
              secretCredentials?: string | undefined;
              dataSource?: string | undefined;
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
              name: string;
              descritpion?: string | undefined;
              resourceName: string;
              extractor?: string | undefined;
              topics?: Array<string> | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status: ConnectorStatus;
              secretCredentials?: string | undefined;
              dataSource?: string | undefined;
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

export type RunConnectorVariables = Exact<{
  input: RunConnectorInput;
}>;

export type RunConnector = { runConnector?: Record<string, any> | string | undefined };

export type CreateConnectorCredentialsVariables = Exact<{
  input: CreateConnectorCredentialsInput;
}>;

export type CreateConnectorCredentials = {
  createConnectorCredentials?:
    | {
        id: string;
        plainCredentials?: Record<string, any> | string | undefined;
        secretCredentials?: string | undefined;
      }
    | undefined;
};

export type UpdateConnectorCredentialsVariables = Exact<{
  input: UpdateConnectorCredentialsInput;
}>;

export type UpdateConnectorCredentials = {
  updateConnectorCredentials?:
    | {
        id: string;
        plainCredentials?: Record<string, any> | string | undefined;
        secretCredentials?: string | undefined;
      }
    | undefined;
};

export type DeleteConnectorCredentialsVariables = Exact<{
  input: DeleteConnectorCredentialsInput;
}>;

export type DeleteConnectorCredentials = {
  deleteConnectorCredentials?:
    | {
        id: string;
        plainCredentials?: Record<string, any> | string | undefined;
        secretCredentials?: string | undefined;
      }
    | undefined;
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
        username: string;
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
        username: string;
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

export type GetConnectorVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnector = {
  getConnector?:
    | {
        id: string;
        createdAt?: any | undefined;
        updatedAt?: any | undefined;
        name: string;
        descritpion?: string | undefined;
        resourceName: string;
        extractor?: string | undefined;
        topics?: Array<string> | undefined;
        service: ConnectorService;
        active?: boolean | undefined;
        status: ConnectorStatus;
        secretCredentials?: string | undefined;
        dataSource?: string | undefined;
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
                          name: string;
                          descritpion?: string | undefined;
                          resourceName: string;
                          extractor?: string | undefined;
                          topics?: Array<string> | undefined;
                          service: ConnectorService;
                          active?: boolean | undefined;
                          status: ConnectorStatus;
                          secretCredentials?: string | undefined;
                          dataSource?: string | undefined;
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
              name: string;
              descritpion?: string | undefined;
              resourceName: string;
              extractor?: string | undefined;
              topics?: Array<string> | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status: ConnectorStatus;
              secretCredentials?: string | undefined;
              dataSource?: string | undefined;
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
              createdAt?: any | undefined;
              updatedAt?: any | undefined;
              name: string;
              descritpion?: string | undefined;
              resourceName: string;
              extractor?: string | undefined;
              topics?: Array<string> | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status: ConnectorStatus;
              secretCredentials?: string | undefined;
              dataSource?: string | undefined;
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
              name: string;
              descritpion?: string | undefined;
              resourceName: string;
              extractor?: string | undefined;
              topics?: Array<string> | undefined;
              service: ConnectorService;
              active?: boolean | undefined;
              status: ConnectorStatus;
              secretCredentials?: string | undefined;
              dataSource?: string | undefined;
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
                    name: string;
                    descritpion?: string | undefined;
                    resourceName: string;
                    extractor?: string | undefined;
                    topics?: Array<string> | undefined;
                    service: ConnectorService;
                    active?: boolean | undefined;
                    status: ConnectorStatus;
                    secretCredentials?: string | undefined;
                    dataSource?: string | undefined;
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
                    name: string;
                    descritpion?: string | undefined;
                    resourceName: string;
                    extractor?: string | undefined;
                    topics?: Array<string> | undefined;
                    service: ConnectorService;
                    active?: boolean | undefined;
                    status: ConnectorStatus;
                    secretCredentials?: string | undefined;
                    dataSource?: string | undefined;
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
  input: ListNodesInput;
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
        status?: UserStatus | undefined;
        enabled?: boolean | undefined;
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
              status?: UserStatus | undefined;
              enabled?: boolean | undefined;
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
              status?: UserStatus | undefined;
              enabled?: boolean | undefined;
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
  getConnectorCredentials?:
    | {
        id: string;
        plainCredentials?: Record<string, any> | string | undefined;
        secretCredentials?: string | undefined;
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
  variables as TInput;

/**
 * Output transformer function for `EmptyMutation`.
 * It extracts the `emptyMutation` field from the result and transforms it into a `Scalars['Int']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyMutation - The data returned from the GraphQL server
 * @returns Scalars['Int'] - The transformed data
 */
export const EmptyMutationOutputFn = <TOutput = Scalars['Int']>({ emptyMutation }: EmptyMutation) =>
  emptyMutation as TOutput;

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
  outputFn = EmptyMutationOutputFn,
  inputFn = EmptyMutationInputFn,
) =>
  fetchWithAmplify<EmptyMutation, EmptyMutationVariables, TOutput, TInput>(
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

export const CreateConnectorDocument = `
    mutation CreateConnector($input: CreateConnectorInput!, $condition: ModelConnectorConditionInput) {
  createConnector(input: $input, condition: $condition) {
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
  variables as TInput;

/**
 * Output transformer function for `CreateConnector`.
 * It extracts the `createConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const CreateConnectorOutputFn = <TOutput = Connector>({ createConnector }: CreateConnector) =>
  createConnector as TOutput;

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
  outputFn = CreateConnectorOutputFn,
  inputFn = CreateConnectorInputFn,
) =>
  fetchWithAmplify<CreateConnector, CreateConnectorVariables, TOutput, TInput>(
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
  variables as TInput;

/**
 * Output transformer function for `UpdateConnector`.
 * It extracts the `updateConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const UpdateConnectorOutputFn = <TOutput = Connector>({ updateConnector }: UpdateConnector) =>
  updateConnector as TOutput;

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
  outputFn = UpdateConnectorOutputFn,
  inputFn = UpdateConnectorInputFn,
) =>
  fetchWithAmplify<UpdateConnector, UpdateConnectorVariables, TOutput, TInput>(
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
  variables as TInput;

/**
 * Output transformer function for `DeleteConnector`.
 * It extracts the `deleteConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const DeleteConnectorOutputFn = <TOutput = Connector>({ deleteConnector }: DeleteConnector) =>
  deleteConnector as TOutput;

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
  outputFn = DeleteConnectorOutputFn,
  inputFn = DeleteConnectorInputFn,
) =>
  fetchWithAmplify<DeleteConnector, DeleteConnectorVariables, TOutput, TInput>(
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
) => variables as TInput;

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
}: CreateTransformation) => createTransformation as TOutput;

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
  outputFn = CreateTransformationOutputFn,
  inputFn = CreateTransformationInputFn,
) =>
  fetchWithAmplify<CreateTransformation, CreateTransformationVariables, TOutput, TInput>(
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
) => variables as TInput;

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
}: UpdateTransformation) => updateTransformation as TOutput;

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
  outputFn = UpdateTransformationOutputFn,
  inputFn = UpdateTransformationInputFn,
) =>
  fetchWithAmplify<UpdateTransformation, UpdateTransformationVariables, TOutput, TInput>(
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
) => variables as TInput;

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
}: DeleteTransformation) => deleteTransformation as TOutput;

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
  outputFn = DeleteTransformationOutputFn,
  inputFn = DeleteTransformationInputFn,
) =>
  fetchWithAmplify<DeleteTransformation, DeleteTransformationVariables, TOutput, TInput>(
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
export const CreatePerspectiveInputFn = <TInput = CreatePerspectiveVariables>(variables: CreatePerspectiveVariables) =>
  variables as TInput;

/**
 * Output transformer function for `CreatePerspective`.
 * It extracts the `createPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreatePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const CreatePerspectiveOutputFn = <TOutput = Perspective>({ createPerspective }: CreatePerspective) =>
  createPerspective as TOutput;

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
  outputFn = CreatePerspectiveOutputFn,
  inputFn = CreatePerspectiveInputFn,
) =>
  fetchWithAmplify<CreatePerspective, CreatePerspectiveVariables, TOutput, TInput>(
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
export const UpdatePerspectiveInputFn = <TInput = UpdatePerspectiveVariables>(variables: UpdatePerspectiveVariables) =>
  variables as TInput;

/**
 * Output transformer function for `UpdatePerspective`.
 * It extracts the `updatePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdatePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const UpdatePerspectiveOutputFn = <TOutput = Perspective>({ updatePerspective }: UpdatePerspective) =>
  updatePerspective as TOutput;

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
  outputFn = UpdatePerspectiveOutputFn,
  inputFn = UpdatePerspectiveInputFn,
) =>
  fetchWithAmplify<UpdatePerspective, UpdatePerspectiveVariables, TOutput, TInput>(
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
export const DeletePerspectiveInputFn = <TInput = DeletePerspectiveVariables>(variables: DeletePerspectiveVariables) =>
  variables as TInput;

/**
 * Output transformer function for `DeletePerspective`.
 * It extracts the `deletePerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeletePerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const DeletePerspectiveOutputFn = <TOutput = Perspective>({ deletePerspective }: DeletePerspective) =>
  deletePerspective as TOutput;

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
  outputFn = DeletePerspectiveOutputFn,
  inputFn = DeletePerspectiveInputFn,
) =>
  fetchWithAmplify<DeletePerspective, DeletePerspectiveVariables, TOutput, TInput>(
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
export const CreateSchemaInputFn = <TInput = CreateSchemaVariables>(variables: CreateSchemaVariables) =>
  variables as TInput;

/**
 * Output transformer function for `CreateSchema`.
 * It extracts the `createSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const CreateSchemaOutputFn = <TOutput = Schema>({ createSchema }: CreateSchema) => createSchema as TOutput;

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
  outputFn = CreateSchemaOutputFn,
  inputFn = CreateSchemaInputFn,
) =>
  fetchWithAmplify<CreateSchema, CreateSchemaVariables, TOutput, TInput>(
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
export const UpdateSchemaInputFn = <TInput = UpdateSchemaVariables>(variables: UpdateSchemaVariables) =>
  variables as TInput;

/**
 * Output transformer function for `UpdateSchema`.
 * It extracts the `updateSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const UpdateSchemaOutputFn = <TOutput = Schema>({ updateSchema }: UpdateSchema) => updateSchema as TOutput;

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
  outputFn = UpdateSchemaOutputFn,
  inputFn = UpdateSchemaInputFn,
) =>
  fetchWithAmplify<UpdateSchema, UpdateSchemaVariables, TOutput, TInput>(
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
export const DeleteSchemaInputFn = <TInput = DeleteSchemaVariables>(variables: DeleteSchemaVariables) =>
  variables as TInput;

/**
 * Output transformer function for `DeleteSchema`.
 * It extracts the `deleteSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const DeleteSchemaOutputFn = <TOutput = Schema>({ deleteSchema }: DeleteSchema) => deleteSchema as TOutput;

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
  outputFn = DeleteSchemaOutputFn,
  inputFn = DeleteSchemaInputFn,
) =>
  fetchWithAmplify<DeleteSchema, DeleteSchemaVariables, TOutput, TInput>(
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
export const CreateTestInputFn = <TInput = CreateTestVariables>(variables: CreateTestVariables) => variables as TInput;

/**
 * Output transformer function for `CreateTest`.
 * It extracts the `createTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const CreateTestOutputFn = <TOutput = Test>({ createTest }: CreateTest) => createTest as TOutput;

/**
 * Fetcher function for `CreateTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateTestInput` and `CreateTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateTestFetcher = <TOutput = Test, TInput = CreateTestVariables>(
  variables: CreateTestVariables,
  options?: RequestInit['headers'],
  outputFn = CreateTestOutputFn,
  inputFn = CreateTestInputFn,
) =>
  fetchWithAmplify<CreateTest, CreateTestVariables, TOutput, TInput>(
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
export const UpdateTestInputFn = <TInput = UpdateTestVariables>(variables: UpdateTestVariables) => variables as TInput;

/**
 * Output transformer function for `UpdateTest`.
 * It extracts the `updateTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const UpdateTestOutputFn = <TOutput = Test>({ updateTest }: UpdateTest) => updateTest as TOutput;

/**
 * Fetcher function for `UpdateTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateTestInput` and `UpdateTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateTestFetcher = <TOutput = Test, TInput = UpdateTestVariables>(
  variables: UpdateTestVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateTestOutputFn,
  inputFn = UpdateTestInputFn,
) =>
  fetchWithAmplify<UpdateTest, UpdateTestVariables, TOutput, TInput>(
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
export const DeleteTestInputFn = <TInput = DeleteTestVariables>(variables: DeleteTestVariables) => variables as TInput;

/**
 * Output transformer function for `DeleteTest`.
 * It extracts the `deleteTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const DeleteTestOutputFn = <TOutput = Test>({ deleteTest }: DeleteTest) => deleteTest as TOutput;

/**
 * Fetcher function for `DeleteTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteTestInput` and `DeleteTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteTestFetcher = <TOutput = Test, TInput = DeleteTestVariables>(
  variables: DeleteTestVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteTestOutputFn,
  inputFn = DeleteTestInputFn,
) =>
  fetchWithAmplify<DeleteTest, DeleteTestVariables, TOutput, TInput>(
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
export const CreateOrganizationInputFn = <TInput = CreateOrganizationVariables>(
  variables: CreateOrganizationVariables,
) => variables as TInput;

/**
 * Output transformer function for `CreateOrganization`.
 * It extracts the `createOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateOrganization - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const CreateOrganizationOutputFn = <TOutput = Organization>({ createOrganization }: CreateOrganization) =>
  createOrganization as TOutput;

/**
 * Fetcher function for `CreateOrganization`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateOrganizationInput` and `CreateOrganizationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateOrganizationFetcher = <TOutput = Organization, TInput = CreateOrganizationVariables>(
  variables: CreateOrganizationVariables,
  options?: RequestInit['headers'],
  outputFn = CreateOrganizationOutputFn,
  inputFn = CreateOrganizationInputFn,
) =>
  fetchWithAmplify<CreateOrganization, CreateOrganizationVariables, TOutput, TInput>(
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
export const UpdateOrganizationInputFn = <TInput = UpdateOrganizationVariables>(
  variables: UpdateOrganizationVariables,
) => variables as TInput;

/**
 * Output transformer function for `UpdateOrganization`.
 * It extracts the `updateOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateOrganization - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const UpdateOrganizationOutputFn = <TOutput = Organization>({ updateOrganization }: UpdateOrganization) =>
  updateOrganization as TOutput;

/**
 * Fetcher function for `UpdateOrganization`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateOrganizationInput` and `UpdateOrganizationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateOrganizationFetcher = <TOutput = Organization, TInput = UpdateOrganizationVariables>(
  variables: UpdateOrganizationVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateOrganizationOutputFn,
  inputFn = UpdateOrganizationInputFn,
) =>
  fetchWithAmplify<UpdateOrganization, UpdateOrganizationVariables, TOutput, TInput>(
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
export const RunPerspectiveInputFn = <TInput = RunPerspectiveVariables>(variables: RunPerspectiveVariables) =>
  variables as TInput;

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
  } as TOutput);

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
  outputFn = RunPerspectiveOutputFn,
  inputFn = RunPerspectiveInputFn,
) =>
  fetchWithAmplify<RunPerspective, RunPerspectiveVariables, TOutput, TInput>(
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
  variables as TInput;

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
  outputFn = RunConnectorOutputFn,
  inputFn = RunConnectorInputFn,
) =>
  fetchWithAmplify<RunConnector, RunConnectorVariables, TOutput, TInput>(
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
    secretCredentials
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
export const CreateConnectorCredentialsInputFn = <TInput = CreateConnectorCredentialsVariables>(
  variables: CreateConnectorCredentialsVariables,
) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      plainCredentials:
        variables.input.plainCredentials &&
        (JSON.stringify(variables.input.plainCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as TInput);

/**
 * Output transformer function for `CreateConnectorCredentials`.
 * It extracts the `createConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const CreateConnectorCredentialsOutputFn = <TOutput = ConnectorCredentials>({
  createConnectorCredentials,
}: CreateConnectorCredentials) =>
  createConnectorCredentials &&
  ({
    ...createConnectorCredentials,
    plainCredentials:
      createConnectorCredentials.plainCredentials &&
      (JSON.parse(createConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as TOutput);

/**
 * Fetcher function for `CreateConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CreateConnectorCredentialsInput` and `CreateConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CreateConnectorCredentialsFetcher = <
  TOutput = ConnectorCredentials,
  TInput = CreateConnectorCredentialsVariables,
>(
  variables: CreateConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = CreateConnectorCredentialsOutputFn,
  inputFn = CreateConnectorCredentialsInputFn,
) =>
  fetchWithAmplify<CreateConnectorCredentials, CreateConnectorCredentialsVariables, TOutput, TInput>(
    CreateConnectorCredentialsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

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
    secretCredentials
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
export const UpdateConnectorCredentialsInputFn = <TInput = UpdateConnectorCredentialsVariables>(
  variables: UpdateConnectorCredentialsVariables,
) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      plainCredentials:
        variables.input.plainCredentials &&
        (JSON.stringify(variables.input.plainCredentials as any) as unknown as Scalars['AWSJSON']),
    },
  } as TInput);

/**
 * Output transformer function for `UpdateConnectorCredentials`.
 * It extracts the `updateConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const UpdateConnectorCredentialsOutputFn = <TOutput = ConnectorCredentials>({
  updateConnectorCredentials,
}: UpdateConnectorCredentials) =>
  updateConnectorCredentials &&
  ({
    ...updateConnectorCredentials,
    plainCredentials:
      updateConnectorCredentials.plainCredentials &&
      (JSON.parse(updateConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as TOutput);

/**
 * Fetcher function for `UpdateConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `UpdateConnectorCredentialsInput` and `UpdateConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const UpdateConnectorCredentialsFetcher = <
  TOutput = ConnectorCredentials,
  TInput = UpdateConnectorCredentialsVariables,
>(
  variables: UpdateConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateConnectorCredentialsOutputFn,
  inputFn = UpdateConnectorCredentialsInputFn,
) =>
  fetchWithAmplify<UpdateConnectorCredentials, UpdateConnectorCredentialsVariables, TOutput, TInput>(
    UpdateConnectorCredentialsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

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
    secretCredentials
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
export const DeleteConnectorCredentialsInputFn = <TInput = DeleteConnectorCredentialsVariables>(
  variables: DeleteConnectorCredentialsVariables,
) => variables as TInput;

/**
 * Output transformer function for `DeleteConnectorCredentials`.
 * It extracts the `deleteConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const DeleteConnectorCredentialsOutputFn = <TOutput = ConnectorCredentials>({
  deleteConnectorCredentials,
}: DeleteConnectorCredentials) =>
  deleteConnectorCredentials &&
  ({
    ...deleteConnectorCredentials,
    plainCredentials:
      deleteConnectorCredentials.plainCredentials &&
      (JSON.parse(deleteConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as TOutput);

/**
 * Fetcher function for `DeleteConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `DeleteConnectorCredentialsInput` and `DeleteConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const DeleteConnectorCredentialsFetcher = <
  TOutput = ConnectorCredentials,
  TInput = DeleteConnectorCredentialsVariables,
>(
  variables: DeleteConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteConnectorCredentialsOutputFn,
  inputFn = DeleteConnectorCredentialsInputFn,
) =>
  fetchWithAmplify<DeleteConnectorCredentials, DeleteConnectorCredentialsVariables, TOutput, TInput>(
    DeleteConnectorCredentialsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

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
export const CreateNodeInputFn = <TInput = CreateNodeVariables>(variables: CreateNodeVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as TInput);

/**
 * Output transformer function for `CreateNode`.
 * It extracts the `createNode` field from the result and transforms it into a `GraphNodeRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateNode - The data returned from the GraphQL server
 * @returns GraphNodeRecord - The transformed data
 */
export const CreateNodeOutputFn = <TOutput = GraphNodeRecord>({ createNode }: CreateNode) =>
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
  } as TOutput);

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
export const CreateNodeFetcher = <TOutput = GraphNodeRecord, TInput = CreateNodeVariables>(
  variables: CreateNodeVariables,
  options?: RequestInit['headers'],
  outputFn = CreateNodeOutputFn,
  inputFn = CreateNodeInputFn,
) =>
  fetchWithAmplify<CreateNode, CreateNodeVariables, TOutput, TInput>(
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
  options?: UseMutationOptions<GraphNodeRecord | undefined, TError, CreateNodeVariables, TContext>,
) =>
  useMutation<GraphNodeRecord | undefined, TError, CreateNodeVariables, TContext>(
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
export const UpdateNodeInputFn = <TInput = UpdateNodeVariables>(variables: UpdateNodeVariables) =>
  ({
    ...variables,
    input: {
      ...variables.input,
      properties:
        variables.input.properties &&
        (JSON.stringify(variables.input.properties as any) as unknown as Scalars['AWSJSON']),
    },
  } as TInput);

/**
 * Output transformer function for `UpdateNode`.
 * It extracts the `updateNode` field from the result and transforms it into a `GraphNodeRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateNode - The data returned from the GraphQL server
 * @returns GraphNodeRecord - The transformed data
 */
export const UpdateNodeOutputFn = <TOutput = GraphNodeRecord>({ updateNode }: UpdateNode) =>
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
  } as TOutput);

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
export const UpdateNodeFetcher = <TOutput = GraphNodeRecord, TInput = UpdateNodeVariables>(
  variables: UpdateNodeVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateNodeOutputFn,
  inputFn = UpdateNodeInputFn,
) =>
  fetchWithAmplify<UpdateNode, UpdateNodeVariables, TOutput, TInput>(
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
  options?: UseMutationOptions<GraphNodeRecord | undefined, TError, UpdateNodeVariables, TContext>,
) =>
  useMutation<GraphNodeRecord | undefined, TError, UpdateNodeVariables, TContext>(
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
export const DeleteNodeInputFn = <TInput = DeleteNodeVariables>(variables: DeleteNodeVariables) => variables as TInput;

/**
 * Output transformer function for `DeleteNode`.
 * It extracts the `deleteNode` field from the result and transforms it into a `DeleteNodeRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteNode - The data returned from the GraphQL server
 * @returns DeleteNodeRecord - The transformed data
 */
export const DeleteNodeOutputFn = <TOutput = DeleteNodeRecord>({ deleteNode }: DeleteNode) =>
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
  } as TOutput);

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
export const DeleteNodeFetcher = <TOutput = DeleteNodeRecord, TInput = DeleteNodeVariables>(
  variables: DeleteNodeVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteNodeOutputFn,
  inputFn = DeleteNodeInputFn,
) =>
  fetchWithAmplify<DeleteNode, DeleteNodeVariables, TOutput, TInput>(
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
  } as TInput);

/**
 * Output transformer function for `CreateRelationship`.
 * It extracts the `createRelationship` field from the result and transforms it into a `GraphRelationshipRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CreateRelationship - The data returned from the GraphQL server
 * @returns GraphRelationshipRecord - The transformed data
 */
export const CreateRelationshipOutputFn = <TOutput = GraphRelationshipRecord>({
  createRelationship,
}: CreateRelationship) =>
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
  } as TOutput);

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
export const CreateRelationshipFetcher = <TOutput = GraphRelationshipRecord, TInput = CreateRelationshipVariables>(
  variables: CreateRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = CreateRelationshipOutputFn,
  inputFn = CreateRelationshipInputFn,
) =>
  fetchWithAmplify<CreateRelationship, CreateRelationshipVariables, TOutput, TInput>(
    CreateRelationshipDocument,
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

export const useCreateRelationship = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<GraphRelationshipRecord | undefined, TError, CreateRelationshipVariables, TContext>,
) =>
  useMutation<GraphRelationshipRecord | undefined, TError, CreateRelationshipVariables, TContext>(
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
  } as TInput);

/**
 * Output transformer function for `UpdateRelationship`.
 * It extracts the `updateRelationship` field from the result and transforms it into a `GraphRelationshipRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data UpdateRelationship - The data returned from the GraphQL server
 * @returns GraphRelationshipRecord - The transformed data
 */
export const UpdateRelationshipOutputFn = <TOutput = GraphRelationshipRecord>({
  updateRelationship,
}: UpdateRelationship) =>
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
  } as TOutput);

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
export const UpdateRelationshipFetcher = <TOutput = GraphRelationshipRecord, TInput = UpdateRelationshipVariables>(
  variables: UpdateRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = UpdateRelationshipOutputFn,
  inputFn = UpdateRelationshipInputFn,
) =>
  fetchWithAmplify<UpdateRelationship, UpdateRelationshipVariables, TOutput, TInput>(
    UpdateRelationshipDocument,
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

export const useUpdateRelationship = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<GraphRelationshipRecord | undefined, TError, UpdateRelationshipVariables, TContext>,
) =>
  useMutation<GraphRelationshipRecord | undefined, TError, UpdateRelationshipVariables, TContext>(
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
export const DeleteRelationshipInputFn = <TInput = DeleteRelationshipVariables>(
  variables: DeleteRelationshipVariables,
) => variables as TInput;

/**
 * Output transformer function for `DeleteRelationship`.
 * It extracts the `deleteRelationship` field from the result and transforms it into a `DeleteRelationshipRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data DeleteRelationship - The data returned from the GraphQL server
 * @returns DeleteRelationshipRecord - The transformed data
 */
export const DeleteRelationshipOutputFn = <TOutput = DeleteRelationshipRecord>({
  deleteRelationship,
}: DeleteRelationship) =>
  deleteRelationship &&
  ({
    ...deleteRelationship,
    relationships: deleteRelationship.relationships?.map((relationship) => ({
      ...relationship,
      properties:
        relationship?.properties && (JSON.parse(relationship?.properties as any) as unknown as Scalars['AWSJSON']),
    })),
  } as TOutput);

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
export const DeleteRelationshipFetcher = <TOutput = DeleteRelationshipRecord, TInput = DeleteRelationshipVariables>(
  variables: DeleteRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = DeleteRelationshipOutputFn,
  inputFn = DeleteRelationshipInputFn,
) =>
  fetchWithAmplify<DeleteRelationship, DeleteRelationshipVariables, TOutput, TInput>(
    DeleteRelationshipDocument,
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

export const useDeleteRelationship = <TError = undefined, TContext = unknown>(
  options?: UseMutationOptions<DeleteRelationshipRecord | undefined, TError, DeleteRelationshipVariables, TContext>,
) =>
  useMutation<DeleteRelationshipRecord | undefined, TError, DeleteRelationshipVariables, TContext>(
    ['DeleteRelationship'],
    (variables: DeleteRelationshipVariables) => DeleteRelationshipFetcher(variables)(),
    options,
  );

export const CreateUserDocument = `
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    username
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
export const CreateUserInputFn = <TInput = CreateUserVariables>(variables: CreateUserVariables) => variables as TInput;

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
  } as TOutput);

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
  outputFn = CreateUserOutputFn,
  inputFn = CreateUserInputFn,
) =>
  fetchWithAmplify<CreateUser, CreateUserVariables, TOutput, TInput>(
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
export const UpdateUserInputFn = <TInput = UpdateUserVariables>(variables: UpdateUserVariables) => variables as TInput;

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
  } as TOutput);

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
  outputFn = UpdateUserOutputFn,
  inputFn = UpdateUserInputFn,
) =>
  fetchWithAmplify<UpdateUser, UpdateUserVariables, TOutput, TInput>(
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
export const DeleteUserInputFn = <TInput = DeleteUserVariables>(variables: DeleteUserVariables) => variables as TInput;

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
  } as TOutput);

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
  outputFn = DeleteUserOutputFn,
  inputFn = DeleteUserInputFn,
) =>
  fetchWithAmplify<DeleteUser, DeleteUserVariables, TOutput, TInput>(
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
export const EmptyQueryInputFn = <TInput = EmptyQueryVariables>(variables?: EmptyQueryVariables) => variables as TInput;

/**
 * Output transformer function for `EmptyQuery`.
 * It extracts the `emptyQuery` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data EmptyQuery - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EmptyQueryOutputFn = <TOutput = Scalars['String']>({ emptyQuery }: EmptyQuery) => emptyQuery as TOutput;

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
  outputFn = EmptyQueryOutputFn,
  inputFn = EmptyQueryInputFn,
) =>
  fetchWithAmplify<EmptyQuery, EmptyQueryVariables, TOutput, TInput>(
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
export const EchoInputFn = <TInput = EchoVariables>(variables?: EchoVariables) => variables as TInput;

/**
 * Output transformer function for `Echo`.
 * It extracts the `echo` field from the result and transforms it into a `Scalars['String']` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data Echo - The data returned from the GraphQL server
 * @returns Scalars['String'] - The transformed data
 */
export const EchoOutputFn = <TOutput = Scalars['String']>({ echo }: Echo) => echo as TOutput;

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
  outputFn = EchoOutputFn,
  inputFn = EchoInputFn,
) => fetchWithAmplify<Echo, EchoVariables, TOutput, TInput>(EchoDocument, variables, options, outputFn, inputFn);

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
export const CustomTestInputFn = <TInput = CustomTestVariables>(variables: CustomTestVariables) => variables as TInput;

/**
 * Output transformer function for `CustomTest`.
 * It extracts the `customTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data CustomTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const CustomTestOutputFn = <TOutput = Test>({ customTest }: CustomTest) => customTest as TOutput;

/**
 * Fetcher function for `CustomTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `CustomTestInput` and `CustomTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const CustomTestFetcher = <TOutput = Test, TInput = CustomTestVariables>(
  variables: CustomTestVariables,
  options?: RequestInit['headers'],
  outputFn = CustomTestOutputFn,
  inputFn = CustomTestInputFn,
) =>
  fetchWithAmplify<CustomTest, CustomTestVariables, TOutput, TInput>(
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

export const GetConnectorDocument = `
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
  variables as TInput;

/**
 * Output transformer function for `GetConnector`.
 * It extracts the `getConnector` field from the result and transforms it into a `Connector` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnector - The data returned from the GraphQL server
 * @returns Connector - The transformed data
 */
export const GetConnectorOutputFn = <TOutput = Connector>({ getConnector }: GetConnector) => getConnector as TOutput;

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
  outputFn = GetConnectorOutputFn,
  inputFn = GetConnectorInputFn,
) =>
  fetchWithAmplify<GetConnector, GetConnectorVariables, TOutput, TInput>(
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
  variables as TInput;

/**
 * Output transformer function for `ListConnectors`.
 * It extracts the `listConnectors` field from the result and transforms it into a `ModelConnectorConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListConnectors - The data returned from the GraphQL server
 * @returns ModelConnectorConnection - The transformed data
 */
export const ListConnectorsOutputFn = <TOutput = ModelConnectorConnection>({ listConnectors }: ListConnectors) =>
  listConnectors as TOutput;

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
  outputFn = ListConnectorsOutputFn,
  inputFn = ListConnectorsInputFn,
) =>
  fetchWithAmplify<ListConnectors, ListConnectorsVariables, TOutput, TInput>(
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
) => variables as TInput;

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
}: GetConnectorByDataSource) => getConnectorByDataSource as TOutput;

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
  outputFn = GetConnectorByDataSourceOutputFn,
  inputFn = GetConnectorByDataSourceInputFn,
) =>
  fetchWithAmplify<GetConnectorByDataSource, GetConnectorByDataSourceVariables, TOutput, TInput>(
    GetConnectorByDataSourceDocument,
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

export const useGetConnectorByDataSource = <TData = ModelConnectorConnection | undefined, TError = undefined>(
  variables: GetConnectorByDataSourceVariables,
  options?: UseQueryOptions<ModelConnectorConnection | undefined, TError, TData>,
) =>
  useQuery<ModelConnectorConnection | undefined, TError, TData>(
    ['GetConnectorByDataSource', variables],
    GetConnectorByDataSourceFetcher(variables),
    options,
  );

useGetConnectorByDataSource.getKey = GetConnectorByDataSourceKeys;

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
  variables as TInput;

/**
 * Output transformer function for `GetTransformation`.
 * It extracts the `getTransformation` field from the result and transforms it into a `Transformation` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTransformation - The data returned from the GraphQL server
 * @returns Transformation - The transformed data
 */
export const GetTransformationOutputFn = <TOutput = Transformation>({ getTransformation }: GetTransformation) =>
  getTransformation as TOutput;

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
  outputFn = GetTransformationOutputFn,
  inputFn = GetTransformationInputFn,
) =>
  fetchWithAmplify<GetTransformation, GetTransformationVariables, TOutput, TInput>(
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
) => variables as TInput;

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
}: ListTransformations) => listTransformations as TOutput;

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
  outputFn = ListTransformationsOutputFn,
  inputFn = ListTransformationsInputFn,
) =>
  fetchWithAmplify<ListTransformations, ListTransformationsVariables, TOutput, TInput>(
    ListTransformationsDocument,
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
export const GetTransformationsByConnectorInputFn = <TInput = GetTransformationsByConnectorVariables>(
  variables: GetTransformationsByConnectorVariables,
) => variables as TInput;

/**
 * Output transformer function for `GetTransformationsByConnector`.
 * It extracts the `getTransformationsByConnector` field from the result and transforms it into a `ModelTransformationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTransformationsByConnector - The data returned from the GraphQL server
 * @returns ModelTransformationConnection - The transformed data
 */
export const GetTransformationsByConnectorOutputFn = <TOutput = ModelTransformationConnection>({
  getTransformationsByConnector,
}: GetTransformationsByConnector) => getTransformationsByConnector as TOutput;

/**
 * Fetcher function for `GetTransformationsByConnector`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetTransformationsByConnectorInput` and `GetTransformationsByConnectorOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetTransformationsByConnectorFetcher = <
  TOutput = ModelTransformationConnection,
  TInput = GetTransformationsByConnectorVariables,
>(
  variables: GetTransformationsByConnectorVariables,
  options?: RequestInit['headers'],
  outputFn = GetTransformationsByConnectorOutputFn,
  inputFn = GetTransformationsByConnectorInputFn,
) =>
  fetchWithAmplify<GetTransformationsByConnector, GetTransformationsByConnectorVariables, TOutput, TInput>(
    GetTransformationsByConnectorDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

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
export const GetPerspectiveInputFn = <TInput = GetPerspectiveVariables>(variables: GetPerspectiveVariables) =>
  variables as TInput;

/**
 * Output transformer function for `GetPerspective`.
 * It extracts the `getPerspective` field from the result and transforms it into a `Perspective` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetPerspective - The data returned from the GraphQL server
 * @returns Perspective - The transformed data
 */
export const GetPerspectiveOutputFn = <TOutput = Perspective>({ getPerspective }: GetPerspective) =>
  getPerspective as TOutput;

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
  outputFn = GetPerspectiveOutputFn,
  inputFn = GetPerspectiveInputFn,
) =>
  fetchWithAmplify<GetPerspective, GetPerspectiveVariables, TOutput, TInput>(
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
export const ListPerspectivesInputFn = <TInput = ListPerspectivesVariables>(variables?: ListPerspectivesVariables) =>
  variables as TInput;

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
}: ListPerspectives) => listPerspectives as TOutput;

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
  outputFn = ListPerspectivesOutputFn,
  inputFn = ListPerspectivesInputFn,
) =>
  fetchWithAmplify<ListPerspectives, ListPerspectivesVariables, TOutput, TInput>(
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
export const GetSchemaInputFn = <TInput = GetSchemaVariables>(variables: GetSchemaVariables) => variables as TInput;

/**
 * Output transformer function for `GetSchema`.
 * It extracts the `getSchema` field from the result and transforms it into a `Schema` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetSchema - The data returned from the GraphQL server
 * @returns Schema - The transformed data
 */
export const GetSchemaOutputFn = <TOutput = Schema>({ getSchema }: GetSchema) => getSchema as TOutput;

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
  outputFn = GetSchemaOutputFn,
  inputFn = GetSchemaInputFn,
) =>
  fetchWithAmplify<GetSchema, GetSchemaVariables, TOutput, TInput>(
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
export const ListSchemasInputFn = <TInput = ListSchemasVariables>(variables?: ListSchemasVariables) =>
  variables as TInput;

/**
 * Output transformer function for `ListSchemas`.
 * It extracts the `listSchemas` field from the result and transforms it into a `ModelSchemaConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListSchemas - The data returned from the GraphQL server
 * @returns ModelSchemaConnection - The transformed data
 */
export const ListSchemasOutputFn = <TOutput = ModelSchemaConnection>({ listSchemas }: ListSchemas) =>
  listSchemas as TOutput;

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
  outputFn = ListSchemasOutputFn,
  inputFn = ListSchemasInputFn,
) =>
  fetchWithAmplify<ListSchemas, ListSchemasVariables, TOutput, TInput>(
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
export const GetTestInputFn = <TInput = GetTestVariables>(variables: GetTestVariables) => variables as TInput;

/**
 * Output transformer function for `GetTest`.
 * It extracts the `getTest` field from the result and transforms it into a `Test` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetTest - The data returned from the GraphQL server
 * @returns Test - The transformed data
 */
export const GetTestOutputFn = <TOutput = Test>({ getTest }: GetTest) => getTest as TOutput;

/**
 * Fetcher function for `GetTest`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetTestInput` and `GetTestOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetTestFetcher = <TOutput = Test, TInput = GetTestVariables>(
  variables: GetTestVariables,
  options?: RequestInit['headers'],
  outputFn = GetTestOutputFn,
  inputFn = GetTestInputFn,
) =>
  fetchWithAmplify<GetTest, GetTestVariables, TOutput, TInput>(GetTestDocument, variables, options, outputFn, inputFn);

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
export const ListTestsInputFn = <TInput = ListTestsVariables>(variables?: ListTestsVariables) => variables as TInput;

/**
 * Output transformer function for `ListTests`.
 * It extracts the `listTests` field from the result and transforms it into a `ModelTestConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListTests - The data returned from the GraphQL server
 * @returns ModelTestConnection - The transformed data
 */
export const ListTestsOutputFn = <TOutput = ModelTestConnection>({ listTests }: ListTests) => listTests as TOutput;

/**
 * Fetcher function for `ListTests`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListTestsInput` and `ListTestsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListTestsFetcher = <TOutput = ModelTestConnection, TInput = ListTestsVariables>(
  variables?: ListTestsVariables,
  options?: RequestInit['headers'],
  outputFn = ListTestsOutputFn,
  inputFn = ListTestsInputFn,
) =>
  fetchWithAmplify<ListTests, ListTestsVariables, TOutput, TInput>(
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
export const GetOrganizationInputFn = <TInput = GetOrganizationVariables>(variables: GetOrganizationVariables) =>
  variables as TInput;

/**
 * Output transformer function for `GetOrganization`.
 * It extracts the `getOrganization` field from the result and transforms it into a `Organization` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetOrganization - The data returned from the GraphQL server
 * @returns Organization - The transformed data
 */
export const GetOrganizationOutputFn = <TOutput = Organization>({ getOrganization }: GetOrganization) =>
  getOrganization as TOutput;

/**
 * Fetcher function for `GetOrganization`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetOrganizationInput` and `GetOrganizationOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetOrganizationFetcher = <TOutput = Organization, TInput = GetOrganizationVariables>(
  variables: GetOrganizationVariables,
  options?: RequestInit['headers'],
  outputFn = GetOrganizationOutputFn,
  inputFn = GetOrganizationInputFn,
) =>
  fetchWithAmplify<GetOrganization, GetOrganizationVariables, TOutput, TInput>(
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
export const ListOrganizationsInputFn = <TInput = ListOrganizationsVariables>(variables?: ListOrganizationsVariables) =>
  variables as TInput;

/**
 * Output transformer function for `ListOrganizations`.
 * It extracts the `listOrganizations` field from the result and transforms it into a `ModelOrganizationConnection` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListOrganizations - The data returned from the GraphQL server
 * @returns ModelOrganizationConnection - The transformed data
 */
export const ListOrganizationsOutputFn = <TOutput = ModelOrganizationConnection>({
  listOrganizations,
}: ListOrganizations) => listOrganizations as TOutput;

/**
 * Fetcher function for `ListOrganizations`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListOrganizationsInput` and `ListOrganizationsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListOrganizationsFetcher = <TOutput = ModelOrganizationConnection, TInput = ListOrganizationsVariables>(
  variables?: ListOrganizationsVariables,
  options?: RequestInit['headers'],
  outputFn = ListOrganizationsOutputFn,
  inputFn = ListOrganizationsInputFn,
) =>
  fetchWithAmplify<ListOrganizations, ListOrganizationsVariables, TOutput, TInput>(
    ListOrganizationsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

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
export const SearchGraphInputFn = <TInput = SearchGraphVariables>(variables: SearchGraphVariables) =>
  variables as TInput;

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
  } as TOutput);

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
  outputFn = SearchGraphOutputFn,
  inputFn = SearchGraphInputFn,
) =>
  fetchWithAmplify<SearchGraph, SearchGraphVariables, TOutput, TInput>(
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
export const GetNodeInputFn = <TInput = GetNodeVariables>(variables: GetNodeVariables) => variables as TInput;

/**
 * Output transformer function for `GetNode`.
 * It extracts the `getNode` field from the result and transforms it into a `GraphNodeRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetNode - The data returned from the GraphQL server
 * @returns GraphNodeRecord - The transformed data
 */
export const GetNodeOutputFn = <TOutput = GraphNodeRecord>({ getNode }: GetNode) =>
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
  } as TOutput);

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
export const GetNodeFetcher = <TOutput = GraphNodeRecord, TInput = GetNodeVariables>(
  variables: GetNodeVariables,
  options?: RequestInit['headers'],
  outputFn = GetNodeOutputFn,
  inputFn = GetNodeInputFn,
) =>
  fetchWithAmplify<GetNode, GetNodeVariables, TOutput, TInput>(GetNodeDocument, variables, options, outputFn, inputFn);

/**
 * GraphQL request function for `GetNode`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getNode = (variables: GetNodeVariables) => GetNodeFetcher(variables)();

export const useGetNode = <TData = GraphNodeRecord | undefined, TError = undefined>(
  variables: GetNodeVariables,
  options?: UseQueryOptions<GraphNodeRecord | undefined, TError, TData>,
) => useQuery<GraphNodeRecord | undefined, TError, TData>(['GetNode', variables], GetNodeFetcher(variables), options);

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
export const GetRelationshipInputFn = <TInput = GetRelationshipVariables>(variables: GetRelationshipVariables) =>
  variables as TInput;

/**
 * Output transformer function for `GetRelationship`.
 * It extracts the `getRelationship` field from the result and transforms it into a `GraphRelationshipRecord` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetRelationship - The data returned from the GraphQL server
 * @returns GraphRelationshipRecord - The transformed data
 */
export const GetRelationshipOutputFn = <TOutput = GraphRelationshipRecord>({ getRelationship }: GetRelationship) =>
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
  } as TOutput);

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
export const GetRelationshipFetcher = <TOutput = GraphRelationshipRecord, TInput = GetRelationshipVariables>(
  variables: GetRelationshipVariables,
  options?: RequestInit['headers'],
  outputFn = GetRelationshipOutputFn,
  inputFn = GetRelationshipInputFn,
) =>
  fetchWithAmplify<GetRelationship, GetRelationshipVariables, TOutput, TInput>(
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

export const useGetRelationship = <TData = GraphRelationshipRecord | undefined, TError = undefined>(
  variables: GetRelationshipVariables,
  options?: UseQueryOptions<GraphRelationshipRecord | undefined, TError, TData>,
) =>
  useQuery<GraphRelationshipRecord | undefined, TError, TData>(
    ['GetRelationship', variables],
    GetRelationshipFetcher(variables),
    options,
  );

useGetRelationship.getKey = GetRelationshipKeys;

export const ListNodesDocument = `
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
export const ListNodesInputFn = <TInput = ListNodesVariables>(variables: ListNodesVariables) => variables as TInput;

/**
 * Output transformer function for `ListNodes`.
 * It extracts the `listNodes` field from the result and transforms it into a `GraphNodeRecords` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data ListNodes - The data returned from the GraphQL server
 * @returns GraphNodeRecords - The transformed data
 */
export const ListNodesOutputFn = <TOutput = GraphNodeRecords>({ listNodes }: ListNodes) =>
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
  } as TOutput);

/**
 * Fetcher function for `ListNodes`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `ListNodesInput` and `ListNodesOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const ListNodesFetcher = <TOutput = GraphNodeRecords, TInput = ListNodesVariables>(
  variables: ListNodesVariables,
  options?: RequestInit['headers'],
  outputFn = ListNodesOutputFn,
  inputFn = ListNodesInputFn,
) =>
  fetchWithAmplify<ListNodes, ListNodesVariables, TOutput, TInput>(
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

export const useListNodes = <TData = GraphNodeRecords | undefined, TError = undefined>(
  variables: ListNodesVariables,
  options?: UseQueryOptions<GraphNodeRecords | undefined, TError, TData>,
) =>
  useQuery<GraphNodeRecords | undefined, TError, TData>(['ListNodes', variables], ListNodesFetcher(variables), options);

useListNodes.getKey = ListNodesKeys;

export const GetUserDocument = `
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
export const GetUserInputFn = <TInput = GetUserVariables>(variables: GetUserVariables) => variables as TInput;

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
  } as TOutput);

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
  outputFn = GetUserOutputFn,
  inputFn = GetUserInputFn,
) =>
  fetchWithAmplify<GetUser, GetUserVariables, TOutput, TInput>(GetUserDocument, variables, options, outputFn, inputFn);

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
export const FindUsersInputFn = <TInput = FindUsersVariables>(variables: FindUsersVariables) => variables as TInput;

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
  } as TOutput);

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
  outputFn = FindUsersOutputFn,
  inputFn = FindUsersInputFn,
) =>
  fetchWithAmplify<FindUsers, FindUsersVariables, TOutput, TInput>(
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
export const ListUsersInputFn = <TInput = ListUsersVariables>(variables?: ListUsersVariables) => variables as TInput;

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
  } as TOutput);

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
  variables?: ListUsersVariables,
  options?: RequestInit['headers'],
  outputFn = ListUsersOutputFn,
  inputFn = ListUsersInputFn,
) =>
  fetchWithAmplify<ListUsers, ListUsersVariables, TOutput, TInput>(
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
    secretCredentials
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
export const GetConnectorCredentialsInputFn = <TInput = GetConnectorCredentialsVariables>(
  variables: GetConnectorCredentialsVariables,
) => variables as TInput;

/**
 * Output transformer function for `GetConnectorCredentials`.
 * It extracts the `getConnectorCredentials` field from the result and transforms it into a `ConnectorCredentials` object.
 * If the object contains JSON fields, it will automatically JSON parse these fields and return a new object.
 * If the object does not conatain any JSON fields, it will return the orignal object.
 * @param data GetConnectorCredentials - The data returned from the GraphQL server
 * @returns ConnectorCredentials - The transformed data
 */
export const GetConnectorCredentialsOutputFn = <TOutput = ConnectorCredentials>({
  getConnectorCredentials,
}: GetConnectorCredentials) =>
  getConnectorCredentials &&
  ({
    ...getConnectorCredentials,
    plainCredentials:
      getConnectorCredentials.plainCredentials &&
      (JSON.parse(getConnectorCredentials.plainCredentials as any) as unknown as Scalars['AWSJSON']),
  } as TOutput);

/**
 * Fetcher function for `GetConnectorCredentials`.
 * It invokes the base fetcher function with the operation-specific input and output transformer functions.
 * The input transformer function must be called inside the base fetcher to transform the `variables` before executing the GraphQL operation.
 * The output transformer function must be called inside the base fetcher to transform the result `data` after executing the GraphQL operation.
 *
 * The input and output transformer functions are optional arguments and default to the generated `GetConnectorCredentialsInput` and `GetConnectorCredentialsOutput` functions.
 * They can be set to undefined if no transaformations are required or can be overriden if the transaformations must be changed or extended.
 * @param variables - The variables to pass to the GraphQL operation.
 * @param options - The options to pass to the GraphQL operation.
 * @param outputFn - The output transformer function.
 * @param inputFn - The input transformer function.
 * @returns A function `() => Promise<TOutput>` that must be invoked manually or passed to ReactQuery as fetcher argument.
 */
export const GetConnectorCredentialsFetcher = <
  TOutput = ConnectorCredentials,
  TInput = GetConnectorCredentialsVariables,
>(
  variables: GetConnectorCredentialsVariables,
  options?: RequestInit['headers'],
  outputFn = GetConnectorCredentialsOutputFn,
  inputFn = GetConnectorCredentialsInputFn,
) =>
  fetchWithAmplify<GetConnectorCredentials, GetConnectorCredentialsVariables, TOutput, TInput>(
    GetConnectorCredentialsDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

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
  variables as TInput;

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
  outputFn = GetManifestOutputFn,
  inputFn = GetManifestInputFn,
) =>
  fetchWithAmplify<GetManifest, GetManifestVariables, TOutput, TInput>(
    GetManifestDocument,
    variables,
    options,
    outputFn,
    inputFn,
  );

/**
 * GraphQL request function for `GetManifest`.
 * It invokes the operation-specific fetcher function and is merely a shortcut for convencience.
 */
export const getManifest = (variables: GetManifestVariables) => GetManifestFetcher(variables)();

export const useGetManifest = <TData = Scalars['AWSJSON'] | undefined, TError = undefined>(
  variables: GetManifestVariables,
  options?: UseQueryOptions<Scalars['AWSJSON'] | undefined, TError, TData>,
) =>
  useQuery<Scalars['AWSJSON'] | undefined, TError, TData>(
    ['GetManifest', variables],
    GetManifestFetcher(variables),
    options,
  );

useGetManifest.getKey = GetManifestKeys;
