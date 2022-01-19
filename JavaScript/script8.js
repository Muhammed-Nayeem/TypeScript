"use strict";
/**
 * classes in typescript
 */
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`I am ${this.name} & I'm ${this.age} year's old. I'm playing for ${this.country}`);
    }
}
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 35, "Bangladesh");
let players = [];
players.push(mashrafi);
players.push(sakib);
console.log(players);
players.forEach((player) => {
    console.log(player.name);
});
