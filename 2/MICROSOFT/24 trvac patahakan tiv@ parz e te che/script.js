

let x = 55;
function aaa() {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

document.write(aaa());


/*
let x = 45;
let y = x - 1;
function aaa() {
  while (y > 1) {
    if (x % y == 0) return false;
    y--;
  }
  return true;
}

document.write(aaa());
*/
