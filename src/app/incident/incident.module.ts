import { NgModule } from '@angular/core';
import { IncidentComponent } from './incident.component';
import { IncidentLocationComponent } from './incident-location/incident-location.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { IncidentRoutingModule } from './incident-routing.module';

@NgModule({
    declarations: [
        IncidentComponent,
        IncidentLocationComponent,
        IncidentDetailsComponent
    ],
    imports: [
        IncidentRoutingModule
    ]
  })
  export class IncidentModule { }
  