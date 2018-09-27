import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'incident-location',
  templateUrl: './incident-location.component.html',
  styleUrls: ['./incident-location.component.css']
})
export class IncidentLocationComponent {

  constructor(private router:Router) {}

  cancel() {
    this.router.navigate(['home']);
  }

  next() {
    this.router.navigate(['incident','details']);
  }

}
