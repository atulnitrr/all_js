console.log("Hello in extension");

// array

let array = [1, 2, 3];
let it = array.entries();
for (const iterator of it) {
  console.log(iterator);
}
// console.log(array.copyWithin(1, 2));
// console.log(array);

/*
var inveerntory = [
  { name: "apples", quantity: 10 },
  { name: "banana", quantity: 5 },
  { name: "cherries", quantity: 10 },
];

function findCherry(fruit) {
  return fruit.name === "cherries";
}

console.log(inveerntory.find(findCherry));

*/

/*
let array = Array(5);
array = Array.of(9, 90, 33);
array = [10, 1, 2, 34];
console.log(array);

console.log(array.find((val) => val >= 2));
*/

// array.fill(100, 0, 2);
// console.log(array);

// let newArray = Array.from(array, (val) => val * 2);
// console.log(newArray);

/*
let number = NaN;
console.log(isNaN(number));
console.log(Number.isNaN(number));

*/

/*
let name = "atul";
console.log(name.startsWith("at"));
console.log(name.endsWith("ul"));
console.log(name.includes("tu"));
console.log(name);

*/
/*
let number = 3.34;
number = 0.34;
number = -3.34;
console.log(Math.trunc(number));
*/

/*
let number = 20;
number = -20;
number = NaN;
number = NaN;
number = "SSS";
console.log(Math.sign(number));

*/

/*
let person = {
  name: "atul",
};

let boss = {
  actor: "singham",
};

console.log(person);

console.log(person.__proto__);
console.log(person.__proto__ === Object.prototype);

Object.setPrototypeOf(person, boss);
console.log(person);
console.log(person.__proto__);
console.log(person.__proto__ === boss);
console.log(person.actor);

*/
/*
class Object1 {
  constructor(a) {
    this.a = a;
  }
}

class Object2 {
  constructor(a) {
    this.b = a;
  }
}

const obj1 = new Object1(1);
const obj2 = new Object2(1);

const obj = Object.assign(obj1, obj2);

console.log(obj);
console.log(obj.__proto__ === Object1.prototype);
*/

/*
console.log(obj1);

console.log(obj1.__proto__ === Object1.prototype);
console.log(obj1.__proto__);
console.log(Object1.prototype);

*/

/*
const obj1 = {
  a: 1,
};

const obj2 = {
  b: 2,
};

const obj = Object.assign(obj1, obj2);
console.log(obj);
*/
