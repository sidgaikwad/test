import { BankGurantee } from 'src/bankgurantee/bankgurantee.entity';
import { Contractor } from 'src/contractor/contractor.entity';
import { DepartmentMaster } from 'src/department-master/department-master.entity';
export declare class Tendor {
    id: number;
    enabled: boolean;
    tendorNumber: string;
    departmentId: number;
    name: string;
    bidType: string;
    tendorType: boolean;
    bidSystem: number;
    tendorClosingDate: string;
    dateUploadTender: string;
    policyExpiryDate: string;
    extensionTill: string;
    preBidMeeting: boolean;
    advertisedValue: string;
    revisedValue: string;
    acceptanceLetterNumber: string;
    contractAgreementNumber: string;
    tenderingSection: string;
    biddingStyle: string;
    biddingUnit: number;
    earnestmoney: number;
    validityOffer: number;
    bidSecurityDeclaration: boolean;
    tenderDocCost: string;
    periodComp: string;
    contractType: string;
    contractCat: string;
    bidStartDate: string;
    jointVenture: boolean;
    rankingOrder: string;
    expenditureType: string;
    contractorIds: number;
    bankgIds: number;
    isEmdReturn: boolean;
    isCompleted: boolean;
    completedDate: string;
    emdReturnDate: string;
    preBidDate: string;
    createdBy: number;
    createdTimestamp: string;
    status: string;
    updatedBy: number;
    updatedTimestamp: string;
    contractor: Contractor[];
    department: DepartmentMaster;
    bankg: BankGurantee[];
}
