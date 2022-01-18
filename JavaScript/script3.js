"use strict";
/**
 * Explicit Type: set the strict type of value;
 *
 * Union Type: set the mixed type of value;
 */
//Ex: explicit type with single variable
let a;
a = 1971;
a = 2022;
console.log(a);
// Ex: explicit type with single array
let array = [];
array.push(10);
array.push(20);
console.log(array);
//Ex: union type with single variable
let b;
b = 2022;
b = "Aim to be a good software engineer";
console.log(b);
//Ex: union type with single array
let arr = [];
arr.push(40);
arr.push("apple");
arr.push(true);
arr.push({ name: "Nayeem" });
console.log(arr);
//Ex-1: explicit type with object
let x;
x = {
    name: "Mr. X",
    age: 24,
    adult: true,
    title: "Software Developer",
    company: "Google",
    phone: "01703479326",
    email: "mrx120@gmail.com",
};
// it will work : bcz in js everything is object
// x = [4, 5, 6];
console.log(x);
//Ex-2: explicit type with object
let y;
y = {
    name: "Mr. X",
    age: 24,
    adult: true,
    title: "Software Developer",
    company: "Google",
    phone: "01703479326",
    email: "mrx120@gmail.com",
};
// it will work : bcz in js everything is object
// y = [1, 2, 3];
console.log(x);
//Ex-3: explicit type with object
let z = {
    name: "Mr. Z",
    age: 23,
    adult: true,
};
//you have to follow the certain schema
z = {
    name: "TypeScript",
    age: 12,
    adult: false,
};
console.log(z);
