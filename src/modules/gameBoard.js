import ship from './ship';

const gameBoard = () => {
  const map = Array(10).fill(Array(10).fill(0));
  return { map };
}

export default gameBoard;