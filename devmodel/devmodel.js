const modelWrapper = document.querySelector(".model-wrapper");
document.getElementById("open-model-btn").addEventListener("click", (e) => {
  modelWrapper.style.display = "block";
});

document.querySelector(".close-model-btn").addEventListener("click", (e) => {
  modelWrapper.style.display = "none";
});
