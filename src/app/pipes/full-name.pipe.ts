import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../modules/users/interfaces/IUser';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: IUser): string {
    return user ? `${user.firstName} ${user.lastName}` : '';
  }

}
