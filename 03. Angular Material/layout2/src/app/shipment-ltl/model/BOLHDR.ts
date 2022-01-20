export interface BOLHDR {
  ClientId: number,
  LadingID: number,
  ClientLadingNo: string,
  ProNumber: string,
  CarrierName: string,
  PickupDate: Date,
  OrgName: string,
  DestName: string,
  BolStatusname: string,
  OriginCityStatePostal: string,
  DestinationCityStatePostal: string
}

export function compareShipmentLTLs(p1: BOLHDR, p2: BOLHDR) {
  const compare = p2.LadingID - p2.LadingID;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}