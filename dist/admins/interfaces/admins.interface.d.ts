export interface Admin {
    readonly enabled: boolean;
    readonly fullName: string;
    readonly contactNumber: number;
    readonly email: string;
    readonly gender: string;
    readonly password: string;
    readonly lastLogin: string;
    readonly createdBy: string;
    readonly createdTimestamp: string;
}
