/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */

const p1Box = document.querySelector("#p1");
const p2Box = document.querySelector("#p2");
const narrative = document.querySelector("#narrative");

let canVibrate = false;
if ("vibrate" in navigator) canVibrate = true;

// Used in switchAxis and renderShadow and playerPlaceShip
let axis = "y";
let lastCoordsRendered;
let lastShip;
let shipBeingPlaced;
let highlightSquares = false;
let touched;
window.addEventListener("mousedown", () => {
  highlightSquares = true;
});
window.addEventListener("mouseup", () => {
  highlightSquares = false;
});
window.addEventListener("touchstart", () => {
  highlightSquares = true;
});
window.addEventListener("touchend", () => {
  highlightSquares = false;
});
window.addEventListener("touchmove", handleTouchMove, { passive: false });

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

// Used to only vibrate mobile phone on first hit
let AIHits = 0;

// Helper functions for playerPlaceShipPhase
const switchAxis = (board) => {
  renderShadow(lastCoordsRendered, "clear", board, lastShip);
  axis === "x" ? (axis = "y") : (axis = "x");
  if (highlightSquares) {
    renderShadow(lastCoordsRendered, "fill", board, lastShip);
  }
};

const renderShadow = (coords, fill, board, ship) => {
  let [x, y] = coords;
  let el;
  let collision = false;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (board.checkCollision(ship, x, y, axis) && fill !== "clear") {
    collision = true;
  }
  for (let k = 0; k < ship.length; k += 1) {
    if (axis === "x") {
      el = document.querySelector(
        `#p1 .square[data-x="${x + k}"][data-y="${y}"]`
      );
    } else {
      el = document.querySelector(
        `#p1 .square[data-x="${x}"][data-y="${y + k}"]`
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
  lastCoordsRendered = [x, y];
  lastShip = ship;
};

const removeListeners = () => {
  const squares = document.querySelectorAll("#p1 .board .square");
  squares.forEach((square) => {
    square.replaceWith(square.cloneNode());
  });
  window.removeEventListener("keydown", (e) => {});
};

const clickToPlace = (coords, board, ship) => {
  let [x, y] = coords;
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (board.checkCollision(ship, x, y, axis)) {
    renderShadow([x, y], "clear", board, ship);
    return;
  }
  board.place(ship, x, y, axis);
  renderShadow(coords, "place", board, ship);
  removeListeners();
  if (i === 5) {
    document.dispatchEvent(shipsPlaced);
    window.removeEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
  }
  playerPlaceShipPhase(p1Board, p1Ships);
};

const playerPlaceShip = (board, ship) => {
  shipBeingPlaced = ship;
  p1Board = board;
  const squares = document.querySelectorAll("#p1 .board .square");
  switchAxisNarrative();

  if (i === 0) {
    window.addEventListener("keydown", (e) => {
      if (e.key === "x") {
        switchAxis(board);
      }
    });
  }

  squares.forEach((square) => {
    square.addEventListener("touchstart", (e) => {
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "fill", board, ship);
      touched = e.target;
    });
    square.addEventListener("mouseover", (e) => {
      highlightSquares = true;
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "fill", board, ship);
    });
    square.addEventListener("mouseout", (e) => {
      highlightSquares = false;
      const { x, y } = e.target.dataset;
      renderShadow([x, y], "clear", board, ship);
    });
    square.addEventListener("touchend", () => {
      clickToPlace(lastCoordsRendered, board, ship);
    });
    square.addEventListener("click", (e) => {
      highlightSquares = false;
      const { x, y } = e.target.dataset;
      clickToPlace([x, y], board, ship);
    });
  });
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
  const square = document.querySelector(
    `#p2 .square[data-x="${x}"][data-y="${y}"]`
  );
  const boardValue = board.getMap()[x][y];

  if (boardValue === 0 || boardValue === 1) {
    square.classList.add("miss");
  }
  if (typeof boardValue === "object") {
    square.classList.add("red");
  }
};

// Player attack phase - sends x, y from clicked square to board.incoming()
const attackCallback = (e, board) => {
  const { x, y } = e.target.dataset;

  // Remove hover effect and click to attack
  const squares = document.querySelectorAll("#p2 .square");
  squares.forEach((el) => {
    el.classList.remove("hoverable");
    el.replaceWith(el.cloneNode());
  });

  // Update DOM and board
  updateAIBoard(board, x, y);
  board.incoming(x, y);

  // Test if sunk
  if (typeof board.getMap()[x][y] === "object") {
    const ship = board.getMap()[x][y][0];
    if (ship.isSunk()) {
      narrate(`You've sunk the enemy's ${ship.type}!!!`);
    }
  }

  // Test if game is over
  if (!board.isGameOver()) {
    setTimeout(AIAttack, 500);
  } else if (board.isGameOver()) {
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
  if (turn === 0) {
    narrate("Click to fire on the enemy fleet");
  }
  turn += 1;
};

const updateBoard = (board, x, y) => {
  const square = document.querySelector(
    `#p1 .square[data-x="${x}"][data-y="${y}"]`
  );
  const boardValue = board.getMap()[x][y];
  if (boardValue === 1) {
    square.classList.add("miss");
  }
  if (typeof boardValue === "object") {
    square.classList.add("red");
  }
};

function AIAttack() {
  currentPlayer = 2;

  p2.attack();
  const [x, y] = p2.getLastShot();
  updateBoard(p1Board, x, y);

  if (p1Board.getLastShotHit()) {
    if (canVibrate && AIHits === 0) navigator.vibrate(500);
    AIHits += 1;
    const ship = p1Board.getMap()[x][y][0];
    if (ship.isSunk()) {
      narrate(`All hands on deck! Your ${ship.type} is sinking!!!`);
      if (canVibrate) navigator.vibrate(500);
      AIHits = 0;
    }
  }

  if (!p1Board.isGameOver()) {
    playerAttack(p2Board);
  } else if (p1Board.isGameOver()) {
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
  if (currentPlayer === 1) {
    narrative.textContent = `Glorious victory! You sunk all the AI ships!`;
  } else {
    narrative.textContent =
      "Crushing defeat ... The AI has sunk all of your ships!";
  }
}

function narrate(message) {
  narrative.textContent = message;
  setTimeout(() => {
    narrative.textContent = "";
  }, 4000);
}

function switchAxisNarrative() {
  narrative.innerHTML = `Lead your ${shipBeingPlaced.type} into battle. \n 
  Mouse users hover over the board, and click to place ship. \n 
  Mobile users touch, hold, drag, and release. Hit <span id='x-btn'>X</span> \n 
  to switch axis.`;

  const xBtn = document.querySelector("#x-btn");
  xBtn.addEventListener("click", () => switchAxis(p1Board));
  xBtn.addEventListener("touch", () => switchAxis(p1Board));
}

function handleTouchMove(e) {
  e.preventDefault();
  const { x: a, y: b } = touched.dataset;
  const lastElement = touched;

  let x = e.touches[0].clientX;
  let y = e.touches[0].clientY;
  const currentElement = document.elementFromPoint(x, y);
  if (currentElement.parentNode.parentNode.id === "p2") {
    return;
  }

  if (currentElement.classList.contains("square")) {
    ({ x, y } = currentElement.dataset);
    if (currentElement !== lastElement) {
      renderShadow([a, b], "clear", p1Board, shipBeingPlaced);
      renderShadow([x, y], "fill", p1Board, shipBeingPlaced);
      touched = currentElement;
    }
  }
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
