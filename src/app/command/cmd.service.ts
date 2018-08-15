import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Cmd} from './cmd';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CmdService {

  constructor(private http: HttpClient) { }

  getCmds(searchInfo: String): Observable <Cmd[]> {
    const datas = {
      'searchInfo': searchInfo
    };
    const ops = Object.assign({}, { params: datas}, httpOptions);
    console.log('http request(get cmds)');
    return this.http.get<Cmd[]>('api/cmd', ops);
  }

  deletecmd(cmd: Cmd): Observable<boolean> {
     const url = 'api/cmd/' + cmd.cmdId;
     return this.http.delete<boolean>(url);
  };
  updateCmd(cmd: Cmd): Observable<boolean> {
    const url = 'api/cmd/';
    return this.http.patch<boolean>(url, cmd);
  }
  addCmd(cmd: Cmd): Observable<boolean> {
    const url = 'api/cmd/';
    return this.http.post<boolean>(url, cmd);
  }

}
