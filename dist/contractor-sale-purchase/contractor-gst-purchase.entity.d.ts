import { ContractorGst } from 'src/contractor-gst/contractor-gst.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import { Transaction } from 'src/transaction/trasaction.entity';
export declare class ContractorGstPurchase {
    id: number;
    enabled: boolean;
    date: string;
    description: string;
    amount: string;
    tendorId: number;
    contractorGstId: number;
    gstPercent: number;
    itcAmount: number;
    transactionId: number;
    isVerified: boolean;
    createdBy: number;
    createdTimestamp: string;
    updatedBy: number;
    updatedTimestamp: string;
    contractorGst: ContractorGst;
    tendor: Tendor;
    transaction: Transaction;
}
