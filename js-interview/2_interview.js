// How do you make an object iterable in javascript

// How do you detect primitive or non primitive value type
const i = 10;
console.log(Object(i));
console.log(Object(i) !== i);
const person = { name: "Atul" };
console.log(Object(person));
console.log(person !== Object(person));

// const obj = {
//   name: "Atul",
//   age: "12",
//   [Symbol.iterator]: function* () {
//     for (let key in this) {
//       yield this[key];
//     }
//   },
// };

// for (const iterator of obj) {
//   console.log(iterator);
// }

// const obj = { name: "atul" };
// for (const iterator of obj) {
//   console.log(iterator);
// }
// TypeError: obj is not iterable

/*
genereatore 
*/

// How do you check an object is a promise or not

// function isPromise(object) {
//   if (object && typeof object.then === "function") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const i = 10;
// const promise = new Promise((resolve, reject) => {
//   resolve("data");
// });
// console.log(isPromise(i));
// console.log(isPromise(promise));

/*
function checkIfCalledWithNew() {
  if (new.target) {
    console.log("called with new");
  } else {
    console.log("not called with new");
  }
}

new checkIfCalledWithNew();
checkIfCalledWithNew();
checkIfCalledWithNew.call({});

*/
/*
function* generatore1() {
  yield 1;
  yield 2;
  yield 3;
}

const gneObj = generatore1();
for (const key of gneObj) {
  console.log(key);
}
*/

// for in and for of

/*
let array = ["a", "b", "c"];
array.newProps = "neewValie";
for (const key in array) {
  console.log(key);
}
// 0 , 1, 2, neewProps

console.log("----");
for (const key of array) {
  console.log(key);
}

// a, b, c

*/

/*
// How do you define instance and non-instance properties



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

Person.staticage = 30;
const newPerson = new Person("atul", 34);
console.log(newPerson);
console.log(newPerson.staticage);

*/
