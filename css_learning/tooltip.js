const ul = document.querySelector("ul");
ul.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("done");
    }
  },
  false
);
