let move = 0;
document.getElementById("area").addEventListener("click", function (event) {
  if (move % 2 === 0) {
    event.target.innerHTML = "x";
  } else {
    event.target.innerHTML = "0";
  }
  move = move + 1;
  checkWinner();
});
function checkWinner() {
  let boxes = document.getElementsByClassName("box");
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML === "x" &&
      boxes[arr[i][1]].innerHTML === "x" &&
      boxes[arr[i][2]].innerHTML === "x"
    ) {
      alert("X-ER@ HAXTECIN");
      location.reload();
    } else if (
      boxes[arr[i][0]].innerHTML === "0" &&
      boxes[arr[i][1]].innerHTML === "0" &&
      boxes[arr[i][2]].innerHTML === "0"
    ) {
      alert("0-ER@ HAXTECIN");
      location.reload();
    }
  }
}