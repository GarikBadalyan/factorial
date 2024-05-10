let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let result = arr.map(function (elem, index, array) {
  document.write("<br />" + array);
  
  return elem * elem;
});
document.write("<br />");
document.write(result);
