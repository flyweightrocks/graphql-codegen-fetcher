"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuginVisitor = exports.validate = exports.plugin = void 0;
const graphql_1 = require("graphql");
const visitor_1 = require("./visitor");
Object.defineProperty(exports, "PuginVisitor", { enumerable: true, get: function () { return visitor_1.PuginVisitor; } });
const path_1 = require("path");
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
    const visitor = new visitor_1.PuginVisitor(schema, allFragments, config, documents);
    const visitorResult = (0, graphql_1.visit)(allAst, { leave: visitor });
    return {
        prepend: visitor.getImports(),
        content: [visitor.fragments, ...visitorResult.definitions.filter((t) => typeof t === 'string')].join('\n'),
    };
};
exports.plugin = plugin;
const validate = (schema, documents, config, outputFile, allPlugins, pluginContext) => {
    if ((0, path_1.extname)(outputFile) !== '.ts' && (0, path_1.extname)(outputFile) !== '.tsx') {
        throw new Error(`Plugin "graphql-codegen-typescript-transformer" requires extension to be ".ts" or ".tsx"!`);
    }
};
exports.validate = validate;
//# sourceMappingURL=index.js.map