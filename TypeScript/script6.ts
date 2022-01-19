/**
 * Type Aliases
 * told type explicitly from out of the code and store it in type and used it like variables
 */

type stringOrNum = number | string;
type userType = {name: string, age: number};

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is: ${id}`);
  console.log(`User Name: ${user.name}`);
  console.log(`User Age is: ${user.age}`);
}

userDetails(132, {name: "Muhammed Nayeem", age: 23});

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir": "Mr."} ${user.name}`);
}

sayHello({name: "Muhammed Nayeem", age: 24});
