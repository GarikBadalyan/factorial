let arr = [23, 4, 5, 4, 5, 6, 7];
function gum(masiv) {
  let sum = 0;
  for (let i = 0; i < masiv.length; i++) {
    sum = sum + masiv[i];
  }
  return sum
}
document.write(gum(arr));
