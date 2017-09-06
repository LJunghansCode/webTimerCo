import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  const addZero = (number) => {
    let N = number.toString();
    if (N[1] === undefined) {
      N += 0;
      const str =  N.split('').reverse().join('');
      return str;
    }else {
      return number;
    }
  };
  const miliToTime = (M) =>  {
      const seconds = Math.floor((M / 1000) % 60);
      const minutes = Math.floor((M / (1000 * 60)) % 60);
      const hours = Math.floor((M / (1000 * 60 * 60)) % 24);
      return (addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds));
    };
    return miliToTime(value);
  }

}
