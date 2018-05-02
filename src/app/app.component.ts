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
    new Tap("BBOB Bock", "Brea's Brews", 6, 6, "./../../assets/bock.png"),
    new Tap("PAB Pils", "The Barreyo Brewery", 3, 4, "./../../assets/pilsner.png"),
    new Tap("Churry Sour", "Chu Brothers Cidery", 9, 5, "./../../assets/cider.png")
  ];
  masterSelectedTap = null;

  editTap(clickedTap){
    this.masterSelectedTap = clickedTap;
  }

  finishedEditing() {
    this.masterSelectedTap = null;
  }

  updateLevel(decrement) {
    if (this.masterSelectedTap.level - parseInt(decrement) > 0) {
      this.masterSelectedTap.level -= parseInt(decrement);
      this.masterSelectedTap.percent = (Math.floor(this.masterSelectedTap.level /124 * 100)).toString() + "%";
    } else{
      console.log("Please replace this beer");
    }
  }
}
