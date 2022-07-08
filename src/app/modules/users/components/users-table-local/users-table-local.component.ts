import { Component, AfterViewInit, ViewChild, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-users-table-local',
  templateUrl: './users-table-local.component.html',
  styleUrls: ['./users-table-local.component.scss']
})
export class UsersTableLocalComponent implements OnInit, AfterViewInit, OnChanges {
  
  displayedColumns: string[] = ['name', 'email', 'age', 'gender', 'address'];
  users: IUser[];
  dataSource: MatTableDataSource<IUser>;
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private usersService: UsersService,
  ) { 
    this.usersService
      .getUsers(0, 8)
      .subscribe((users: IUser[]) => {
          this.users = users;
        }
      )
  }

  ngOnInit(): void {
          this.dataSource = new MatTableDataSource(this.users)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.users) console.log(222);
    
          this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  logThis() {
    console.log(this);
    
  }
}
