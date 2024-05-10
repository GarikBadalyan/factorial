let arr = [];
function fib() {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= 100; i++) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
}
fib();

arr.unshift(1, 1);
console.log(arr);
let arr1 = [];
let n = +prompt("enter your number");
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (n == arr[i] + arr[j]) {
      arr1.push(true);
      break;
    } else {
      arr1.push(false);
    }
  }
}
document.write(
  arr1.some(function (elem) {
    return elem == true;
  })
);
