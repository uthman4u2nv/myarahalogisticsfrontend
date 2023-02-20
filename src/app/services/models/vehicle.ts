export interface VehicleResp{
    allvehiclescnt:number
    statuspending: number;
    statusactive: number;
    allvehicles: VehicleData[];
}
export interface VehicleData{
    vID: number;
    vehicleID: string;
    vRegNo: string;
    added: string;
    status: number;
    statusID: number;
    statusName: string;
}
export interface UpdateReq{
    status:number;
    vRegNo:string;
    vehicleID:string;
}
export interface UpdateResp{
    ResponseCode:string;
    ResponseMessage:string;
}
export interface InsertReq{
    vRegNo:string;
}
export interface InsertResp{
    ResponseCode:string;
    ResponseMessage:string;
}