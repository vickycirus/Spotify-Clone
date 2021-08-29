import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref:any){
  
    let userLoginObj=ref.value;

    if(userLoginObj.username!='admin' &&  userLoginObj.password!='admin')
      {
        alert("invalid credentials");
      }
      else
      {
        //navigate to home component

        localStorage.setItem("username","admin");

        this.router.navigateByUrl("/home");
      }


  }





}
