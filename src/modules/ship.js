const makeShip = (type) => {
  let length;
  if(type === 'carrier') {length = 5;}
  if(type === 'battleship') {length = 4;}
  if(type === 'sub' || type === 'destroyer') {length = 3;}
  if(type === 'patrolBoat') {length = 2};
  const hull = Array(length).fill(0);
  const hit = (index) => {
    hull[index] = 1;
  }
  const isSunk = () => hull.every(x => x === 1);
return { length, type, hit, isSunk, hull };   // Hull is returned now only for testing
}

export default makeShip;