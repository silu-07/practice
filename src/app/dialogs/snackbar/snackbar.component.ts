import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    MatSnackBarAction,
    MatSnackBarActions,
    MatSnackBarLabel, MatIcon],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css',

})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  closeSnackBar() {
    this.data.snackBar.dismiss();
  }
}
