/**
 * classes in typescript
 */

class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      `I am ${this.name} & I'm ${this.age} year's old. I'm playing for ${this.country}`
    );
  }
}

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 35, "Bangladesh");

let players: Player[] = [];

players.push(mashrafi);
players.push(sakib);

console.log(players);

players.forEach((player) => {
  console.log(player.name);
});
