const BubbleSort = require('./bubbleSort');
const { default: TestRunner } = require('jest-runner');  


test("Bubble Sort :: Case1[Array is Empty] ",()=>{
      expect(BubbleSort([])).toStrictEqual([]);
})

test("Bubble Sort :: Case2[Array has only one element] ",()=>{
      expect(BubbleSort([1])).toStrictEqual([1]);
})

test("Bubble Sort ::  ",()=>{
      expect(BubbleSort([0,0,0,0])).toStrictEqual([0,0,0,0]);
})


test("Bubble Sort ::  ",()=>{
      expect(BubbleSort([4,3,2,1])).toStrictEqual([1,2,3,4]);
})
