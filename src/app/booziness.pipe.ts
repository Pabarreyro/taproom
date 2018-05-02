import { Pipe, PipeTransform } from '@angular/core';
import { Tap } from './models/task.model';

@Pipe({
  name: "booziness",
  pure: false
})

export class BoozinessPipe implements PipeTransform {
  transform(input: Tap[]) {
    let output: Tap[] = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 10) {

        } else if (input[i] >= )
    }
  }
}
