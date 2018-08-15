import { Component, OnInit } from '@angular/core';
import {Cmd} from './cmd';
import {CmdService} from './cmd.service'
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  cmd: Cmd = {
    cmdId: 0,
    userId: 0,
    cmdInfo: '',
    cmdDesc: ''
  };
  cmds: Cmd[] = [];
  searchInfo: string = '';
  constructor(private cmdservice: CmdService) { }

  ngOnInit() {
    this.getlist();
  }

  getlist(): void {
    console.log(11111);
    this.cmdservice.getCmds(this.searchInfo).subscribe(val => this.cmds = val);
    console.log(this.cmds);
  };

  deletecmd(cmd: Cmd): void {
    console.log(cmd);
    let re = false;
    this.cmdservice.deletecmd(cmd).subscribe(val => {
      console.log(val);
      re = val;
      this.getlist();
    });
  };

  updateSetcmd(cmd: Cmd): void {
    console.log('update');
    this.cmd = cmd;
    console.log(this.cmd);
  }

  submitCmd(): void {
    if (this.cmd.cmdId === 0) {
      let re = false;
      this.cmdservice.addCmd(this.cmd).subscribe(val => {
        console.log(val);
        re = val;
        this.getlist();
      });
    } else {
      let re = false;
      this.cmdservice.updateCmd(this.cmd).subscribe(val => {
        console.log(val);
        re = val;
        this.getlist();
      });
    }

    this.cmd = {
      cmdId: 0,
      userId: 0,
      cmdInfo: '',
      cmdDesc: ''
    };
  }
}
