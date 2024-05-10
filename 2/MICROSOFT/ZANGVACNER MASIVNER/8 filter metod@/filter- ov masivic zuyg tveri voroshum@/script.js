let arr = [1, -2, 12, -4, 5, -6, 13, 15, 17, 49, 34, -7, 8];

let result = arr.filter(function (elem) {
  return elem % 2 === 0;
});
document.write(arr);
document.write("<br />");
document.write(result);
