import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';


@Injectable({
  providedIn: 'root'
})
export class SnackbarServiceService {

  constructor(private snackBar: MatSnackBar) { }

  horizontalPositionOfSnackBar: MatSnackBarHorizontalPosition = 'right';
  verticalPoistionOfSnackBar: MatSnackBarVerticalPosition = 'top';

  openSnackBar(message: string, type: string) {
    if (type === 'success') {
      this.openSuccessSnackBar(message, type)
    }
    if (type === 'error') {
      this.openErrorSnackBar(message, type)
    }
    if (type === 'warning') {
      this.openWarningSnackBar(message, type)
    }
  }

  openSuccessSnackBar(message: string, type: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: this.horizontalPositionOfSnackBar,
      verticalPosition: this.verticalPoistionOfSnackBar,
      duration: 2000,
      data: {
        message: message,
        snackBar: this.snackBar,
        icon: 'done',
        type: type,
      },
      panelClass: 'success-snackbar'
    })
  }
  openErrorSnackBar(message: string, type: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: this.horizontalPositionOfSnackBar,
      verticalPosition: this.verticalPoistionOfSnackBar,
      duration: 2000,
      data: {
        message: message,
        snackBar: this.snackBar,
        icon: 'report_problem',
        type: type,
      },
      panelClass: 'error-snackbar'
    })
  }
  openWarningSnackBar(message: string, type: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: this.horizontalPositionOfSnackBar,
      verticalPosition: this.verticalPoistionOfSnackBar,
      duration: 2000,
      data: {
        message: message,
        snackBar: this.snackBar,
        icon: 'announcement',
        type: type,
      },
      panelClass: 'warning-snackbar'
    })
  }
}
