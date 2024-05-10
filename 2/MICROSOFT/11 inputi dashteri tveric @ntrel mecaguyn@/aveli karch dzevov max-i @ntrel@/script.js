function hamematel() {
  let x = document.getElementById("tiv1").value;
  x = Number(x);
  let y = document.getElementById("tiv2").value;
  y = Number(y);
  let z = document.getElementById("tiv3").value;
  z = Number(z);
  let max;
  if (x > y) {
    max = x;
  } else {
    max = y;
  }
  if (z > max) {
    max = z;
  }
  document.write(max);
}
