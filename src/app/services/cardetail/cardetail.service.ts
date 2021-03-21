import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { CarImage } from 'src/app/models/carImage/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44301/api/";
  constructor(private httpClient:HttpClient) { }


  getImagesById(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getbyid?carId="+id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }
  
   getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getdetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

   getCarDetailsById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }
   

}