import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';
import { RequestService } from 'src/app/modules/shared/services/request.service';
import { mergeMap, of, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  inputChanged!: string;
  users: IUser[] = [];
  foundUsers: IUser[] | undefined = undefined;
  counterRefreshPageSubject$ = new Subject();


  // MatPaginator Inputs
  public length: number = 128;
  public pageIndex: number = 0;
  public pageSize: number = 8;
  public pageSizeOptions: number[] = [8, 16, 32, 64];

  constructor(
    private usersService: UsersService,
    private requestService: RequestService,
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.getLockalUsers();

    if(!this.users.length) this.getUsers();

    this.refreshPageCounter();
  }

  private getUsers() {
    this.usersService.getUsers(this.pageIndex, this.pageSize);
  }

  public updateUserList(inputValue: string) {
    if (!inputValue){
      this.foundUsers = undefined;
    } else {
      this.foundUsers = this.users.filter((user: IUser) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(inputValue));
    }
  }

  public paginationChanging(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    
    this.getUsers()            
  }

  public refreshCounter() {
    this.requestService.increaseAndGetRefreshPageCounter().subscribe(
      ordinalNumber => this.counterRefreshPageSubject$.next(ordinalNumber)
    );
  }

  private refreshPageCounter() {
    this.counterRefreshPageSubject$.pipe(
      switchMap(
        (ordinalNumber: number) => this.requestService.refreshPage(ordinalNumber)
      )
    ).subscribe(
      ordinalNumber => console.log('refreshPageCounter = ', ordinalNumber)
    )
  }
}
