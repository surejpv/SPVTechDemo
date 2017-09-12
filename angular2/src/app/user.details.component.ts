import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {UserDataService} from './userdata.shared.service';

@Component({
    selector: 'user-detail',
    templateUrl: './userdetail.component.html',
    styleUrls: ['./userdetail.component.css']
})
export class UserDetailsComponent implements OnInit {
    public userNameEntered:string;
    constructor(
        private route:ActivatedRoute,
        public userDataService:UserDataService) { }
    ngOnInit() { 
        //let userName = this.route.snapshot.params['username'];
        this.route.params.subscribe((params:Params)=>{
            let userName = params['username'];
            //this.userNameEntered = userName;
        })
        
    }
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
}