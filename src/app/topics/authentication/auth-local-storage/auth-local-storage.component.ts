import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogInModel, SignUpModel } from '../user';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackbarServiceService } from 'src/app/dialogs/snackbar/snackbar-service.service';

@Component({
  selector: 'app-auth-local-storage',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule,
    MatSnackBarAction,
    MatSnackBarActions,
    MatSnackBarLabel, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './auth-local-storage.component.html',
  styleUrl: './auth-local-storage.component.css'
})

export class AuthLocalStorageComponent {

  constructor(public snackBarService: SnackbarServiceService) { }

  SignUpDivVisible: boolean = false;

  signUpObj: SignUpModel = new SignUpModel();
  logInObj: LogInModel = new LogInModel();

  onSignUp() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) { //If already sign up users are present
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
      this.snackBarService.openSnackBar('SingUp Successful', 'success');
      this.clearSingUpForm();
    } else {
      const users = []; //If user is first entering into local storage
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
      this.snackBarService.openSnackBar('SingUp Successful', 'success');
      this.clearSingUpForm();
    }
  }

  onLogIn() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((users: SignUpModel) => users.email == this.logInObj.email && users.password == this.logInObj.password);
      if (isUserPresent != undefined) {
        this.snackBarService.openSnackBar('Login Successful', 'success');
        this.clearLoginForm();
      }
      else {
        this.snackBarService.openSnackBar('Please SignUp before login', 'warning');
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