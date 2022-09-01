/* eslint-disable no-undef */
import gameBoard from '../src/modules/gameBoard';
import makeShip from '../src/modules/ship';

describe('game board', () => {
  const board = gameBoard();
  let boardTemplate;
  beforeEach(() => {
    board.init();
  });
  test('make 10x10 board', () => {
    boardTemplate = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
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
  test('Incoming, hull damage, sunk ship tracking, miss tracking', () => {
    const patrol = makeShip('patrol boat');
    board.place(patrol, 4, 4, 'x');
    board.incoming(5, 4);
    board.incoming(4, 4);
    board.incoming(3, 4);
    expect(patrol.getHull()[1]).toEqual(1);
    expect(patrol.getHull()[0]).toEqual(1);
    expect(board.getSunkShips()).toEqual(1);
    expect(board.getMap()[3][4]).toEqual(1);
  });
  test('gameOver() detects game end', () => {
    const patrol = makeShip('patrol boat');
    const sub = makeShip('sub');
    const destroyer = makeShip('destroyer');
    const battleship = makeShip('battleship');
    const carrier = makeShip('carrier');
    board.place(carrier, 0, 0, 'x');
    board.place(battleship, 0, 1, 'x');
    board.place(destroyer, 0, 2, 'x');
    board.place(sub, 0, 3, 'x');
    board.place(patrol, 0, 4, 'x');
    board.incoming(0, 0); // carrier
    board.incoming(1, 0);
    board.incoming(2, 0);
    board.incoming(3, 0);
    board.incoming(4, 0);
    board.incoming(0, 1); // battleship;
    board.incoming(1, 1);
    board.incoming(2, 1);
    board.incoming(3, 1);
    board.incoming(0, 2); // destroyer
    board.incoming(1, 2);
    board.incoming(2, 2);
    board.incoming(0, 3); // sub
    board.incoming(1, 3);
    board.incoming(2, 3); 
    board.incoming(0, 4); // ptb
    board.incoming(1, 4);
    expect(board.isGameOver()).toEqual(true);
  })
  test('Collision check - tests for wall collision', () => {
    const carrier = makeShip('carrier');
    expect(board.checkCollision(carrier, 5, 0, 'x')).toEqual(false);      
    expect(board.checkCollision(carrier, 6, 0, 'x')).toEqual(true);    
    expect(board.checkCollision(carrier, 9, 5, 'y')).toEqual(false);    
    expect(board.checkCollision(carrier, 9, 6, 'y')).toEqual(true);    
  });
  test('Collision check - tests for ship overlap', () => {
    const carrier = makeShip('carrier');
    const battleship = makeShip('battleship');
    board.place(battleship, 0, 5, 'x');
    expect(board.checkCollision(carrier, 0, 0, 'y')).toEqual(false);
    expect(board.checkCollision(carrier, 3, 1, 'y')).toEqual(true);
    expect(board.checkCollision(carrier, 4, 2, 'y')).toEqual(false);
    expect(board.checkCollision(carrier, 1, 5, 'y')).toEqual(true);
    expect(board.checkCollision(carrier, 3, 5, 'x')).toEqual(true);
    expect(board.checkCollision(carrier, 4, 5, 'x')).toEqual(false);
  });
});