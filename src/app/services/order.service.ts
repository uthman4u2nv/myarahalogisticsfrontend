import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AllOrderResp,OrderItemsResp,OrderStatusResp,UpdateStatusReq,UpdateStatusResp } from './models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  allordersurl=environment.ordersurl;
  orderitemsurl=environment.orderitemurl;
  orderstatusurl=environment.orderstatusurl;
  updatestatusurl=environment.updatestatusurl;
  constructor(private http:HttpClient) { }

  ReturnAllOrders(): Observable<AllOrderResp>{
    return this.http.get<AllOrderResp>(this.allordersurl,{responseType:'json'});
  }
  ReturnOrderItems(order_no):Observable<OrderItemsResp[]>{
    return this.http.get<OrderItemsResp[]>(this.orderitemsurl+"/"+order_no,{responseType:'json'});
  }
  ReturnOrderStatus():Observable<OrderStatusResp[]>{
    return this.http.get<OrderStatusResp[]>(this.orderstatusurl,{responseType:'json'});
  }
  UpdateOrderStatus(data:UpdateStatusReq):Observable<UpdateStatusResp>{
    return this.http.put<UpdateStatusResp>(this.updatestatusurl,data,{responseType:'json'});
  }
}
