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

  addToFavorite(id: string | null, group: Favorite) {
    if (favoriteMap[group].has(id)) {
      favoriteMap[group].delete(id);
    } else {
      favoriteMap[group].add(id);
    }
  }

  getFavorite(group: Favorite) {
    return Array.from(favoriteMap[group]); 
  }
}
