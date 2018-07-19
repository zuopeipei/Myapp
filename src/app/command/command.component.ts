import { Component, OnInit } from '@angular/core';
import {Cmd} from './cmd';
import {CmdService} from './cmd.service'
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  cmd: Cmd={
    cmdId:1,
    userId:1,
    cmdInfo:'22',
    cmdDesc:'33'
  };
  cmds:Cmd[]=[];
  constructor(private cmdservice: CmdService) { }

  ngOnInit() {
    this.getlist();
  }

  getlist():void{
    console.log(11111);
    this.cmdservice.getCmds().subscribe(val=>this.cmds=val);
    console.log(this.cmds);
  }

}
