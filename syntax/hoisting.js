// "use strict";
console.log("hoisting");

// template literal

let obj = {
  name: "atul",
  age: 24,
};

const { age: age3, name } = obj;
console.log(age3, name);

/*
let a = 10;
let b = 5;
[b, a] = [a, b];
console.log(a, b);
*/
/*
let array = [2, 3, 4];
const [a, b] = array;
console.log(a, b);

*/
/*
let name = "atul";
let des = `My namee is ${name} ${1 == 1}`;
console.log(des);
// the for of loop

let testArry = [1.23, 2.45, 5.67];

for (const res of testArry) {
  console.log(res);
}

// rest, spread opeerator
const a = [1, 3, 4];
const b = [5, 6, 7];
const c = [...a, ...b];
console.log(c);

*/

/*
let name = "atul";
let age = "27";
let ageField = "age";
let obj = {
  name,
  [ageField]: 34,
  greet() {
    console.log(this.name + "  " + this.age);
  },
};

console.log(obj.age);
console.log(obj);

const comp = (numb1, bum2 = 0) => numb1 === bum2;
*/
// fat arrow function

/*
const person = {
  name: "atul",
  sayMyName() {
    console.log(this);
  },
  sayFatArrwo: () => {
    console.log(this);
  },
};

const say = person.sayMyName;
say.apply(person);

// person.sayMyName();
// person.sayFatArrwo();

setTimeout(() => console.log("Hello"), 2000);

*/

/*

// you have to delcare variable before using it
function check() {
  age = 23;
}
let age;
check();
console.log(age);
*/
