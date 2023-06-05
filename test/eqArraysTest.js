const assertEqual = require('../assertEqual'); 
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {
  it("returns true for arrays with same elements in the same order", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.isTrue(eqArrays(array1, array2));
  });

});