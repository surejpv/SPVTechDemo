import { Component } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';
import {CreateUserService} from './create.user.service';
import {LoginUserService} from './login.user.service';

@Component({
  selector: 'my-app',
  /*template: `<h1>Welcome to {{name}}</h1>
 <p>Value entered in child element is {{childData}} </p>
 <label> I am in parent element. </label>
  <input type="text" #inputText (keyup)="0">
              <user-create-element (childEvent)="childData=$event" [parentDataEntered]="inputText.value"></user-create-element>
              <h2>{{name | uppercase}}</h2>
              <h2>{{name | slice:1:3}}</h2>
              <h2>{{8.56746|number:'2.2-3'}}</h2>
              <h2>{{9500 | currency:'USD':true}} </h2>
              <h2>{{date|date:'fullDate'}}</h2>
              <h2>{{date|date:'shortDate'}}</h2>
              <login-user></login-user>`,*/
  template: `<h1>Welcome to {{name}}</h1>
             <create-user></create-user>
             <router-outlet></router-outlet>
             <login-user></login-user>
             `,
  providers:[CreateUserService,LoginUserService]
})
export class AppComponent  { 
  name = 'Angular2'; 
  date=new Date();
  public childData:string;

}
