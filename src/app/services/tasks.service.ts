import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Task} from "../models/task";

@Injectable()
export class TasksService {
  private tasksList: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    const tasksList = [
      {name: 'Wyjście z psem', created: new Date().toLocaleString(), isDone: false},
      {name: 'Nauka angulara', created: new Date().toLocaleString(), isDone: false},
      {name: 'Zadanietestowe', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true}
    ];
    this.taskListObs.next(tasksList);
  }

  add(task: Task){
    const list = this.taskListObs.getValue();
    list.push(task);
    this.taskListObs.next(list);
  }

  remove(task: Task) {
    const list = this.taskListObs.getValue().filter(e => e!== task);
    this.taskListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
}
