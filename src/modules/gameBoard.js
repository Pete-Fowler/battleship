import makeShip from './ship';

const gameBoard = () => {
  let map;
  const init = () => {
    map = Array(10).fill(Array(10).fill(0));
  }
  const getMap = () => {
    return map;
  }
  const place = (ship, x, y, axis) => {
    map[x][y] = ship.type;
  }
  return { getMap, init, place };
}

export default gameBoard;