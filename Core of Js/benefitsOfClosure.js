// There are two main benefits of Closure
// 1. Memory Efficient
// 2. Encapsulation

// 1. Memory Efficient
// function without closure
function fnOne(i) {
      const arr = new Array(1000).fill(-1);
      console.log('Array Created!');
      console.log('Array Destroyed!');
      return arr[i];
}     

console.log(fnOne(10));
console.log(fnOne(10));
console.log(fnOne(10));
console.log(fnOne(10));


// function with Closure's Superpowers
function fnTwo() {
      const arr = new Array(1000).fill(-1);
      console.log('Array Created! Only Once');
      return function(i) {
            return arr[i];
      }
}

const fnThree = fnTwo();
console.log(fnThree(1));
console.log(fnThree(1));
console.log(fnThree(1));
console.log(fnThree(1));
