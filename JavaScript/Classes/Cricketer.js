export class Cricketer {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`I'm ${this.name} & I'm ${this.age} year's of old. I'm playing for ${this.country}`);
    }
}
