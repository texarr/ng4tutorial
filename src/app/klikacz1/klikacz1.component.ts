import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css']
})
export class Klikacz1Component implements OnInit {
  clicks: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.clicks++;
  }

}
