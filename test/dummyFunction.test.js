/* This illustrates how you all should set up the unit tests for your js-files which have explicitly testable functionality */

const dummyFunction = require('../components/dummyFunction') // Import the dummy function

test('Add 1 + 2 to equal 3', () => {
  expect(dummyFunction(1, 2)).toBe(3)
}) // This is the equivalent to an assert statement in python, the () => {} is an ad hoc function definition similar to lambda

// Could also do it without the implicit function definition
function testDummy() {
  return expect(dummyFunction(1, 2)).toBe(3) // This is a promise object which needs to be returned
}

test('Add 1 + 2 to equal 3 the long way', testDummy)
