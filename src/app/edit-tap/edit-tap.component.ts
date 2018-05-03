import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

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
