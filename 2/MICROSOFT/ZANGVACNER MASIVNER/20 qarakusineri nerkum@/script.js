let elem = document.querySelectorAll("section > div");
for (let i = 0; i<elem.length;i++){
    elem[i].addEventListener("click",f)
};
function f(){
    this.style.backgroundColor = "green"
} 