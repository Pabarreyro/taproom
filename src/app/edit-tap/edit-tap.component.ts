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

  emitPints(pints: number) {
    this.sendPints.emit(pints);
  }

  clickedCheck() {
    this.checked = true;
  }

}
