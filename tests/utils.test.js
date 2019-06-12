const sum = require('../src/utils/sum');

test('adds all numbers', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});
