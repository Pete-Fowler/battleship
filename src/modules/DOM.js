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

const renderShadow = (e, fill, length) => {
  let { x, y } = e.target.dataset;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  for(let i = 0; i < length; i += 1) {
    if(axis === 'x') {
      const el = document.querySelector(`#p1 .square[data-x="${x + i}"][data-y="${y}"]`);
      fill === 'fill' ? el.classList.add('hovered') : el.classList.remove('hovered');
      if(fill === 'place') {
        el.classList.add('placed');
      }
    } else {
      const el = document.querySelector(`#p1 .square[data-x="${x}"][data-y="${y + i}"]`);
      fill === 'fill' ? el.classList.add('hovered') : el.classList.remove('hovered');
      if(fill === 'place') {
        el.classList.add('placed');
      }
    }
  }
  lastCoords = e;
}

const clickToPlace = (e, board, ship) => {
  let { x, y } = e.target.dataset;
  x = parseInt(x, 10);
  y = parseInt(y, 10)
  board.place(ship, x, y, axis);
  renderShadow(e, 'place', ship.length);
  console.log(board.getMap());
}

// Main function for player to place ship
const playerPlaceShip = (board, ship) => {
  const squares = document.querySelectorAll('#p1 .board .square');
  narrative.textContent = `Lead your ${ship.type} into battle. Press X to steer.`;
  
    squares.forEach(square => {
      square.addEventListener('mouseover', (e) => renderShadow(e, 'fill', ship.length));
      square.addEventListener('mouseout', (e) => renderShadow(e, 'clear', ship.length));
      square.addEventListener('click', (e) => clickToPlace(e, board, ship));
    });

    window.addEventListener('keydown', (e) => {
      if(e.key === 'x') {
        switchAxis();
        squares.forEach(square => square.classList.remove('hovered'));
        renderShadow(lastCoords, 'fill', ship.length);
      }
    });
}
// PROBLEM: User will place ships by selecting a ship and then clicking a 
// coordinate on the board.
// APPROACH: Input is the click from the user on a square. It will loop from big 
// ships to ptb. Output is the gameBoard object is updated with the ship position, 
// and does not allow board overflow. Pseudocode:

  // User is given a ship (big to small)
  // Narrative is updated with instructions and ship
  //   Instructions to right click, tab, or click button to switch axis are added.
  // Hover effect is added where if user hovers a coordinate, it shades through 
  // ship.length along the axis
  // Click event listener is added so that on square click, ship is added per 
  // shading.
  // Remove all effects/listeners
  // Update narrative?


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