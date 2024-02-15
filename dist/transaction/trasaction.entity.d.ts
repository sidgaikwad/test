import { Admin } from 'src/admins/admins.entity';
import { Contractor } from 'src/contractor/contractor.entity';
import { Tendor } from 'src/tendor/tendor.entity';
export declare class Transaction {
    id: number;
    enabled: boolean;
    contractorId: number;
    amount: number;
    date: string;
    desc: string;
    transactionType: number;
    tendorId: number;
    isVerified: boolean;
    isAddedToConGSt: boolean;
    isVerifiedById: number;
    isAddedToBankStatement: boolean;
    createdTimestamp: string;
    createdBy: number;
    updatedBy: number;
    updatedTimestamp: string;
    contractor: Contractor;
    tendor: Tendor;
    isVerifiedBy: Admin;
}
