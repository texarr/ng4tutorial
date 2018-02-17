import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css']
})
export class Klikacz2Component implements OnInit {
  clicks: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.clicks++;
  }

}
