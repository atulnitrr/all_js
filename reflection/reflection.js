console.log("Refleection js");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let person = new Person("atul", 23);
console.log(Reflect.isExtensible(person));
Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person));
Reflect.defineProperty(person, "hobbies", {
  writable: true,
  value: ["sport"],
});

Reflect.deleteProperty(person, "age");
console.log(person);
console.log(Reflect.ownKeys(person));

/*
let person = new Person("atul", 23);
console.log(person);
console.log(person.name);
console.log(Reflect.get(person, "name"));
console.log(person.__proto__ === Person.prototype);
*/
/*
class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person("atul");
let proto = {
  age: 66,
  greet() {
    console.log("hello in greet");
  },
};

Reflect.setPrototypeOf(person, proto);
Reflect.apply(person.greet, null, []);
// Person.prototype.age = 34;

console.log(person);
// console.log(Reflect.getPrototypeOf(person));
console.log(Person.prototype);

*/
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`${this.name}--> ${this.age}`);
  }
}

let person = Reflect.construct(Person, ["atul", 27]);

Reflect.apply(person.greet, person, []);

*/
// person.greet();
/*
class Person {
  constructor(name) {
    this.name = name;
  }
}

function TopObj() {
  this.age = 25;
}

const toipObj = new TopObj();
console.log(toipObj);

const data = Reflect.construct(Person, ["atul"], TopObj);
console.log(data);

*/
