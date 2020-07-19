console.log("model box dat");
const model = document.getElementById("myModal");

document.getElementById("myBtn").addEventListener("click", (e) => {
  model.style.display = "block";
});

document.getElementById("closem").addEventListener("click", (e) => {
  model.style.display = "none";
});
