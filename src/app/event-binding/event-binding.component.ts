import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  eventBindingText: string = '';
  colorClass: string = 'color';
  isDisable: boolean = true;
  profession: string = 'koń Rafał :)';
  skill: string = 'Angular';

  constructor() {}

  onFocus() {
    this.colorClass = 'color2';
  }

  onClick(event) {
    console.log(event);
  }

  onMouseMove(event) {
    console.log('x: ' + event.clientX + ',y ' + event.clientY);
  }

  onPaste() {
    this.eventBindingText = 'Nie wklejaj, wpisz!';
  }

  change() {
    this.isDisable = false;
  }

  saveP(event) {
    this.profession = event.target.value;
  }

  saveS(event) {
    this.skill = event.target.value;
  }
}
