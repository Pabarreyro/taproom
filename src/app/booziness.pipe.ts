import { Pipe, PipeTransform } from '@angular/core';
import { Tap } from './models/task.model';

@Pipe({
  name: "booziness",
  pure: false
})

export class BoozinessPipe implements PipeTransform {
  transform(input: Tap[], desiredBooziness) {
    let output: Tap[] = [];
    for (let i = 0; i < input.length; i++) {
      if (desiredBooziness === 'high' && input[i].alcoholContent >= 10) {
        output.push(input[i]);
      } else if (desiredBooziness === 'medium' && input[i].alcoholContent >= 6 && input[i].alcoholContent < 10) {
        output.push(input[i]);
      } else if (desiredBooziness === 'low' && input[i].alcoholContent < 6) {
        output.push(input[i]);
      }
    }
    if(output.length === 0) {
      output = input;
    }
    return output;
  }
}
