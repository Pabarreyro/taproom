import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './../models/tap.model';

@Component({
  selector: 'app-list-taps',
  templateUrl: './list-taps.component.html',
  styleUrls: ['./list-taps.component.css']
})
export class ListTapsComponent{
  @Input() childTapList: Tap[];
  @Output() clickSender = new EventEmitter();

  priceColor(tap: Tap) {
    if (tap.pricePerPint <= 4) {
      return "green";
    } else if (tap.pricePerPint <= 8 ) {
      return "orange";
    } else {
      return "red";
    }
  }

  editButtonClicked(tap: Tap) {
    this.clickSender.emit(tap);
  }
}
