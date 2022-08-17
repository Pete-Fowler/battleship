

const gameBoard = () => {
  let map;
  let sunkShips = 0;
  const init = () => {
    map = Array(10);
    for(let i = 0; i < map.length; i += 1) {
      map[i] = Array(10).fill(0);
    }
  }
  const getMap = () => map;
  const place = (ship, x, y, axis) => {
    // i is hull index to track hits
    let i = 0;
    let a = x;
    let b = y;
    while(i < ship.length) {
      map[a][b] = [ship, i];
      if(axis === 'x') {
        a += 1;
        i += 1;
      } else {
        b += 1;
        i += 1;
      }
    }
  }
  // const gameOver = () => true; to be edited

  const isGameOver = (n) => n === 5;

  const testIfSunk = (ship) => {
    if(ship.isSunk()) {
      sunkShips += 1;
    }
    isGameOver(sunkShips);
  }
  const incoming = (x, y) => {
    let ship;
    let hullIndex;
    if(typeof map[x][y] === 'object') {
      ship = map[x][y][0];
      hullIndex = map[x][y][1];
      ship.hit(hullIndex);
      testIfSunk(ship);
    } else {
      map[x][y] = 1;
    }
  }
  const getSunkShips = () => sunkShips;
  return { init, getMap, place, isGameOver, testIfSunk, 
    incoming, getSunkShips };
}

// gameboard should report whether or not all ships have sunk
//   test if ships are sunk after each hit
//   if so, increment a board sunk counter
//   after each hit, test if sunk count is five
//     if yes, report the game is over by calling a game over function

export default gameBoard;