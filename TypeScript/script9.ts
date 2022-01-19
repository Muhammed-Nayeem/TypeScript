/**
 * Access Modifiers
 * public (by default)
 * private
 * readonly
 */

// Ex-1:
class Persons {
  private name: string;
  private age: number;
  // private country: string;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  print() {
    console.log(
      `I'm ${this.name} and I'm ${this.age} year's old.My country is ${this.country}`
    );
  }
}

let rahim = new Persons("Rahim", 30, "Bangladesh");
rahim.print();

console.log(rahim.country);

//EX-2:
class Person {
  constructor(
    private name: string,
    private age: number,
    // private country: string,
    readonly country: string
  ) {}

  print() {
    console.log(
      `I'm ${this.name} and I'm ${this.age} year's old.My country is ${this.country}`
    );
  }
}

let karim = new Persons("Karim", 30, "Bangladesh");
karim.print();

console.log(karim.country);
