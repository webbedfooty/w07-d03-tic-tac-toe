window.addEventListener("load", function() {

var squares = document.getElementsByClassName("board-tile");
for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", changeSquare);
  squares[i].addEventListener("click", changePlayerTurn);
}

});
var playerTurn = "X";

  function changePlayerTurn() {
    if (playerTurn === "X"){
      playerTurn = "O";
    }else {
      playerTurn = "X";
    };
  }

  function changeSquare() {
    if (playerTurn === "X"){
        this.innerHTML="X";
        this.removeEventListener("click", changeSquare);

      }else {
        this.innerHTML="O";
        this.removeEventListener("click", changeSquare);
    }
  }
