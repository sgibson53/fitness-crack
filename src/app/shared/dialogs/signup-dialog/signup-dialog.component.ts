import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatFormField, MatFormFieldControl } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from './confirm-password';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private authService: AuthService) { }

  get username() { return this.signupForm.get('username'); }
  get password() { return this.signupForm.get('password'); }
  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.authService.signup(this.signupForm.value).subscribe(res => console.log(res));
    this.dialogRef.close();
  }

}
