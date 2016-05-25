// starting variables
var playerTurn = "X";
var moveCounter = 0;
var totalMoves = 9;
var winner;


// GAME PROPER      //////////////////////
window.addEventListener("load", playGame);

function playGame() {
// sets EventListeners on all 9 squares and clears the board
  var squares = document.getElementsByClassName("board-tile");
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", changeSquare);
    squares[i].addEventListener("click", changePlayerTurn);
    squares[i].innerHTML="";
  }
// reset variables
  var moveCounter = 0;
  var winner;
}

function changeSquare() {
  if(playerTurn === "X"){
    this.innerHTML="X";
    this.removeEventListener("click", changeSquare);
    this.removeEventListener("click", changePlayerTurn);
  } else {
    this.innerHTML="O";
    this.removeEventListener("click", changeSquare);
    this.removeEventListener("click", changePlayerTurn);
  }
  changePlayerTurn();
}

function changePlayerTurn() {
  if(playerTurn === "X"){
// hides x-ready message
    elementX = document.getElementById("player-x-ready");
    elementX.setAttribute("class", "hidden");
// makes o-ready message visible
    elementO = document.getElementById("player-o-ready");
    elementO.setAttribute("class", "visible");
    playerTurn = "O";
  } else {
// hides o-ready message
    elementO = document.getElementById("player-o-ready");
    elementO.setAttribute("class", "hidden");
// makes x-ready message visible
    elementX = document.getElementById("player-x-ready");
    elementX.setAttribute("class", "visible");
    playerTurn = "X";
  }
// adds 1 to the moveCounter
    moveCounter++;
// you can only have a winner after a minimum of 5 moves
// so this does not check for a winner until the 5th move
    if(moveCounter > 4) {
      checkWinner();
    }
}

function checkWinner(){
// assigns id tags to variables for future analysis
  var tile11=document.getElementById("tile-1-1").innerHTML;
  var tile12=document.getElementById("tile-1-2").innerHTML;
  var tile13=document.getElementById("tile-1-3").innerHTML;
  var tile21=document.getElementById("tile-2-1").innerHTML;
  var tile22=document.getElementById("tile-2-2").innerHTML;
  var tile23=document.getElementById("tile-2-3").innerHTML;
  var tile31=document.getElementById("tile-3-1").innerHTML;
  var tile32=document.getElementById("tile-3-2").innerHTML;
  var tile33=document.getElementById("tile-3-3").innerHTML;

// examines the 8 winning combinations to see if X has won

  if((tile11 === "X" && tile12 === "X" && tile13 === "X") ||
     (tile21 === "X" && tile22 === "X" && tile23 === "X") ||
     (tile31 === "X" && tile32 === "X" && tile33 === "X") ||
     (tile11 === "X" && tile21 === "X" && tile31 === "X") ||
     (tile12 === "X" && tile22 === "X" && tile32 === "X") ||
     (tile13 === "X" && tile23 === "X" && tile33 === "X") ||
     (tile11 === "X" && tile22 === "X" && tile33 === "X") ||
     (tile31 === "X" && tile22 === "X" && tile13 === "X")){
// makes X winner message visible and hides player turn message
    elX = document.getElementById("player-x-wins");
    elX.setAttribute("class", "visible");
    elementX = document.getElementById("player-x-ready");
    elementX.setAttribute("class", "hidden");

    endGame();

// examines the 8 winning combinations to see if O has won
  }else if((tile11 === "O" && tile12 === "O" && tile13 === "O") ||
           (tile21 === "O" && tile22 === "O" && tile23 === "O") ||
           (tile31 === "O" && tile32 === "O" && tile33 === "O") ||
           (tile11 === "O" && tile21 === "O" && tile31 === "O") ||
           (tile12 === "O" && tile22 === "O" && tile32 === "O") ||
           (tile13 === "O" && tile23 === "O" && tile33 === "O") ||
           (tile11 === "O" && tile22 === "O" && tile33 === "O") ||
           (tile31 === "O" && tile22 === "O" && tile13 === "O")){
// makes O winner message visible and hides player turn message
    elO = document.getElementById("player-o-wins");
    elO.setAttribute("class", "visible");
    elementO = document.getElementById("player-o-ready");
    elementO.setAttribute("class", "hidden");

    endGame();

// if a 9 moves have been made and no winner is declared, it is a tie

  }else if((moveCounter === 9) && (winner === undefined)){
// makes Tie game message visible
    elC = document.getElementById("tie-game");
    elC.setAttribute("class", "visible");

    endGame();
  }
}


// END GAME     //////////////////////////
function endGame(){
  elementZ = document.getElementById("new-game");
  elementZ.setAttribute("class", "visible");
  elementX = document.getElementById("player-x-ready");
  elementX.setAttribute("class", "hidden");
  elementO = document.getElementById("player-o-ready");
  elementO.setAttribute("class", "hidden");
  var squares = document.getElementsByClassName("board-tile");
  for(var i = 0; i < squares.length; i++){
    squares[i].removeEventListener("click", changeSquare);
    squares[i].removeEventListener("click", changePlayerTurn);
  }
}
