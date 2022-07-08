import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-table-server',
  templateUrl: './users-table-server.component.html',
  styleUrls: ['./users-table-server.component.scss']
})
export class UsersTableServerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'age', 'gender', 'address'];
  users: IUser[];
  dataSource: MatTableDataSource<IUser>;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  // MatPaginator Inputs
  public readonly tableLength: number = 100;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private usersService: UsersService,
  ) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  public paginationChanging(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;

    this.getUsers()
  }

  private getUsers() {
    this.usersService
      .getUsers(this.pageIndex, this.pageSize)
      .subscribe((users: IUser[]) => {
          this.users = users;
          //this.users.length = this.tableLength;
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch(property) {
              case 'name': return `${item.lastName} ${item.firstName}`;
              case 'address': return `${item.addresses[0].addressLine}, ${item.addresses[0].city}, ${item.addresses[0].zip}`;
              default: return item[property];
            }
          };          
          this.dataSource.sort = this.sort;
          console.log(this.paginator);
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource.paginator);
        })
  }
}
