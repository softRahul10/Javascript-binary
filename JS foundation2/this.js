// This - is a object of that function is property of.

function x() {
      console.log(this);
}

// Using Strict JS
function x2() {
      'use strict';
      console.log(this);
}

x();
x2();

//Use Case of this
const user = {
      name:"RK",
      age:23,
      intro() {
            console.log(`${this.name} is ${this.age} years old!`);
      },
      job() {
            this.intro();
            console.log("Still UnEmployed! 🤣");
      }
}

user.intro();
user.age = 25;
user.job();