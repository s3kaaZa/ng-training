import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  userName: string = '';

  constructor(private authService: AuthenticationService) { 
    this.userName = authService.getCurrentUserName();
  }
}
