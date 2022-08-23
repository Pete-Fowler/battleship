import {
  playerBoard,
  AIBoard,
  p1,
  AI,
  p1Ptb,
  p1Sub,
  p1Destroyer,
  p1Battleship,
  p1Carrier,
  AIPtb,
  AISub,
  AIDestroyer,
  AIBattleship,
  AICarrier
} from './game';

const renderBoard = (board, player) => {
  
}

// We’ll leave the HTML implementation up to you for now, but you should display
// both the player’s boards and render them using information from the Gameboard
// class.

// You need methods to render the gameboards and to take user input for attacking.
// For attacks, let the user click on a coordinate in the enemy Gameboard.
// The game loop should step through the game turn by turn using only methods 
// from other objects. If at any point you are tempted to write a new function 
// inside the game loop, step back and figure out which class or module that 
// function should belong to.