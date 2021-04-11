import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CustomerDetails } from 'src/app/models/customer-detail/customerDetail';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrlCustomer = "https://localhost:44301/api/customers/";

  constructor(private httpClient: HttpClient) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrlCustomer+"getall");
  }

  getDetails():Observable<ListResponseModel<CustomerDetails>>{
    return this.httpClient.get<ListResponseModel<CustomerDetails>>(this.apiUrlCustomer+"getcustomerdetaills");
  }

}