import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  userName: string = "";
  password: string = "";

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(`Navigation Start to "${event.url}"`)
      }

      if (event instanceof NavigationCancel) {
        console.log(`The Guard interrupted the transition to "${event.url}"`)
      }

      if (event instanceof NavigationEnd) {
        console.log(`Navigation End to "${event.url}"`)
      }
    })
  }

  ngOnInit(): void { }

  submit() {
    if (this.authService.authenticationUser(this.userName, this.password).length) {
      this.clear();
      this.router.navigateByUrl('home');
    }
  }
  
  goToRegistrationPage() {
    this.clear();
    this.router.navigateByUrl('registration');
  }
  
    clear() {
      this.userName = "";
      this.password = "";
    }
}
