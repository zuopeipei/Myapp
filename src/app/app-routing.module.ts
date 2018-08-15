import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { CommandComponent } from './command/command.component';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';


const routes: Routes = [
  { path: '' , redirectTo: 'cmd', pathMatch: 'full'},
  { path: 'cmd' , component: CommandComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'signin', component: SigninComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
