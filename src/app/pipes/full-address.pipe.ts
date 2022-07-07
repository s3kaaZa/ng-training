import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../modules/users/interfaces/IUser';

@Pipe({
  name: 'fullAddress'
})
export class FullAddressPipe implements PipeTransform {

  transform(user: IUser): string {
    return `${user[0].addressLine}, ${user[0].city}, ${user[0].zip}`;
  }

}
