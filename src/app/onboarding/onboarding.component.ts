import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {

  constructor(private router:Router) {}

  next() {
    this.router.navigate(['home']);
  }

}
