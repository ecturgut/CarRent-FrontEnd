import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CarImageService } from 'src/app/services/car-image/car-image.service';
import { CarDetailService } from 'src/app/services/cardetail/cardetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  imageUrl:string="https://localhost:44301/Images/";
  carImages:CarImage[]=[];
  carDetails:CarDetail[]=[];
  carDetail:CarDetail;

  constructor( 
    private cardetailservice:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private getCarImages:CarImageService
    ) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetail(params["carId"]);
          this.getImagesById(params["carId"]);
        }
  
      });
    }
  
    getCarDetail(carId:number) {
      this.cardetailservice.getCarDetailsById(carId).subscribe((response) => {
        this.carDetails = response.data;
      });
    }

    getImagesById(carId:number) {
      this.cardetailservice.getImagesById(carId).subscribe((response) => {
        this.carImages = response.data;
      });
    }

}
