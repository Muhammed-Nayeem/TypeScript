// Make a class following the defined interface structure:
import { isPlayer } from "./isPerson.js";

export class Personn implements isPlayer {
  public name: string;
  private age: number;
  readonly country: string;
  
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  getProperty() {
    return this.age;
  }

  play() {
    console.log(`I am ${this.name} and I'm ${this.age} year's old and I'm playing for ${this.country}`);
  }
}
