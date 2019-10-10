import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const urll = 'http://localhost:3000/login';
@Component({
  selector: 'app-dispuser',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css']
})

export class LoginComponent {
user = {
  uemail: '',
  upasswd: ''
};
temp={};
err = '';
constructor(private http: HttpClient, private rout: Router) {}
verifiy() {
  if (this.user.uemail == '' || this.user.upasswd==''){
    this.err = 'Please Enter email and password';
  } else {
    alert('requesting');
  this.http.post(urll, this.user).subscribe(
    data => this.rout.navigate(['nav']),
    error => this.err ='User email and password incorrect'
    );
  }
 }


}
