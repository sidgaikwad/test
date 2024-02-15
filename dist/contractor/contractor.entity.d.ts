import { Tendor } from 'src/tendor/tendor.entity';
export declare class Contractor {
    id: number;
    enabled: boolean;
    name: string;
    tendorId: number;
    contactNum: string;
    email: string;
    gstNo: string;
    panCardNo: string;
    add: string;
    businessName: string;
    isDeleted: boolean;
    createdTimestamp: string;
    createdBy: number;
    updatedBy: number;
    updatedTimestamp: string;
    bankName: string;
    accountNo: string;
    ifsc: string;
    branchName: string;
    tendor: Tendor;
}
