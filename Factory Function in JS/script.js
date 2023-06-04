/* Factory function and Module Pattern in Java Script */

function createBook(name, author, pages, isRead) {
  return {
    name,
    author,
    pages,
    isRead,
  };
}

const bookOne = createBook("BookOne", "Rahul", 299, true);
// console.log(bookOne);

/* Concept of Closure */
function x() {
  var a = 6;
  function y() {
    console.log(a);
  }

  return y;
}

const y = x();

function one() {
  let numberOne = 100;
  function two() {
    let numberTwo = 1000;
    function three() {
      console.log(numberOne);
      console.log(numberTwo);
    }

    return three;
  }

  return two();
}

const advanceClosure = one();

/* Closures interview questions */

function printOneToFive() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

// printOneToFive();

/* Scope and Closures in Java Script */
// Scope = key concept in javascript
/* 
 1. Global Scope
 1. Local Scope
 3. Functional Scope
 4. Lexical Scope
 */

/* Global scope */
var globalVar = 1;
// console.log(globalVar);

/* Local scope || functional scope */
function localScoped() {
  var localVar = 2;
  console.log(localVar);
  console.log(globalVar);
}

// localScoped();

/* Lexical scope */
function a() {
  let userName = "RK";
  function b() {
    console.log(userName);
  }
  b();
}

// a();

/* Closures in Java sCript */
function a1(name, age) {
  return function b1() {
    console.log(`Hi, ${name}. You are ${age} years old!`);
  };
}
// a1('Rahul Keshri',22)();

/* this in javascript */
// console.group('Understanding this in Javascript');

// console.log(this);
// IIFE
(function dummy() {
  console.log(this);
});

const obj = {
  age: 22,
  getAge() {
    console.log(this);
  },
};
// obj.getAge();

const title = document.querySelector("h1");
function clickHandler() {
  console.log(this);
}

// title.addEventListener('click',clickHandler);
// title.addEventListener('click',()=>{
//       console.log(this);
// });

// console.groupEnd();

function printName() {
  console.log(`Hi, ${this.firstName} ${this.lastName} `);
}

const objectOne = {
  firstName: "Rahul",
  lastName: "Keshri",
  printFullName: printName,
};

const objectTwo = {
  firstName: "Virat",
  lastName: "Singh",
  printFullName: printName,
};

// objectOne.printFullName();
// objectTwo.printFullName();

/* 

  ! Public and Private scope in Javascript

 */
// console.group("Private and Public Scope");

//  private scope
(function aa() {
  function printOne() {
    console.log(1);
  }
  printOne();
});

// console.groupEnd();

/* 

 ! Module Pattern in Javascript

  */

// define module
var Module = (function () {
  const obj = {};
  let _privatefn = function () {
    console.log("private Method!");
  };

  obj.publicMethodOne = function () {
    console.log("myMethod has been called.");
  };

  obj.publicMethodTwo = function () {
    console.log("my Method 2 has been called!");
  };

  return obj;
})();

// call module + methods
// console.log(Module);



function factoryFunction(string){
  const capitalizeString = ()=>{
   return string.toUpperCase();
  };

  const printString = ()=>{
    console.log(`--------  ${capitalizeString()} --------`);
  };

  return {
    printString
  }
}

const text = factoryFunction('some text is here');
// console.log(text);
// text.printString();


/* example */

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName};
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);

console.log(jimmie);
console.log(badGuy);

