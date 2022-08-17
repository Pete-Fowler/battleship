/* eslint-disable no-undef */
import player from "../src/modules/player";
import gameBoard from "../src/modules/gameBoard";
import makeShip from "../src/modules/ship";

describe('player', () => {
  const board = gameBoard();
  board.init();
  const p1 = player('Sal', board, 'human');
  const sub = makeShip('sub');
  board.place(sub, 0, 0, 'y');
  
  test('player object created', () => {
    expect(p1.name).toBe('Sal');
    expect(p1.type).toBe('human');
    expect(!!p1.attack).toEqual(true);
    expect(p1.boardOfAttack).toBe(board);
  });
  test('attack', () => {
    p1.attack(0, 0);
    expect(sub.getHull()).toEqual([1, 0, 0]);
    p1.attack(0, 2);
    expect(sub.getHull()).toEqual([1, 0, 1]);
    p1.attack(0, 1);
    expect(sub.getHull()).toEqual([1, 1, 1]);
    expect(sub.isSunk()).toBe(true);
  });
});