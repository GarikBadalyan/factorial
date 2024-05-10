let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let tiv = 3;
let result = arr.findIndex(function (elem) {
  if (elem === tiv) {
    return true;
  }
  return false;
});
document.write(result);

