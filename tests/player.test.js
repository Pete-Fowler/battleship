/* eslint-disable no-undef */
import player from "../src/modules/player";
import gameBoard from "../src/modules/gameBoard";
import makeShip from "../src/modules/ship";

describe('player', () => {
  beforeEach(() => {
    const p1 = player('Sal', 'human');
    const board = gameBoard();
    board.init();
    const sub = makeShip('sub');
    board.place(sub, 0, 0, 'x');
  });
  test('player object created', () => {
    expect(p1.name).toBe('Sal');
    expect(p1.type).toBe('human');
    expect(!!p1.attack).toEqual(true);
  });
  test('attack', () => {
    p1.attack(0, 2);
    expect(sub.hull).toEqual([0, 0, 1]);
  });
});