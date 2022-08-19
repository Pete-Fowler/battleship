/* eslint-disable no-undef */
import player from "../src/modules/player";
import gameBoard from "../src/modules/gameBoard";
import makeShip from "../src/modules/ship";

describe('player', () => {
  const boardTemplate = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  const board = gameBoard();
  board.init();
  
  const AI = player('Gustov', board, 'AI')
  const P1 = player('Sal', board, 'human');
  const sub = makeShip('sub');
  board.place(sub, 0, 0, 'y');
  
  beforeEach(() => {
    board.init();
  });
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
  test('AI fires a shot', () => {
    console.log(board.getMap);
    AI.attack();
    expect(board.getMap()).not.toEqual(boardTemplate);
    console.log(board.getMap);
  })
});