import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color/color.service';
import { Color } from 'src/app/models/color/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
  filterText="";
  dataLoaded=true;
  constructor( private colorService : ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  getCurrentColorClass(color:Color){
    if(this.currentColor===color){
      return 'list-group-item active'
    }else{
      return 'list-group-item'
    }
  }

  cleanCurrentColor(){
    this.currentColor=null;
  }
  
  getAllColorClass(){
    if(!this.currentColor){
      return 'list-group-item active'
    }else{
      return 'list-group-item'
    }
  }

}