
const p1Box = document.querySelector('#p1');
const p2Box = document.querySelector('#p2');
const narrative = document.querySelector('#narrative');

// Lets player place ship
const UIPlayerPlace = (board) => {

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
const UIAIPlace = (board) => {

}

const renderBoard = (board, box) => {
  // Clear old content prior to re-render if needed
  let grid = document.querySelector(`${box.id} .board`);
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
      square.textContent = board.getMap()[i][j];
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

export { p1Box, p2Box, UIPlayerPlace, UIAIPlace, renderBoard, UIAttack };