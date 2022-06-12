import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressesComponent } from '../../components/addresses/addresses.component';
import { CreateUserComponent } from '../../components/user-form/user-form.component';
import { IAddress } from '../../interfaces/IAddress';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-edit-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class UserEditShellComponent implements OnInit {
  @ViewChild(CreateUserComponent, {static: false}) 
  private userFormComp!: CreateUserComponent;
  @ViewChild(AddressesComponent, {static: false}) 
  private addressesFormComp!: AddressesComponent;

  title: string = 'Edit user';
  user!: IUser;
  userId!: string | null;
  isInvalidForm: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id');
    [this.user] = this._usersService.getUserById(this.userId);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this);
  }

  ngAfterViewInit() {
    const userKeys: string[] = Object.keys(this.user);
    const addresses = this.user['addresses']; 

    for (let key of userKeys) {
      const value: string | number | boolean | IAddress[] = (this.user as any)[key];

      if (key === 'id' || key === 'imageUrl') {
        //console.log(key);
      } else if (key === 'addresses') {
        for (let address of addresses) {
          const addressKeys = Object.keys(address);
          const addressControls: any = this.addressesFormComp.addressesArray.controls[0];

          for (key of addressKeys) {
            let value: any = (address as any)[key]
            addressControls.controls[key].patchValue(value)
          }
        };
      } else {
        if (key === 'companyName') {
          console.log(222);
          
        }
        this.userFormComp.userForm.controls[key].patchValue(value)
      }
    }

    this.userFormComp.userForm.markAllAsTouched();
    this.addressesFormComp.addressesArray.markAllAsTouched();
  }

  log() {
    console.log(this);
  }
}