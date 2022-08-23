import gameBoard from "./gameBoard";
import player from "./player";
import makeShip from './ship';

// Make game boards
const playerBoard = gameBoard();
const AIBoard = gameBoard();

// Make players
const p1 = player('Gustav', AIboard, "human");
const AI = player("Terminator", playerBoard, "computer");

// Make p1 ships
const p1Ptb = makeShip('patrolBoat');
const p1Sub = makeShip('sub');
const p1Destroyer = makeShip('destroyer');
const p1Battleship = makeShip('battleship');
const p1Carrier = makeShip('carrier');

// Make AI ships
const AIPtb = makeShip('patrolBoat');
const AISub = makeShip('sub');
const AIDestroyer = makeShip('destroyer');
const AIBattleship = makeShip('battleship');
const AICarrier = makeShip('carrier');

// Place ships                            Will need editing for player control
playerBoard.place(p1Ptb, 2, 0, 'x');
playerBoard.place(p1Sub, 7, 2, 'x');
playerBoard.place(p1Destroyer, 2, 4, 'x');
playerBoard.place(p1Battleship, 6, 6, 'x');
playerBoard.place(p1Carrier, 4, 8, 'x');

AIBoard.place(AIPtb, 0, 1, 'y');
AIBoard.place(AISub, 2, 6, 'y');
AIBoard.place(AIDestroyer, 4, 2, 'y');
AIBoard.place(AIBattleship, 6, 6, 'y');
AIBoard.place(AICarrier, 8, 4, 'y');

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
