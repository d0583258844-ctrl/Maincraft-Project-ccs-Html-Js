const board = document.getElementById("board");
const control = document.getElementById("control");
const button = document.createElement("button");
const arrButtons = ["pickaxe", "ax", "shovel", "Scissors"];
let currentTool = 1;


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

// this function get one of the  tails and saerch for is tool id, and them flip the card/tail to the global color "sky"
function matchingTheTools(tile) {
  board.addEventListener("click", (e) => {
    if (e.target.classList.contains("tile")) {
      const listClassList = Array.from(e.target.classList);
      if (listClassList.find((a) => a === tile)) {
        e.target.classList.remove(listClassList.find((c) => c !== "tile"));
        e.target.classList.add("sky");
      }
    }
  });
}

for (const element of arrButtons) {

  button.id = element;
  button.className = "control-button";
  control.appendChild(button);
}


function init() {
  // updating currentTool according to menu selection
  control.addEventListener("click", (e) => { setTool(e) });
}

function setTool(e) {
  if (e.target.classList.contains("control-button")) {
    if (e.target.id === "pickaxe") { currentTool = 1 }
    if (e.target.id === "ax") { currentTool = 2 }
    if (e.target.id === "shovel") { currentTool = 3 }
    if (e.target.id === "Scissors") { currentTool = 4 }
  }
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
