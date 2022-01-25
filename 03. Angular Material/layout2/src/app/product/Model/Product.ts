
export interface Product {
    ProductID: number;
    AccountNumber: string;
    ClientID: number;
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
    CreatedDate? : string;
    ModifiedBy: string;
    ModifiedDate?: Date;
    UserID?: number;
    Stackable?: boolean;
    GroupDescription?:string;
  }
  
export function compareProducts(p1: Product, p2: Product) {
  const compare = p2.ProductID - p2.ProductID;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}