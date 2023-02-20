
export interface AllUsersDetails{
    UserCount:number;
    Pending: number;
    Active: number;
    AllUsers: UserData[];
}

export interface UserData{
    profileID: string;
    FullNames: string;
    Email: string;
    Phone: string;
    RoleID: number;
    roleName: string;
    status: number;
}

export interface ChangeStatusReq{
    status:number;
    profileID:string;
}
export interface ChangeStatusResp{
    ResponseCode:string;
    ResponseMessage:string;
}
export interface CheckUserReq{
    Email:string;
}
export interface CheckUserResp{
    ResponseCode:string;
    ResponseMessage:string;
}
export interface InsertUserReq{
    fNames:string;
    email:string;
    phone:string;
    roleID:string;
}
export interface InsertUserResp{
    ResponseCode:string;
    ResponseMessage:string;
}

export interface ChangeRoleReq{
    roleID:number;
    profileID:string;
}
export interface ChangeRoleResp{
    ResponseCode:string;
    ResponseMessage:string;
}

export interface ChangePasswordReq{
    pswd:string;
    Email:string;
}
export interface ChangePasswordResp{
    ResponseCode:string;
    ResponseMessage:string;
}

export interface ProfileUpdateReq{
    FullNames:string;
    Phone:string;
    Email:string;
    profileID:string;
}
export interface ProfileUpdateResp{
    ResponseCode:string;
    ResponseMessage:string;
}