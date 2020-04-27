// "use strict";
console.log("hoisting");

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
