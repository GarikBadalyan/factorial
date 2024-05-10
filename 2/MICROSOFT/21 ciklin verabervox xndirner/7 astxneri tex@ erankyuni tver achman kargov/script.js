let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    document.write("&nbsp");
  }
  for (let k = 1; k <= i; k++) {
    document.write(k);
  }
  document.write("<br/>");
}
