import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/carDetail/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44301/api/cars/getall';
  apiUrlCarDetail = "https://localhost:44301/api/cars/getdetail"
  apiUrl2='https://localhost:44301/api/cars/'

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>> { 
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }

  getCarsDetailByColorId(colorId:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl2+'getcardetailsbycolorid?colorId='+colorId);
  }

  getCarsDetailByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl2+'getbybrandid?id='+brandId);
  }

  getCarsDetail():Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrlCarDetail);
  }

  getCarDetailsById(carId:number):Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl2+'getcardetailsbyid'+carId);
  }

  getCarsByFilter(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl2+'getCarDetailByFilter?brandId='+brandId +'&colorId='+colorId);
  }
}