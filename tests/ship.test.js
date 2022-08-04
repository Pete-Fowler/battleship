import ship from '../src/modules/ship';

describe('ship factory', () => {
  let testSub;
  beforeEach(() => {
    testSub = ship('sub');
  });
  test('ship exists', () => {
    expect(testSub.length).toBe(3);
    expect(testSub.type).toBe('sub');
  });
  test('2 hits', () => {
    testSub.hit(1);
    testSub.hit(2);
    expect(testSub.hull).toEqual([0, 1, 1]);
  })
  test('Sunk', () => {
    testSub.hit(0);
    testSub.hit(1);
    testSub.hit(2);
    expect(testSub.isSunk()).toBe(true);
  });
  test('Not sunk', () => {
    expect(testSub.isSunk()).toBe(false);
  });
});

