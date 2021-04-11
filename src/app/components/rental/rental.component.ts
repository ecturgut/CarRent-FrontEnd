import { Component, Input, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { CustomerDetails } from 'src/app/models/customer-detail/customerDetail';
import { Rental } from 'src/app/models/rental/rental';
import { RentalOriginal } from 'src/app/models/rental/rentalOriginal';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  customerDetails:CustomerDetails[]=[];
  dataLoaded = false;
  rentDate: Date;
  returnDate: Date;
 
  customerId: number;
  @Input() carrental: CarDetail;

  constructor(private rentalService: RentalService, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getRental();
    this.getCustomers();
  }

  getRental() {
    this.rentalService.getRental().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  addRentalCar() {
    let rental: RentalOriginal = {
      carId: this.carrental.carId,
      customerId: this.customerId,
      rentDate: this.rentDate,
      returnDate: this.returnDate
    };
  }

  getCustomers() {
    this.customerService.getDetails().subscribe((response) => {
      this.customerDetails= response.data;
      this.dataLoaded = true;
    });
  }


}
