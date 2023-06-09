const assertArraysEqual = require('./assertArraysEqual'); 

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};


const middle = function (array) {
  if (array.length <= 2) {
    // Array has 2 numbers or less, return an empty array
    return [];
  } else if (array.length % 2 !== 0) {
    // Array length is odd, return a single middle number
    const middleIndex = Math.floor(array.length / 2);
    return [array[middleIndex]];
  } else {
    // Array length is even, return two middle numbers
    const middleIndex = array.length / 2;
    const middleNumber1 = array[middleIndex - 1];
    const middleNumber2 = array[middleIndex];
    return [middleNumber1, middleNumber2];
  }
};


// Output: [3, 4]

module.exports = middle