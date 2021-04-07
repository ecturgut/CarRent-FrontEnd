import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail/carDetail';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((ca:CarDetail)=> (ca.carName + " " + ca.colorName ).toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
