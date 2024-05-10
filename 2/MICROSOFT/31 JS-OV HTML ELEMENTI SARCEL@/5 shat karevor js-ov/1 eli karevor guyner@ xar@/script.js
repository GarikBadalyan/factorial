let menu = document.getElementById("menu");
let classes = ["firstClass", "secondClass", "thirdClass"];
for (let i = 1; i <= 10; i++) {
  let menuItem = document.createElement("div");
  menuItem.className = `menuItem ${classes[i % 3]}`;
  menuItem.innerHTML = `Menu ${i}`;
  menu.appendChild(menuItem);
  menuItem.onclick = function () {
    [...document.getElementsByClassName("menuItem")].forEach((item) =>
      item.classList.remove("active")
    );
    menuItem.classList.add("active");
  };
}
