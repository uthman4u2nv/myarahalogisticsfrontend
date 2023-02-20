import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { InsertUserReq,ChangeRoleReq } from 'src/app/services/models/users';
  


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  rows=[];
  users=0;
  pending=0;
  active=0;
  closeResult="";
  msgfailed="";
  msgsuccess="";
  insert:Boolean=false;
  insertfailed:Boolean=false;
  insertmsg="";
  insertmsgfailed="";

  changerole:Boolean=false;
  changerolefailed:Boolean=false;
  changerolemsg="";
  changerolemsgfailed="";
  check:Boolean=false;
  check2:Boolean=false;
  fullNames="";
  Email="";
  Phone="";
  roleID=0;
  profileID="";
  @Input() Obj={fNames:"",email:"",phone:"",roleID:""}
  @Input() ChangeRoleObj={roleID:0,profileID:""}
  constructor(private us:UserService,private toast:ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ReturnAllUsers();
  }
  ChangeStatus(pID,sstatus){
    
    let data={
      status:sstatus,
      profileID:pID
    }
    this.us.ChangeStatus(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.toast.success(d.ResponseMessage);
        alert(d.ResponseMessage);
        this.ReturnAllUsers();
      }else{
        alert(d.ResponseMessage);
        this.toast.error(d.ResponseMessage);
      }
    },(error)=>{

    })

  }
  ReturnAllUsers(){
    this.us.ReturnAllUsers().subscribe(d=>{
      this.active=d.Active;
      this.pending=d.Pending;
      this.users=d.UserCount;
      this.rows=d.AllUsers;
    })
  }
InsertUser(data:InsertUserReq){
  this.insert=false;
  this.insertmsg="";
  this.insertfailed=false;
  this.insertmsgfailed="";
  //alert(JSON.stringify(data));
  this.us.InsertUser(data).subscribe(d=>{
    if(d.ResponseCode=="00"){
      this.Obj={fNames:"",email:"",phone:"",roleID:""}
      this.toast.success(d.ResponseMessage);
      this.insert=true;
      this.insertmsg=d.ResponseMessage;
      this.ReturnAllUsers();
    }else{
      this.toast.error(d.ResponseMessage);
      this.insertfailed=true;
      this.insertmsgfailed=d.ResponseMessage;
    }
    
  })
}
ChangeRole(data:ChangeRoleReq){
  this.changerole=false;
  this.changerolefailed=false;
  this.changerolemsg="";
  this.changerolemsgfailed="";
  //alert("Change Role:"+JSON.stringify(data));
  this.us.ChangeRole(data).subscribe(d=>{
    if(d.ResponseCode=="00"){
      this.ChangeRoleObj={roleID:0,profileID:""}
      this.toast.success(d.ResponseMessage);
      this.changerole=true;
      this.changerolemsg=d.ResponseMessage;
      this.ReturnAllUsers();
    }else{
      this.toast.error(d.ResponseMessage);
      this.changerolefailed=true;
      this.changerolemsgfailed=d.ResponseMessage;
    }
    
  })
}

  CheckEmail(event){
    this.check=false;
    this.check2=false;
    this.msgfailed="";
    this.msgsuccess="";
    let email=event.target.value;
    let data={
      Email:email
    }
    this.us.CheckUser(data).subscribe(d=>{
      //alert("Response Message:"+d.ResponseMessage);
      if(d.ResponseCode=="69"){
        this.Obj.email="";
        this.check=true;
        this.msgfailed=d.ResponseMessage;
      }else{
        this.check2=true;
        this.msgsuccess="Valid";
      }
    })
  }
changeroleopen(content,fullNames,Email,Phone,roleID,profileID){
  this.changerole=false;
  this.changerolefailed=false;
  this.changerolemsg="";
  this.changerolemsgfailed="";
  this.fullNames=fullNames;
  this.Email=Email;
  this.Phone=Phone;
  this.ChangeRoleObj.roleID=roleID;
  this.ChangeRoleObj.profileID=profileID;
  
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

  open(content) {
    this.insert=false;
  this.insertmsg="";
  this.insertfailed=false;
  this.insertmsgfailed="";
  this.changerole=false;
  this.changerolefailed=false;
  this.changerolemsg="";
  this.changerolemsgfailed="";
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

}
