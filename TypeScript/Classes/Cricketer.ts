export class Cricketer {
  private name: string;
  private age: number;
  private country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`I'm ${this.name} & I'm ${this.age} year's of old. I'm playing for ${this.country}`);
  }
}
