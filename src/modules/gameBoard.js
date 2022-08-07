

const gameBoard = () => {
  let map;
  const init = () => {
    map = Array(10).fill(Array(10).fill(0));
  }
  const getMap = () => map;
  const place = (ship, x, y, axis) => {
    let i = 0;
    let a = x;
    let b = y;
    while(i < ship.length) {
      if(axis === 'x') {
        map[a][b] = ship.type;
        a += 1;
        i += 1;
      }
    }
    console.log(map);
  }
  return { getMap, init, place };
}

export default gameBoard;