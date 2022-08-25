import gameBoard from "./gameBoard";
import player from "./player";
import makeShip from './ship';
import { p1Box, p2Box, x, y, renderBoard, UIAttack } from "./DOM";

// Make game boards
const p1Board = gameBoard();
p1Board.init();
const p2Board = gameBoard();
p2Board.init();

// Make players
const p1 = player('Gustav', p1Board, "human");
const p2 = player("Terminator",p2Board, "AI");

// Make p1 ships
const p1Ptb = makeShip('patrolBoat');
const p1Sub = makeShip('sub');
const p1Destroyer = makeShip('destroyer');
const p1Battleship = makeShip('battleship');
const p1Carrier = makeShip('carrier');

// Make AI ships
const p2Ptb = makeShip('patrolBoat');
const p2Sub = makeShip('sub');
const p2Destroyer = makeShip('destroyer');
const p2Battleship = makeShip('battleship');
const p2Carrier = makeShip('carrier');

// Place ships ***************Will need editing for player control
p1Board.place(p1Ptb, 2, 0, 'x');    // this is causing undefined on map[a][b]
p1Board.place(p1Sub, 7, 2, 'x');
p1Board.place(p1Destroyer, 2, 4, 'x');
p1Board.place(p1Battleship, 6, 6, 'x');
p1Board.place(p1Carrier, 4, 8, 'x');

p2Board.place(p2Ptb, 0, 1, 'y');
p2Board.place(p2Sub, 2, 6, 'y');
p2Board.place(p2Destroyer, 4, 2, 'y');
p2Board.place(p2Battleship, 6, 6, 'y');
p2Board.place(p2Carrier, 8, 4, 'y');

renderBoard(p1Board, p1Box);
renderBoard(p2Board, p2Box);

UIAttack();
p2Board.incoming(x, y);


// The game loop should set up a new game by creating Players and Gameboards.
// For now just populate each Gameboard with predetermined coordinates. You can
// implement a system for allowing players to place their ships later.
// The game loop should step through the game turn by turn using only methods 
// from other objects. If at any point you are tempted to write a new function 
// inside the game loop, step back and figure out which class or module that 
// function should belong to.
// Create conditions so that the game ends once one players ships have all 
// been sunk. This function is appropriate for the Game module.
