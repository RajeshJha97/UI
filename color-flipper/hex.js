const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector("#color");

btn.addEventListener("click", function () {
  const colorCode = colorCodeGenerator();
  document.body.style.background = `#${colorCode}`;
  color.textContent = `#${colorCode}`;
  btn.style.background = `#${colorCode}`;
});

function colorCodeGenerator() {
  let colorCd = "";
  for (var i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * colors.length);
    colorCd += colors[random];
  }
  return colorCd;
}
