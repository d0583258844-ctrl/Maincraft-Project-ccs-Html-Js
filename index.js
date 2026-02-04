const board = document.getElementById("board");
const windoww = document.getElementsByClassName("window")
const control = document.getElementById("control");
const button = document.createElement("button");
const arrButtons = ["pickaxe", "ax", "shovel", "Scissors"];
let currentTool = 1;
let grass = 0;
let graound = 0;
let gray = 0;
let rocks = 0;
let tree = 0;
leaves = 0;

// this function create the bord with fuor divs.
// They all have one same classList, and each one have more uneqe classlist/name
function createBord() {
  const n = 3003;
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    div.classList.add("tile");
    if (i < 1000) {
      div.classList.add("sky");
      div.id = `place${i}`;
    } else if (999 < i && i < 1100) {
      div.classList.add("grass");
      div.id = `place${i}`;
    } else if (1099 < i && i < 1500) {
      div.classList.add("graound");
      div.id = `place${i}`;
    } else if (1499 < i && i < 2800) {
      div.classList.add("gray");
      div.id = `place${i}]`;
    } else if (2799 < i && i < 3003) {
      div.classList.add("rocks");
      div.id = `place${i}`;
    }
    board.append(div);
  }
}

createBord();

// board.addEventListener("click", (e) => {
//   if (e.target.classList.contains("tile")) {
//     const listClassList = Array.from(e.target.classList);
//     e.target.classList.remove(listClassList.find((c) => c !== "tile"));
//     e.target.classList.add("sky");
//   }
// });

function init() {
  // Updating currentTool according to menu selection
  control.addEventListener("click", (e) => {
    setTool(e);
  });

  // Listen to the board
  board.addEventListener("click", (e) => {
    if (e.target.classList.contains("tile")) {
      let tileType = Array.from(e.target.classList);

      if (tileType.includes("gray") && currentTool == 1) {
        e.target.classList.remove(tileType.find((c) => c !== "tile"));
        e.target.classList.add("sky");
        gray++;
      } else if (tileType.includes("rocks") && currentTool == 1) {
        e.target.classList.remove(tileType.find((c) => c !== "tile"));
        e.target.classList.add("sky");
        rocks++;
      } else if (tileType.includes("tree") && currentTool == 2) {
        e.target.classList.remove(tileType.find((c) => c !== "tile"));
        e.target.classList.add("sky");
        tree++;
      } else if (tileType.includes("graound") && currentTool == 3) {
        e.target.classList.remove(tileType.find((c) => c !== "tile"));
        e.target.classList.add("sky");
        graound++;
      } else if (tileType.includes("grass") && currentTool == 4) {
        e.target.classList.remove(tileType.find((c) => c !== "tile"));
        e.target.classList.add("sky");
        grass++;
      } else if (tileType.includes("leaves") && currentTool == 4) {
        e.target.classList.remove(tileType.find((c) => c !== "tile"));
        e.target.classList.add("sky");
        leaves++;
      }
    }
  });
}

function setTool(e) {
  if (e.target.classList.contains("control-button")) {
    if (e.target.id === "pickaxe") {
      currentTool = 1;
    }
    if (e.target.id === "ax") {
      currentTool = 2;
    }
    if (e.target.id === "shovel") {
      currentTool = 3;
    }
    if (e.target.id === "Scissors") {
      currentTool = 4;
    }
  }
}

function setTaileBack() {

 }

// let temp  = document.getElementsByClassName('control-button')
// temp.addEventListener('click', () => {
//   temp.target.
// })

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function createtree() {
//   const numbers = randomInt(1, 100);
// }
