/* eslint-disable no-undef */
import player from "../src/modules/player";

describe('player', () => {
    const p1 = player('Sal', 'human');
  test('player object created', () => {
    expect(p1.name).toBe('Sal');
    expect(p1.type).toBe('human');
    expect(!!p1.attack).toEqual(true);
  });
});