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
  const boardTemplate = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    const board = gameBoard();
    board.init();
    const sub = makeShip('sub');
    board.place(sub, 0, 0, 'y');
    const AI = player('Gustov', board, 'AI')
  test('Fires a shot', () => {
    AI.attack();
    expect(board.getMap()).not.toEqual(boardTemplate);
    expect(AI.getAIcoordinates()[0]).toBeGreaterThanOrEqual(0);
    expect(AI.getAIcoordinates()[0]).toBeLessThan(10);
    expect(AI.getAIcoordinates()[1]).toBeGreaterThanOrEqual(0)
    expect(AI.getAIcoordinates()[1]).toBeLessThan(10);
  });
});