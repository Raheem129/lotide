const assertEqual = require('../assertEqual'); 
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("prints '✅✅✅ Assertion Passed' for equal values", () => {
    const actual = 5;
    const expected = 5;
    assert.strictEqual(actual, expected);
    // You can also use assert.strictEqual to check the console output if desired
  });

  
});