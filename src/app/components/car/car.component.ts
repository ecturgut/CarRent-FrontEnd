import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = {
    Id: 1,
    carName: 'Ford Fiesta',
    brandId: 1,
    colorId: 1,
    dailyPrice: 200,
    modelYear: 2018,
  };
  car2 = {
    Id: 2,
    carName: 'Hyundai Accent Blue',
    brandId: 2,
    colorId: 1,
    dailyPrice: 180,
    modelYear: 2018,
  };
  car3 = {
    Id: 3,
    carName: 'Honda Civic',
    brandId: 3,
    colorId: 1,
    dailyPrice: 250,
    modelYear: 2019,
  };

  cars = [this.car1, this.car2, this.car3];
  constructor() { }

  ngOnInit(): void {
  }

}
