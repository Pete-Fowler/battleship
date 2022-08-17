

const gameBoard = () => {
  let map;
  let sunkShips = 0;
  const init = () => {
    sunkShips = 0;
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
  const gameOver = () => true;  // to be edited

  const isGameOver = (n) => {
    if(n === 5) {
      gameOver();
    }
  }
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
      [ ship, hullIndex ] = map[x][y];    // 0 is ship object, 1 is hull index. see place()
      ship.hit(hullIndex);
      testIfSunk(ship);
    } else {
      map[x][y] = 1;
    }
  }
  const getSunkShips = () => sunkShips;
  return { init, getMap, place, gameOver, isGameOver, testIfSunk, 
    incoming, getSunkShips };
}

export default gameBoard;