const mytext = document.getElementById("mytext");
const mydiv = document.getElementById("mydiv")
mydiv.addEventListener("click", myfunc);
window.addEventListener("keydown", myfunc); // estex pastoren mi event@ myusi het kapvac e aysinqn ete mer inputi
// dashti vra mknikov click anenq arden mer slakner@ kashxaten ev karmir divin karanq sharjenq verev nerqev
let mydivtop = 0;
function myfunc(e) {
  if (e.key === "ArrowDown") {
    mydivtop += 10;
    mydiv.style.top = `${mydivtop}px`;
  }
  if (e.key === "ArrowUp") {
    mydivtop -= 10;
    mydiv.style.top = `${mydivtop}px`;
  }
}
