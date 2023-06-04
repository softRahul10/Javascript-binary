// function constructor
const myFn = new Function('num1','num2',' return num1+num2');

// function is a callable Object 😕 in JS
function demo() {
      var a = 'a';
      var b = 'b';
      console.log(a+b);
}

// We can pass and return functions to other functions as a normal object
// Functions are - First class citizen in Js Because
// Functions have these three properties:
// 1. we can assign them to any variable
let myFnValue = function() {
      // some code....
}

myFnValue();

// 2. we can pass a function to another function as argument
// 3. we can also return a function from another function
function printHi() {
      return function hi() {
            console.log('Special Hi, Deva!');
      }
}

function printBye() {
      console.log('Bye Bye, Deva!');
}


function firstPrintHiThenBye(fn,fn2) {
      fn()(); // Hi
      fn2();// Bye
}

firstPrintHiThenBye(printHi,printBye);