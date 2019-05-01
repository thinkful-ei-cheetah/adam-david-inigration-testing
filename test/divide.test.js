'use strict';
const divide = require('../index');
const chai = require('chai');

const expect =chai.expect;
describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    // const a = 8,
    //   b = 4,
    //   expectedAnswer = 2;
    
    // const actualAnswer = divide(a,b);
    // expect(actualAnswer).to.equal(expectedAnswer);
    expect(divide(8,4)).to.equal(2);
  });

  it('should throw an error when divide by zero', () => {
    // const a = 8,
    //   b=0;

    // const fn = () => {divide(a, b)}
    // expect(fn).to.throw();
    expect(() => {divide(8,0)}).to.throw();
  });
});

