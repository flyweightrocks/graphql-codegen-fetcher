"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedReactQueryVisitor = exports.validate = exports.plugin = void 0;
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const graphql_1 = require("graphql");
const visitor_1 = require("./visitor");
Object.defineProperty(exports, "ExtendedReactQueryVisitor", { enumerable: true, get: function () { return visitor_1.ExtendedReactQueryVisitor; } });
const plugin = (schema, documents, config) => {
    const allAst = (0, graphql_1.concatAST)(documents.map((v) => v.document));
    const allFragments = [
        ...allAst.definitions.filter((d) => d.kind === graphql_1.Kind.FRAGMENT_DEFINITION).map((fragmentDef) => ({
            node: fragmentDef,
            name: fragmentDef.name.value,
            onType: fragmentDef.typeCondition.name.value,
            isExternal: false,
        })),
        ...(config.externalFragments || []),
    ];
    const visitor = new visitor_1.ExtendedReactQueryVisitor(schema, allFragments, config, documents);
    const visitorResult = (0, plugin_helpers_1.oldVisit)(allAst, { leave: visitor });
    if (visitor.hasOperations) {
        return {
            prepend: [...visitor.getImports(), '\n', visitor.getFetcherImplementation()],
            content: [visitor.fragments, ...visitorResult.definitions.filter((t) => typeof t === 'string')].join('\n'),
        };
    }
    return {
        prepend: [...visitor.getImports(), '\n'],
        content: [visitor.fragments, ...visitorResult.definitions.filter((t) => typeof t === 'string')].join('\n'),
    };
};
exports.plugin = plugin;
var typescript_react_query_1 = require("@graphql-codegen/typescript-react-query");
Object.defineProperty(exports, "validate", { enumerable: true, get: function () { return typescript_react_query_1.validate; } });
//# sourceMappingURL=index.js.map