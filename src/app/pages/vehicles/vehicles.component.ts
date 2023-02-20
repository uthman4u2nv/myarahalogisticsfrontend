import { Component, OnInit,Input } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { VehicleResp,InsertReq,UpdateReq } from 'src/app/services/models/vehicle';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles=0;
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
rows=[];
@Input() Obj={vRegNo:''}
@Input() Obj2={vRegNo:'',status:0,vehicleID:''}
  constructor(private vs:VehicleService,private toast:ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ReturnAllVehicles();
  }

  ReturnAllVehicles(){
    this.vs.ReturnAllVehicles().subscribe(d=>{
      this.vehicles=d.allvehiclescnt;
      this.pending=d.statuspending;
      this.active=d.statusactive;
      this.rows=d.allvehicles;
    })
  }
  InsertVehicle(data:InsertReq){
    this.insert=false;
    this.insertfailed=false;
    this.insertmsg="";
    this.insertmsgfailed="";
    this.vs.InsertVehicle(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.insert=true;
      this.insertmsg=d.ResponseMessage;
      this.ReturnAllVehicles();
      this.toast.success(d.ResponseMessage);
      }else{
        this.insertfailed=true;
      this.insertmsgfailed=d.ResponseMessage;
      
      this.toast.error(d.ResponseMessage);
      }
      
    },err=>{

    })
  }
  UpdateVehicle(data:UpdateReq){
    this.update=false;
    this.updatefailed=false;
    this.updatemsg="";
    this.updatemsgfailed="";
    this.vs.UpdateVehicle(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.update=true;
      this.updatemsg=d.ResponseMessage;
      this.ReturnAllVehicles();
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

  updateopen(content,vNo,st,vID){
    this.Obj2={vRegNo:vNo,status:st,vehicleID:vID}
    
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }



}
