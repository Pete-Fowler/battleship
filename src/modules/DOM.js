/* eslint-disable no-unused-expressions */

const p1Box = document.querySelector('#p1');
const p2Box = document.querySelector('#p2');
const narrative = document.querySelector('#narrative');

let axis = 'y';   // used to render shadow in playerPlaceShip
let lastCoords;

// Helper functions for playerPlaceShip
const switchAxis = () => {
  axis === 'x' ? axis = 'y' : axis = 'x';
}

const renderShadow = (e, fill, board, ship) => {
  let { x, y } = e.target.dataset;
  let el;
  let collision = false;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if(board.checkCollision(ship, x, y, axis) && fill !== 'clear') {
    collision = true;
  }
  for(let i = 0; i < ship.length; i += 1) {
    if(axis === 'x') {
      el = document.querySelector(`#p1 .square[data-x="${x + i}"][data-y="${y}"]`);      
    } else {
      el = document.querySelector(`#p1 .square[data-x="${x}"][data-y="${y + i}"]`);
    }
    if(el) {
      fill === 'fill' && el.classList.add('hovered')
      if(fill === 'clear') {
        el.classList.remove('hovered');
        el.classList.remove('red');
      }
      fill === 'place' && el.classList.add('placed');
      if(collision === true && fill !== 'place') {el.classList.add('red')};
    }
  }
  lastCoords = e;
}

const removeListeners = () => {
  const squares = document.querySelectorAll('#p1 .board .square');
  squares.forEach(square => {
    square.replaceWith(square.cloneNode());
  });
  window.removeEventListener('keydown', () => { });
}

const clickToPlace = (e, board, ship) => {
  let { x, y } = e.target.dataset;  
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if(board.checkCollision(ship, x, y, axis)) {
    return;
  }
  board.place(ship, x, y, axis);
  renderShadow(e, 'place', board, ship);
  removeListeners();
  console.log(board.getMap());
}

// Main function for player to place ship
const playerPlaceShip = (board, ship) => {
  const squares = document.querySelectorAll('#p1 .board .square');
  narrative.textContent = `Lead your ${ship.type} into battle. Press X to steer.`;
  
    squares.forEach(square => {
      square.addEventListener('mouseover', (e) => renderShadow(e, 'fill', board, ship));
      square.addEventListener('mouseout', (e) => renderShadow(e, 'clear', board, ship));
      square.addEventListener('click', (e) => clickToPlace(e, board, ship));
    });

    window.addEventListener('keydown', (e) => {
      if(e.key === 'x') {
        switchAxis();
        squares.forEach(square => {
          square.classList.remove('hovered');
          square.classList.remove('red');
        });
        renderShadow(lastCoords, 'fill', board, ship);
      }
    });
}

// Lets AI place ship
const AIPlaceShip = (board) => {

}

const renderBoard = (board, box) => {
  // Clear old content prior to re-render if needed
  let grid = document.querySelector(`#${box.id} .board`);
  if(grid) {
    grid.textContent = '';
  } else {
    grid = document.createElement('div');
    grid.className = 'board';
  }
  // Individual squares on board
  for(let i = 0; i <= 9; i += 1) {
    for(let j = 9; j >= 0; j -= 1) {
      const square = document.createElement('div');
      square.className = 'square';
      square.dataset.x = i;
      square.dataset.y = j;
      grid.append(square);
    }
  }
  box.append(grid);
}

// Player attack phase - sends x, y from clicked square to board.incoming()
const attackCallback = (e, board) => {
  const { x, y } = e.target.dataset;
  board.incoming(x, y);
  const squares = document.querySelectorAll('#p2 .square');
  squares.forEach(el => {
    el.removeEventListener('click', attackCallback);
    el.classList.remove('hoverable');
  });
  console.log(board.getMap());
}

// Player attack phase - adds click event listener and hover effect 
const UIAttack = (board) => {
  const squares = document.querySelectorAll('#p2 .square');
  squares.forEach(el => {
    el.addEventListener('click', (e) => attackCallback(e, board));
    el.classList.add('hoverable');
  });
  narrative.textContent = 'Click to fire on the enemy fleet';
}

export { p1Box, p2Box, playerPlaceShip, AIPlaceShip, renderBoard, UIAttack };