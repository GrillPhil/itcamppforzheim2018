import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentComponent } from './incident.component';
import { IncidentLocationComponent } from './incident-location/incident-location.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';

const incidentRoutes: Routes = [
  {
    path: 'incident',
    component: IncidentComponent,
    children: [
      {
        path: '', 
        redirectTo: 'location', 
        pathMatch: 'full'
      },
      {
        path: 'location',
        component: IncidentLocationComponent,
      },
      {
        path: 'details',
        component: IncidentDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(incidentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IncidentRoutingModule { }