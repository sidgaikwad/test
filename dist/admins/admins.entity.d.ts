import { AdminsRole } from 'src/admins-roles/adminsRole.entity';
export declare class Admin {
    id: number;
    enabled: boolean;
    fullName: string;
    contactNumber: string;
    email: string;
    password: string;
    avatar: string;
    gender: string;
    adminsRoleId: number;
    flastLogin: string;
    createdBy: number;
    createdTimestamp: string;
    accessToken: string;
    updatedBy: number;
    updatedTimestamp: string;
    adminsRole: AdminsRole;
}
