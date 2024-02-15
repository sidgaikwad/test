import { Tendor } from 'src/tendor/tendor.entity';
export declare class BankGurantee {
    id: number;
    enabled: boolean;
    title: string;
    tendorId: number;
    description: string;
    isBgReleased: boolean;
    bgReleaseAmount: string;
    bgReleaseDate: string;
    fdrDeposit: number;
    fdrNo: string;
    fdrDate: string;
    bankGuranteeExpiry: string;
    amount: number;
    createdBy: number;
    createdTimestamp: string;
    updatedBy: number;
    updatedTimestamp: string;
    isFdr: boolean;
    tendor: Tendor;
}
