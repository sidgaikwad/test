import { Sales } from 'src/sales/sales.entity';
import { Tendor } from 'src/tendor/tendor.entity';
export declare class Reciept {
    id: number;
    enabled: boolean;
    amount: number;
    date: string;
    deductionAmount: number;
    deductionType: string;
    securityDeposit: number;
    description: string;
    tendorId: number;
    salesId: number;
    createdTimestamp: string;
    createdBy: number;
    updatedBy: number;
    updatedTimestamp: string;
    tendor: Tendor;
    sales: Sales;
}
