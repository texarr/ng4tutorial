import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BasicsComponent } from './basics/basics.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    BasicsComponent,
    EventBindingComponent,
    ChecklistComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
