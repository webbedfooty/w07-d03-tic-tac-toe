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
      elementX = document.getElementById("player-x-ready");
      elementX.setAttribute("class", "hidden");
      elementO = document.getElementById("player-o-ready");
      elementO.setAttribute("class", "visible");
      this.removeEventListener("click", changePlayerTurn);
      playerTurn = "O";
    }else {
      elementO = document.getElementById("player-o-ready");
      elementO.setAttribute("class", "hidden");
      elementX = document.getElementById("player-x-ready");
      elementX.setAttribute("class", "visible");
      this.removeEventListener("click", changePlayerTurn);
      playerTurn = "X";
    }
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
