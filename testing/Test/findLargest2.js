const { default: TestRunner } = require('jest-runner');  
const findLargest = require('./findLargest');



test("Find Biggest Number in an Array (if array has only one element) ", ()=>{
      expect(findLargest([1])).toBe(1);
})

test("Find Biggest Number in an Array (if array is empty) ", ()=>{
      expect(findLargest([])).toBe(-1);
})

test("Find Biggest Number in an Array ", ()=>{
      expect(findLargest([1,2,3,4])).toBe(4);
})

test("Find Biggest Number in an Array ", ()=>{
      expect(findLargest([4,3,2,1])).toBe(3);
})