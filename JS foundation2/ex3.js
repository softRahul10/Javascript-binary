debugger;

// Print Function
function print() {
  console.log(`Book Name: ${this.name}`);
  console.log(`Author: ${this.author}`);
}

const bookOne = { name: "The 5AM Club", author: "Robin Sharma" };
const bookTwo = { name: "Think Straight", author: "Darius Foroux" };

const fn1 = print.bind(bookOne);
const fn2 = print.bind(bookTwo);
print(); // undefined*2
fn1(); // bookOne
fn2();

// Solution 1: use arrow function ➡ this keyword inside arrow function works perfectly.
const obj = {
  name: "Billy",
  sing() {
    console.log(this); // obj
    var anotherfunc = () => {
      console.log(this);
    };
    anotherfunc();
  },
};

// Solution 2: Use bind()
const obj2 = {
  name: "Billy",
  sing() {
    console.log(this); // obj
    var anotherfunc = function () {
      console.log(this);
    };
    return anotherfunc.bind(this);
  },
};

// const obj = {
//   name: "Billy",
//   sing() {
//     console.log(this); // obj
//     var anotherfunc = function () {
//       console.log(this);
//     };
//     anotherfunc();
//   },
// };
// obj.sing();

// const a = function() {
//       console.log(this); // window
//       const b = function() {
//             console.log(this); // window
//             const c = {
//                   hi:function() {
//                         console.log(this);
//                   }
//             };
//             c.hi(); //c
//       };
//       b();
// };
// a();
