var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../calculation')

describe('strictEqual', () => {
  it('return a value of true, if numbers are strictly equal to one another', () => {
    var a = 5
    var b = 5

    let result = strictEqual(a, b)

    expect(result).to.equal(true)
  })

  it('return a value of false, if numbers are not strictly equal to one another.', () => {
    var a = '5'
    var b = 5

    let result = strictEqual(a, b)

    expect(result).to.equal(false)
  })
  it('return a value of true, if the numbers values are not the same to one another', () => {
    var a = 10
    var b = 5
    let result = strictEqual(a, b)

    expect(result).to.equal(false)
  })
  it('return a value of true, if the numbers type are the same to one another.', () => {
    var a = '10'
    var b = '10'
    let result = strictEqual(a, b)

    expect(result).to.equal(true)
  })
})
