/*
      * Compose
*/
const multiplyBy3 = (n) => n * 3;
const makePositive = (n) => Math.abs(n);
const compose = (f,g) => (data) => f(g(data));

const multiplyBy3AndAbsolute = compose(multiplyBy3,makePositive);
console.log(multiplyBy3AndAbsolute(-10));
console.log(multiplyBy3AndAbsolute(-4));



























/* 
      * Dynamic Programming 
      * Memoization
 */

 function addCentury(n) {
      const CENTURY = 100;
      return n + CENTURY;
 }

function addCenturyMemo() {
      let cache = {};
      return function(n) {
            if(n in cache) {
                  return cache[n];
            }else{
                  cache[n] = n + 100;
                  return cache[n];
            }
      }

}


 //console.log(addCentury(20));
 //console.log(addCentury(20));






























// function curry
const multiply = (a,b) => a*b;
const curryMultiply = (a) => (b) => a*b;
// console.log(multiply(10,2));
// console.log(curryMultiply(10)(5));


// * Partial application
const partialMultiply = multiply.bind(null,10);
// console.log(partialMultiply(12));