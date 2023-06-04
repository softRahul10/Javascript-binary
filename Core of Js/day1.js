// functions are objects in JS
function myFn() {
      console.log('Hello, Again!');
}


// function constructor
let newFunction = new Function("n1","n2","return n1+n2");

// console.dir(newFunction);
// console.dir(myFn);


// Default parameter in js
function printDay(day="Sunday") {
      console.log(`Happy ${day}`);
}

printDay("Monday");
printDay();
