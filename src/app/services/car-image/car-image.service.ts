import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from "src/app/models/listResponseModel";
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44301/api/"
  constructor(private httpClient:HttpClient) { }

  
  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"CarImages/getbyid?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}