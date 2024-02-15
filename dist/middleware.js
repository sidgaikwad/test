"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContextMiddleware = void 0;
const request_context_1 = require("./request-context");
const node_request_context_1 = require("node-request-context");
function RequestContextMiddleware(req, res, next) {
    let rc = new request_context_1.RequestContext(req, res);
    const namespace = node_request_context_1.getNamespace('myapp.mynamespace') || node_request_context_1.createNamespace('myapp.mynamespace');
    namespace.run(() => {
        namespace.set('tid', rc);
        next();
    });
}
exports.RequestContextMiddleware = RequestContextMiddleware;
;
//# sourceMappingURL=middleware.js.map