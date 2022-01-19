/**
 * Function type: Maintain Naming Convention
 * type of the first latter should be capital
 */

//Ex-1: mention type Function
let myFunc: Function;

myFunc = () => {
  console.log("Hello TypeScript");
}

myFunc();


//Ex-2: Handle parameter
const printH = (a: string, b: string) => {
  console.log(`Hello ${a} ${b}`);
}

printH("A", "B");

//Ex-3: default parameter
const printA = (a: string, b: string, c: string = "true") => {
  console.log(c);
  console.log(`Hello ${a} ${b}`);
}

printA("A", "B", "false");

//Ex-4: return 
const printB = (a: number, b: number, c: string = "true") => {
  console.log(c);
  return a + b;
}

console.log(printB(5, 10));

