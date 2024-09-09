const container = document.querySelector(".container");
const clear = document.querySelector("#clear");

selectedColor = "#000";
let useRandomColor = false;

function creategrid(gridSize) {
  document.documentElement.style.setProperty("--divisor", gridSize);
  container.innerHTML = "";

  const totalCell = gridSize ** 2;
  for (let i = 0; i < totalCell; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = useRandomColor
        ? getRandomColors()
        : selectedColor;
    });

    clear.addEventListener("click", () => {
      cell.setAttribute("style", "background-color: white");
    });
    container.appendChild(cell);
  }
}

function changeCellNum() {
  const numInput = document.querySelector("input").value;

  if (numInput >= 1 && numInput <= 100) {
    creategrid(numInput);
  } else {
    alert("Input a number between 1 and 100.");
  }
}

const colorInput = document.querySelector("#colorInput");
colorInput.addEventListener("click", (event) => {
  selectedColor = event.target.value;
  useRandomColor = false;
});

const randomColor = document.querySelector("#randomColor");
randomColor.addEventListener("click", () => {
  useRandomColor = !useRandomColor;
});

function getRandomColors() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100) + "%";
  const l = Math.floor(Math.random() * 50) + "%";

  return `hsl(${h},${s},${l})`;
}

const createGridButton = document.querySelector("button");
createGridButton.addEventListener("click", changeCellNum);

document.addEventListener("DOMContentLoaded", () => {
  creategrid(16);
});