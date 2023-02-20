import { Component, OnInit,Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { InsertReq,UpdateReq } from 'src/app/services/models/customer';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers=0;
  active=0;
  pending=0;
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
@Input() Obj={name:'',email:'',phone:'',address:''}
@Input() Obj2={name:'',status:0,customerID:'',email:'',phone:'',address:''}
  constructor(private cs:CustomerService,private modalService:NgbModal,private toast:ToastrService) { }

  ngOnInit(): void {
    this.ReturnCustomers();
  }

  ReturnCustomers(){
    this.cs.ReturnallCustomers().subscribe(d=>{
      this.rows=d.allcustomers;
      this.search=d.allcustomers;
      this.pending=d.statuspending;
      this.customers=d.allcustomercnt;
      this.active=d.statusactive;
    },err=>{

    })
  }
  SearchCustomerList(event){
    let s=event.target.value;
    //alert(s);
    if(s.length <=0){
      this.ReturnCustomers();
    }else{
      this.rows=this.search.filter(e => e.name === s);
    }
    
  }
  InsertCustomer(data:InsertReq){
    this.insert=false;
    this.insertfailed=false;
    this.insertmsg="";
    this.insertmsgfailed="";
    this.cs.InsertCustomer(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.insert=true;
      this.insertmsg=d.ResponseMessage;
      this.ReturnCustomers();
      this.toast.success(d.ResponseMessage);
      this.Obj={name:'',email:'',phone:'',address:''}
      }else{
        this.insertfailed=true;
      this.insertmsgfailed=d.ResponseMessage;
      
      this.toast.error(d.ResponseMessage);
      }
      
    },err=>{

    })
  }
  UpdateCustomer(data:UpdateReq){
    this.update=false;
    this.updatefailed=false;
    this.updatemsg="";
    this.updatemsgfailed="";
    this.cs.UpdateCustomer(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.update=true;
      this.updatemsg=d.ResponseMessage;
      this.ReturnCustomers();
      this.toast.success(d.ResponseMessage);
      }else{
        this.updatefailed=true;
      this.updatemsgfailed=d.ResponseMessage;
      
      this.toast.error(d.ResponseMessage);
      }
      
    },err=>{

    })
  }

  open(content) {
    this.insert=false;
  this.insertmsg="";
  this.insertfailed=false;
  this.insertmsgfailed="";
  
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
    this.Obj2={name:n,status:s,customerID:cID,email:e,phone:p,address:a}
    
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }




}
