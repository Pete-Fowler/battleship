import gameBoard from "./gameBoard";
import player from "./player";
import makeShip from './ship';
import { 
  p1Box, 
  p2Box,  
  playerPlaceShipPhase, 
  AIPlaceShipPhase,
  renderBoard, 
  playerAttack,
} from "./DOM";


// SETUP

// Make game boards
const p1Board = gameBoard();
p1Board.init();
const p2Board = gameBoard();
p2Board.init();

// Make players
const p1 = player('1', p1Board, "human");
const p2 = player("2",p2Board, "AI");

// Make p1 ships
const p1Ptb = makeShip('patrol boat');
const p1Sub = makeShip('sub');
const p1Destroyer = makeShip('destroyer');
const p1Battleship = makeShip('battleship');
const p1Carrier = makeShip('carrier');
const p1Ships = [p1Carrier, p1Battleship, p1Destroyer, p1Sub, p1Ptb];

// Make AI ships
const p2Ptb = makeShip('patrol boat');
const p2Sub = makeShip('sub');
const p2Destroyer = makeShip('destroyer');
const p2Battleship = makeShip('battleship');
const p2Carrier = makeShip('carrier');
const AIShips = [p2Carrier, p2Battleship, p2Destroyer, p2Sub, p2Ptb];

// Render Boards
renderBoard(p1Board, p1Box);
renderBoard(p2Board, p2Box);

// Place ships phase
AIPlaceShipPhase(p2Board, AIShips, p2);
playerPlaceShipPhase(p1Board, p1Ships);

// MAIN GAME LOOP

// Player attack

document.addEventListener('shipsPlaced', () => playerAttack(p2Board));
// UIAttack(p2Board);

// Gameover - after exit loop


// The game loop should set up a new game by creating Players and Gameboards.
// For now just populate each Gameboard with predetermined coordinates. You can
// implement a system for allowing players to place their ships later.
// The game loop should step through the game turn by turn using only methods 
// from other objects. If at any point you are tempted to write a new function 
// inside the game loop, step back and figure out which class or module that 
// function should belong to.
// Create conditions so that the game ends once one players ships have all 
// been sunk. This function is appropriate for the Game module.
