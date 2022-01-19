/**
 * Function Signature
 */

//Ex-1: without parameter
let aFunc: () => void;

aFunc = () => {
  console.log("Function Signature");
};

aFunc();

//Ex-2: with parameter
let add: (a: number, b: number) => number;

add = (x: number, y: number,) => {
  return x + y;
}
console.log(add(10, 20));

//Ex-3: with parameter
let calculation: (a: number, b: number, c: string) => number;

calculation = (a: number, b: number, c:string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(10, 20, "add"));
console.log(calculation(10, 20, "minus"));

//Ex-4: with parameter
let userInfo: (id: number | string, users: {
  name: string,
  age: number,
}) => void;


userInfo = (userId: number | string, user: {
  name: string,
  age: number,
}) => {
  console.log(`User Id is: ${userId} User Name is: ${user.name} and User Age is: ${user.age}`);
};

userInfo(132, {name: "Muhammed Nayeem", age: 24});
 