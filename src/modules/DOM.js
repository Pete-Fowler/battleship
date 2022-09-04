/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */

const p1Box = document.querySelector("#p1");
const p2Box = document.querySelector("#p2");
const narrative = document.querySelector("#narrative");

// Used in switchAxis and renderShadow and playerPlaceShip
let axis = "y";
let lastCoordsRendered;
let lastShip;

// Used for playerPlaceShipPhase and attackPhase
let i = 0;
let p2;
let p1Board;
let p2Board;
let p1Ships;
let currentPlayer;
let turn = 0;

// Used to tell game.js when playerPlaceShipPhase is over
const shipsPlaced = new Event("shipsPlaced");
const gameOverEvent = new Event("gameOver");

// For AIPlaceShipPhase
let j = 0;

// Helper functions for playerPlaceShipPhase
const switchAxis = () => {
  axis === "x" ? (axis = "y") : (axis = "x");
};

const renderShadow = (e, fill, board, ship) => {
  let { x, y } = e.target.dataset;
  let el;
  let collision = false;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (board.checkCollision(ship, x, y, axis) && fill !== "clear") {
    collision = true;
  }
  for (let i = 0; i < ship.length; i += 1) {
    if (axis === "x") {
      el = document.querySelector(
        `#p1 .square[data-x="${x + i}"][data-y="${y}"]`
      );
    } else {
      el = document.querySelector(
        `#p1 .square[data-x="${x}"][data-y="${y + i}"]`
      );
    }
    if (el) {
      fill === "fill" && el.classList.add("hovered");
      if (fill === "clear") {
        el.classList.remove("hovered");
        el.classList.remove("red");
      }
      fill === "place" && el.classList.add("placed");
      if (collision === true && fill !== "place") {
        el.classList.add("red");
      }
    }
  }
  lastCoordsRendered = e;
  lastShip = ship;
};

const removeListeners = () => {
  const squares = document.querySelectorAll("#p1 .board .square");
  squares.forEach((square) => {
    square.replaceWith(square.cloneNode());
  });
  window.removeEventListener("keydown", (e) => {});
};

const clickToPlace = (e, board, ship) => {
  let { x, y } = e.target.dataset;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (board.checkCollision(ship, x, y, axis)) {
    return;
  }
  board.place(ship, x, y, axis);
  renderShadow(e, "place", board, ship);
  removeListeners();
  if (i === 5) {
    document.dispatchEvent(shipsPlaced);
  }
  playerPlaceShipPhase(p1Board, p1Ships);
};

const playerPlaceShip = (board, ship) => {
  const squares = document.querySelectorAll("#p1 .board .square");
  narrative.textContent = `Lead your ${ship.type} into battle. Press X to steer.`;

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) =>
      renderShadow(e, "fill", board, ship)
    );
    square.addEventListener("mouseout", (e) =>
      renderShadow(e, "clear", board, ship)
    );
    square.addEventListener("click", (e) => clickToPlace(e, board, ship));
  });

  if (i === 0) {
    window.addEventListener("keydown", (e) => {
      if (e.key === "x") {
        renderShadow(lastCoordsRendered, "clear", board, lastShip);
        switchAxis();
        renderShadow(lastCoordsRendered, "fill", board, lastShip);
      }
    });
  }
};

function playerPlaceShipPhase(board, ships) {
  if (i === 0) {
    p1Board = board;
    p1Ships = ships;
  }
  if (i <= 4) {
    playerPlaceShip(board, ships[i]);
    i += 1;
  }
}

// AI Place ship phase
const AIPlaceShipPhase = (board, ships, player) => {
  player.AIPlaceShip(board, ships[j]);
  j += 1;
  if (j === 5) {
    return;
  }
  AIPlaceShipPhase(board, ships, player);
};

const renderBoard = (board, box) => {
  // Clear old content prior to re-render if needed
  let grid = document.querySelector(`#${box.id} .board`);
  if (grid) {
    grid.textContent = "";
  } else {
    grid = document.createElement("div");
    grid.className = "board";
  }
  // Individual squares on board
  for (let k = 0; k <= 9; k += 1) {
    for (let l = 9; l >= 0; l -= 1) {
      const square = document.createElement("div");
      square.className = "square";
      square.dataset.x = k;
      square.dataset.y = l;
      grid.append(square);
    }
  }
  box.append(grid);
};

const updateAIBoard = (board, x, y) => {
  const square = document.querySelector(`#p2 .square[data-x="${x}"][data-y="${y}"]`);
  const boardValue = board.getMap()[x][y];

  if(boardValue === 0 || boardValue === 1) {
    square.classList.add('miss');
  }
  if(typeof boardValue === 'object') {
    square.classList.add('red');
  }
}

// Player attack phase - sends x, y from clicked square to board.incoming()
const attackCallback = (e, board) => {
  const { x, y } = e.target.dataset;
  
   // Remove hover effect and click to attack 
   const squares = document.querySelectorAll("#p2 .square");
   squares.forEach((el) => {
     el.classList.remove("hoverable");
     el.replaceWith(el.cloneNode());
   });

   updateAIBoard(board, x, y);
   board.incoming(x, y);
   
  // Update DOM and board
  if(typeof board.getMap()[x][y] === 'object') {
    const ship = board.getMap()[x][y][0];
    if(ship.isSunk()) {
      narrate(`You've sunk the enemy's ${ship.type}!!!`);
    }
  }
 
  if(!board.isGameOver()) {
    setTimeout(AIAttack, 500);
  } else if(board.isGameOver()) {
    document.dispatchEvent(gameOverEvent);
  }
};

// Player attack phase - adds click event listener and hover effect
const playerAttack = (board) => {
  currentPlayer = 1;
  const squares = document.querySelectorAll("#p2 .square");
  squares.forEach((el) => {
    el.addEventListener("click", (e) => attackCallback(e, board));
    el.classList.add("hoverable");
  });
  if(turn === 0) {
    narrate("Click to fire on the enemy fleet");
  }
  turn += 1;
};

const updateBoard = (board, x, y) => {
  const square = document.querySelector(`#p1 .square[data-x="${x}"][data-y="${y}"]`);
  const boardValue = board.getMap()[x][y];
  if(boardValue === 1) {
    square.classList.add('miss');
  }
  if(typeof boardValue === 'object') {
    square.classList.add('red');
  }
}

function AIAttack() {
  currentPlayer = 2;
 
    p2.attack();
    const [ x, y ] = p2.getLastShot();
    updateBoard(p1Board, x, y);
console.table({xy: [x, y]})

    if(!p1Board.isGameOver()) {
    playerAttack(p2Board);
  } else if(p1Board.isGameOver()) {
    document.dispatchEvent(gameOverEvent);
  }
}

function attackPhase(playerTwo, playerTwoBoard) {
  currentPlayer = 1;
  p2 = playerTwo;
  p2Board = playerTwoBoard;
  playerAttack(p2Board);
}

function gameOver() {
  if(currentPlayer === 1) {
    narrate(`Glorious victory! You sunk all the AI ships!`);
  } else {
    narrate('Crushing defeat ... The AI has sunk all of your ships!');
  }
}

function narrate(message) {
  narrative.textContent = message;
  setTimeout(() => {
    narrative.textContent = '';
  }, 4000)
}

export {
  p1Box,
  p2Box,
  playerPlaceShip,
  playerPlaceShipPhase,
  AIPlaceShipPhase,
  renderBoard,
  playerAttack,
  attackPhase,
  gameOver,
};
