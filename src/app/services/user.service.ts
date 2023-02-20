import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProfileUpdateReq,ProfileUpdateResp,ChangePasswordReq,ChangePasswordResp, AllUsersDetails,ChangeStatusReq,ChangeStatusResp,CheckUserResp,CheckUserReq,InsertUserReq,InsertUserResp,ChangeRoleReq,ChangeRoleResp } from './models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersurl=environment.usersurl;
  disableuserurl=environment.changeuserstatusurl;
  checkuserurl=environment.checkemailurl;
  insertuserurl=environment.insertuserurl;
  changeroleurl=environment.changeroleurl;
  changepasswordurl=environment.changepasswordurl;
  profileupdateurl=environment.profileupdateurl;
  constructor(private http:HttpClient) { }

  ReturnAllUsers():Observable<AllUsersDetails>{
    return this.http.get<AllUsersDetails>(this.usersurl,{responseType:'json'});
  }
  ChangeStatus(data:ChangeStatusReq):Observable<ChangeStatusResp>{
    return this.http.put<ChangeStatusResp>(this.disableuserurl,data,{responseType:'json'});
  }
  CheckUser(data:CheckUserReq):Observable<CheckUserResp>{
    return this.http.post<CheckUserResp>(this.checkuserurl,data,{responseType:'json'});
  }
  InsertUser(data:InsertUserReq):Observable<InsertUserResp>{
    return this.http.post<InsertUserResp>(this.insertuserurl,data,{responseType:'json'})
  }
  ChangeRole(data:ChangeRoleReq):Observable<ChangeRoleResp>{
    return this.http.put<ChangeRoleResp>(this.changeroleurl,data,{responseType:'json'});
  }
  ChangePassword(data:ChangePasswordReq):Observable<ChangePasswordResp>{
    return this.http.put<ChangePasswordResp>(this.changepasswordurl,data,{responseType:'json'});
  }
  ProfileUpdate(data:ProfileUpdateReq):Observable<ProfileUpdateResp>{
    return this.http.put<ProfileUpdateResp>(this.profileupdateurl,data,{responseType:'json'});
  }
}
