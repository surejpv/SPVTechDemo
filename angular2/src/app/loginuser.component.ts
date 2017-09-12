import { Component } from '@angular/core';
import {LoginUserService} from './login.user.service';
import {ModalModule} from "ng2-modal";

@Component({
  selector: 'login-user',
  templateUrl: 'app/login-create.html',
  styles:[`.containerBackGround{background:lightgrey;padding:10px 30px 30px 30px;margin-left:10px;margin-bottom:10px;
    margin-right:10px;border-radius:3px;}
    input.ng-valid{border-left:4px solid green;}
    input.ng-invalid{border-left:4px solid red;}
    .successImage{min-width:550px;}
    .errorImage {max-width: 550px;}`]
})
export class LoginuserComponent  { 
    constructor(private _loginUser:LoginUserService){}
     userName:string="SurejPV";
     password:string;
     errorMsg:string;
     responseToken:any = [];
     public imagePath:string="../images/";
     public successImage:string = "loggedin.png";
     public errorImage:string="wrongPwd.jpg";
     public fullPath:string = this.imagePath + this.successImage;
     public fullErrorPath:string = this.imagePath + this.errorImage;
     public displaySuccessModal=true;
     public displayErrorModal=true;

    onSubmit(value:any){
        this._loginUser.loginUser(this.userName, this.password)
        .subscribe(
            responseLoginUserData => {
                                        this.responseToken=responseLoginUserData,
                                        this.errorMsg = "User Login Successful!!";
                                       this.displaySuccessModal = true;
                                       console.log("displaySuccessModal is:",this.displaySuccessModal);
                                        
                                    },
            responseUserError => {
                                    this.errorMsg = responseUserError,
                                   // errorModal.open();
                                    this.displaySuccessModal = false;
                                    console.log("displayErrorModal is:",this.displayErrorModal);
                                }
            );
    }
}