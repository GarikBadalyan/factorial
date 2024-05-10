let list = document.querySelector("ul");
list.before("molorakner");
list.after("verjacan");
let elem = document.querySelector("li");
elem.innerHTML = "arajin element";
list.prepend(elem);

//let elem2 = document.querySelector("li");
//elem2.innerHTML = "verji element";
//list.append(elem2);
//let menu = document.getElementById("menu");
//for (let i = 1; i <= 10; i++) {
//let menuItem = document.createElement("div");
//}
