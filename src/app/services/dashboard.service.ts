import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DashResp } from './models/dashboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
dashurl=environment.dashboardurl;
  constructor(private http:HttpClient) { }

  ReturnDashboard():Observable<DashResp>{
    return this.http.get<DashResp>(this.dashurl,{responseType:'json'});
  }
}
