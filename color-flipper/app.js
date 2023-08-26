const colors = ["red", "green", "yellow", "rgba(133,132,22)", "#F1f5f8"];

const btn = document.getElementById("btn");
const color = document.querySelector("#color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
  btn.style.background = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
