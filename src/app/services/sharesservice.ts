import { Injectable } from '@angular/core';

var userdata={};
@Injectable({
  providedIn: "root"
})

export class Sharedservice{
  userdata={};

setuserData(val: object) {
    userdata = val;
    console.log(userdata);
  }
getuserData() {
    return userdata;
  }
}
