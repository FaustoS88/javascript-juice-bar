const { timeToMixJuice, limesToCut, remainingOrders } = require('../src/juiceBar');

describe('timeToMixJuice', () => {
  test('correctly determines time for known drinks', () => {
    expect(timeToMixJuice('Pure Strawberry Joy')).toBe(0.5);
    expect(timeToMixJuice('Energizer')).toBe(1.5);
    expect(timeToMixJuice('Tropical Island')).toBe(3);
  });

  test('returns default time for unknown drinks', () => {
    expect(timeToMixJuice('Mystery Drink')).toBe(2.5);
  });
});

describe('limesToCut', () => {
  test('correctly calculates limes needed', () => {
    expect(limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])).toBe(4);
  });

  test('returns 0 when no wedges needed', () => {
    expect(limesToCut(0, ['small', 'large'])).toBe(0);
  });
});

describe('remainingOrders', () => {
  test('returns remaining orders that cannot be completed', () => {
    expect(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))
      .toEqual(['Green Garden']);
  });

  test('returns empty array when all orders can be completed', () => {
    expect(remainingOrders(10, ['Tropical Island', 'Energizer']))
      .toEqual([]);
  });
});