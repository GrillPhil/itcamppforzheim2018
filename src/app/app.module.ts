import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { AppRoutingModule } from './app-routing.module';
import { IncidentModule } from './incident/incident.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncidentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
