import { Component } from '@angular/core';
import { Tap } from './models/tap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taproom';
  masterTaps: Tap[] = [
    new Tap("BBOB Bock", "Brea's Brews", 6, 9, "./../../assets/bock.png"),
    new Tap("PAB Pils", "Barreyo Brewery", 3, 4, "./../../assets/pilsner.png"),
    new Tap("CHUrry Sour", "CHU Bros Cidery", 9, 12, "./../../assets/cider.png")
  ];
  masterSelectedTap = null;

  editTap(clickedTap){
    this.masterSelectedTap = clickedTap;
    console.log("edit tap" + this.masterSelectedTap);
  }

  addTaptoTaps(newTap) {
    this.masterTaps.push(newTap);
  }

  updateLevel(decrement) {
    console.log("update pints" + this.masterSelectedTap);
    this.masterSelectedTap.level -= parseInt(decrement);
    this.masterSelectedTap.percent = (Math.floor(this.masterSelectedTap.level /124 * 100)).toString() + "%";
    this.masterSelectedTap = null;
  }
}
