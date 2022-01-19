"use strict";
/**
 * Access Modifiers
 * public (by default)
 * private
 * readonly
 */
// Ex-1:
class Persons {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    print() {
        console.log(`I'm ${this.name} and I'm ${this.age} year's old.My country is ${this.country}`);
    }
}
let rahim = new Persons("Rahim", 30, "Bangladesh");
rahim.print();
console.log(rahim.country);
//EX-2:
class Person {
    constructor(name, age, 
    // private country: string,
    country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    print() {
        console.log(`I'm ${this.name} and I'm ${this.age} year's old.My country is ${this.country}`);
    }
}
let karim = new Persons("Karim", 30, "Bangladesh");
karim.print();
console.log(karim.country);
