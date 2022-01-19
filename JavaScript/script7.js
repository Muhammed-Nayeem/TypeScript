"use strict";
/**
 * Function Signature
 */
//Ex-1: without parameter
let aFunc;
aFunc = () => {
    console.log("Function Signature");
};
aFunc();
//Ex-2: with parameter
let add;
add = (x, y) => {
    return x + y;
};
console.log(add(10, 20));
//Ex-3: with parameter
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(10, 20, "add"));
console.log(calculation(10, 20, "minus"));
//Ex-4: with parameter
let userInfo;
userInfo = (userId, user) => {
    console.log(`User Id is: ${userId} User Name is: ${user.name} and User Age is: ${user.age}`);
};
userInfo(132, { name: "Muhammed Nayeem", age: 24 });
