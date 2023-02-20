export interface AllCustomerResp{
    allcustomercnt: number;
    statuspending: number;
    statusactive: number;
    allcustomers: CustomerData[];
}
export interface CustomerData{
    custID: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    customerID: string;
    added: string;
    status: number;
    statusID: number;
    statusName: string;
}
export interface InsertReq{
    name:string;
    email:string;
    phone:string;
    address:string;
}
export interface UpdateReq{
    name:string;
    email:string;
    phone:string;
    address:string;
    status:number;
    customerID:string;
}
export interface Response{
    ResponseCode:string;
    ResponseMessage:string;
}