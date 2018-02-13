import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentTasks: Array<string> = ['Sprzatanie', 'Spacer z psem', 'Gotowanie', 'Praca'];

  selected(task: string): void {
    console.log(task);
  }
}
