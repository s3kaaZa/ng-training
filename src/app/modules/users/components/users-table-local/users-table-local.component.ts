import { Component, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/IUser';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users-table-local',
  templateUrl: './users-table-local.component.html',
  styleUrls: ['./users-table-local.component.scss']
})
export class UsersTableLocalComponent {
  tableLength: number = 128;
  displayedColumns: string[] = ['name', 'email', 'age', 'gender', 'address'];
  users: IUser[];
  dataSource: MatTableDataSource<IUser>;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private usersService: UsersService,
  ) { 
    this.usersService
      .getUsers(0, this.tableLength)
      .subscribe((users: IUser[]) => {
          this.users = users;
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch(property) {
              case 'name': return `${item.lastName} ${item.firstName}`;
              case 'address': return `${item.addresses[0].addressLine}, ${item.addresses[0].city}, ${item.addresses[0].zip}`;
              default: return item[property];
            }
          };          
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.sort);
        }
      )
  }
}
