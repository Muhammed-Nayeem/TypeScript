export class Personn {
    constructor(n, a, c) {
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
