import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { CommandComponent }from './command/command.component';


const routes: Routes=[
  { path: '' , redirectTo: 'cmd', pathMatch:'full'},
  { path: 'cmd' , component: CommandComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
