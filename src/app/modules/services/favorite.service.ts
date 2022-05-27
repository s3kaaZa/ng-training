import { Injectable } from '@angular/core';
import { Favorite } from '../shared/enums/favorite';
import { IFavorite } from '../shared/interfaces/IFavorite';
import { ICar } from '../cars/interfaces/car';
import { IUser } from '../users/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorite!: IFavorite;
  private favorites: IFavorite[] = [];
  private sendFavorites: Array<string> = [];
  entity!: IUser | ICar;

  addToFavorite(entity: IUser | ICar, group: Favorite) {  // not unique
    this.favorite = {
      id: entity.id,
      group: group
    }
    this.favorites.push(this.favorite) 
    console.log(this.favorites);   
  }

  getFavorites(group: Favorite): Array<string> {
    this.sendFavorites = [];
    this.favorites.forEach((obj: IFavorite) => {
      if (obj.group == group) {
        this.sendFavorites.push(obj.id)
      }
    })

    return this.sendFavorites;
  }
}
