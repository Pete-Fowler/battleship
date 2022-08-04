const ship = (length) => {
  const hull = Array(length).fill(0);
  const hit = (index) => {
    hull[index] = 1;
  }
  const isSunk = () => hull.every(x => x === 1);
return { length, hit, isSunk, hull };   // Hull is returned now only for testing
}

export default ship;