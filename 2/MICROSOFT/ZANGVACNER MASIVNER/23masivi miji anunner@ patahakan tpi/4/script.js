let arr = ["aram", "armen", "karen", "hamo", "Saqo"];

function gorc(gum) {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += "<br />" + arr[Math.floor(Math.random() * arr.length)];
   
  }
  document.getElementById("cucak").innerHTML = s;
  
}

//let arr = ["aram", "armen", "karen", "hamo", "Saqo"];
//function gorc(gum) {
  //let y = document.getElementById("cucak");
  //y.innerHTML = arr[Math.floor(Math.random() * arr.length)];
//}
