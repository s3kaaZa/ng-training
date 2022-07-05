import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-preview-user',
  templateUrl: './preview-user.component.html',
  styleUrls: ['./preview-user.component.scss']
})
export class PreviewUserComponent implements OnInit {
  @Input() user: IUser;

  public userName: string = '';
  public userId: string = '';
  public userInfo: IUser;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private authService: AuthenticationService,
  ) { 
    this.userName = authService.getCurrentUserName();    
  }

  ngOnInit(): void {
  }

}
