import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {
  @Input() users!: IUser[];

  public favoriteUsers!: IUser[];
  public isLike: boolean = false;
  public editedUser!: any;

  constructor(
    private _usersService: UsersService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  toggleLike(user: IUser): void {
    this._usersService.toggleLike(user.id);
    this._usersService.getFavoriteUsers().subscribe((users: IUser[]) => {
      this.favoriteUsers = users;
    });
  }

  editUser(user: IUser): void {  
    const url: string = '/user/edit/' + user.id;
    this._router.navigateByUrl(url);  
  }
}
