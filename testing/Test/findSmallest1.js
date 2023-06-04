const { default: TestRunner } = require('jest-runner');  
const findSmallest = require('./findSmallest');

test("Find Smallest Number in an Array ", ()=>{
      expect(findSmallest([1,2,3,4])).toBe(0);
})