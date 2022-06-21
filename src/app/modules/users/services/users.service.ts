import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/IUser';
import { FavoriteService } from '../../shared/services/favorite.service';
import { HttpService } from '../../shared/services/http.service';
import { Favorite } from '../../shared/enums/favorite';
import { ICreateUser } from '../interfaces/ICreateUser';
import { IAddress } from '../interfaces/IAddress';
import { delay, map, Observable, of, Subscription, take } from 'rxjs';
import { IRemoteUser } from '../interfaces/IRemoteUser';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    private delayTime = 894;
    private favoriteUsers: IUser[] = [];
    private users: IUser[] = [];

    constructor(
        private favoriteService: FavoriteService,
        private httpService: HttpService,
        private http: HttpClient,
    ) { }

    public getUsers(page: number, results: number): Subscription {
        this.users.length = 0;
        
        return this.httpService.get(page, results, null).pipe(
            take(1),
            map((userDTOs: IRemoteUser[]) => {               
                return userDTOs.map((user: IRemoteUser) => {                    
                    this.users.push(this.mapUserDTOtoUser(user));
                })
            })
        ).subscribe()
    }

    private mapUserDTOtoUser(userDTO: IRemoteUser): IUser {
        return {
            id: userDTO.login.uuid,
            firstName: userDTO.name.first,
            lastName: userDTO.name.last,
            email: userDTO.email,
            gender: userDTO.gender === 'male' ? true : false,
            age: userDTO.dob.age,
            imageUrl: userDTO.picture.large,
            addresses: [{
                addressLine: `${userDTO.location.street.number} ${userDTO.location.street.name}`,
                city: userDTO.location.city,
                zip: userDTO.location.postcode,
            }]
    
        }
    }

    public getLockalUsers() {
        return this.users;
    }

    public getFavoriteUsers(): Observable<IUser[]> {
        return of(this.favoriteUsers)
            .pipe(
                delay(this.delayTime)
            );
    }

    public toggleLike(userId: string): void {
        this.favoriteUsers = [];
        this.favoriteService.addToFavorite(userId, Favorite.User);

        this.users.forEach(user => {
            if (this.favoriteService.getFavorite(Favorite.User).includes(user.id)) {
                this.favoriteUsers.push(user);
            }
        })
    }

    public getUserById(userId: string | null): Observable<IUser | undefined> {
        return of(this.users.find(user => user.id === userId))
            .pipe(
                delay(this.delayTime)
            );
    }

    public createNewUser(user: ICreateUser, addresses: any): void {
        let newUser = {
            id: "D05CDF2C-1C8F-422D-8E71-E2BF3C4DD73B",
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            age: user.age,
            companyName: user.companyName,
            department: user.department,
            gender: user.gender,
            imageUrl: "https://www.oblgazeta.ru/static/images/no-avatar.png",
            addresses: addresses,
        }

        this.users.unshift(newUser);
    }

    public updateUser(userId: string, user: ICreateUser, addresses: IAddress[]): void {
        let [editableUser] = this.users.filter(user => user.id === userId);
        
        editableUser.firstName = user.firstName;
        editableUser.lastName = user.lastName;
        editableUser.email = user.email;
        editableUser.age = user.age;
        editableUser.companyName = user.companyName;
        editableUser.department = user.department;
        editableUser.gender = user.gender;
        editableUser.addresses = addresses;
    }
}