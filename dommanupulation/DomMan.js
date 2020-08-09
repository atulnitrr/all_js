// input

// mouse position
const moouseElem = document.querySelector(".custom-mouse");
moouseElem.addEventListener("mousedown", function (e) {
  const target = e.target;
  const rect = target.getBoundingClientRect();
  console.log(rect);
  console.log(e.clientX, e.clientY);
  console.log(e.clientX - rect.left, e.clientY - rect.right);
});
// mouse position

/*
let inputElem = document.getElementById("inputtest-id");
let inputCuttentValue = inputElem.value || "";
inputElem.addEventListener("keypress", function (e) {
  const target = e.target;
  // If users enter supported character (digits or space)
  /^[0-9\s]*$/.test(target.value)
    ? (inputCuttentValue = target.value)
    : (target.value = inputCuttentValue);

  console.log(inputCuttentValue);
});

*/
// input

// add remove class

/*
let aElem = document.querySelector(".testak");
aElem.classList.add("test56");
aElem.classList.remove("test1", "ak");
// if not then add , if there then remove
aElem.classList.toggle("tToggle");

*/
// add remove class
