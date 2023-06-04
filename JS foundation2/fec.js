// We have three ways for creating functions in JS
// 1. Function Declaration
// function fnOne() {
//       // Some Logic
// }

// // 2. Function Expression
// const fnTwo = function() {
//       // Some Logic
// };

// // 3. Arrow Function
// const fnThree = () =>{
//       // Some Logic
// };

function printSomething() {
 console.dir(arguments);
 console.log(arguments);
}

printSomething("para1","para2","para3");
