import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoTaskComponent {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }

  getColor():string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
