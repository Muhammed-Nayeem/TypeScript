"use strict";
/**
 * if any variable was defined and declaration with together than compiler initialize this variable to this type whatever you defined to this variable like string, number, boolean etc;
 *
 * that's why next time if your want to redefine this variable than you've to set the similar type of value otherwise you get an error
 */
// Define and Declaration's together:
let playerName = "Mashrafi";
// cannot set number in type string;
// playerName = 34;
// it will work
playerName = "Tamim Iqbal";
console.log(playerName);
/**
 * example: 2
 * if defined and declaration didn't together
 * than you can set any value
 * bcz the the declared value's type will be any
 */
let player;
player = "Sakib";
player = 35;
console.log(player);
// similar to array's and object:
let fruits = ["apple", "mango", "banana"];
// we can't set number value in string type arrays
// fruits.push(25);
// but it will work
fruits.push("pineapple");
console.log(fruits);
// but if we create mixed array
let mixed = ["apple", 10, true, { name: "Nayeem" }];
// now we can set any type of data to this mixed array
mixed.push("mango");
mixed.push(40);
mixed.push(false);
mixed.push({
    name: "Muhammed Nayeem"
});
console.log(mixed);
//function: explicitly defined the parameter type
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));
