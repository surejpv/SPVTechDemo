import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginUserService {
    constructor(private _http: Http){}
    private _restUrl:string="http://localhost:4001/sessions/create";
    //private data = '{"username":"SurejPV55111135","password":"123123","extra":"Hello"}'
    private dataFormat:any;
    loginUser(username:string, password:string){
        console.log(username);
        console.log(password);
        this.dataFormat = {"username":username,"password":password}
        console.log(this.dataFormat);
        //return [{"id":"212121212", "token":"5555555555555"}]
        return this._http.post(this._restUrl,this.dataFormat)
        .map((response:Response) => response.json())
        .catch(this._errorHandler);
    }
    _errorHandler(error:Response){
        //console.log(error._body);
        return Observable.throw(error || "server error");
        
    }
}