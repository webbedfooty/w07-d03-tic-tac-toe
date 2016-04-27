# Tic-Tac-Toe

You'll work in small groups to complete this mini-project. This game should
allow two players to play as many games in a row as they like. Your game may
keep track of player scores, but consider that a feature for later.

## Specifications

+ The board currently exists as a table with 9 boxes, each of them numbered.
  When a player clicks on a box, the box should change from the number to the
  player's symbol (**X** or **O**, conventionally). Further clicking on that
  box should do nothing.
+ Players must take turns. The game should prompt the player whose turn it is.
+ Once the game has ended (a player has won, or no more moves exist), players
  should not be able to update the game board. If a player has won, their score
  should increase by the appropriate amount. When a player clicks the **New
  Game** button, it should reset the board but keep scores. Players should
  continue taking turns: if X had the last move in the most recent game, O
  should have the first move in the next game.
+ Whatever the outcome of the game, the appropriate outcome message should
  display.
+ When a player pushes the **Reset** button, the board should be wiped, scores
  should go back to zero, and it should be as though the user refreshed the
  page. Except the user didn't refresh anything!
+ When the game is played, there should be no errors appearing on the console,
  no alerts, no prompts, no `debugger` statements, and no `console.log`
  statements. You almost certainly will make use of one or more of these things
  as you develop, but the final game should be free of them. Similarly, the
  final game should be free of commented-out code.
+ Your code should be well-documented. Javascript can get onerous quickly.

## Technical Requirements

1. Use `addEventListener` rather than defining an inline `onclick`.
2. The HTML you have now should be sufficient for all your JS and CSS needs.
3. No jQuery, please.
4. Use the provided `setUpPage` function to add event listeners and so on at
   page load.
4. Your game should be up on GitHub pages and easily accessible.

## Reflection Questions (be prepared to discuss tomorrow) 

1. How did you organize your information? Who or what keeps track of that
   information? What information is there to keep track of?
2. What event listeners did you write? How? Why?
3. How did you organize your code? Why did you do it that way?

## Bonus Goals

1. The styling here is ... non-existent, really. Fix that. Don't change the
   HTML. Feel free to add more to the CSS. Consider drawing a sketch. Even
   better, make it mobile-friendly, such that the whole game comfortably fits on
   an iPhone screen.
2. Allow users to submit their names at the start of a series of games (probably
   not at the start of each game in the series), then replace **Player X** and
   **Player O** with the actual names of those players.
3. Expand to a 4x4 board. How would you write your code such that your game can
   handle a 4x4 board more or less the same way as it handles a 3x3 board? More
   generally: it's pretty easy to come up with a brute-force solution for a 3x3
   board; make that solution more elegant and flexible. Then reflect on whether
   the added elegance makes the new solution better, and if so, in what ways
   might it be better?
4. Make the game log work; each time a game is finished, a new `li` should be
   added to the end of the list with the outcome of the game.
