import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrlRental="https://localhost:44301/api/rentals/getdetail"; 

  constructor(private httpClient: HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrlRental);
  }
}