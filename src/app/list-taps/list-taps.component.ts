import { Component, OnInit } from '@angular/core';
import { Tap } from './../models/tap.model';

@Component({
  selector: 'app-list-taps',
  templateUrl: './list-taps.component.html',
  styleUrls: ['./list-taps.component.css']
})
export class ListTapsComponent implements OnInit {
  taps: Tap[] = [
    new Tap("BBOB Bock", "Brea's Brews", 6, 6),
    new Tap("PAB Pils", "The Barreyo Brewery", 3, 4),
    new Tap("Churry Sour", "Chu Brothers Cidery", 9, 5)
  ];
  constructor() { }

  ngOnInit() {
  }

}
