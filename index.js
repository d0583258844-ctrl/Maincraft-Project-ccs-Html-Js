
function createMatrix() {
  let elements = [];
  const n = 3003;
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    if (i < 1000) {
      div.className = "allElements sky";
      div.id = `place${i}`
      elements.push(div);
    } 
    else if (1000 < i && i < 1101) {
      div.className = "allElements grass";
      div.id = `place${i}`
      elements.push(div);
    }
    else if (1101 < i && i < 1502) {
      div.className = "allElements graound";
      div.id = `place${i}`
      elements.push(div);
    }
    else if (1501 < i && i < 2802) {
      div.className = "allElements gray";
      div.id = `place${i}`
      elements.push(div);
    } else if (2802 < i && i < 3003) {
      div.className = "allElements rocks";
      div.id = `place${i}`
      elements.push(div);
    }
    document.body.append(...elements);
  }
}

createMatrix();
