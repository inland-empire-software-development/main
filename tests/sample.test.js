const sum = require('../src/utils/sample');

// sample test suite
describe("sample tests", () => {
  // sample test
  test('sum should add all numbers', () => {
    // expected result
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  // sample test
  test('sum should only add numbers', () => {
    // expected result
    expect(sum(1, 2, 3, 'g')).toBe(6);
  });
});
