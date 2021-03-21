/* eslint-disable eqeqeq */

const strictEqual = (a, b) => {
  return a == b && typeof a == typeof b
}

module.exports = strictEqual
