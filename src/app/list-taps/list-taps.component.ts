import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Tap } from './../models/tap.model';

@Component({
  selector: 'app-list-taps',
  templateUrl: './list-taps.component.html',
  styleUrls: ['./list-taps.component.css']
})
export class ListTapsComponent{
  @Input() childTapList: Tap[];
  @Output() pintSender = new EventEmitter();
  @Output() tapSender = new EventEmitter();
  filterBooziness: string = "all";
  openModal: false;

  priceColor(tap: Tap) {
    if (tap.pricePerPint <= 4) {
      return "green";
    } else if (tap.pricePerPint <= 8 ) {
      return "orange";
    } else {
      return "red";
    }
  }

  onChange(filterOption) {
    this.filterBooziness = filterOption;
  }

  passPints(pints: number) {
    this.pintSender.emit(pints);
  }

  passTap(tap: Tap) {
    this.tapSender.emit(tap);
  }
}
