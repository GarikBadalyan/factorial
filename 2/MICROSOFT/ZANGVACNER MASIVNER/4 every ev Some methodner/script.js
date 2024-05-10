let arr = [1, 2, -3, -5, 3, -6, -7, 4];
function gum(a) {
  if (a >= 0) return true;
  else return false;
}

let every_1 = arr.every(gum);
let some_1 = arr.some(gum);
document.write("every_1" + every_1 + "<br />" + "some_1" + some_1);
