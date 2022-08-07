/* eslint-disable no-undef */
import gameBoard from '../src/modules/gameBoard';
import makeShip from '../src/modules/ship';

describe('game board', () => {
  const board = gameBoard();
  let boardTemplate;
  beforeEach(() => {
    board.init();
    boardTemplate = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  });
  test('make 10x10 board', () => {
    expect(board.getMap()).toEqual(boardTemplate);
  });
  test('place carrier, 0, 0, x', () => {
    const carrier = makeShip('carrier');
    board.place(carrier, 0, 0, 'x');
    expect(board.getMap()).toEqual([['carrier', 0, 0, 0, 0, 0, 0, 0, 0, 0], ['carrier', 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['carrier', 0, 0, 0, 0, 0, 0, 0, 0, 0], ['carrier', 0, 0, 0, 0, 0, 0, 0, 0, 0], ['carrier', 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  });
  test('place destroyer, 8, 6, y', () => {
    const destroyer = makeShip('destroyer');
    board.place(destroyer, 8, 6, 'y');
    boardTemplate[8][6] = 'destroyer';
    boardTemplate[8][7] = 'destroyer';
    boardTemplate[8][8] = 'destroyer';
    expect(board.getMap()).toEqual(boardTemplate);
  });
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