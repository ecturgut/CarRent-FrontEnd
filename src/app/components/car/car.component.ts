import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { CarDetail } from 'src/app/models/carDetail/carDetail';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

export class CarComponent implements OnInit {
  carDetails: CarDetail[] = [];
  brands: Brand[]=[];
  colors: Color[] =[];
  dataLoaded=false;
  filterText="";
  colorId:number;
  brandId:number;
  defaultimg:string="default.jpg";
  imageBasePath:string="https://localhost:44301/images/";

  constructor(private carService: CarService,
    private colorService:ColorService,
    private brandService:BrandService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['brandId'] && params['colorId']) {
        this.getCarsByFilter(params['brandId'], params['colorId'])
        this.getBrands();
        this.getColors();
      }
      else if (params['brandId']) {
        this.getCarsByBrandrId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getBrands();
        this.getColors();
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

  getCarsByFilter(brandId:number,colorId:number){
    this.carService.getCarsByFilter(brandId,colorId).subscribe((response)=>{
      this.carDetails=response.data;
      console.log(response.data);
      if(this.carDetails.length==0){
        console.log("bişey");
      }
    })
  }
  
  getSelectedColorId(colorId: number) {
    if(this.colorId == colorId)
    {
      console.log(this.colorId);
      return true;
    }
    else
    {
      return false;
    }
  }

  getSelectedBrandId(brandId: number) {
    if(this.brandId == brandId)
    {
      console.log(this.brandId);
      return true;
    }
    else
    {
      return false;
    }
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
    this.brands = response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }


} 