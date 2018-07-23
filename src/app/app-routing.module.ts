import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { CommandComponent } from './command/command.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '' , redirectTo: 'cmd', pathMatch: 'full'},
  { path: 'cmd' , component: CommandComponent},
  { path: 'home' , component: HomeComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
