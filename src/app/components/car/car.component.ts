import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { CarService } from 'src/app/services/car/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

export class CarComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded=false;
  filterText="";
  defaultimg:string="default.jpg";
  imageBasePath:string="https://localhost:44301/images/";

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandrId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCarsDetail();
      }
    });
  }
 
  getAll(){
     this.carService.getCars().subscribe((response)=>{
      this.carDetails = response.data;
      this.dataLoaded=true;
    })
  }
 
  getCarsDetail(){
    this.carService.getCarsDetail().subscribe((response)=>{
      this.carDetails = response.data;
      this.dataLoaded=true;

    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsDetailByColorId(colorId).subscribe((response)=>{
      this.carDetails = response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrandrId(brandId:number){
    this.carService.getCarsDetailByBrandId(brandId).subscribe((response)=>{
      this.carDetails = response.data;
      this.dataLoaded=true;
    })
  }

  colGenerator(carDetails: CarDetail[]){
    if(carDetails.length==2){
      return "col-lg-6"
    } else{
      return "col-lg-4"
    }
  }

  
} 