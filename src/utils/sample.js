const addThis = (...numbers) =>
  numbers.reduce((n, i) =>
  typeof n === 'number' && typeof i === 'number' ? n + i : n);

module.exports = addThis;
