import { Component, OnInit, OnDestroy ,Input} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthReq } from 'src/app/services/models/auth';
import { Router } from '@angular/router';
//import { NgxSpinnerService } from "ngx-spinner";
//import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private toast:ToastrService, private authserv:AuthService,private route:Router) {}
@Input() Obj={email:"",pswd:""}
failed:boolean=false;
public loading = false;
FailedMessage="";
  ngOnInit() {
    /**this.toast.success('Success', 'Loaded Successfully', {
      timeOut: 30000,
    });**/
  }
  ngOnDestroy() {
  }

  Login(data:AuthReq){
    this.loading = true;
    //this.spinner.show();
    this.failed=false;
    //alert("Request Data:"+JSON.stringify(data));
    this.authserv.Login(data).subscribe(d=>{
      this.loading = false;
      //this.spinner.hide();
      //alert(JSON.stringify(d));
      if(d.ResponseCode=="00"){
        localStorage.setItem("ProfileID",d.ProfileID);
        localStorage.setItem("Email",d.Email);
        localStorage.setItem("Phone",d.Phone);
        localStorage.setItem("FullNames",d.FullNames);
        this.route.navigateByUrl('/dashboard');

      }else{
        this.toast.error('Error', d.ResponseMessage, {
          timeOut: 3000,
        });
        this.failed=true;
        this.FailedMessage=d.ResponseMessage;
      }
    },error=>{

    })
  }

}
