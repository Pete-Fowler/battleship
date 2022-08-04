import gameBoard from '../src/modules/gameBoard';
import ship from '../src/modules/ship';

describe('game board', () => {
  let board;
  let boardTemplate;
  beforeEach(() => {
    board = gameBoard();
    boardTemplate = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],];
  });
  test('make 10x10 board', () => {
    expect(board.map).toEqual(boardTemplate);
  });
  // test('place ship', () => {
  //   expect(board.place(ship(5), x, y).toEqual()
  // });
});
// create board - 10x10
  // x, y cartesian coords ascending from bottom left, where x is columns and y is rows
// place ships
  // take coords, instantiate ship w factory
// receive attack
  // take coords, 
// track miss
// all ships sunk

// ships are carrier 5 / battleship 4 / destroyer 3 / sub 3 / ptb 2