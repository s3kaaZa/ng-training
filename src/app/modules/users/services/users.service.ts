import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { FavoriteService } from '../../shared/services/favorite.service';
import { Favorite } from '../../shared/enums/favorite';
import { ICreateUser } from '../interfaces/ICreateUser';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private _favoriteUsers: IUser[] = [];
  private _users: IUser[] = [
    {
      "id": "1dd55921-9835-4282-a0d3-865a5a129528",
      "companyName": "Texas Instruments Incorporated",
      "name": "Barton Kris",
      "department": "Health",
      "gender": false,
      "age": 33,
      "imageUrl": "https://images.generated.photos/A-zWaE-3pMOEa5CEKn1Ljk8DZQ0Awas7VS3C_dxyMYY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk2NjU0LmpwZw.jpg"
    },
    {
      "id": "770e7064-b2b0-498e-865a-1fdce938235c",
      "companyName": "K-Mart Corp.",
      "name": "Evert Cartwright",
      "department": "Movies",
      "gender": false,
      "age": 33,
      "imageUrl": "https://images.generated.photos/KLL7xpIEG-cuoMs6Lx_bqAOi0ncoo6-LKeMLre2gIjQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ3ODkxLmpwZw.jpg"
    },
    {
      "id": "0bd638c7-9266-4c19-864c-56a324f52ff7",
      "companyName": "Merck & Co., Inc.",
      "name": "Marie Gaylord",
      "department": "Garden",
      "gender": false,
      "age": 20,
      "imageUrl": "https://images.generated.photos/cJ9uL-i96velOeGezd4Amb7-mQnW1jH4bUXCpwlDTFI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODkzNjgwLmpwZw.jpg"
    },
    {
      "id": "2b941ac5-0467-4c47-bcdc-6991d0bf564d",
      "companyName": "Bell Microproducts Inc.",
      "name": "Leanna Cassin",
      "department": "Movies",
      "gender": false,
      "age": 34,
      "imageUrl": "https://images.generated.photos/-XVAl_lWwwtDo0cFroojHGScb8gC54pXriSqG1_rPWI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODQ4MTk2LmpwZw.jpg"
    },
    {
      "id": "22a43dcf-e666-401d-b46f-9fc16e512694",
      "companyName": "KLA-Tencor Corporation",
      "name": "Lennie Hirthe DDS",
      "department": "Garden",
      "gender": true,
      "age": 60,
      "imageUrl": "https://images.generated.photos/VwcGN6cwtZ0WN5f4BE9-LmE6ebqYzzsmPe7ggnFV8SU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzE3NDMzLmpwZw.jpg"
    },
    {
      "id": "6e63ceb3-2111-492c-ac4a-0544703a8825",
      "companyName": "Cox Communications Inc.",
      "name": "Maud Simonis",
      "department": "Shoes",
      "gender": false,
      "age": 33,
      "imageUrl": "https://images.generated.photos/jfP-ZPpaD2HOM_sTynyFGYlKSMdRbw78L7MQZgPAa7c/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTM4MDk2LmpwZw.jpg"
    },
    {
      "id": "7c15e764-edb1-484a-96de-2da2eef112d0",
      "companyName": "The Lubrizol Corporation",
      "name": "Nichole Walker",
      "department": "Music",
      "gender": true,
      "age": 53,
      "imageUrl": "https://images.generated.photos/W9lm_UgYOtrfnc21h-aLNaj4lK9MzJGLGMQ4TfEF3Ns/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjA3NTQxLmpwZw.jpg"
    },
    {
      "id": "b479b260-4a3b-4107-bc09-eb055254eb4d",
      "companyName": "Dow Jones & Company, Inc.",
      "name": "Zora Deckow DVM",
      "department": "Beauty",
      "gender": true,
      "age": 23,
      "imageUrl": "https://images.generated.photos/nEXDGpi-uUoG-X6QjELbSnRWj4-_8IXa8uTGDpEKB8M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY1MjI3LmpwZw.jpg"
    },
    {
      "id": "6814914d-feb5-43ae-abed-2df09009b466",
      "companyName": "Carlisle Cos. Inc.",
      "name": "Selena Stanton",
      "department": "Outdoors",
      "gender": true,
      "age": 47,
      "imageUrl": "https://images.generated.photos/FaL2Ch4trf_eseL6R-k7giamCd_qrZbbklOoSjqFROE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1NDk2LmpwZw.jpg"
    },
    {
      "id": "1a95697d-3216-41e7-8dda-c7f6b6ce34de",
      "companyName": "Rockwell Collins Inc",
      "name": "Derek Cole",
      "department": "Grocery",
      "gender": true,
      "age": 42,
      "imageUrl": "https://images.generated.photos/OJeiE4t7ZL6fSFQioWWxKAEvAyCkzglwNRLlHfh0Qv0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ5MTUwLmpwZw.jpg"
    },
    {
      "id": "b99b8500-f2ed-4bb0-b7e2-b16f074a688f",
      "companyName": "Procter & Gamble Co.",
      "name": "Domenick Schmitt",
      "department": "Electronics",
      "gender": false,
      "age": 43,
      "imageUrl": "https://images.generated.photos/CrOIyGo8Ui2413_id3Gd2m_fQS14CtAA2_c6JgHEulQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY4ODAyLmpwZw.jpg"
    },
    {
      "id": "e34afce6-6a28-4aa0-8eff-018d43e0ba29",
      "companyName": "Ohio Casualty Corp.",
      "name": "Miss Drew Welch",
      "department": "Sports",
      "gender": false,
      "age": 63,
      "imageUrl": "https://images.generated.photos/fYH8CAKBWeKhWvUFy8lE2Frs_15_LLkvm2zt8T1nLDE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjYxNDQ3LmpwZw.jpg"
    },
    {
      "id": "c984966c-eb84-44f7-b974-ed0a0bfd8475",
      "companyName": "Schering-Plough Corp",
      "name": "Stone Boyle V",
      "department": "Grocery",
      "gender": true,
      "age": 59,
      "imageUrl": "https://images.generated.photos/XNVAgd_vXBMoFDiSVn6ZW27eYA-HAFppVVjVlIdnQpg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDYzODc0LmpwZw.jpg"
    },
    {
      "id": "fb23ba04-0438-4e5c-9d32-f439d4643bc7",
      "companyName": "Tower Automotive Inc.",
      "name": "Missouri Feest",
      "department": "Shoes",
      "gender": true,
      "age": 42,
      "imageUrl": "https://images.generated.photos/Ktyj69f2fGlJe_HgkNV90iovKQVGPYSO3EoJTT_4mXU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI0NjU1LmpwZw.jpg"
    },
    {
      "id": "4e386fdb-29b1-4bd6-b54d-9bc75b6f0d64",
      "companyName": "Fifth Third Bancorp",
      "name": "Deborah Bartoletti",
      "department": "Beauty",
      "gender": false,
      "age": 57,
      "imageUrl": "https://images.generated.photos/cmm-KGNjdUfaXu4Mg-KA9x7pJ6YrzC-6h5XHx1FOzQA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE5ODAxLmpwZw.jpg"
    },
    {
      "id": "0a9af49b-3935-4da9-8834-3bd7190219c6",
      "companyName": "Pacific Gas & Electric Corp.",
      "name": "Flavie Hagenes III",
      "department": "Garden",
      "gender": false,
      "age": 32,
      "imageUrl": "https://images.generated.photos/dvMUu4UaScrLPWjYmjQC46xzIjR8HMkyFcsmR5LwXJY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQxNzcyLmpwZw.jpg"
    },
    {
      "id": "884026e1-f2e9-4e38-8a2e-c5dd656c993a",
      "companyName": "WPS Resources Corporation",
      "name": "Olga Gleichner",
      "department": "Jewelery",
      "gender": false,
      "age": 46,
      "imageUrl": "https://images.generated.photos/15DjVfpKnf62MsGSCkbj-jsBEukYbm7ZWBHFYqVk6f4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE2MjgzLmpwZw.jpg"
    },
    {
      "id": "8ba9c64e-9368-4332-95f8-e2f75a380fef",
      "companyName": "International Multifoods Corporation",
      "name": "Reba Lemke",
      "department": "Shoes",
      "gender": true,
      "age": 30,
      "imageUrl": "https://images.generated.photos/xmAAORwAEe-8YkJbFrQYZG3XDVKqGE02bMjQitWofDc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ4Mjc1LmpwZw.jpg"
    },
    {
      "id": "7454819d-6585-49ea-a44d-66c840e0ca04",
      "companyName": "Revlon Inc",
      "name": "Bianka Nicolas",
      "department": "Automotive",
      "gender": true,
      "age": 29,
      "imageUrl": "https://images.generated.photos/Y5ACE0TUan5wPARjBfjsuJKMiGwmcUdPGmjDN_yjH54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwNjQ4LmpwZw.jpg"
    },
    {
      "id": "d3ac2167-59e4-4614-9cbc-b30071e168dd",
      "companyName": "Brightpoint, Inc.",
      "name": "Elyse Dickinson",
      "department": "Games",
      "gender": false,
      "age": 29,
      "imageUrl": "https://images.generated.photos/ClwfPH2CRUHbo3wVY6ZaZVDXOAtqvv2a9_ZOFjzTVj0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQ5OTE5LmpwZw.jpg"
    }
  ];

  constructor(private favoriteService: FavoriteService) { }

  getUsers(): IUser[] {
    return this._users;
  }

  getFavoriteUsers(): IUser[] {
    return this._favoriteUsers;
  }

  toggleLike(userId: string) {
    this._favoriteUsers = [];

    this.favoriteService.addToFavorite(userId, Favorite.User);

    this._users.forEach(user => {
      if (this.favoriteService.getFavorite(Favorite.User).includes(user.id)) {
        this._favoriteUsers.push(user);
      }
    })
  }

  createNewUser(user: ICreateUser) {
    let newUser = {
      id: "D05CDF2C-1C8F-422D-8E71-E2BF3C4DD73B",
      name: user.firstName + ' ' + user.lastName,
      age: user.age,
      companyName: user.company,
      department: user.department,
      gender: user.gender,
      imageUrl: "https://freepikpsd.com/file/2019/10/default-user-profile-image-png-2-Transparent-Images.png"
    }

    this._users.unshift(newUser);
  }

}
