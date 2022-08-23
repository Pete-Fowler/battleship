import gameBoard from "./gameBoard";
import player from "./player";

const gameLoop = (() => {
  const playerBoard = gameBoard();
  const AIboard = gameBoard();
  const p1 = player("Gustav", AIboard, "human");
  const AI = player("Terminator", playerBoard, "computer");
})();

// The game loop should set up a new game by creating Players and Gameboards.
// For now just populate each Gameboard with predetermined coordinates. You can
// implement a system for allowing players to place their ships later.
// We’ll leave the HTML implementation up to you for now, but you should display
// both the player’s boards and render them using information from the Gameboard
// class.

// You need methods to render the gameboards and to take user input for attacking.
// For attacks, let the user click on a coordinate in the enemy Gameboard.
// The game loop should step through the game turn by turn using only methods 
// from other objects. If at any point you are tempted to write a new function 
// inside the game loop, step back and figure out which class or module that 
// function should belong to.

// Create conditions so that the game ends once one players ships have all 
// been sunk. This function is appropriate for the Game module.
