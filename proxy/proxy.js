console.log("Proxy --->");

let person = {
  name: "atul",
};

const handler = {
  get: function (target, property) {
    return Reflect.get(target, property);
  },
};

// const proxy = new Proxy(person, handler);
const { proxy, revoke } = Proxy.revocable(person, handler);
revoke();
console.log(proxy.name);

/*
function logMessage(message) {
  console.log("Hello -->  " + message);
}

let handler = {
  apply: function (target, thiArg, argList) {
    if (argList.length == 1) {
      Reflect.apply(target, thiArg, argList);
    }
  },
};

let proxy = new Proxy(logMessage, handler);

proxy("Hello", "dd");
*/
/*
let person = {
  age: 34,
  name: "Atul",
};

const handler = {
  get: function (target, property) {
    return property in target ? target[property] : `${property} not present`;
  },
};

const personProxy = new Proxy({}, handler);
Reflect.setPrototypeOf(person, personProxy);

console.log(person);
console.log(person.name);
console.log(person.dd);
*/
/*
const handler = {
  get: function (target, property) {
    return property in target ? target[property] : "Not present";
  },
  set: function (target, property, value) {
    if (value.length > 2) {
      Reflect.set(person, property, value);
    }
  },
};

const personProsy = new Proxy(person, handler);
personProsy.name = "At";
console.log(personProsy);
console.log(personProsy.name);

*/
// console.log(personProsy);
// console.log(personProsy.age);
