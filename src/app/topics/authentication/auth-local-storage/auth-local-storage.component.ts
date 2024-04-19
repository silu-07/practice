import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogInModel, SignUpModel } from '../user';

@Component({
  selector: 'app-auth-local-storage',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule],
  templateUrl: './auth-local-storage.component.html',
  styleUrl: './auth-local-storage.component.css'
})

export class AuthLocalStorageComponent {

  SignUpDivVisible: boolean = false;

  signUpObj: SignUpModel = new SignUpModel();
  logInObj: LogInModel = new LogInModel();

  onSignUp() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) { //If already sign up users are present
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
      this.clearSingUpForm();
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
      this.clearSingUpForm();
    }
  }

  onLogIn() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((users: SignUpModel) => users.email == this.logInObj.email && users.password == this.logInObj.password);
      if (isUserPresent != undefined) {
        alert('Successfully Logged in');
        this.clearLoginForm();
      }
      else {
        alert('Please Sign Up First!');
        this.clearLoginForm();
      }
    }
  }

  clearLoginForm() {
    this.logInObj.email = '';
    this.logInObj.password = '';
  }

  clearSingUpForm() {
    this.signUpObj.name = '';
    this.signUpObj.email = '';
    this.signUpObj.password = '';
  }
}