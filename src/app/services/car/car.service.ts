import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';
import { CarDetailResponseModel } from 'src/app/models/carDetail/carDetailResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44301/api/cars/getall';
  apiUrlCarDetail = "https://localhost:44301/api/cars/getdetail"

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<CarResponseModel> { 
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }

  getCarsDetail():Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrlCarDetail);
  }
}