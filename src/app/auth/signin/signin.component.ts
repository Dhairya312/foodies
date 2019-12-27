import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  subscribe: Subscription;
  isError: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signInUser(username, password)
    .subscribe(
      (response) => {
        let authToken : string = response["_body"];
        authToken = authToken.replace('{authToken: Bearer ','').replace("}","");
        if(authToken){
          localStorage.setItem("authtoken",authToken);
          this.router.navigate(["/"]);
        return;
        }
        this.isError = true;
    },
    (error: Error) =>{
      console.error("error",error);
      this.isError = true;
    });
  }
}
