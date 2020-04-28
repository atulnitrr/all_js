/*
class myArray extends Array {
  convert() {
    let returnedArray = [];
    this.forEach((value) => returnedArray.push("Converted " + value));
    return returnedArray;
  }
}

const muar = new myArray();
muar.push(2);
muar.push(3);
muar.push(4);
console.log(muar.convert());

*/

/*
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length <= 2) {
      console.log("Rejected");
    }
    this._name = value;
  }
}

let person = new Person("atul");
console.log(person);
console.log(person.name);
person.name = "akkk";
console.log(person);
console.log(person.name);
*/
/*
class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

Helper.logTwice("darta");

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Heelo my name is ${this.name} age : ${this.age}`);
  }
}

class Atul extends Person {
  constructor(age) {
    super("Atul");
    this.age = age;
  }
}

let ak = new Atul(23);
console.log(ak);
console.log(ak.__proto__);
ak.greet();

let person = new Person("KKKK");
console.log(person);
person.greet();

*/

/*
function Per() {}
let per = new Per();
console.log(per);

*/
/*
// import { keyValue } from "./external.js";
// import test from "./external.js";

import * as allImp from "./external.js";

console.log(allImp);
console.log(allImp.keyValue);
// console.log(keyValue);
// test();

*/
