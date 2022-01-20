"use strict";
/**
 * Generics
 */
//Ex-1:
// const addId = <T>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return {...obj, id};
// }
// let user = addId({
//   naam: "Nayeem",
//   age: 24,
//   country: "Bangladesh",
// });
// let {naam, age, country, id} = user;
// console.log(naam, age, country, id);
//Ex-2:
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({ name: "Nayeem", age: 24, country: "Bangladesh" });
console.log(user);
const response1 = {
    status: 200,
    type: "good",
    data: {
        name: "test",
        something: 400,
    },
};
