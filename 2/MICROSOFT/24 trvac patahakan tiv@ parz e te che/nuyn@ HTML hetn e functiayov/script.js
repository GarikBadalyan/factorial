function gumH() {
  let x = document.getElementById("tiv").value;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      document.write("false"); //return false
    }
  }
  document.write(" true"); //return true
}

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
