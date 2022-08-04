import makeShip from './ship';

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
    // map[a][b] = ship.type;
    while(i < ship.getLength()) {
      if(axis === 'x') {
        map[a][b] = ship.type;
        a++;
        i++;
      }
    }
  }
  return { getMap, init, place };
}

export default gameBoard;