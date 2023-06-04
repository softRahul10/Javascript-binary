/* Factory Functions and Module Pattern in Javascript */
/* Object constructor */

function Book(name, author, pages, price) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.price = price;
}

const b1 = new Book("Book One", "Someone", 1200, 100);
// console.log(b1);

/* factory function */

const bookObject = (name, author, pages, price) => {
  return { name, author, pages, price };
};

const b2 = bookObject("Book Two", "Me and My Brother", 1000, 0);
// console.log(b2);

/* Object Shorthand version */

// const name = 'rahul';
// const age = 22;
// const gender = 'male';

// console.log(name,age,gender);
// console.log({name,age,gender});

/* Why constructor function is bed in javascript */

// 1 . There is no way to inherit object to object till es5

const obj = { property: "property" };
function C() {}
C.prototype = obj;
const obj2 = new C();

// 2. constructor calling without new keyword

function C() {
  this.data = "DataOne";
  this.data2 = "DataTwo";
}

// calling constructor without new : Pollute Global Scope
const objectBro = C();

// Factory function pattern
function person(name, age) {
  return {
    name,
    age,
  };
}

// const p1 = person('Virat Kohli',30);
// console.log(p1);

//Scope
// let number = 1000;
// function fn(){
//       let number = 1;
//       console.log(number);
// }
// fn();
// console.log('hi');
// console.log(number);
// console.log('bye');

function Main() {
  let myLetter = "Z";
  function printLetter() {
    console.log(myLetter);
  }

  printLetter();
}

// Main();

// Scope chine
const MY_GOAL = "Software Engineer @ Google";

const functionOne = function () {
  console.log(MY_GOAL);

  // another function
  const functionTwo = function () {
    console.log("Inside function two : " + MY_GOAL);

    // another function
    const functionThree = function () {
      console.log("inside function three : " + MY_GOAL);
    };

    functionThree();
  };

  functionTwo();
};

// functionOne();

/* *--------* *--------*    ||     24May, 2022    ||      *--------* *--------*   */

/* Factory function with Inheritance */

const userMethods = {
  sayHi() {
    return `Hi, ${this.name}. Have a Nice Day`;
  },

  callUser() {
    return `I am calling : ${this.name} (${this.contactNumber})`;
  },
};

function user(name, age, gender, contactNumber) {
  return Object.create(userMethods, {
    name: { value: name },
    age: { value: age },
    gender: { value: gender },
    contactNumber: { value: contactNumber },
  });
}

// Object creation
const userOne = user("Sonia Singh", 100, "Female", "9340833427");
const userTwo = user("Rahul Kumar Keshri", 21, "Male", "9993246483");

// console.log(userOne);
// console.log(userTwo);

/* ------------ this keyword in Javascript ------------ */
// console.log(this);
// if (true) {
//   console.log(this);
// }

/* Outside function this always refer - window global object */

// normal function
  function fnOne(){
  console.group('Normal Function');
    console.log(this);
  console.groupEnd()  
  }

  // fnOne();

// Arrow function
const fnTwo = ()=>{
  console.group("Arrow function");
  console.log(this);
 console.groupEnd()
}

// fnTwo();
//  function Expression
const fnThree = function(){
console.group("Function Expression");
  console.log(this);
console.groupEnd();  
}
// fnThree();

// Object 
const myObj = {
    value:'value',
    method(){
      return this;
    }

}

// console.log(myObj.method());



/* ------------ Arrow function in Javascript ------------ */

const me = {

  talk(){
    return this;
  },

  talk2:()=>{
    return this;
  }

};

console.log(me.talk());
console.log(me.talk2());


















