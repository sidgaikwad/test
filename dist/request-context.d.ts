export declare class RequestContext {
    readonly id: Number;
    request: Request;
    response: Response;
    constructor(request: Request, response: Response);
    static currentRequestContext(): RequestContext;
    static currentRequest(): Request;
    static currentUser(): any;
}
