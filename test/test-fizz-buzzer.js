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
    // sollution sets up seperate "it" tests for each expected output, ie one for
    // multiples of 3, 15, etc. That would make debuggin much easier later on,
    // as a nice custom message indicates what behavior isn't functioning

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });


  // test edge cases
  // did not get this function working in under an hour. got:
  // "Error: `num` must be a number" as output, couldn't figure out why
  it('should raise error for non num inputs', function(){
    // critique: normalCases is a bad name for this variable
    const normalCases = [
      {num: "15"},
      {num: "0"},
      {num: null},
      {num: undefined},
      {num: 'number'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      // got the below line from reading API documentation. not working either
      expect(answer).to.throw(Error);
      // answer.should.throw(Error, `${input.num} must be a number`);

      // sollution encapsulates "fizzBuzzer(input.num)" piece in a
      // function and calls .should.throw(Error) on the function
      // https://github.com/Thinkful-Ed/node-intro-to-unit-testing/blob/feature/challenge-solution/test/test-fizz-buzzer.js
    });
  });
});
