function hamematel() {
  let x = document.getElementById("tiv1").value;
  x = Number(x);
  let y = document.getElementById("tiv2").value;
  y = Number(y);
  let z = document.getElementById("tiv3").value;
  z = Number(z);
  if (x < y && x < z && y < z) {
    document.write(x + " " + y + " " + z);
  } else if (x < y && x < z && z < y) {
    document.write(x + " " + z + " " + y);
  }
  if (y < x && y < z && x < z) {
    document.write(y + " " + x + " " + z);
  } else if (y < x && y < z && z < x) {
    document.write(y + " " + z + " " + x);
  }
  if (z < x && z < y && x < y) {
    document.write(z + " " + x + " " + y);
  } else if (z < x && z < y && y < x) {
    document.write(z + " " + y + " " + x);
  }
}
