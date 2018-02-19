import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TasksService {
  private tasksList: Array<string> = [];
  private tasksDone: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>(this.tasksList);
  private taskDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);

  constructor() {
    this.tasksList = ['Wyjście z psem', 'Nauka angulara', 'Zadanietestowe'];
    this.taskListObs.next(this.tasksList);
  }

  add(task: string){
    this.tasksList.push(task);
    this.taskListObs.next(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e!== task);
    this.taskListObs.next(this.tasksList);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>> {
    return this.taskDoneObs.asObservable();
  }
}
