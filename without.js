const words = ["hello", "world", "lighthouse"];

// Function to check if two arrays are equal
const eqArrays = function(array1, array2) {
  // Check if arrays have the same length
  if (array1.length !== array2.length) {
    return false;
  }

  // Iterate over each element and compare
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // All elements match, arrays are equal
  return true;
};

// Function to assert if two arrays are equal
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Arrays are equal!");
  } else {
    console.log("Arrays aren't equal.");
  }
};

// Function to remove items from source array
const without = function(source, itemsToRemove) {
  const result = [];

  // Iterate over each item in the source array
  for (const item of source) {
    // Check if item is not in the itemsToRemove array
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

// test assertions 
console.log(without(words, ["lighthouse"]));
console.log(words);
