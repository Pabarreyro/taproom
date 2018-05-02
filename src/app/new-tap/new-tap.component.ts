import { Component, Output, EventEmitter} from '@angular/core';
import { Tap } from './../models/tap.model';

@Component({
  selector: 'app-new-tap',
  templateUrl: './new-tap.component.html',
  styleUrls: ['./new-tap.component.css']
})
export class NewTapComponent {
  @Output() newTap = new EventEmitter();

  addNewTap(newName, newBrand, newPrice, newAlc) {
    let tapInstance = new Tap(newName, newBrand, newPrice, newAlc, "./../../assets/beers.png");
    this.newTap.emit(tapInstance);
  }
}
