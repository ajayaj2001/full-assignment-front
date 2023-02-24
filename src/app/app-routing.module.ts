import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Container/dashboard/dashboard.component';
import { SigninComponent } from './Container/signin/signin.component';
import { SignupComponent } from './Container/signup/signup.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
