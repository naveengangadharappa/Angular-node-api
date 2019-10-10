import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../classes/comments';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { Component } from '@angular/core';


const urll = 'http://localhost:3000/insertuser';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./common.component.css']
})

export class InsertComponent {
  title = 'Insert new users';
  user=
    {
    name:'',
    email:'',
    gender:'',
    dob:'',
    country:'',
    state:'',
    district:'',
    pin:'',
    passwd:'',
    rpasswd:'',
    pic:'',
    flg:'0'
}
err = '';

uploader: FileUploader = new FileUploader(
  {
    url: urll
  });
constructor(private http: HttpClient,private rout:Router) {
}

udata: Comments[];


submitvalues()
{
  if(this.user.name=='' || this.user.email=='' || this.user.gender=='' || this.user.dob=='' || this.user.country=='' || this.user.state=='' || this.user.district=='' || this.user.pin=='' || this.user.passwd=='' || this.user.rpasswd=='')
    {
      alert(this.user.name);
        this.err = 'All fields are manditory please verifiy !!! ';
    }
    else {
        if(this.user.passwd!=this.user.rpasswd)
        {
          this.err = 'please verifiy the password ??';
        } else {

         // tslint:disable-next-line: no-unused-expression
         this.http.post(urll,this.user).subscribe(
         data =>alert("Successfull"),
         error=>console.log(error)
         );

         this.rout.navigate(['dispuser']);
    }
}
}
}
