const head   = require('./head');
const tail   = require('./tail');
const eqArrays = require('./eqArrays');
const middle = require('./middle');
const assertEqual = require('./assertEqual'); 
const  assertArraysEqual = require('./assertArraysEqual'); 


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual, 
  eqArrays: eqArrays, 
  assertEqual: assertEqual
};