import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupDialogComponent } from '../../shared/dialogs/signup-dialog/signup-dialog.component';
import { LoginDialogComponent } from '../../shared/dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '500px',
      data: {}
    });
  }

  openLoginDialog(): void {
    const loginDialogRef = this.dialog.open(LoginDialogComponent, {
      width: '500px',
      data: {}
    });
  }

}
