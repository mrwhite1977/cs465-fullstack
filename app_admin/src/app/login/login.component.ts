import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public formError: string = '';
  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  // ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';
    if(!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password required';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    const newUser: User = {
      name: this.credentials.name,
      email: this.credentials.email
    };

    this.authenticationService.login(newUser, this.credentials.password);
    if(this.authenticationService.isLoggedIn()) {
      this.router.navigate(['']); // Navigate to home or any desired route
    } else {
      console.error('Authentication failed'); // Handle authentication failure
    }
  }
}

/* export class LoginComponent {
  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
      this.router.navigateByUrl('#'); // Return to login page
    } else {
      this.doLogin();
    }
  }
  private doLogin(): void {
    const newUser: User = {
      name: this.credentials.name,
      email: this.credentials.email,
    } as User;

    // console.log('LoginComponent::doLogin');
    // console.log('this.credentials');
    this.authenticationService.login(newUser, this.credentials.password);
    
    if(this.authenticationService.isLoggedIn())
      {
        // console.log('Router::Direct');
        this.router.navigate(['']);
      } else {
        var timer = setTimeout(() => {
        if(this.authenticationService.isLoggedIn())
          {
            // console.log('Router::Pause');
            this.router.navigate(['']);
          }}, 3000)
        }
      }
*/
