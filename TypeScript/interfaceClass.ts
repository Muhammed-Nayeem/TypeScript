import { Personn } from "./Interface/person.js";
import { isPlayer } from "./Interface/isPerson.js";

let p1 = new Personn("Mashrafi", 40, "Bangladesh");
let p2 = new Personn("Sakib", 35, "Bangladesh");

let persons: Personn[] = [];

persons.push(p1);
persons.push(p2);

console.log(persons);

persons.forEach(person => person.play());
