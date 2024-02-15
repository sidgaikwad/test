"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContext = void 0;
const node_request_context_1 = require("node-request-context");
class RequestContext {
    constructor(request, response) {
        this.id = Math.random();
        this.request = request;
        this.response = response;
    }
    static currentRequestContext() {
        let namespace = node_request_context_1.getNamespace('myapp.mynamespace');
        let rc = namespace.get('tid');
        return rc;
    }
    static currentRequest() {
        let requestContext = RequestContext.currentRequestContext();
        return requestContext.request;
    }
    static currentUser() {
        let requestContext = RequestContext.currentRequestContext();
        return requestContext.request['user'];
    }
}
exports.RequestContext = RequestContext;
//# sourceMappingURL=request-context.js.map