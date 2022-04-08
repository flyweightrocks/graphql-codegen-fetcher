#!/bin/bash
set -e
IFS='|'

REACTCONFIG="{\
\"SourceDir\":\"src\",\
\"DistributionDir\":\"build\",\
\"BuildCommand\":\"npm run-script build\",\
\"StartCommand\":\"npm run-script start\"\
}"
AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"general\"\
}"
AMPLIFY="{\
\"projectName\":\"nebula\",\
\"appId\":\"dw1bup2ugdnjl\",\
\"envName\":\"dev\",\
\"defaultEditor\":\"code\"\
}"
FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

echo "@nebula: Pull Amplify environment from the cloud"
amplify pull \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--yes

echo "@nebula: Codegen for GraphQL types and statements"
amplify codegen
npm run graphql:codegen --if-present

echo "@nebula: Remove unnecessary generated files: .eslintignore .gitignore .vscode"
npx rimraf .eslintignore .gitignore .vscode
