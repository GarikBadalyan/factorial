let arr = [1, 2, 3, 6];

let x = 0;
function gum() {
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    x = x + arr[i] / arr.length;
  }
  document.write(x);
}
gum();
