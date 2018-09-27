import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/onboarding', pathMatch: 'full' },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'home', component: HomeComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}