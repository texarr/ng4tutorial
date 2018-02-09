import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  inputText: string = 'Pole tekstowe';
  inputText2Way: string = '';
  button: boolean = true;
  showClick: string = '';

  colorClass = 'color';
  maxLength = 5;
  logoUrl = '';
  isDisable = true;

  constructor() {
      setTimeout(() => {
          this.isDisable = false;
      }, 2000);
  }

  change() {
      this.inputText = 'Zmiana tekstu i koloru';
      this.maxLength = 10;
      this.colorClass = 'color2';
      this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  click() {
      this.showClick = 'Przycisk aktywny!';
      this.button = false;
  }


}
