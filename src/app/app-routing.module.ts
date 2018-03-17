import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../app/shared/guards/loggedInGuard';
import { HomeComponent } from './core/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaloriesComponent } from './dashboard/calories/calories.component';
import { RunningComponent } from './dashboard/running/running.component';
import { WeightComponent } from './dashboard/weight/weight.component';
import { EatingComponent } from './dashboard/eating/eating.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoggedInGuard],
    children: [
      { path: 'calories', component: CaloriesComponent },
      { path: 'running', component: RunningComponent },
      { path: 'weight', component: WeightComponent },
      { path: 'eating', component: EatingComponent },
    ]
  },
  {
    path: 'welcome',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
