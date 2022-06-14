import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {
  public users!: IUser[];
  public favoriteUsers!: IUser[];
  public isLike: boolean = false;
  public editedUser!: any;

  constructor(
    private _usersService: UsersService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    });
  }

  toggleLike(user: IUser): void {
    this._usersService.toggleLike(user.id);
    console.log(this._usersService.getFavoriteUsers());
    
    this._usersService.getFavoriteUsers().subscribe((users: IUser[]) => {
      this.favoriteUsers = users;
    });
  }

  editUser(user: IUser): void {
    const url: string = '/user/edit/' + user.id;
    this._router.navigateByUrl(url);  
  }

/*   updateUserList(inputValue: string){
    let newUsersList: IUser[] = []
    this._usersService.getUsers().subscribe(users => {
      users.forEach((user:IUser) => {
        if(user.firstName.toLowerCase().includes(inputValue) || user.lastName.toLowerCase().includes(inputValue)){
          newUsersList.push(user)
        }
      })
      this.users = of(newUsersList)
    })
  }
 */}
