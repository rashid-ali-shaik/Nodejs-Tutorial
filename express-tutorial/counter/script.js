const count = document.querySelector(".count");
const btn = document.querySelector(".btn");

let value = 0;
btn.addEventListener("click", () => {
  value += 1;
  count.innerHTML = value;
});
