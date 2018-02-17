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
import { Klikacz1Component } from './klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';


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
    Klikacz1Component,
    Klikacz2Component,
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
