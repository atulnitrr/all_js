console.log("Symbol js");

let numbers = [1, 2, 3];

numbers[Symbol.toPrimitive] = function () {
  return 999;
};

console.log(numbers + 1);
/*
class Person {}

const person = new Person();
console.log(person);
// console.log(Person.prototype[Symbol.toStringTag]);

*/

/*
let symbo1 = Symbol.for("age");
let symbo2 = Symbol.for("age");

console.log(symbo1 === symbo2);

const person = {
  name: "atul",
};

const ageChanger = (person) => {
  let mSymb = Symbol.for("age");
  person[mSymb] = 33;
};

ageChanger(person);
console.log(person);
console.log(person[symbo2]);

*/
/*
let sym = Symbol("Debug");
let anoThersym = Symbol("Debug");

console.log(sym === anoThersym);

const person = {
  name: "atul",
  [sym]: 33,
};

console.log(person);
console.log(person[sym]);
*/
// console.log(sym);
// console.log(typeof sym);
