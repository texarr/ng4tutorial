import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  title = 'Angulara';
  pi = Math.PI;
  date = new Date();

  // definicja zmiennej dog typu Dogs
  dog: Dog;

  // zwykła tablica
  days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

  isHidden = true;

  // definicja tablicy typu Dog z konstruktorem wstrzykującym dane do tablicy
  dogs = new Array<Dog>();

  constructor(){
    this.dogs.push(new Dog('Lorka', 2), new Dog('Rambo', 12), new Dog('Maksiu', 4), new Dog('Andrzej', 7), new Dog('Pluto', 5));
  }

  addDogs(){
    this.dogs.push(new Dog('Lorka', 2), new Dog('Rambo', 12), new Dog('Maksiu', 4), new Dog('Andrzej', 7), new Dog('Pluto', 5));
  }

  removeDogs() {
    this.dogs =new Array<Dog>();
  }

  showDays() {
    this.isHidden = false;
  }

  removeDays() {
    this.isHidden = true;
  }


}

// definicja klasy Dog z konstruktorem
class Dog {
  constructor(public name: string, public age: number) {

  }
}
