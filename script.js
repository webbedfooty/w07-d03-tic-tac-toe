window.addEventListener("load", function() {

var squares = document.getElementsByClassName("board-tile");

function changeSquare() {
  this.innerHTML="X";
}

for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", changeSquare);
}



});
