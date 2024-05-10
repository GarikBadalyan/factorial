/*let a = 0;
let b = 1;
let result = b;


  for (let i = 1; i <= 50; i++) {
    document.write(result + "<br />")
    result = a + b;
    a = b;
    b = result;
  }
 */

function fib(n) {
  let a = 0;
  let b = 1;
  let result = 1;

  for (let i = 1; i <= n; i++) {
    document.write(result + " ,");
    result = a + b;
    a = b;
    b = result;
  }
}
fib(6);
