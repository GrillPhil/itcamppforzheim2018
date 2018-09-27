import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent {

  constructor(private router:Router) {}

  back() {
    this.router.navigate(['incident', 'location']);
  }

}
