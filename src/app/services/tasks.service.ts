import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Task} from "../models/task";

@Injectable()
export class TasksService {
  private tasksList: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'Wyjście z psem', created: new Date().toLocaleString(), isDone: false},
      {name: 'Nauka angulara', created: new Date().toLocaleString(), isDone: false},
      {name: 'Zadanietestowe', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true}
    ];
    this.taskListObs.next(this.tasksList);
  }

  add(task: Task){
    this.tasksList.push(task);
    this.taskListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e!== task);
    this.taskListObs.next(this.tasksList);
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
