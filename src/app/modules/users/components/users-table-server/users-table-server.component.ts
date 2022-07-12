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
  dataSource: MatTableDataSource<IUser>;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  // MatPaginator Inputs
  public readonly tableLength: number = 100;
  public pageIndex: number = 0;
  public pageSize: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

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
    this.usersService.getUsers(this.pageIndex, this.pageSize)
      .pipe()
      .subscribe((users: IUser[]) => {
        //this.users.length = this.tableLength;
        this.dataSource = new MatTableDataSource(users);
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
