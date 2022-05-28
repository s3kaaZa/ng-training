import { Injectable } from '@angular/core';
import { Favorite } from '../../shared/enums/favorite';
import { FavoriteService } from '../../shared/services/favorite.service';
import { ICar } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private _favoriteCars: ICar[] = [];
  private _cars: ICar[] = [
    {
      "id": "9CF8D4CC-896F-4151-A51D-DCCB0AED6067",
      "name": "Audi Q3",
      "color": "Crimson",
      "releaseYear": 2020,
      "number": "8355RD5",
      "imageUrl": "https://image-server.autospot.ru/images/1/0/2/2/1/6/16007/origin/16007.webp"
    },
    {
      "id": "7BE32261-3D69-4FF9-A416-FBB6C371A4AB",
      "name": "Chevrolet Malibu",
      "color": "LightGreen",
      "releaseYear": 2020,
      "number": "8356RD5",
      "imageUrl": "https://kolesa-uploads.ru/-/407cdca0-d13f-41b2-9c7a-e9a15ee7ab68/chevrolet-malibu-298-result.jpg"
    },
    {
      "id": "D827613E-87A7-4449-B70C-40D69AD62D49",
      "name": "Cadillac Escalade ESV",
      "color": "Aquamarine",
      "releaseYear": 2020,
      "number": "8357RD5",
      "imageUrl": "https://avatars.mds.yandex.net/get-autoru-vos/6051311/0c17fda80cd4c80262f007dafcc0e77d/456x342n"
    },
    {
      "id": "FDA422B0-2A43-4FF2-948F-B9ABEA3ABA03",
      "name": "Chevrolet Corvette",
      "color": "Aquamarine",
      "releaseYear": 2020,
      "number": "8358RD5",
      "imageUrl": "https://www.allcarz.ru/wp-content/uploads/2021/10/foto-corvette-c8-z06_01.jpg"
    },
    {
      "id": "5B518D01-605B-4186-BDCA-196F9437777C",
      "name": "Acura RLX",
      "color": "Aquamarine",
      "releaseYear": 2020,
      "number": "8359RD5",
      "imageUrl": "https://kolesa-uploads.ru/-/b84eff07-d9b2-49f4-83bf-4ee9e16639a6/2016-acura-rlx-sport-hybrid-44.jpg"
    },
    {
      "id": "BB6ADF65-DC7E-45F8-A60B-5E37263145F7",
      "name": "Chevrolet Silverado 2500 HD Crew Cab",
      "color": "Black",
      "releaseYear": 2020,
      "number": "8360RD5",
      "imageUrl": "https://img.automoto.ua/overview/chevrolet-silverado-2020-d60-huge-1588.jpg"
    },
    {
      "id": "1CF7C133-B83A-4E97-8869-13907031332A",
      "name": "BMW 3 Series",
      "color": "MediumSeaGreen",
      "releaseYear": 2020,
      "number": "8361RD5",
      "imageUrl": "https://img-c.drive.ru/models.large.main.images/0000/000/000/001/3a2/48d6600d18e9571a-main.jpg"
    },
    {
      "id": "ED967C4B-439F-401B-A20D-BF36AB0F562E",
      "name": "Chrysler Pacifica",
      "color": "Aquamarine",
      "releaseYear": 2020,
      "number": "8362RD5",
      "imageUrl": "https://autopremiumgroup.ru/m/_versions/info/chrysler/pacifica/2020/3_cHfNc5G_banner.jpg"
    },
    {
      "id": "AF5AAF61-55FB-4D2C-A093-73F3205EE53C",
      "name": "Chevrolet Colorado Crew Cab",
      "color": "Orange",
      "releaseYear": 2020,
      "number": "8363RD5",
      "imageUrl": "https://media.ed.edmunds-media.com/chevrolet/colorado/2021/oem/2021_chevrolet_colorado_crew-cab-pickup_lt_fq_oem_1_815.jpg"
    },
    {
      "id": "E89AFF48-1D24-4C43-A82A-5A4B5DD9F31B",
      "name": "BMW X3",
      "color": "Fuchsia",
      "releaseYear": 2020,
      "number": "8364RD5",
      "imageUrl": "https://image-server.autospot.ru/images/1/0/2/2/1/2/1239344/origin/1239344.webp"
    },
    {
      "id": "8D649428-E875-4A75-AA65-E8209A47B1DC",
      "name": "Acura TLX",
      "color": "LightGreen",
      "releaseYear": 2020,
      "number": "8365RD5",
      "imageUrl": "https://www.allcarz.ru/wp-content/uploads/2020/05/foto-tlx-2021_01.jpg"
    },
    {
      "id": "074ED6EC-FCE0-4571-936F-45E3C2A7EFA5",
      "name": "Chevrolet Silverado 3500 HD Crew Cab",
      "color": "Tomato",
      "releaseYear": 2020,
      "number": "8366RD5",
      "imageUrl": "https://autovogdenie.ru/wp-content/uploads/2017/09/6-min-1.jpg"
    },
    {
      "id": "1ED5C16B-6388-4229-A17D-5853860221CA",
      "name": "BMW 7 Series",
      "color": "DimGrey",
      "releaseYear": 2020,
      "number": "8367RD5",
      "imageUrl": "https://avcdn.av.by/cargeneration/0000/5079/0376.jpeg"
    },
    {
      "id": "EBD61448-B354-4E77-8679-6B9A6C66FA07",
      "name": "Ford Fusion",
      "color": "Grey",
      "releaseYear": 2020,
      "number": "8368RD5",
      "imageUrl": "https://www.auto-data.net/images/f9/Ford-Fusion-II-facelift-2018.jpg"
    },
    {
      "id": "F15A5FC7-56A7-4CF8-AEC4-1C576294EFC8",
      "name": "Buick Envision",
      "color": "SandyBrown",
      "releaseYear": 2020,
      "number": "8369RD5",
      "imageUrl": "https://autoiwc.ru/images/buick/buick-envision_8.webp"
    },
    {
      "id": "3CD6BCEA-10AC-4ADF-A1BE-CC069125ED31",
      "name": "Audi SQ5",
      "color": "SandyBrown",
      "releaseYear": 2020,
      "number": "8370RD5",
      "imageUrl": "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2020/11/12/14/4339774/288ec102cbcab3df8d2a4cc6bf39c36716c5fb32.jpg"
    },
    {
      "id": "2CDF1482-1708-487D-8513-BF028A9CC12E",
      "name": "Audi R8",
      "color": "RosyBrown",
      "releaseYear": 2020,
      "number": "8371RD5",
      "imageUrl": "https://s1.1zoom.ru/prev/555/Audi_R8_2019_Blue_Motion_554559_600x400.jpg"
    },
    {
      "id": "29C448FE-6F50-4207-A129-725FD450F42F",
      "name": "Chevrolet Traverse",
      "color": "FireBrick",
      "releaseYear": 2020,
      "number": "8372RD5",
      "imageUrl": "https://all-auto.org/wp-content/uploads/2020/06/Chevrolet-Traverse-2-6.jpg"
    },
    {
      "id": "FE4DDF0B-A7E1-4707-8FE4-80DABCB41C41",
      "name": "Acura MDX",
      "color": "Orchid",
      "releaseYear": 2020,
      "number": "8373RD5",
      "imageUrl": "https://cdn.motor1.com/images/mgl/b3n13/s3/acura-mdx-protoype-exterior.jpg"
    },
    {
      "id": "36D0D7F4-31E6-40E5-A03B-EF5116C99C99",
      "name": "INFINITI QX80",
      "color": "Orchid",
      "releaseYear": 2020,
      "number": "8374RD5",
      "imageUrl": "https://kolesa-uploads.ru/-/be6970c3-81c2-407e-906e-3ddfd5cd60ed/infiniti-qx80-56-24.jpg.webp"
    }
  ];

  constructor(private favoriteService: FavoriteService) { }

  getCars(): ICar[] {
    return this._cars;
  }

  getFavoriteCars(): ICar[] {
    return this._favoriteCars;
  }

  toggleLike(userId: string) {
    this._favoriteCars = [];

    this.favoriteService.addToFavorite(userId, Favorite.Car);

    this._cars.forEach(car => {
      if (this.favoriteService.getFavorite(Favorite.Car).includes(car.id)) {
        this._favoriteCars.push(car);
      }
    })         
  }
}
