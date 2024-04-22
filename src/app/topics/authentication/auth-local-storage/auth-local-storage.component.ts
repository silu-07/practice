import { CommonModule, NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  logInObj: LogInModel = new LogInModel();
  signUpObj: SignUpModel = new SignUpModel();

  @ViewChild("logInForm") logInFormRef!: NgForm;
  @ViewChild("signUpForm") signUpFormRef!: NgForm;


  onSignUp() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser == null) {
      const users = []; //If local storage usres array is empty
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
      this.snackBarService.openSnackBar('SingUp Successful', 'success');
      this.clearSingUpForm();
    }
    else if (localUser != null) { //if user is already sign up
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((users: SignUpModel) => users.email == this.signUpObj.email);
      if (isUserPresent != undefined) {
        this.snackBarService.openWarningSnackBar('User is already present in storage!', 'warning');
      }
      else {
        //if in local storage already other sign up users are present & we are making new entry
        users.push(this.signUpObj);
        localStorage.setItem('angular17users', JSON.stringify(users));
        this.snackBarService.openSnackBar('SingUp Successful', 'success');
        this.clearSingUpForm();
      }
    }
  }

  onLogIn() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((users: SignUpModel) => users.email == this.logInObj.email && users.password == this.logInObj.password);
      if (isUserPresent != undefined) {
        this.snackBarService.openSnackBar('Login Successful - Enjoy:)', 'success');
        this.clearLoginForm();
      }
      else {
        this.snackBarService.openSnackBar('Invalid Credentials!', 'warning');
        this.clearLoginForm();
      }
    }
  }

  clearLoginForm() {
    this.logInFormRef.reset();
  }

  clearSingUpForm() {
    this.signUpFormRef.reset();
  }
}