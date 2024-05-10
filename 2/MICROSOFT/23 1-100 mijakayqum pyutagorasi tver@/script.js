

function aaa() {
  for (let i = 1; i < 99; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = 1; k < 99; k++) {
        if (i * i + j * j == k * k)
          document.write(i + " " + j + " " + k + "<br />");
      }
    }
  }
}
aaa();
