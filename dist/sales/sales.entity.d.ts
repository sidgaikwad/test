import { Tendor } from 'src/tendor/tendor.entity';
export declare class Sales {
    id: number;
    enabled: boolean;
    base: number;
    cgst: number;
    sgst: number;
    igst: number;
    gross: number;
    description: string;
    tendorId: number;
    billNumber: string;
    date: string;
    isAddedToConGSt: boolean;
    createdTimestamp: string;
    createdBy: number;
    updatedBy: number;
    updatedTimestamp: string;
    tendor: Tendor;
}
