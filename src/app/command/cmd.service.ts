import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Cmd} from './cmd'
@Injectable({
  providedIn: 'root'
})
export class CmdService {

  constructor(private http:HttpClient) { }
  getCmds():Observable<Cmd[]>{
    console.log('http request(get cmds)');
    return this.http.get<Cmd[]>('api/cmd')
    }
}
