import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthReq,AuthResp } from './models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authurl=environment.authurl;
  constructor(private http:HttpClient) { }

  Login(data:AuthReq): Observable<AuthResp>{
    return this.http.post<AuthResp>(this.authurl,data,{responseType:'json'})
  }
}
