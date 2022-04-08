/* eslint-disable */
import {} from 'react-query';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(awsconfig.aws_appsync_graphqlEndpoint as string, {
      method: 'POST',
      ...{ headers: { 'x-api-key': 'awsconfig.aws_appsync_apiKey' } },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
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
  groupID: Scalars['String'];
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
  createUser?: Maybe<User>;
  deleteConnector?: Maybe<Connector>;
  deleteConnectorCredentials?: Maybe<ConnectorCredentials>;
  deleteNode?: Maybe<DeleteNodeRecord>;
  deletePerspective?: Maybe<Perspective>;
  deleteRelationship?: Maybe<DeleteRelationshipRecord>;
  deleteSchema?: Maybe<Schema>;
  deleteTest?: Maybe<Test>;
  deleteTransformation?: Maybe<Transformation>;
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
  listConnectors?: Maybe<ModelConnectorConnection>;
  listNodes?: Maybe<NodesGraphRecord>;
  listOrganizations?: Maybe<ModelOrganizationConnection>;
  listPerspectives?: Maybe<ModelPerspectiveConnection>;
  listSchemas?: Maybe<ModelSchemaConnection>;
  listTests?: Maybe<ModelTestConnection>;
  listTransformations?: Maybe<ModelTransformationConnection>;
  listUsers?: Maybe<Array<Maybe<User>>>;
  searchGraph?: Maybe<SearchGraphResult>;
};

export type QueryCustomTestArgs = {
  id: Scalars['ID'];
};

export type QueryEchoArgs = {
  msg?: InputMaybe<Scalars['String']>;
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
  groupID: Scalars['ID'];
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

export type User = {
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
};

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

export type RunPerspectiveMutationVariables = Exact<{
  input: RunPerspectiveInput;
}>;

export type RunPerspectiveMutation = { runPerspective?: { records: Record<string, any> | string } | undefined };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  createUser?: { id: string; createdAt?: any | undefined; updatedAt?: any | undefined; email: string } | undefined;
};

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

export type ListUsersQueryVariables = Exact<{
  groupID: Scalars['ID'];
}>;

export type ListUsersQuery = {
  listUsers?:
    | Array<{ id: string; createdAt?: any | undefined; updatedAt?: any | undefined; email: string } | undefined>
    | undefined;
};

export type GetConnectorCredentialsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetConnectorCredentialsQuery = {
  getConnectorCredentials?: { id: string; plainCredentials: Record<string, any> | string } | undefined;
};

export const RunConnectorDocument = `
    mutation RunConnector($input: RunConnectorInput!) {
  runConnector(input: $input)
}
    `;

export const RunConnectorMutationKeys = () => ['RunConnector'];

export const RunConnectorMutationInput = (input: Partial<RunConnectorInput>) => input;

export const CreateConnectorCredentialsDocument = `
    mutation CreateConnectorCredentials($input: CreateConnectorCredentialsInput!) {
  createConnectorCredentials(input: $input) {
    id
    plainCredentials
  }
}
    `;

export const CreateConnectorCredentialsMutationKeys = () => ['CreateConnectorCredentials'];

export const CreateConnectorCredentialsMutationInput = (input: Partial<CreateConnectorCredentialsInput>) => ({
  ...input,
  plainCredentials:
    input.plainCredentials &&
    (JSON.stringify(input.plainCredentials as unknown as Record<string, any>) as unknown as Record<string, any>),
});

export const UpdateConnectorCredentialsDocument = `
    mutation UpdateConnectorCredentials($input: UpdateConnectorCredentialsInput!) {
  updateConnectorCredentials(input: $input) {
    id
    plainCredentials
  }
}
    `;

export const UpdateConnectorCredentialsMutationKeys = () => ['UpdateConnectorCredentials'];

export const UpdateConnectorCredentialsMutationInput = (input: Partial<UpdateConnectorCredentialsInput>) => ({
  ...input,
  plainCredentials:
    input.plainCredentials &&
    (JSON.stringify(input.plainCredentials as unknown as Record<string, any>) as unknown as Record<string, any>),
});

export const DeleteConnectorCredentialsDocument = `
    mutation DeleteConnectorCredentials($input: DeleteConnectorCredentialsInput!) {
  deleteConnectorCredentials(input: $input) {
    id
    plainCredentials
  }
}
    `;

export const DeleteConnectorCredentialsMutationKeys = () => ['DeleteConnectorCredentials'];

export const DeleteConnectorCredentialsMutationInput = (input: Partial<DeleteConnectorCredentialsInput>) => input;

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

export const CreateNodeMutationKeys = () => ['CreateNode'];

export const CreateNodeMutationInput = (input: Partial<CreateNodeInput>) => ({
  ...input,
  properties:
    input.properties &&
    (JSON.stringify(input.properties as unknown as Record<string, any>) as unknown as Record<string, any>),
});

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

export const UpdateNodeMutationKeys = () => ['UpdateNode'];

export const UpdateNodeMutationInput = (input: Partial<UpdateNodeInput>) => ({
  ...input,
  properties:
    input.properties &&
    (JSON.stringify(input.properties as unknown as Record<string, any>) as unknown as Record<string, any>),
});

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

export const DeleteNodeMutationKeys = () => ['DeleteNode'];

export const DeleteNodeMutationInput = (input: Partial<DeleteNodeInput>) => input;

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

export const CreateRelationshipMutationKeys = () => ['CreateRelationship'];

export const CreateRelationshipMutationInput = (input: Partial<CreateRelationshipInput>) => ({
  ...input,
  properties:
    input.properties &&
    (JSON.stringify(input.properties as unknown as Record<string, any>) as unknown as Record<string, any>),
});

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

export const UpdateRelationshipMutationKeys = () => ['UpdateRelationship'];

export const UpdateRelationshipMutationInput = (input: Partial<UpdateRelationshipInput>) => ({
  ...input,
  properties:
    input.properties &&
    (JSON.stringify(input.properties as unknown as Record<string, any>) as unknown as Record<string, any>),
});

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

export const DeleteRelationshipMutationKeys = () => ['DeleteRelationship'];

export const DeleteRelationshipMutationInput = (input: Partial<DeleteRelationshipInput>) => input;

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

export const CreateConnectorMutationKeys = () => ['CreateConnector'];

export const CreateConnectorMutationInput = (input: Partial<CreateConnectorInput>) => ({
  ...input,
  secretCredentials:
    input.secretCredentials &&
    (JSON.stringify(input.secretCredentials as unknown as Record<string, any>) as unknown as Record<string, any>),
});

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

export const UpdateConnectorMutationKeys = () => ['UpdateConnector'];

export const UpdateConnectorMutationInput = (input: Partial<UpdateConnectorInput>) => ({
  ...input,
  secretCredentials:
    input.secretCredentials &&
    (JSON.stringify(input.secretCredentials as unknown as Record<string, any>) as unknown as Record<string, any>),
});

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

export const DeleteConnectorMutationKeys = () => ['DeleteConnector'];

export const DeleteConnectorMutationInput = (input: Partial<DeleteConnectorInput>) => input;

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

export const CreateTransformationMutationKeys = () => ['CreateTransformation'];

export const CreateTransformationMutationInput = (input: Partial<CreateTransformationInput>) => input;

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

export const UpdateTransformationMutationKeys = () => ['UpdateTransformation'];

export const UpdateTransformationMutationInput = (input: Partial<UpdateTransformationInput>) => input;

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

export const DeleteTransformationMutationKeys = () => ['DeleteTransformation'];

export const DeleteTransformationMutationInput = (input: Partial<DeleteTransformationInput>) => input;

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

export const CreateOrganizationMutationKeys = () => ['CreateOrganization'];

export const CreateOrganizationMutationInput = (input: Partial<CreateOrganizationInput>) => input;

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

export const UpdateOrganizationMutationKeys = () => ['UpdateOrganization'];

export const UpdateOrganizationMutationInput = (input: Partial<UpdateOrganizationInput>) => input;

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

export const CreatePerspectiveMutationKeys = () => ['CreatePerspective'];

export const CreatePerspectiveMutationInput = (input: Partial<CreatePerspectiveInput>) => input;

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

export const UpdatePerspectiveMutationKeys = () => ['UpdatePerspective'];

export const UpdatePerspectiveMutationInput = (input: Partial<UpdatePerspectiveInput>) => input;

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

export const DeletePerspectiveMutationKeys = () => ['DeletePerspective'];

export const DeletePerspectiveMutationInput = (input: Partial<DeletePerspectiveInput>) => input;

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

export const CreateSchemaMutationKeys = () => ['CreateSchema'];

export const CreateSchemaMutationInput = (input: Partial<CreateSchemaInput>) => input;

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

export const UpdateSchemaMutationKeys = () => ['UpdateSchema'];

export const UpdateSchemaMutationInput = (input: Partial<UpdateSchemaInput>) => input;

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

export const DeleteSchemaMutationKeys = () => ['DeleteSchema'];

export const DeleteSchemaMutationInput = (input: Partial<DeleteSchemaInput>) => input;

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

export const CreateTestMutationKeys = () => ['CreateTest'];

export const CreateTestMutationInput = (input: Partial<CreateTestInput>) => input;

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

export const UpdateTestMutationKeys = () => ['UpdateTest'];

export const UpdateTestMutationInput = (input: Partial<UpdateTestInput>) => input;

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

export const DeleteTestMutationKeys = () => ['DeleteTest'];

export const DeleteTestMutationInput = (input: Partial<DeleteTestInput>) => input;

export const RunPerspectiveDocument = `
    mutation RunPerspective($input: RunPerspectiveInput!) {
  runPerspective(input: $input) {
    records
  }
}
    `;

export const RunPerspectiveMutationKeys = () => ['RunPerspective'];

export const RunPerspectiveMutationInput = (input: Partial<RunPerspectiveInput>) => input;

export const CreateUserDocument = `
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    createdAt
    updatedAt
    email
  }
}
    `;

export const CreateUserMutationKeys = () => ['CreateUser'];

export const CreateUserMutationInput = (input: Partial<CreateUserInput>) => input;

export const EchoDocument = `
    query Echo($msg: String) {
  echo(msg: $msg)
}
    `;

export const EchoQueryKeys = (variables?: EchoQueryVariables) =>
  variables === undefined ? ['Echo'] : ['Echo', variables];
/**
 * EchoQuery
 */
export const EchoQueryOutput = ({ echo }: EchoQuery) => echo;

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

export const CustomTestQueryKeys = (variables: CustomTestQueryVariables) => ['CustomTest', variables];
/**
 * CustomTestQuery
 */
export const CustomTestQueryOutput = ({ customTest }: CustomTestQuery) => customTest;

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

export const GetConnectorManifestQueryKeys = (variables: GetConnectorManifestQueryVariables) => [
  'GetConnectorManifest',
  variables,
];
/**
 * GetConnectorManifestQuery
 */
export const GetConnectorManifestQueryOutput = ({ getConnectorManifest }: GetConnectorManifestQuery) =>
  getConnectorManifest;

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
     * 
     * @param variables 
     * @returns 
     */
export const GetConnectorQueryKeys = (variables: GetConnectorQueryVariables) => ['GetConnector', variables];
/**
 * GetConnectorQuery
 */
export const GetConnectorQueryOutput = ({ getConnector }: GetConnectorQuery) =>
  getConnector && {
    ...getConnector,
    secretCredentials:
      getConnector.secretCredentials && JSON.parse(getConnector.secretCredentials as unknown as string),
  };

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

export const ListConnectorsQueryKeys = (variables?: ListConnectorsQueryVariables) =>
  variables === undefined ? ['ListConnectors'] : ['ListConnectors', variables];
/**
 * ListConnectorsQuery
 */
export const ListConnectorsQueryOutput = ({ listConnectors }: ListConnectorsQuery) =>
  listConnectors && {
    ...listConnectors,
    items: listConnectors.items?.map((item) => ({
      ...item,
      secretCredentials: item?.secretCredentials && JSON.parse(item?.secretCredentials as unknown as string),
    })),
  };

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

export const GetConnectorBySourceQueryKeys = (variables: GetConnectorBySourceQueryVariables) => [
  'GetConnectorBySource',
  variables,
];
/**
 * GetConnectorBySourceQuery
 */
export const GetConnectorBySourceQueryOutput = ({ getConnectorBySource }: GetConnectorBySourceQuery) =>
  getConnectorBySource && {
    ...getConnectorBySource,
    items: getConnectorBySource.items?.map((item) => ({
      ...item,
      secretCredentials: item?.secretCredentials && JSON.parse(item?.secretCredentials as unknown as string),
    })),
  };

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

export const GetTransformationQueryKeys = (variables: GetTransformationQueryVariables) => [
  'GetTransformation',
  variables,
];
/**
 * GetTransformationQuery
 */
export const GetTransformationQueryOutput = ({ getTransformation }: GetTransformationQuery) =>
  getTransformation && {
    ...getTransformation,
    connector: {
      ...getTransformation.connector,
      secretCredentials:
        getTransformation.connector?.secretCredentials &&
        JSON.parse(getTransformation.connector?.secretCredentials as unknown as string),
    },
  };

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

export const ListTransformationsQueryKeys = (variables?: ListTransformationsQueryVariables) =>
  variables === undefined ? ['ListTransformations'] : ['ListTransformations', variables];
/**
 * ListTransformationsQuery
 */
export const ListTransformationsQueryOutput = ({ listTransformations }: ListTransformationsQuery) =>
  listTransformations && {
    ...listTransformations,
    items: listTransformations.items?.map((item) => ({
      ...item,
      connector: {
        ...item?.connector,
        secretCredentials:
          item?.connector?.secretCredentials && JSON.parse(item?.connector?.secretCredentials as unknown as string),
      },
    })),
  };

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

export const GetTransformationsByConnectorQueryKeys = (variables: GetTransformationsByConnectorQueryVariables) => [
  'GetTransformationsByConnector',
  variables,
];
/**
 * GetTransformationsByConnectorQuery
 */
export const GetTransformationsByConnectorQueryOutput = ({
  getTransformationsByConnector,
}: GetTransformationsByConnectorQuery) =>
  getTransformationsByConnector && {
    ...getTransformationsByConnector,
    items: getTransformationsByConnector.items?.map((item) => ({
      ...item,
      connector: {
        ...item?.connector,
        secretCredentials:
          item?.connector?.secretCredentials && JSON.parse(item?.connector?.secretCredentials as unknown as string),
      },
    })),
  };

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

export const GetOrganizationQueryKeys = (variables: GetOrganizationQueryVariables) => ['GetOrganization', variables];
/**
 * GetOrganizationQuery
 */
export const GetOrganizationQueryOutput = ({ getOrganization }: GetOrganizationQuery) => getOrganization;

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

export const ListOrganizationsQueryKeys = (variables?: ListOrganizationsQueryVariables) =>
  variables === undefined ? ['ListOrganizations'] : ['ListOrganizations', variables];
/**
 * ListOrganizationsQuery
 */
export const ListOrganizationsQueryOutput = ({ listOrganizations }: ListOrganizationsQuery) => listOrganizations;

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

export const GetPerspectiveQueryKeys = (variables: GetPerspectiveQueryVariables) => ['GetPerspective', variables];
/**
 * GetPerspectiveQuery
 */
export const GetPerspectiveQueryOutput = ({ getPerspective }: GetPerspectiveQuery) => getPerspective;

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

export const ListPerspectivesQueryKeys = (variables?: ListPerspectivesQueryVariables) =>
  variables === undefined ? ['ListPerspectives'] : ['ListPerspectives', variables];
/**
 * ListPerspectivesQuery
 */
export const ListPerspectivesQueryOutput = ({ listPerspectives }: ListPerspectivesQuery) => listPerspectives;

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

export const GetSchemaQueryKeys = (variables: GetSchemaQueryVariables) => ['GetSchema', variables];
/**
 * GetSchemaQuery
 */
export const GetSchemaQueryOutput = ({ getSchema }: GetSchemaQuery) => getSchema;

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

export const ListSchemasQueryKeys = (variables?: ListSchemasQueryVariables) =>
  variables === undefined ? ['ListSchemas'] : ['ListSchemas', variables];
/**
 * ListSchemasQuery
 */
export const ListSchemasQueryOutput = ({ listSchemas }: ListSchemasQuery) => listSchemas;

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

export const GetTestQueryKeys = (variables: GetTestQueryVariables) => ['GetTest', variables];
/**
 * GetTestQuery
 */
export const GetTestQueryOutput = ({ getTest }: GetTestQuery) => getTest;

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

export const ListTestsQueryKeys = (variables?: ListTestsQueryVariables) =>
  variables === undefined ? ['ListTests'] : ['ListTests', variables];
/**
 * ListTestsQuery
 */
export const ListTestsQueryOutput = ({ listTests }: ListTestsQuery) => listTests;

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

export const SearchGraphQueryKeys = (variables: SearchGraphQueryVariables) => ['SearchGraph', variables];
/**
 * SearchGraphQuery
 */
export const SearchGraphQueryOutput = ({ searchGraph }: SearchGraphQuery) =>
  searchGraph && {
    ...searchGraph,
    records: searchGraph.records?.map((record) => ({
      ...record,
      node: {
        ...record?.node,
        properties: record?.node?.properties && JSON.parse(record?.node?.properties as unknown as string),
      },
    })),
  };

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

export const GetNodeQueryKeys = (variables: GetNodeQueryVariables) => ['GetNode', variables];
/**
 * GetNodeQuery
 */
export const GetNodeQueryOutput = ({ getNode }: GetNodeQuery) =>
  getNode && {
    ...getNode,
    node: {
      ...getNode.node,
      properties: getNode.node?.properties && JSON.parse(getNode.node?.properties as unknown as string),
    },
    relationships: getNode.relationships?.map((relationship) => ({
      ...relationship,
      node: {
        ...relationship?.node,
        properties: relationship?.node?.properties && JSON.parse(relationship?.node?.properties as unknown as string),
      },
      relationship: {
        ...relationship?.relationship,
        properties:
          relationship?.relationship?.properties &&
          JSON.parse(relationship?.relationship?.properties as unknown as string),
      },
    })),
  };

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

export const GetRelationshipQueryKeys = (variables: GetRelationshipQueryVariables) => ['GetRelationship', variables];
/**
 * GetRelationshipQuery
 */
export const GetRelationshipQueryOutput = ({ getRelationship }: GetRelationshipQuery) =>
  getRelationship && {
    ...getRelationship,
    end: {
      ...getRelationship.end,
      properties: getRelationship.end?.properties && JSON.parse(getRelationship.end?.properties as unknown as string),
    },
    relationship: {
      ...getRelationship.relationship,
      properties:
        getRelationship.relationship?.properties &&
        JSON.parse(getRelationship.relationship?.properties as unknown as string),
    },
    start: {
      ...getRelationship.start,
      properties:
        getRelationship.start?.properties && JSON.parse(getRelationship.start?.properties as unknown as string),
    },
  };

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

export const ListNodesQueryKeys = (variables: ListNodesQueryVariables) => ['ListNodes', variables];
/**
 * ListNodesQuery
 */
export const ListNodesQueryOutput = ({ listNodes }: ListNodesQuery) =>
  listNodes && {
    ...listNodes,
    records: listNodes.records?.map((record) => ({
      ...record,
      node: {
        ...record?.node,
        properties: record?.node?.properties && JSON.parse(record?.node?.properties as unknown as string),
      },
      relationships: record?.relationships?.map((relationship) => ({
        ...relationship,
        node: {
          ...relationship?.node,
          properties: relationship?.node?.properties && JSON.parse(relationship?.node?.properties as unknown as string),
        },
        relationship: {
          ...relationship?.relationship,
          properties:
            relationship?.relationship?.properties &&
            JSON.parse(relationship?.relationship?.properties as unknown as string),
        },
      })),
    })),
  };

export const ListUsersDocument = `
    query ListUsers($groupID: ID!) {
  listUsers(groupID: $groupID) {
    id
    createdAt
    updatedAt
    email
  }
}
    `;

export const ListUsersQueryKeys = (variables: ListUsersQueryVariables) => ['ListUsers', variables];
/**
 * ListUsersQuery
 */
export const ListUsersQueryOutput = ({ listUsers }: ListUsersQuery) => listUsers;

export const GetConnectorCredentialsDocument = `
    query GetConnectorCredentials($id: ID!) {
  getConnectorCredentials(id: $id) {
    id
    plainCredentials
  }
}
    `;

export const GetConnectorCredentialsQueryKeys = (variables: GetConnectorCredentialsQueryVariables) => [
  'GetConnectorCredentials',
  variables,
];
/**
 * GetConnectorCredentialsQuery
 */
export const GetConnectorCredentialsQueryOutput = ({ getConnectorCredentials }: GetConnectorCredentialsQuery) =>
  getConnectorCredentials && {
    ...getConnectorCredentials,
    plainCredentials:
      getConnectorCredentials.plainCredentials &&
      JSON.parse(getConnectorCredentials.plainCredentials as unknown as string),
  };
