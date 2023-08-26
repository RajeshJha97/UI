const counter = document.querySelector("#counter");
const decr = document.querySelector("#decre");
const incr = document.querySelector("#incr");
const reset = document.querySelector("#reset");

let cnt = 0;

decr.addEventListener("click", function () {
  cnt -= 1;
  counter.textContent = cnt;
  colorChanger();
});
incr.addEventListener("click", function () {
  cnt += 1;
  counter.textContent = cnt;
  colorChanger();
});
reset.addEventListener("click", function () {
  cnt == 0;
  counter.textContent = 0;
  colorChanger();
});

function colorChanger() {
  if (cnt > 0) {
    counter.style.color = "green";
  } else if (cnt < 0) {
    counter.style.color = "red";
  }
}
