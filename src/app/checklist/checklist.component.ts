import { Component } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {

  constructor() { }

  newTask: string;
  tasksList: Array<string> = [];

  add(){
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList);
  }
}
