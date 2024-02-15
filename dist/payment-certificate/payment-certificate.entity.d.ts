import { PaymentCertificateMaster } from 'src/payment-certificate-master/payment-certificate-master.entity';
export declare class PaymentCertificate {
    id: number;
    enabled: boolean;
    base: number;
    cgst: number;
    sgst: number;
    igst: number;
    gross: number;
    description: string;
    date: string;
    gstAmt: number;
    deductionAmt: number;
    netAmountInAccount: number;
    comissionOnGrossAmt: number;
    otherAmt: number;
    payableAmt: number;
    payableAmtToContractor: number;
    payableGross: number;
    payableBase: number;
    payableGst: number;
    percentcomissionOnGrossAmt: number;
    paymentCertificateMasterId: number;
    createdBy: number;
    createdTimestamp: string;
    updatedBy: number;
    updatedTimestamp: string;
    paymentCertificateMaster: PaymentCertificateMaster;
}
