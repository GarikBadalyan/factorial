let n = 4;
for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n; j++) {
    if (i == 0 || j == 0 || i == n || j == n) {
      document.write(" * ");
    } else {
      document.write(" 6 ");
    }
  }
  document.write("<br />");
}

/*
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    document.write(i +"-- " + j);
  }
}

let n = 10;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    document.write("&nbsp");
  }
  for (let k = 1; k <= i; k++) {
    document.write(" * ");
  }
  document.write("<br/>");
}




document.write("<br />");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    document.write(j + "<br />");
  }
  document.write(i + "<br />");
}


document.write("<br />");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    document.write(i, "--" + j + "<br /> ");
  }
}
document.write("<br />");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    document.write(j, "<br /> ");
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) 
  document.write(i + "<br />");
}
*/
