let menu = document.getElementById("menu");
for (let i = 1; i <= 10; i++) {
  let menuItem = document.createElement("div");
  menuItem.className = "menuItem";
  menuItem.innerHTML = `Menu ${i}`;
  menu.appendChild(menuItem);
}
