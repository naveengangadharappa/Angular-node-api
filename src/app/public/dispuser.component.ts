import { Component } from '@angular/core';
import { FreeApiServices } from '../services/freeapiservice';
import { Comments } from '../classes/comments';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Sharedservice } from '../services/sharesservice';

@Component({
  selector: 'app-dispuser',
  templateUrl: './dispuser.component.html',
  styleUrls: ['./common.component.css'],
  providers: [Sharedservice]
})
export class DispuserComponent {

  title = 'User Details';
  uname = '';
  uemail = '';
  //selectedfile:File=null;
  uploadedFiles: Array < File > ;
  user={
    email:''
  }

  udata: Comments[];
  constructor(private freeapiservice: FreeApiServices,
    private rout:Router,
    private httpclient: HttpClient,
    private sharedservice:Sharedservice) {

   }
  ngOnInit( ) {
    this.freeapiservice.getcomments().subscribe(
        data => {
          this.udata = data;
        }
    );

  }
  search() {
    if(this.uname=='')
    {
      this.uname='0';
    }
    this.freeapiservice.getusers(this.uname).subscribe(
      data => {
        this.udata = data;
        this.uname='';
      }
  );
  }


  delete(email){
    this.uemail=email;
    var flg = confirm('Are you shure to delete this user ??');
    if(flg)
    {
    this.freeapiservice.deleteuser(this.uemail).subscribe(
      data => {
        console.log(data);
      });
    this.rout.navigate(['dispuser']);
  }
}


update(upddata)
{
  this.sharedservice.setuserData(upddata);
  this.rout.navigate(['update']);
}


onFileSelected(event, tempemail)
{
  //console.log(event);
this.uploadedFiles = event.target.files;
const fd = new FormData();
//tempemail = tempemail + '.jpg';
for (var i = 0; i < this.uploadedFiles.length; i++) {
  fd.append('uploads[]', this.uploadedFiles[i],tempemail);
}
fd.append('email',tempemail);
console.log(fd);
  if(tempemail=='')
  {
    alert("please Select image to upload");
  }
  else{
  var flg = confirm('Are you willing to change your profile picture ??');
  if(flg)
  {
    var url='http://localhost:3000/fileupload';
    var req = {
      method: 'POST',
      body: fd
     }
    /*this.httpclient.post(url,fd).subscribe(
      data => {console.log(data);
      },
      error=>{console.log(error);
      });*/
      fetch(url,req).then(function(response) {
        console.log("the file has been uploaded to local server ",response.body);
   });
    this.rout.navigate(['dispuser']);
  }
}
}

}
