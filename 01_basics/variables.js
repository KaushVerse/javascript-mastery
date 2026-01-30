//TODO: Variables

// Variable = Memory ka ek named box -> jisme hum data store karte hain taaki baad me use / modify kar saken.
let score = 100; // score -> label & 100 -> value
console.log(score);

//FIXME: var problems
// var = legacy code only
if (true) {
  var a = 10;
}
console.log(a); // 1- (bahar bhi accessible)

//FIXME: let
// let sage & Flexible -> block scoped, Re-assign allowed, Re-declare not allowed
let age = 25;
age = 26;
console.log(age); // allowed

// Re-declare
if (true) {
  let city = "Delhi";
}
// console.log(city) // ReferenceError

//FIXME: const -> KING
const country = "India";
// country = "USA" // Error -> Assignment to constant variable
// Important Twist -> const value ko lock karta hai, variable ko nahi

const user = {
  name: "Bro",
};
user.name = "Game Changer"; // allowed

// user = {} // Error -> Assignment to constant variable

//FIXME: Hoisting
console.log(d);
var d = 10; // undefined

// let / const hoisting (TDZ)
// console.log(c); // Cannot access c before initialization
let c = 10;

//FIXME: Memory Model
// Primitive
let x = 10;
let y = x;
y = 20;
console.log(x); // Stack Memory -> Copy by value

// Non-Primitive
let sc = {
  score: 20,
};
let rs = sc;
rs.score = 100;
console.log(sc); // Heap Memory ->  Copy by Reference

//FIXME: Pro Rules
// Default
const PI = 3.14;

// When value changes
let count = 0;

// Never
var temp = 123;

//FIXME: Interview Gold Questions

// Q1
// console.log(e); // ReferenceError
let e = 10;

// Q2
const arr = [];
arr.push(1) // Empty

// Q3
{
    const g = 10
}
// console.log(g); // ReferenceError g is not defined
