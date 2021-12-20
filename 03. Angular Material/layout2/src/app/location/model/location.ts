import { LocationType } from "./location-type.enum";

export interface Location {
  LocationId?:number;
  CountryCode?: string;
  CountryName?: string;
  CountryId?: number;
  PostalCode?: string;
  PostalID?: number;
  CityName?: string;
  CityId?: number;
  StateCode?: string;
  StateId?: number;
  StateName?: string;
  LocationType?: LocationType;
  LocationTypeID?: number;
  Name?: string;
  Address1?: string;
  Address2?: string;
  ContactName?: string;
  ContactPhone?: string;
  ContactEmail?: string;
  FaxNumber?: string;
  PickupDate?: Date;
  ExpectedPickupDate?: Date;
  ExpectedPickupReadyTime?: string;
  ExpectedPickupCloseTime?: string;
  PickupReadyTime?: string;
  PickupCloseTime?: string;

  DeliveryDate?: Date;
  ExpectedDeliveryDate?: Date;
  ExpectedDeliveryReadyTime?: string;
  ExpectedDeliveryCloseTime?: string;
  DeliveryReadyTime?: string;
  DeliveryCloseTime?: string;
  PortCodeID?: number;
  IsValid?: boolean;
  PortCode?: string;
  FiveDigitPortCode?: string;

  /*YATIN ADDED BY YATIN*/
  ShortName?:string;

  ActivateDate?:Date | string;
  DeActivationDate?:Date;
  IsActive?:Boolean;
  LocationReference?:string;
  InboundAccount?:string;
  OutboundAccount?:string;
  Notes?:string;
  Approve?:Boolean;
  UnApproved?:Boolean;
  ContactPhoneExt?:string;
  ClientId?:string;
}


export function compareLocations(l1: Location, l2: Location):number {
  if (l1.Name! < l2.Name!) { return 1 } else { return -1 }
}
