
const p1Box = document.querySelector('#p1');
const p2Box = document.querySelector('#p2');
const narrative = document.querySelector('#narrative');
let x;
let y;

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

// Player attack phase - sends x, y from clicked square to board.incoming()
const attackCallback = (e) => {
  x = e.target.dataset.x;
  y = e.target.dataset.y;
  const squares = document.querySelectorAll('#p2 .square');
  squares.forEach(el => {
    el.removeEventListener('click', attackCallback);
    el.classList.remove('hoverable');
  });
  console.log(x, y);
}

// Player attack phase - adds click event listener and hover effect 
const UIAttack = () => {
  const squares = document.querySelectorAll('#p2 .square');
  squares.forEach(el => {
    el.addEventListener('click', attackCallback);
    el.classList.add('hoverable');
  });
  narrative.textContent = 'Click to fire on the enemy fleet';
}


// You need a method to take user input for attacking. let the user click 
// on a coordinate in the enemy Gameboard.


export { p1Box, p2Box, x, y, renderBoard, UIAttack };