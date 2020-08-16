console.log("save data");
const myModel = document.querySelector(".model");

const logIn = document.querySelector(".login");
const close = document.querySelector(".close");

console.log(logIn);

logIn.addEventListener("click", (e) => {
  console.log("ddd");
  myModel.style.display = "none";
});
