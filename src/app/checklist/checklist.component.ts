import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {

  constructor() { }

  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add(task: string){
    this.tasksList.push(task);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e!== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
