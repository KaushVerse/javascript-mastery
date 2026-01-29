# 🧠 JavaScript Engine – Overview (Slow & Clear)

> Goal: JS code ka **inside flow** samajhna — engine kaise read, execute aur optimize karta hai.

---

## 1️⃣ JavaScript Engine kya hota hai?

JavaScript Engine ek **program** hota hai jo:

* JavaScript code ko **read** karta hai
* Usko **machine-level instructions** me convert karta hai
* Aur finally **execute** karta hai

Simple line:

> **JS Engine = Code Translator + Executor**

---

## 2️⃣ Popular JavaScript Engines

| Engine         | Used In         |
| -------------- | --------------- |
| V8             | Chrome, Node.js |
| SpiderMonkey   | Firefox         |
| JavaScriptCore | Safari          |

Hum yahan mostly **V8** ko reference maan ke samjhenge.

---

## 3️⃣ JavaScript Engine ke Main Parts

JS Engine mainly 3 parts me kaam karta hai:

1. **Parser**
2. **Execution Context / Runtime**
3. **Garbage Collector**

---

## 4️⃣ Step 1: Parsing (Code samajhna)

Jab tu ye code likhta hai:

```js
let x = 10 + 20;
```

Engine pehle isko **parse** karta hai:

### 🔹 Tokenization

Code ko chhote parts me tod diya jata hai:

* `let`
* `x`
* `=`
* `10`
* `+`
* `20`

### 🔹 AST (Abstract Syntax Tree)

Tokens se ek tree structure banta hai:

```
   =
  / \
 x   +
    / \
  10  20
```

> ❗ AST bina execution ke sirf structure hota hai

---

## 5️⃣ Step 2: Compilation (Fast banane ki tayari)

Modern JS engines **Interpreter + JIT Compiler** use karte hain.

### 🔹 Interpreter

* Line by line execute
* Jaldi start hota hai
* Slow hota hai

### 🔹 JIT Compiler (Just In Time)

* Frequently chalne wale code ko **optimize** karta hai
* Bytecode → Machine Code
* Bahut fast 🚀

---

## 6️⃣ Step 3: Execution (Code chalna)

Execution ke time pe engine use karta hai:

### 📌 Call Stack

* Functions ka order track karta hai
* LIFO (Last In First Out)

Example:

```js
function a() {
  b();
}
function b() {
  console.log('hi');
}
a();
```

Call Stack flow:

```
a()
b()
console.log()
```

---

## 7️⃣ Memory Management

### 🔹 Heap Memory

* Objects
* Arrays
* Functions

Example:

```js
let obj = { name: 'JS' };
```

`obj` reference stack me hota hai,
actual object **heap** me.

---

## 8️⃣ Garbage Collection

JS automatically unused memory clean karta hai.

### 🔹 Mark & Sweep Algorithm

1. Root se reachable objects mark hote hain
2. Jo reachable nahi → delete

> ❗ Memory leak tab hota hai jab reference chhoot ta nahi

---

## 9️⃣ JavaScript Engine vs Runtime

| Engine       | Runtime              |
| ------------ | -------------------- |
| Code execute | Extra features deta  |
| V8           | Browser / Node.js    |
| Sirf JS      | Web APIs, Event Loop |

---

## 🔟 One-Line Summary

> **JS Engine = Parser + Compiler + Call Stack + Heap + GC**

---

## ❓ Interview Questions

* JS engine aur runtime me difference?
* Call stack overflow kab hota hai?
* Garbage collection kaise kaam karta hai?

---

## 🧠 Tip

Is file ko samajh liya =
Event Loop, Async JS, Performance **easy mode** 💡

---

(Next file: `call-stack.md` jab bole 🔥)
