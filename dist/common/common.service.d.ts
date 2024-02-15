import { JwtService } from '@nestjs/jwt';
export declare class CommonService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    getHash(password: string | undefined): Promise<string>;
    compareHash(password: string | undefined, hash: string | undefined): Promise<boolean>;
    jwtSignup(payload: any): string;
    jwtVerify(token: string): any;
}
