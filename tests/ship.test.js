/* eslint-disable no-undef */
import makeShip from '../src/modules/ship';

describe('ship factory', () => {
  let testSub;
  beforeEach(() => {
    testSub = makeShip('sub');
  });
  test('ship exists', () => {
    expect(testSub.length).toBe(3);
    expect(testSub.type).toBe('sub');
  });
  test('2 hits', () => {
    testSub.hit(1);
    testSub.hit(2);
    expect(testSub.getHull()).toEqual([0, 1, 1]);
  })
  test('Sunk', () => {
    testSub.hit(0);
    expect(testSub.isSunk()).toBe(false);
    testSub.hit(1);
    expect(testSub.isSunk()).toBe(false);
    testSub.hit(2);
    expect(testSub.isSunk()).toBe(true);
  });
});

