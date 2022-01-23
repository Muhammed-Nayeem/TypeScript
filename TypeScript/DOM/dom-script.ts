/**
 * DOM in TypeScript
 */

//Ex-1:
const app = document.getElementById("app");

let p = document.createElement("p");
p.textContent = "Hello TypeScript DOM";

app?.appendChild(p);
