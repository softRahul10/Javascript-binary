/* 
      * Functional Programming Concepts
      *1. Idempotence
*/

function notGood() {
      return Math.random();
}

//console.log(notGood());


/* 
      * Functional Programming Concepts
      *2. Immutability
*/
const obj = {name:'NM'};
function clone(obj) {
      return {...obj};
}

const obj2 = clone(obj);
obj.name = "RAGA";
obj2.name = "Modi";
// console.log(obj , obj2);




/* 
      * Functional Programming Concepts
      *2.Higher Order function and Closure
*/

// * HOF
const fn = function() {
      return function() {
            return 'something';
      }
}

// !or

const fn2 = function(fn) {
      fn();
}

fn2(function() {
      console.log('Number One!');
})






function a(num1,num2) {
      return num1 + num2;
}

function b(num) {
      return num * num;
}

let result = b(a(4,6));
