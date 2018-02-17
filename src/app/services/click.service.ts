import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClickService {

  private sumClicks: number = 0;
  private sum = new Subject<number>();

  constructor() { }

  addClicks() {
    this.sumClicks += 1;
    this.sum.next(this.sumClicks);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }

}
