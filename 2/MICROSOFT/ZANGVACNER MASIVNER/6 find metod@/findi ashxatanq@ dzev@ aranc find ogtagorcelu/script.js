let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function find(masiv, tiv) {
  for (let i = 0; i < masiv.length; i++) {
    if (masiv[i] === tiv) {
      return i;
    }
  }
  return null;
}
document.write(arr);
document.write("<br />");
document.write(find(arr, 5));
