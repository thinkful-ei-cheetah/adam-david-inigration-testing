'use strict';
const diff = require('../arrayDiff');
const chai = require('chai');

const expect =chai.expect;
// describe('Divide function', () => {
//   it('should divide positive integers correctly', () => {
//     // const a = 8,
//     //   b = 4,
//     //   expectedAnswer = 2;
    
//     // const actualAnswer = divide(a,b);
//     // expect(actualAnswer).to.equal(expectedAnswer);
//     expect(divide(8,4)).to.equal(2);
//   });

//   it('should throw an error when divide by zero', () => {
//     // const a = 8,
//     //   b=0;

//     // const fn = () => {divide(a, b)}
//     // expect(fn).to.throw();
//     expect(() => {divide(8,0)}).to.throw();
//   });
// });


// describe('Sort function', () => {
//   it('should rearrange numbers in ascending order', () => {
//     const arr1 = [69,420,28,1,1000];
//     const arr2 = [1,28,69,420,1000];
//     expect(sort(arr1)).to.deep.equal(arr2);
//   });
// });

describe('Array diff', () => {
  it('should return a if no common elements', () => {
    expect(diff([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3]);
  });

  it('should return [] if same', () => {
    expect(diff([1, 2, 3], [1, 2, 3])).to.deep.equal([]);
  });

  it('should return correctly if some elements are removed', () => {
    expect(diff([1, 2, 3], [2])).to.eql([1, 3]);
  });
});