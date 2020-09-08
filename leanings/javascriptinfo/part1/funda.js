//Only comments may appear above "use strict".
// "use strict";

const array = [2, 3, 4];
const response = array.reduce((sum, value) => sum + value, 3);
console.log(response);

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// const user = users.find((item, index, array) => item.id === 9);

// console.log(user);
// let array = ["Bilbo", "Gandalf", "Nazgul"];
// ["Bilbo", "Gandalf", "Nazgul"].forEach((value, index, array) => {
//   console.log(`${index}  ${value} in ${array}`);
// });

// let user = {
//   name: "Atul",
//   sayHi() {
//     console.log("say hi");
//   },
// };

// user.sayHi();

// let id = Symbol("id");

// let user = {
//   firstName: "Atul",
//   [id]: 2,
// };

// console.log(user);

// let id1 = Symbol("id00");
// let id2 = Symbol("id00");
// console.log(id1, id2);
// console.log(id2 === id1);

// let user = {
//   firstName: "Atul",
// };
// let id = Symbol("id");
// user[id] = 1;
// console.log(user);
// console.log(user[id]);

// const user = {
//   firstName: "Atul",
//   lastName: "kumar",
// };

// let newUser = Object.assign({}, user);
// console.log(newUser);
// const isBoss = confirm("are you boss");
// alert(`${isBoss}`);
// const name = prompt("your name please ", "atul");
// alert(`your name is ${name}`);

/**
 * 1. Number
 * 2. BigInt
 * 3. String
 * 4. Boolean
 * 5. null
 * 6 undefined --> value is not assigned
 * 7. Onbject and symbol
 */
// let age = null;
// console.log(age);
// let message = "hello";
// console.log(message);
// message = 123;
// console.log(message);
// console.log(1 / 0);
// console.log(-1 / 0);
// console.log("kjlhkjh" / 0);

// dd = 10;

// eval("x = 2");

// console.log(x);

// alert("I am java script");
