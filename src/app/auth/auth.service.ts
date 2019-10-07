import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
   authtoken: string;
  

  constructor(
    private router: Router,
    private http: Http
  ) { }
  
  
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signInUser(username: string, password: string){
    
     
      let Url = 'http://demoao.neofruition.co.in:81/login';
      return this.http.post(Url,{ "username": username,"password": password });
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(
    //     response => {
    //       this.router.navigate(['/']);
    //       firebase.auth().currentUser.getIdToken()
    //        .then(
    //          (token: string) => this.token = token
    //        )
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );
  }

  getToken() {
    // firebase.auth().currentUser.getIdToken()
    //   .then(
    //     (token: string) => this.token = token
    //   );
    this.authtoken = localStorage.getItem("authtoken");
    return this.authtoken;
  }

  isAuthenticated() {
    // return this.authtoken != null;
    this.authtoken = localStorage.getItem('authtoken');
    if(this.authtoken){
      return true;
    } 
    return false;
  }

  logout() {
    // firebase.auth().signOut();
    // this.authtoken = null;
    // this.router.navigate(['/']);
    localStorage.removeItem("authtoken");
    this.router.navigate(['/']);
  }
}
