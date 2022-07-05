import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor(
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

  ngOnInit() { }
}