import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './user.details.component';
import {AppComponent} from './app.component';

const routes:Routes = [
    {path:'userdetails/:username', component: UserDetailsComponent}
]
@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
export const routingComponents = [UserDetailsComponent]