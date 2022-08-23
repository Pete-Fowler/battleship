import {
  p1Board,
  p2Board,
  p1,
  p2,
  p1Ptb,
  p1Sub,
  p1Destroyer,
  p1Battleship,
  p1Carrier,
  p2Ptb,
  p2Sub,
  p2Destroyer,
  p2Battleship,
  p2Carrier
} from './game';

const p1Box = document.querySelector('#p1');
const p2Box = document.querySelector('#p2');

const renderBoard = (board, box) => {
  // Outer board container
  const boardBox = document.createElement('div');
  boardBox.id = `${p1.name}-board`;

  // Individual squares on board
  for(let i = 0; i <= 9; i += 1) {
    for(let j = 0; j <= 9; j += 1) {
      const square = document.createElement('div');
      square.textContent = board.getMap()[i][j];
      boardBox.append(square);
    }
  }
  box.append(boardBox);
}

// We’ll leave the HTML implementation up to you for now, but you should display
// both the player’s boards and render them using information from the Gameboard
// class.

// You need methods to render the gameboards and to take user input for attacking.
// For attacks, let the user click on a coordinate in the enemy Gameboard.


export { renderBoard, p1Box, p2Box, };