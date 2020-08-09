// alert("Heello data");
const fName = document.getElementById("dummy");
console.log(fName);

fName.addEventListener("change", (e) => {
  console.log(e);
  console.log(e.target.value);
});
