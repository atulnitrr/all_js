console.log("Hello in extension");

let number = 3.34;
number = 0.34;
number = -3.34;
console.log(Math.trunc(number));

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
