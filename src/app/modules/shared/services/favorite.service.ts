import { Injectable } from '@angular/core';
import { Favorite } from '../enums/favorite';

const favoriteMap = {
  [Favorite.Car]: new Set(),
  [Favorite.User]: new Set()
}

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  addToFavorite(id: string, group: Favorite): void {
    if (favoriteMap[group].has(id)) {
      favoriteMap[group].delete(id);
    } else {
      favoriteMap[group].add(id);
    }
  }

  getFavorite(group: Favorite): string[] | unknown[] {
    return Array.from(favoriteMap[group]); 
  }
}
