"use strict";
/**
 * Type Aliases
 * told type explicitly from out of the code and store it in type and used it like variables
 */
const userDetails = (id, user) => {
    console.log(`User id is: ${id}`);
    console.log(`User Name: ${user.name}`);
    console.log(`User Age is: ${user.age}`);
};
userDetails(132, { name: "Muhammed Nayeem", age: 23 });
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
sayHello({ name: "Muhammed Nayeem", age: 24 });
