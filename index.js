let elements = [];

function createMatrix() {
  const n = 30;
  const m = 50;

  for (let i = 0; i <= n; i++) {
    elements.push(new Array(m).fill(" "));
  }
  return elements;
}
