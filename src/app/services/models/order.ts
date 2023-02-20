export interface AllOrderResp{
    totalorders: number;
    totalordered: number;
    totalprocessing: number;
    totaldelivered: number;
    totalcancelled: number;
    order_data:AllOrdersdata[];
}
export interface AllOrdersdata{
        date: string;
        customerID: string;
        order_no: string;
        status: number;
        status_name: string;
        name: string;
        email: string;
        phone: string;
        address: string;
}

export interface OrderItemsResp{
    productID: number;
    qty: number;
    productName: string;
}
export interface OrderStatusResp{
    statusID:number;
    status:string;
}
export interface UpdateStatusReq{
    status:number;
    order_no:string;
}
export interface UpdateStatusResp{
    ResponseCode:string;
    ResponseMessage:string;
}