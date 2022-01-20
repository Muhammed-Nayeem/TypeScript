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
const addId = <T extends {
  name: string,
  age: number,
  country: string,
}>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return {...obj, id};
}

let user = addId({name: "Nayeem", age: 24, country: "Bangladesh"});

console.log(user);

//Ex-3: Generics and Interface uses together:
interface APIresponse <T>{
  status: number,
  type: string,
  data: T,
}

const response1: APIresponse <object> = {
  status: 200,
  type: "good",
  data: {
    name: "test",
    something: 400,
  },
};
