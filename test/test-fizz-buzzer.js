// assignment:
// write unit tests for the fizzBuzzer function found in fizzBuzzer.js
// testing both normal and edge case inputs
// TIME: spend ~1 hour on this challenge
const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for 'fizzBuzzer'
describe('fizzBuzzer', function() {
  // test normal cases
  it('should match expected string output', function(){
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: 2, expected: 2}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });


  // test edge cases
  it('should raise error for non num inputs', function(){
    const normalCases = [
      {num: "15"},
      {num: "0"},
      {num: null},
      {num: undefined},
      {num: 'number'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.throw(Error, '`input.num` must be a number');
    });
  });
});
