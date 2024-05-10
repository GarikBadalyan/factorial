let arr = [1, 2, 3, 6, 544, 65, 78, 90];
let max = arr[0];
let max2 = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max2 = max; //ays tox@ misht nerqevi toxic araj piti grvi
    max = arr[i];
  } else if (max2 < arr[i] && arr[i] != max) {
    max2 = arr[i];
  }
}
document.write(max2);
