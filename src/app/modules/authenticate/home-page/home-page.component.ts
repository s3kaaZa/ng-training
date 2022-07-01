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
    private authService: AuthenticationService
  ) { 
    this.userName = authService.getCurrentUserName();
  }

  ngOnInit(): void {
  }
}
