import { ContractorGst } from 'src/contractor-gst/contractor-gst.entity';
import { Tendor } from 'src/tendor/tendor.entity';
export declare class ContractorSale {
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
    contractorGstId: number;
    discount: number;
    createdBy: number;
    createdTimestamp: string;
    updatedBy: number;
    updatedTimestamp: string;
    contractorGst: ContractorGst;
    tendor: Tendor;
}
