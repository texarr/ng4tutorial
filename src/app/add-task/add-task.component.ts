import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  newTask: string;
  @Output()
  emitTask = new EventEmitter<string>();

  constructor() { }

  add(input: HTMLInputElement) {
    // this.emitTask.emit(this.newTask);
    // this.newTask = '';
    console.log(input.value);
    this.emitTask.emit(input.value);
    input.value = '';
  }

}
