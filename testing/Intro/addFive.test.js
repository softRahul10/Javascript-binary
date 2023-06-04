const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');


test("Is it working Properly? " ,()=>{
      expect(addFive(1)).toBe(6);
})

test("When passing zero as a value ? " ,()=>{
      expect(addFive(0)).toBe(5);
})

test("When passing negative Number as a value ? " ,()=>{
      expect(addFive(-5)).toBe(10);
})