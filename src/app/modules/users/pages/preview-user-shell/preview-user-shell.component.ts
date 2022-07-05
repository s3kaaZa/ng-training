import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-preview-user-shell',
  templateUrl: './preview-user-shell.component.html',
  styleUrls: ['./preview-user-shell.component.scss']
})
export class PreviewUserShellComponent implements OnInit {
  public userName: string = '';
  public userId: string = '';
  public user$: Observable<IUser | undefined>;
  public user: IUser;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.userId = data['id'];
      this.user$ = this.usersService.getUserById(this.userId);
      this.user$.subscribe(
       user => this.user = user
      )    
    });
    console.log(this.user);
  }
}
