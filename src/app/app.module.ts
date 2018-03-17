import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthService } from './shared/services/auth.service';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SignupDialogComponent } from './shared/dialogs/signup-dialog/signup-dialog.component';
import { HomeComponent } from './core/home/home.component';
import { LoginDialogComponent } from './shared/dialogs/login-dialog/login-dialog.component';
import { DashbaordHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { CaloriesComponent } from './dashboard/calories/calories.component';
import { RunningComponent } from './dashboard/running/running.component';
import { WeightComponent } from './dashboard/weight/weight.component';
import { EatingComponent } from './dashboard/eating/eating.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLeftNavigationComponent } from './dashboard/dashboard-left-navigation/dashboard-left-navigation.component';
import { NavButtonComponent } from './dashboard/dashboard-left-navigation/nav-button/nav-button.component';

// Guards
import { LoggedInGuard } from './shared/guards/loggedInGuard';

// Forms
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupDialogComponent,
    HomeComponent,
    LoginDialogComponent,
    DashboardComponent,
    CaloriesComponent,
    RunningComponent,
    WeightComponent,
    EatingComponent,
    DashboardLeftNavigationComponent,
    NavButtonComponent,
    DashbaordHomeComponent
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
    MatCardModule,
    AppRoutingModule
  ],
  providers: [AuthService, LoggedInGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    SignupDialogComponent
  ]
})
export class AppModule { }
