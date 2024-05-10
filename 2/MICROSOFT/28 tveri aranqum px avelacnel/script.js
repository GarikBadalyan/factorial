/*
sa arji dzev
let text = "0 23 43 50";
let x = text.split(" ");
console.log(x);
let rezult = "";
for (let i = 0; i < x.length; i++) {
  rezult = rezult + x[i] + " px ";
}
document.write(rezult);
*/
// sa erkrord dzev
let paddingtext = "0 23 43 50";
let text = paddingtext.split(" ");
let result = paddingtext
  .split(" ")
  .map((text) => text + "px")
  .join(" ");
document.write(result);

//erord tarberak
let result3 = paddingtext.replace(/ /g,"px") + "px"
document.write(result3)
