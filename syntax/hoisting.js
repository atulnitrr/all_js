// "use strict";
console.log("hoisting");
// fat arrow function

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

/*

// you have to delcare variable before using it
function check() {
  age = 23;
}
let age;
check();
console.log(age);
*/
