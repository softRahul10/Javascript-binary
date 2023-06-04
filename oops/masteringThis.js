// Mastering this in js
// 1. function invocation
//console.log('This inside GEC is equal === window',this === window);
function destroyJs() {
      console.log(this);// global object
}

//destroyJs()
// 1.1 function invocation (strict mode)
function destroyJavascript() {
      'use strict';
      console.log('Strict Mode is on 🤩');
      console.log('This is : ', this);
}
//destroyJavascript();

// 1.2 Inside another function
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log(this === numbers); // => false
      return this.numberA + this.numberB;
    }
    //return calculate();
    // Solution 1: use call()
    return calculate.call(this);
  }
};

// solution 2: use arrow function(they are lexically scoped)
const numbers2 = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers2); // => true
    const calculate = () => {
      console.log(this === numbers2); // => true
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};



//numbers.sum(); // => NaN or throws TypeError in strict mode
numbers2.sum();