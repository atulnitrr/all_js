console.log("Hello in data");

// 15.What is the currying function

const curryFunction = (a) => (b) => (c) => a + b + c;

console.log(curryFunction(4)(6)(7));

//10 What is a higher order function

// 9What is the difference between == and === operators
// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory

//How do you compare Object and Map
//What is the purpose of the array splice method
// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
// let nn = arrayIntegersOriginal1.splice(2, 2, "s", "d", "r");
// console.log(nn);
// console.log(arrayIntegersOriginal1);

// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

//What is the purpose of the array slice method
// let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
// let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
// let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

//3 What is the difference between Call, Apply and Bind

let person = {
  first_name: "atul",
};

function greet(test) {
  console.log(this);
  console.log(this.first_name + test);
}

greet.call(person, "kljhjhjkh");
greet.apply(person, ["apply"]);
let greet2 = greet.bind(person);
greet2("greet 3");

//2. What is a prototype chain

// 1 no of ways to create object
let obj = new Object();
obj = Object.create(null);
obj = {};
class Person {
  constructor(name) {
    this.name = name;
  }
}

obj = new Person("atul");
