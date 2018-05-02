import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './../models/tap.model';

@Component({
  selector: 'app-edit-tap',
  templateUrl: './edit-tap.component.html',
  styleUrls: ['./edit-tap.component.css']
})
export class EditTapComponent {
  @Input() childSelectedTap: Tap;
  @Output() sendPints = new EventEmitter();
  checked: boolean = false;
  beerDispensed = 0;

  emitPints() {
    this.sendPints.emit(this.beerDispensed);
    this.beerDispensed = 0;

  }

  refillPints() {
    this.sendPints.emit(this.childSelectedTap.level - 124);
    this.beerDispensed = 0;

  }

  clickedCheck() {
    if (this.beerDispensed !== 0) {
      this.emitPints();
      this.checked = false
    } else {
      this.checked = true;
    }
  }

}
