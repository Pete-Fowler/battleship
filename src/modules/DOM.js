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
  const grid = document.createElement('div');
  grid.className = 'board';

  // Individual squares on board
  for(let i = 0; i <= 9; i += 1) {
    for(let j = 9; j >= 0; j -= 1) {
      const square = document.createElement('div');
      square.className = 'square';
      square.dataset.x = i;
      square.dataset.y = j;
      square.textContent = board.getMap()[i][j];
      grid.append(square);
    }
  }
  box.append(grid);
}

const userAttack = () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach()
}


// We’ll leave the HTML implementation up to you for now, but you should display
// both the player’s boards and render them using information from the Gameboard
// class.

// You need methods to render the gameboards and to take user input for attacking.
// For attacks, let the user click on a coordinate in the enemy Gameboard.


export { renderBoard, p1Box, p2Box, };