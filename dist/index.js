"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactQueryVisitor = exports.plugin = void 0;
const graphql_1 = require("graphql");
const plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
const visitor_1 = require("./visitor");
Object.defineProperty(exports, "ReactQueryVisitor", { enumerable: true, get: function () { return visitor_1.ReactQueryVisitor; } });
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
    const visitor = new visitor_1.ReactQueryVisitor(schema, allFragments, config, documents);
    const visitorResult = (0, plugin_helpers_1.oldVisit)(allAst, { leave: visitor });
    if (visitor.hasOperations) {
        return {
            prepend: [...visitor.getImports(), visitor.getFetcherImplementation()],
            content: [visitor.fragments, ...visitorResult.definitions.filter((t) => typeof t === 'string')].join('\n'),
        };
    }
    return {
        prepend: [...visitor.getImports()],
        content: [visitor.fragments, ...visitorResult.definitions.filter((t) => typeof t === 'string')].join('\n'),
    };
};
exports.plugin = plugin;
//# sourceMappingURL=index.js.map