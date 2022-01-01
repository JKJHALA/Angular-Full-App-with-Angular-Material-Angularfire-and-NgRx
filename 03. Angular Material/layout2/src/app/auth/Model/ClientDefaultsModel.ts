export interface ClientDefaultsModel {
    AcRefNo?: string;
    AccountInfoID?: number;
    Address1?: string;
    Address2?: string;
    AllocationTypeId?: number;
    AllowEditBillTo?: boolean;
    AnyOfRefsAndPONoIsRequired?: boolean;
    ApplicationID?: number;
    BaseCurrencyCode?: string;
    BilltoLocationID?: number;
    BolTemplate?: number;
    BolTemplateID?: number;
    BolTemplateName?: string;
    CarrierBilltoLocationID?: number;
    CarrierID?: string;
    CityId?: number;
    ClientDefaultID?: number;
    ClientID?: number;
    ClientTMSIntegration?: boolean;
    ContactEmail?: string;
    ContactFax?: string;
    ContactPhone?: string;
    CorporateID?: number;
    CountryId?: number;
    CreatedBy?: string;
    CreatedDate?: Date;
    CreditLimitExceedAction?: string;
    CustomerManagedShipment?: boolean;
    DefaultPackageType?: number;
    DestLocationID?: number;
    DestinationCountryID?: number;
    DisplayBenchMarkCarrier?: boolean;
    DisplayTrueCost?: boolean;
    DownloadPOD?: boolean;
    EquipmentID?: number;
    FaxNumber?: string;
    GenerateCarrierPickupOn?: number;
    InvoiceTemplate?: number;
    InvoiceTemplateID?: number;
    InvoiceTemplateName?: string;
    InvoicingMethod?: string;
    IsCalculateClassByPCF?: boolean;
    IsLWHRequired?: boolean;
    IsNmfcRequired?: boolean;
    IsPalletsRequired?: boolean;
    MaxLinearFeet?: number;
    ModifiedBy?: string;
    ModifiedDate?: Date;
    NMFC?: string;
    Name?: string;
    NumberOfPallets?: string;
    OriginCountryID?: number;
    OriginLocationID?: number;
    PONumberDescription?: string;
    PONumberFormat?: string;
    PaymentTermID?: number;
    PostalID?: number;
    ProductClass?: string;
    ProductDescription?: string;
    ProductID?: number;
    ProductNMFC?: string;
    ProfileID?: number;
    QbDateType?: number;
    QbFullInvNoSync?: boolean;
    QuickDiscountPercent?: number;
    QuoteComment?: string;
    QuoteType?: number;
    RatingResultCount?: number;
    ShipmentAuditTolerance?: number;
    ShowFirstLevelSubClient?: boolean;
    ShowTLWeightMessage?: boolean;
    StateId?: number;
    StatusEDIId?: number;
    TLWeightLimit?: number;
    TLWeightMessageText?: string;
    UsePayTermBillTo?: boolean;
    UsePaymentBillto?: boolean;
}