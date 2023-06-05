const middle = require('../middle');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual'); 

describe("#middle", () => {
  it("returns a single middle number for an input array with odd length", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(inputArray), expectedOutput);
  });
});
//const numbers = [1, 2, 3, 4, 5, 6];
//const numbers1 = [1, 2, 4, 5 , 6, 9];
//const middleNumbers = middle(numbers);
//assertArraysEqual(middleNumbers,[3,4])  