import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AllProductsResp,InsertReq,UpdateReq,Response } from './models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allproductsurl=environment.allproductsurl;
  insertproducturl=environment.insertproductsurl;
  updateproducturl=environment.updateproducturl;
  constructor(private http:HttpClient) { }

  ReturnAllproducts():Observable<AllProductsResp>{
    return this.http.get<AllProductsResp>(this.allproductsurl,{responseType:'json'});
  }
  InsertProduct(data:InsertReq): Observable<Response>{
    return this.http.post<Response>(this.insertproducturl,data,{responseType:'json'});
  }
  UpdateProduct(data:UpdateReq): Observable<Response>{
    return this.http.put<Response>(this.updateproducturl,data,{responseType:'json'});
  }
}
