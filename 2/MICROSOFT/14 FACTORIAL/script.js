
function factorial(x) {
  if (x === 1) {
    return x;
  }
  return x * factorial(x - 1);
}

document.write(factorial(5));
