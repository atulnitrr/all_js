console.log("Iterator and generator");
function* gen(end) {
  for (let index = 1; index <= end; index++) {
    try {
      yield index;
    } catch (e) {
      console.log(e);
    }
  }
}

const it = gen(2);
console.log(it.next());
console.log(it.throw("An error occured --->"));
console.log(it.next());

/*
let Obj = {
  [Symbol.iterator]: gen,
};

function* gen() {
  yield 1;
  yield 2;
  yield 5;
}

for (const iterator of Obj) {
  console.log(iterator);
}

*/

/*
function* select() {
  yield "House";
  yield "Garage";
}

const it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (const iterator of select()) {
  console.log(iterator);
}
*/
/*
const person = {
  name: "person",
  hobbies: ["cooking", "sports"],
  [Symbol.iterator]: function () {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function () {
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value: value,
        };
      },
    };
  },
};

for (const iterator of person) {
  console.log(iterator);
}

*/
/*
let array = [5, 6, 3];

array[Symbol.iterator] = function () {
  let nextValue = 10;
  return {
    next() {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue,
      };
    },
  };
};

for (const iterator of array) {
  console.log(iterator);
}

*/

// console.log(array[Symbol.iterator]);
// let it = array[Symbol.iterator]();
// console.log(it);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
