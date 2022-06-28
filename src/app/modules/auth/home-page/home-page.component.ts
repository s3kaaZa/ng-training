import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userName: string = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService
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

    this.userName = authService.getCurrentUserName();
  }

  ngOnInit(): void {
  }
}
