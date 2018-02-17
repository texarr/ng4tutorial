import { Injectable } from '@angular/core';

@Injectable()
export class ClickService {

  sumClicks: number = 0;

  constructor() { }

  addClicks() {
    this.sumClicks += 1;
    console.log("Suma: " + this.sumClicks);
  }

}
