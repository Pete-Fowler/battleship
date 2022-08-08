

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

    if(typeof map[x][y] === object) {
      map[x][y].hit(spot())
    }

    // takes a pair of coordinates
    // determines whether or not the attack hit a ship
    // sends the ‘hit’ function to the correct ship, 
    // or records the coordinates of the missed shot.
  }
  return { getMap, init, place };
}

export default gameBoard;