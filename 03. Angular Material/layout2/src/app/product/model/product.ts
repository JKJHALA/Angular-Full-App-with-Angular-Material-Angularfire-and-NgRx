export interface Product {
  AccountNumber: string;
  ClientID: number;
  ProductID: number;
  Description: string;
  Pallets?: number;
  Pieces?: number;
  Hazmat?: boolean;
  NMFC: string;
  Class: string;
  Weight: number;
  Height?: number;
  Lenght?: number;
  Width?: number;
  PackageTypeID?: number;
  Status: boolean;
  HazmatContact: string;
  Commodity: string;
  ProductGroupID?: number;
  CreatedBy: string;
  ModifiedBy: string;
  ModifiedDate?: Date;
  UserID?: number;
  Stackable?: boolean;
}
