console.log("Promise");

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Rejct2");
    resolve("Resolve22");
  }, 500);
});

Promise.race([promise1, promise2])
  .then((val) => console.log(val))
  .catch((error) => console.log(error));

// Promise.all([promise1, promise2.catch((err) => err)])
//   .then((val) => console.log(val))
//   .catch((error) => console.log(error));

// Promise.all([promise1, promise2])
//   .then((val) => console.log(val))
//   .catch((error) => console.log(error));

// Promise.all([promise1, promise2]).then((val) => console.log(val));

/*
const waitASecond = (second) => {
  return new Promise((resolve, rejeect) => {
    setTimeout(() => {
      resolve("Done with call back");
    }, second);
  });
};

waitASecond(2000)
  .then((val) => {
    console.log(val);
    return "DDDDD";
  })
  .then((vall) => console.log(vall));

  */
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 2000);
});

promise.then((val) => console.log(val)).catch((ex) => console.log(ex));
console.log(promise);

*/
