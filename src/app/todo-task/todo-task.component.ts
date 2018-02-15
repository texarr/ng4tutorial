import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoTaskComponent implements OnChanges, OnInit, DoCheck {

  @Input()
  tasksList: Array<string> = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - uruchomione! - #1');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit - uruchomione! = #2');
    this.tasksList.push('zadanie1', 'zadanie2', 'zadanie3');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck - uruchomione! = #3');
  }

  constructor() { }

  remove(task: string) {
    this.emitRemove.emit(task);
  }

  done(task: string) {
    this.emitDone.emit(task);
  }

  getColor():string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
