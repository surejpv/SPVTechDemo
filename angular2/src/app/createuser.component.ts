import { Component, OnInit} from '@angular/core';
import {CreateUserService} from './create.user.service';
import {Router} from '@angular/router';
import {UserDetailsComponent} from './user.details.component';
import {UserDataService} from './userdata.shared.service';

@Component({
  selector: 'create-user',
  templateUrl: 'app/create-user.html',
  styles:[`.containerBackGround{background:lightgrey;padding:10px 30px 30px 30px;margin-right:10px;
    margin-left:10px;margin-bottom:10px;border-radius:3px;}
    input.ng-valid{border-left:4px solid green;}
    input.ng-invalid{border-left:4px solid red;}`]
})
export class CreateuserComponent{ 
    responseToken:any = [];
    errorMsg: string;
    constructor(
        private _usercreate:CreateUserService,
        private router:Router,
        public userDataService: UserDataService){};
    //public userName:string="SurejPV";
    public password:string;
   // public extraInfo:string;
    //public userlastName:string="";
    public message:string="";  

    get userName():string { 
        return this.userDataService.userName; 
    } 
    set userName(value: string) { 
        this.userDataService.userName = value; 
    } 
    get userlastName():string { 
        return this.userDataService.userlastName; 
    } 
    set userlastName(value: string) { 
        this.userDataService.userlastName = value; 
    } 
    get extraInfo():string { 
        return this.userDataService.extraInfo; 
    } 
    set extraInfo(value: string) { 
        this.userDataService.extraInfo = value; 
    }    


    onSubmit(value:any){
        console.log(value);
        this._usercreate.createUser(this.userName, this.password, this.extraInfo)
            .subscribe(
                responseUserCreateData => {
                                            this.responseToken=responseUserCreateData,
                                            this.errorMsg = "User Creation Successful!!";
                                            this.router.navigate(['/userdetails',this.userName]);
                                        },
                responseUserError => {
                                       // this.errorMsg = responseUserError
                                       this.errorMsg = "User Creation Failed. User already exists!!";
                                    }
                );
        
    }

}