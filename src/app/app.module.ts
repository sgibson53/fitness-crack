import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthService } from './shared/services/auth.service';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SignupDialogComponent } from './shared/dialogs/signup-dialog/signup-dialog.component';
import { HomeComponent } from './core/home/home.component';
import { LoginDialogComponent } from './shared/dialogs/login-dialog/login-dialog.component';

// Forms
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupDialogComponent,
    HomeComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    SignupDialogComponent
  ]
})
export class AppModule { }
