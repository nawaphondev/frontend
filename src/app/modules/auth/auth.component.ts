import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgIf, CommonModule } from '@angular/common'; // Import NgIf or CommonModule

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    AngularSvgIconModule, 
    RouterOutlet,
    NgIf,
  ],
})
export class AuthComponent {
  isSignIn: boolean = true; 
  isSignUp: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((urlSegment) => {
      if (urlSegment[0].path === 'sign-in') {
        this.isSignIn = true;
        this.isSignUp = false;
      } else if (urlSegment[0].path === 'sign-up') {
        this.isSignIn = false;
        this.isSignUp = true;
      }
    });
  }
}
