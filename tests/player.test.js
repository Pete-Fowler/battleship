/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import player from "../src/modules/player";
import gameBoard from "../src/modules/gameBoard";
import makeShip from "../src/modules/ship";

describe('human player', () => {
  const board = gameBoard();
  board.init();
  const P1 = player('Sal', board, 'human');
  const sub = makeShip('sub');
  board.place(sub, 0, 0, 'y');

  test('player object created', () => {
    expect(P1.name).toBe('Sal');
    expect(P1.type).toBe('human');
    expect(!!P1.attack).toEqual(true);
    expect(P1.boardOfAttack).toBe(board);
  });
  test('player attack', () => {
    P1.attack(0, 0);
    expect(sub.getHull()).toEqual([1, 0, 0]);
    P1.attack(0, 2);
    expect(sub.getHull()).toEqual([1, 0, 1]);
    P1.attack(0, 1);
    expect(sub.getHull()).toEqual([1, 1, 1]);
    expect(sub.isSunk()).toBe(true);
  });
});

describe('AI player', () => {
  const zeroBoard = Array(10);
  for(let i = 0; i < zeroBoard.length; i++) {
    zeroBoard[i] = Array(10).fill(0);
  }
  const board = gameBoard();
  board.init();
  
  test('Fires a shot', () => {
    const AI = player('Gustov', board, 'AI')
    const sub = makeShip('sub');
    board.place(sub, 0, 0, 'y');
    AI.attack();
    expect(board.getMap()).not.toEqual(zeroBoard);
    expect(AI.getAIcoordinates()[0]).toBeGreaterThanOrEqual(0);
    expect(AI.getAIcoordinates()[0]).toBeLessThan(10);
    expect(AI.getAIcoordinates()[1]).toBeGreaterThanOrEqual(0)
    expect(AI.getAIcoordinates()[1]).toBeLessThan(10);
  });
  test("Won't repeat shot", () => {
    const boardTemplate = Array(10);
    for(let i = 0; i < boardTemplate.length; i++) {
      boardTemplate[i] = Array(10).fill(1);
    }
    board.init();
    const AI = player('Gustov', board, 'AI')
    for(let i = 0; i < 100; i++) {
      AI.attack();
    }
    expect(board.getMap()).toEqual(boardTemplate);
  });
  test('If shot hits ship, attack adjacent spot', () => {
    board.init();
    const AI = player('Gustov', board, 'AI');
    const sub = makeShip('sub');
    board.place(sub, 6, 9, 'x');
    do {
      AI.attack();
    } while(board.getLastShotHit() === false);
    const [ a, b ] = AI.getLastShot();
    AI.attack();
    const [ x, y ] = AI.getLastShot();
    const adjacent = [[a + 1, b], [a - 1, b], [a, b + 1], [a, b - 1]];
    expect(JSON.stringify(adjacent).includes(JSON.stringify([x, y]))).toEqual(true);
  });
});