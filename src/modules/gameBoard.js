

const gameBoard = () => {
  let map;
  const init = () => {
    map = Array(10);
    for(let i = 0; i < map.length; i += 1) {
      map[i] = Array(10).fill(0);
    }
  }
  const getMap = () => map;
  const place = (ship, x, y, axis) => {
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
  const incoming = (x, y) => {
    if(typeof map[x][y] === 'object') {
      const target = map[x][y];
      target[0].hit(target[1]);
    } else {
      map[x][y] = 1;
    }
  }
  return { getMap, init, place, incoming };
}
// gameboard should report whether or not all ships have sunk
//   test if ships are sunk after each hit
//   if so, increment a board sunk counter
//   after each hit, test if sunk count is five
//     if yes, report the game is over by calling a game over function
export default gameBoard;