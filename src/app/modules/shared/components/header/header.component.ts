import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(`Navigation Start to "${event.url}"`)
        this.userName = authService.getCurrentUserName();
        console.log(this.userName);
        
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
}
