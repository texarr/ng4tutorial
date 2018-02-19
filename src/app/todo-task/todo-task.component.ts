import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {TasksService} from "../services/tasks.service";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoTaskComponent {

  tasksList: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  remove(task: string) {
    this.tasksService.remove(task);
  }

  done(task: string) {
    this.tasksService.done(task);
  }

  getColor():string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
