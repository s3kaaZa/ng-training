import { Component, OnInit } from '@angular/core';
import { ICar } from '../../interfaces/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-shell',
  templateUrl: './cars-shell.component.html',
  styleUrls: ['./cars-shell.component.scss']
})
export class CarsShellComponent implements OnInit {

  cars: ICar[] = [];
  favoriteCars: ICar[] = [];
  isLike: boolean = false;

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }

  toggleLike(car: ICar) {
    this.carsService.toggleLike(car.id);
    this.favoriteCars = this.carsService.getFavoriteCars();
  }
}
