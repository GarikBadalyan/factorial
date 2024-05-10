let menu = document.getElementById("menu");
let cord = 0;
let kangnel; //partadir aystex piti haytararenq kangnel popoxakan@ ete functiayi nersum haytararenq chi asxatelu
function muve() {
  menu.style.marginLeft = cord + "px";
  cord = cord + 10;
  kangnel = setTimeout(muve,50)//recursiv kancum enk eli nuyn functian
}
muve()
//let stop= setInterval(muve,100)
document.getElementById("stop").onclick = function () {
 // clearInterval(g)
 clearTimeout(kangnel)
};
//setTimeout(muve, 3000);
