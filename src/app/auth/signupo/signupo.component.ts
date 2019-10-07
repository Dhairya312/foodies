import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signupo',
  templateUrl: './signupo.component.html',
  styleUrls: ['./signupo.component.css'],
  encapsulation: ViewEncapsulation.None     
})
export class SignupoComponent implements OnInit {

  constructor(
    private authServie: AuthService
  ) { }

  ngOnInit() {
  }

  onSignUp(from: NgForm) {
    const email = from.value.email;
    const password = from.value.password;
    this.authServie.signupUser(email, password);
  }
}
