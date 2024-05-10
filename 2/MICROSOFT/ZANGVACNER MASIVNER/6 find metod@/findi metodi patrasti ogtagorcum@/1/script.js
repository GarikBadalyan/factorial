let arr = [1, 2, 3, 4, 5, 6, 7, 8];

/*let tiv = 3;
let result = arr.find(function (elem) {
  if (elem === tiv) {
    return true;
  }
  return false;
});
document.write(result);

*/

let ardyunq = arr.find(function (elem) {
  if (elem > 7 && elem < 10) {
    return elem;
  }
});
document.write(ardyunq);
