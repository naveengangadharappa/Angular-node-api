import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../classes/comments';
import { FileUploader } from 'ng2-file-upload';
import { Sharedservice } from '../services/sharesservice';

const urll = 'http://localhost:3000/update';
@Component({
selector: 'app-dispuser',
templateUrl: './update.component.html',
styleUrls: ['./common.component.css'],
providers: [Sharedservice]
})

export class UpdateComponent{
  title = 'Insert new users';
  user=
    {
    flg:'1',
}
err = '';
userdata={};
constructor(private http: HttpClient,
  private rout:Router,
  private sharedservice: Sharedservice) {}
ngOnInit( ){
this.userdata=this.sharedservice.getuserData();
console.log(this.userdata);
}
udata: Comments[];

submitvalues(){
  this.userdata
         // tslint:disable-next-line: no-unused-expression
         this.http.post(urll,this.userdata).subscribe(
         data =>console.log(data),
         error=>console.log(error)
         );

         this.rout.navigate(['dispuser']);
}

}
