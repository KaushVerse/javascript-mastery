//TODO: Data Types
// Data Types = value ka nature JS engine ko batata hai:
// kitni memory allocate karni hai
// kaise operations perform karne hai
// copy by value ya reference karna hai

//FIXME: JS ke Total Data Types
// 1. Primitive Data Types (7 types)
// 2. Non-Primitive Data Types (1 type)

//! Primitive Data Types (7 types)
// 1. Number
let num = 42; // integer
let floatNum = 3.14; // floating-point number
console.log(num);
console.log(floatNum);

// 2. String
let str = "Hello, World!";
console.log(str);

str[0] = "h"; // Strings are immutable
console.log(str); // "Hello, World!"

// 3. Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// 4. Undefined
let undef;
console.log(undef); // undefined

// 5. Null
let emptyValue = null;
console.log(emptyValue); // null

// 6. Symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false

// 7. BigInt
let bigIntNum = 9007199254741991n;
console.log(bigIntNum);

//! Non-Primitive Data Types (1 type)

// 1. Object
let obj = {
  name: "Alice",
  age: 30,
};
console.log(obj);
obj.age = 31; // Objects are mutable
console.log(obj);

// Array (a type of Object)
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6);
console.log(arr);

// Function (a type of Object)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Bob"));

// Date (a type of Object)
let date = new Date();
console.log(date);

// RegExp (a type of Object)
let regex = /ab+c/;
console.log(regex);

// Map (a type of Object)
let map = new Map();
map.set("key1", "value1");
console.log(map);

// Set (a type of Object)
let set = new Set();
set.add(1);
set.add(2);
console.log(set);

// WeakMap (a type of Object)
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "value");
console.log(weakMap);

// WeakSet (a type of Object)
let weakSet = new WeakSet();
let objValue = {};
weakSet.add(objValue);
console.log(weakSet);

// ArrayBuffer (a type of Object)
let buffer = new ArrayBuffer(16);
console.log(buffer);

// TypedArray (a type of Object)
let int32Array = new Int32Array(buffer);
console.log(int32Array);

// DataView (a type of Object)
let dataView = new DataView(buffer);
console.log(dataView);


// Note: Primitive data types are copied by value, while non-primitive data types (objects) are copied by reference.

// Example of Copy by Value
let a = 10;
let b = a;
b = 20;
console.log(a);

// Example of Copy by Reference
let obj1 = { key: "value" };
let obj2 = obj1;
obj2.key = "newValue";
console.log(obj1);

//! Pro Rules

// Primitive checks
typeof x === "string";

// Array check
Array.isArray(arr);

// Object clone
const clone = structuredClone(obj);

// Equality checks
// Object.is(value1, value2);
// === always

//! interview Traps
// Q1
typeof NaN; // "number"

// Q2
let c = [];
let d = c;
d.push(1);
console.log(c); // [1]

// Q3
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(typeof typeof 10); // "string"

