import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  headerText: string = 'Property binding';
  inputText: string = 'Zmień wartość pola';
  inputText2Way: string = '';
  button: boolean = true;
  showClick: string = '';

  colorClass = 'color';
  maxLength = 5;
  logoUrl = 'https://m.ocdn.eu/_m/52e89ff3f27f880160f54cc5534f585b,62,37.jpg';
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
