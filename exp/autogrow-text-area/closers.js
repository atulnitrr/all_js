console.log("closers js");

setTimeout(() => {
  console.log("data");
}, 1000);

function testF() {
  console.log("testin function ");
}

setTimeout(testF, 2000);

/*
function outer(outerArg) {
  function inner(innerArg) {
    console.log(outerArg);
    console.log(innerArg);
    console.log("-----");
  }
  return inner;
}

const innerF1 = outer(34);
const innerF2 = outer(36);
innerF1(24);
innerF2(26);

*/
