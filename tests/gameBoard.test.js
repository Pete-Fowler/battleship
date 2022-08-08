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
    expect(board.getMap()).toEqual([[[carrier, 0], 0, 0, 0, 0, 0, 0, 0, 0, 0], [[carrier, 1], 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [[carrier, 2], 0, 0, 0, 0, 0, 0, 0, 0, 0], [[carrier, 3], 0, 0, 0, 0, 0, 0, 0, 0, 0], [[carrier, 4], 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  });
  test('place destroyer, 8, 6, y', () => {
    const destroyer = makeShip('destroyer');
    board.place(destroyer, 8, 6, 'y');
    boardTemplate[8][6] = [destroyer, 0];
    boardTemplate[8][7] = [destroyer, 1];
    boardTemplate[8][8] = [destroyer, 2];
    expect(board.getMap()).toEqual(boardTemplate);
  });
  test('incoming - hit, hit, miss', () => {
    const patrol = makeShip('patrolBoat');
    board.place(patrol, 4, 4, 'x');
    board.incoming(5, 4);
    board.incoming(4, 4);
    board.incoming(3, 4);
    expect(patrol.hull[1]).toEqual(1);
    expect(patrol.hull[0]).toEqual(1);
    expect(board.getMap()[3][4]).toEqual(1);
  });
    // takes a pair of coordinates
    // determines whether or not the attack hit a ship
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