let a = 0;
let b = 1;
let result = b;


for (let i = 1; i <= 50; i++) {
  document.write(result + "<br />");
  result = a + b;
  a = b;
  b = result;
  
/*
}

/*
function fib() {
  let n = document.getElementById("tiv").value;
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
*/
