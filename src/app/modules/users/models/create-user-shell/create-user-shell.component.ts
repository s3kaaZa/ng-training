import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../../components/create-user/create-user.component';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss']
})
export class CreateUserShellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToUsersPage() {
    this.router.navigate(["/users"]);
  }
}
