import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Color } from 'src/app/models/color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrlColor="https://localhost:44301/api/colors/getallcolors";

  constructor( private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrlColor);
  }
}