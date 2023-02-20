export interface AuthReq{
    email:string;
    pswd:string;
}

export interface AuthResp{
    ResponseCode: string;
    ResponseMessage: string;
    FullNames: string;
    Email: string;
    Phone: string;
    ProfileID: string;
}