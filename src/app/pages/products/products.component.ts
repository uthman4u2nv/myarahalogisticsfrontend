import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AllProductsResp,InsertReq,UpdateReq } from 'src/app/services/models/product';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products=0;
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
@Input() Obj={productName:''}
@Input() Obj2={productName:'',status:0,productID:''}
  constructor(private ps:ProductService,private toast:ToastrService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.ReturnAllProducts();
  }

  ReturnAllProducts(){
    this.ps.ReturnAllproducts().subscribe(d=>{
      this.rows=d.allproduct;
      this.products=d.allproductcnt;
      this.active=d.statusactive;
      this.pending=d.statuspending;
    },err=>{

    })
  }
  //product search
  SearchProductList(event){
    let s=event.target.value;
    if(s.length <=0){
      this.ReturnAllProducts();
    }else{
      this.rows=this.rows.filter(e => e.productName === s);
    }
    
  }
  InsertProduct(data:InsertReq){
    this.insert=false;
    this.insertfailed=false;
    this.insertmsg="";
    this.insertmsgfailed="";
    this.ps.InsertProduct(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.insert=true;
      this.insertmsg=d.ResponseMessage;
      this.ReturnAllProducts();
      this.toast.success(d.ResponseMessage);
      }else{
        this.insertfailed=true;
      this.insertmsgfailed=d.ResponseMessage;
      
      this.toast.error(d.ResponseMessage);
      }
      
    },err=>{

    })
  }
  UpdateProduct(data:UpdateReq){
    this.update=false;
    this.updatefailed=false;
    this.updatemsg="";
    this.updatemsgfailed="";
    this.ps.UpdateProduct(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.update=true;
      this.updatemsg=d.ResponseMessage;
      this.ReturnAllProducts();
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

  updateopen(content,vNo,st,pID){
    this.Obj2={productName:vNo,status:st,productID:pID}
    
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

}
