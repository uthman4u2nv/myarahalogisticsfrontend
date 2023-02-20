import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleResp,UpdateReq,UpdateResp,InsertReq,InsertResp } from './models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleurl=environment.vehicleurl;
  insertvehicleurl=environment.insertvehicleurl;
  updatevehicleurl=environment.updatevehicleurl;
  constructor(private http:HttpClient) { }

  ReturnAllVehicles():Observable<VehicleResp>{
    return this.http.get<VehicleResp>(this.vehicleurl,{responseType:'json'})
  }
  UpdateVehicle(data:UpdateReq):Observable<UpdateResp>{
    return this.http.put<UpdateResp>(this.updatevehicleurl,data,{responseType:'json'});
  }
  InsertVehicle(data:InsertReq):Observable<InsertResp>{
    return this.http.post<InsertResp>(this.insertvehicleurl,data,{responseType:'json'});
  }
}
