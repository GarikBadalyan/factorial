function hamematel() {
  let x = document.getElementById("tiv1").value;
  x = Number(x);
  let y = document.getElementById("tiv2").value;
  y = Number(y);
  let z = document.getElementById("tiv3").value;
  z = Number(z);
  if (x > y && x > z) {
    document.write(x);
  } else if (y > x && y > z) {
    document.write(y);
  } else if (z > x && z > y) {
    document.write(z);
  }
}
