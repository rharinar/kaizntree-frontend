import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

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

  constructor(private router: Router) { 
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
    this.router.navigate(['dashboard']);
  }
}
