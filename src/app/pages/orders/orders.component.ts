import { Component, OnInit,Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UpdateStatusReq } from 'src/app/services/models/order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  customers=0;
  totalcancelled=0;
  totaldelivered=0;
  totalprocessing=0;
  totalordered=0;
  totalorders=0;
  closeResult="";
  msgfailed="";
  msgsuccess="";
  insert:Boolean=false;
  insertfailed:Boolean=false;
  insertmsg="";
  insertmsgfailed="";
  update:Boolean=false;
  updatefailed:Boolean=false;
  updatemsg="";
  updatemsgfailed="";
  search=[];
  p=1;
rows=[];
rows2=[];
name="";
address="";
email="";
phone="";
status=0;
details=[];
status_name="";
order_no="";
date="";
r=[];
updatestatus:boolean=false;
updatestatusmsg="";
@Input() Obj={status:0,order_no:""}
  constructor(private toast:ToastrService,private modalService:NgbModal,private os:OrderService) { }

  ngOnInit(): void {
    this.ReturnOrder();
  }
  
  ReturnOrder(){
    this.os.ReturnAllOrders().subscribe(d=>{
      //alert("Orders:"+d.totalorders);
      this.totalcancelled=d.totalcancelled;
      this.totaldelivered=d.totaldelivered;
      this.totalprocessing=d.totalprocessing;
      this.totalordered=d.totalordered;
      this.totalorders=d.totalorders;
      this.rows=d.order_data;
    },err=>{

    })
  }
  ReturnStatus(){
    this.os.ReturnOrderStatus().subscribe(d=>{
      this.r=d;
    },err=>{

    })
  }
  SearchCustomerList(event){
    let s=event.target.value;
    //alert(s);
    if(s.length <=0){
      this.ReturnOrder();
    }else{
      this.rows=this.search.filter(e => e.name === s);
    }
    
  }
  ReturnOrderItems(order_no){
    this.os.ReturnOrderItems(order_no).subscribe(d=>{
     // alert(JSON.stringify(d));
      this.rows2=d;
    },err=>{

    })
  }
  opendetails(content,name,email,phone,address,status,status_name,order_no,date) {
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.address=address;
    this.status=status;
    this.status_name=status_name;
    this.order_no=order_no;
    this.date=date;
    this.insert=false;
  this.insertmsg="";
  this.insertfailed=false;
  this.insertmsgfailed="";
  this.ReturnStatus();
  this.Obj.order_no=order_no;
  this.Obj.status=status;

  this.ReturnOrderItems(order_no);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  UpdateStatus(data:UpdateStatusReq){
    this.os.UpdateOrderStatus(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        //this.updatestatus=true;
        this.toast.success(d.ResponseMessage);
        this.ReturnOrderItems(this.Obj.order_no);
      }else{
        this.toast.error(d.ResponseMessage);
      }
    })
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  updateopen(content,n,e,p,a,s,cID){
    //this.Obj2={productName:vNo,status:st,productID:pID}
    //this.Obj2={name:n,status:s,customerID:cID,email:e,phone:p,address:a}
    this.ReturnStatus();
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }


}
