import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {LoginuserComponent} from './loginuser.component';
import {CreateuserComponent} from './createuser.component';
import {ModalModule} from 'ng2-modal';
import {AppRoutingModule} from  './app.routing.module';
import {routingComponents} from './app.routing.module';

import {UserDataService} from './userdata.shared.service';

@NgModule({
  imports:      [   BrowserModule, 
                    FormsModule, 
                    HttpModule, 
                    ModalModule,
                    AppRoutingModule
                ],
  declarations: [ AppComponent,CreateuserComponent,LoginuserComponent,routingComponents],
  bootstrap:    [ AppComponent ],
  providers: [ UserDataService ]
})
export class AppModule { }
