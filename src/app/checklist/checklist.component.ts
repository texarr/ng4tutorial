import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {

  constructor() { }

  newTask: string;
  @Input() tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  @Output() eventTask = new EventEmitter<string>();

  add(){
    this.tasksList.push(this.newTask);
    this.newTask = '';
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e!== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }

  select(task) {
    this.eventTask.emit(task);
  }
}
