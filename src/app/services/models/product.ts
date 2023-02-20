export interface AllProductsResp{
    allproductcnt: number;
    statuspending: number;
    statusactive: number;
    allproduct: ProductData[];
}
export interface ProductData{
    pID: number;
    productID: string;
    productName: string;
    added: string;
    status: number;
    statusID: number;
    statusName: string;
}
export interface InsertReq{
    productName:string;
}
export interface UpdateReq{
    status:number;
    productName:string;
    productID:string;
}
export interface Response{
    ResponseCode:string;
    ResponseMessage:string;
}