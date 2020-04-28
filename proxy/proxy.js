console.log("Proxy --->");
let person = {
  age: 34,
};

const handler = {
  get: function (target, property) {
    return property in target ? target[property] : "Not present";
  },
};

const personProsy = new Proxy(person, handler);
console.log(personProsy);
console.log(personProsy.age);
console.log(personProsy.name);
