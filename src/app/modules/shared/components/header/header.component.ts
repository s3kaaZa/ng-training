import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  color: string = 'transparent';
  buttons: object = {
    'users/add': {
      isActive: false,
      color: 'pink',
    },
    'users': {
      isActive: false,
      color: 'orangered',
    },
    'cars': {
      isActive: false,
      color: 'lightgreen',
    },
    'users/table-without-server-pagination': {
      isActive: false,
      color: 'deepskyblue',
    },
    'users/table-with-server-pagination': {
      isActive: false,
      color: 'gold',
    },
  }
  activeButton: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPath = event.url.substring(1)
        for (const [key, value] of Object.entries(this.buttons)) {
          if (value.isActive) {
            this.buttons[key].isActive = false;
          }
        }

        this.buttons[currentPath].isActive = true;
        this.color = this.buttons[currentPath].color;

        console.log(this.color);
        
      }
    })
  }

  logThis() {
    console.log(this)
  }
}
