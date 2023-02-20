import { Component, OnInit, ElementRef,Input } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { ChangePasswordReq,ProfileUpdateReq } from 'src/app/services/models/users';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  closeResult="";
  FullNames="";
  Email="";
  Phone="";
  ProfileID="";
  password:Boolean=false;
  passwordfailed:Boolean=false;
  passwordmsg="";
  passwordmsgfailed="";
  check:Boolean=false;
  check2:Boolean=false;
  msgfailed="";
  msgsuccess="";
  update:Boolean=false;
  updatefailed:Boolean=false;
  updatemsg="";
  updatemsgfailed="";
  @Input() ChangePswdObj={pswd:"",profileID:''}
  @Input() ProfileUpdateObj={FullNames:"",Email:"",Phone:"",profileID:""}
  constructor(private toast:ToastrService,location: Location,  private element: ElementRef, private router: Router,private modalService:NgbModal,private us:UserService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    //alert(localStorage.getItem("FullNames"));
    this.FullNames=localStorage.getItem("FullNames");
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  Logout(){
    if(confirm("Are you sure you want to logout")) {
      //console.log("Implement delete functionality here");
      localStorage.clear();
    this.router.navigateByUrl('/login');
    }
    
  }
  ChangePassword(data:ChangePasswordReq){
    this.password=false;
    this.passwordmsg="";
    this.passwordfailed=false;
    this.passwordmsgfailed="";
    this.ChangePswdObj.profileID=localStorage.getItem("ProfileID");
    this.us.ChangePassword(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.password=true;
        this.passwordmsg=d.ResponseMessage;
      }else{
        this.passwordfailed=true;
        this.passwordmsgfailed=d.ResponseMessage;
      }
    },err=>{

    })
  }
  UpdateProfile(data:ProfileUpdateReq){
    this.update=false;
        this.updatemsg="";
    this.updatefailed=false;
        this.updatemsg="";
        this.ProfileUpdateObj.profileID=localStorage.getItem("ProfileID");
    this.us.ProfileUpdate(data).subscribe(d=>{
      if(d.ResponseCode=="00"){
        this.toast.success(d.ResponseMessage);
        localStorage.setItem("ProfileID",this.ProfileUpdateObj.profileID);
        localStorage.setItem("Email",this.ProfileUpdateObj.Email);
        localStorage.setItem("Phone",this.ProfileUpdateObj.Phone);
        localStorage.setItem("FullNames",this.ProfileUpdateObj.FullNames);
        this.update=true;
        this.updatemsg=d.ResponseMessage;
      }else{
        this.updatefailed=true;
        this.updatemsg=d.ResponseMessage;
        this.toast.error(d.ResponseMessage);
      }
    },err=>{

    })
  }
  open(content) {
    this.password=false;
    this.passwordmsg="";
    this.passwordfailed=false;
    this.passwordmsgfailed="";
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
      
      if(d.ResponseCode=="69"){
        this.ProfileUpdateObj.Email="";
        this.check=true;
        this.msgfailed=d.ResponseMessage;
      }else{
        this.check2=true;
        this.msgsuccess="Valid";
      }
    })
  }
  profileopen(content) {
    let fNames=localStorage.getItem("FullNames");
    this.Email=localStorage.getItem("Email");
    this.Phone=localStorage.getItem("Phone");
    
    this.FullNames=fNames;
        this.ProfileUpdateObj={FullNames:fNames,Email:localStorage.getItem("Email"),Phone:localStorage.getItem("Phone"),profileID:localStorage.getItem("ProfileID")}
    //alert(JSON.stringify(this.ProfileUpdateObj));
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
