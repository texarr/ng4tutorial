import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Task} from "../models/task";

@Injectable()
export class TasksService {
  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'Wyjście z psem', created: new Date()},
      {name: 'Nauka angulara', created: new Date()},
      {name: 'Zadanietestowe', created: new Date()}
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
    this.tasksDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }
}
