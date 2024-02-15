import { DocumentMaster } from 'src/document-type-master/document-type-master.entity';
import { Tendor } from 'src/tendor/tendor.entity';
export declare class Documents {
    id: number;
    enabled: boolean;
    title: string;
    description: string;
    image: string;
    document: string;
    tendorId: number;
    documentMasterId: number;
    createdTimestamp: string;
    createdBy: number;
    updatedBy: number;
    updatedTimestamp: string;
    tendor: Tendor;
    documentMaster: DocumentMaster;
}
