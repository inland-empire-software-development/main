'use strict';

const addThis = (...numbers) =>
  numbers.reduce((n, i) => n + i);

module.exports = addThis;
