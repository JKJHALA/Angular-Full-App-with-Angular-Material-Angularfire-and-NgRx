import { of } from "rxjs";

export interface ClientMasterMiniModel
{
  ClientID?:number;
  CorporateID?:number;
  ClientName?:string;
  AccountID?:number;
  ClientType?:string;
  ShortName?:string;
}

export function compareClients(p1: ClientMasterMiniModel, p2: ClientMasterMiniModel) {
  const compare = p2.ClientID! - p1.ClientID!;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}