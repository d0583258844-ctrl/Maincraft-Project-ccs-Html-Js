const board = document.getElementById("board");

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
board.addEventListener("click", (e) => {
  if (e.target.classList.contains("tile")) {
    const listClassList = Array.from(e.target.classList)
    e.target.classList.remove(listClassList.find(c=>c!=="tile"));
    e.target.classList.add("grass");
  }
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createtree() {
  const numbers = randomInt(1, 100);
}
