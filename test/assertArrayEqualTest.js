const eqArrays = require('../eqArrays'); 
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual'); 

describe("#assertArraysEqual", () => {
  it("prints 'Arrays are equal!' when the arrays are equal", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assertArraysEqual(array1, array2);
    // You can also use assert.strictEqual to check the console output if desired
  });

  // You can add more test cases if needed
});