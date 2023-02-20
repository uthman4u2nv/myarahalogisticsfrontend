import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { InsertReq,UpdateReq,Response,AllCustomerResp } from './models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  allcustomersurl=environment.allcustomersurl;
  insertcustomerurl=environment.insertcustomersurl;
  updatecustomerurl=environment.updatecustomersurl;
  constructor(private http:HttpClient) { }

  ReturnallCustomers(): Observable<AllCustomerResp>{
    return this.http.get<AllCustomerResp>(this.allcustomersurl,{responseType:'json'});
  }
  InsertCustomer(data:InsertReq): Observable<Response>{
    return this.http.post<Response>(this.insertcustomerurl,data,{responseType:'json'});
  }
  UpdateCustomer(data:UpdateReq): Observable<Response>{
    return this.http.put<Response>(this.updatecustomerurl,data,{responseType:'json'});
  }
}
