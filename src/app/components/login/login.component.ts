import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  error: string | null = null; 

  constructor(private router: Router, private loginService: LoginService) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started');
      }
  
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended');
      }
    });
  }
 
  submit() {
    let creds = {
      "email":"user@user.com",
      "password":"12345678"
    };
    this.loginService.postData(creds).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['dashboard']);
  }
}
