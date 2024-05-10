function fibonachi(n) {
  if (n < 2) return 1;
  return fibonachi(n - 1) + fibonachi(n - 2);
}
document.write(fibonachi(5));
