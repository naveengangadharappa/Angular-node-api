import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
@Injectable()
 export class FreeApiServices {

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any>{
    return this.httpclient.get('http://localhost:3000/users');
  }
  getusers(n): Observable<any>{
    var url='http://localhost:3000/search/';
    url=url+n;
    return this.httpclient.get(url);
  }
  deleteuser(email): Observable<any>{
    var url='http://localhost:3000/delete/';
    var url =url+email;
    return this.httpclient.get(url);
  }
  /*updatepicture(email): Observable<any>{
    var url='http://localhost:3000/fileupload';
    return this.httpclient.post(url);
  }*/
 /* postinsert(): Observable<any>{
    //return this.httpclient.post('http://localhost:3000/insertuser');
  }*/

 }
