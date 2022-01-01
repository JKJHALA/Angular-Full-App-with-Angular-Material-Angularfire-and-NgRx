export interface UserProfile {
  ClientID?: number;
  CorporateID?: number;
  IsAdmin?: boolean;
  IsAutoLogin?: boolean;
  TokenExpiryDate?: string;
  TokenIssueDate?: string;
  TokenString?: string;
  UserTokenString?: string;
  UserID?: number;
  UserName?: string;
  Ticket?:string;
}
