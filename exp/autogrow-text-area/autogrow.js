function MyObj1(dummyNumber) {
  this.dummyNumber = dummyNumber;
}

function MyObj2(dummyString) {
  this.dummyString = dummyString;
}

MyObj2.prototype = new MyObj1(9);

const value2 = new MyObj2("test string");
console.log(value2.dummyString);
console.log(value2.dummyNumber);
console.log(value2.__proto__);
console.log(value2.madeUp);

const genericObject = new Object();
console.log(genericObject);
console.log(genericObject);

/*let person = {
  firsName: "atul",

  sayMyName: function (someData) {
    console.log(this);
    console.log(this.firsName, someData);
  },

  sayV2: () => {
    console.log(this);
    console.log(this.firsName);
  },
};

const sayMyName = person.sayMyName;

sayMyName.apply(person, ["test"]);
sayMyName.call(person, "call");

*/
// person.sayMyName();
