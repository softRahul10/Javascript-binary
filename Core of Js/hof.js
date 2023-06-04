// Higher Order functions
function letUserLogin(user) {
      let isUser = true;
      // Logic
      if(isUser) {
            return "Access Granted to " + user;
      } else {
            return "Access Dined!";
      }
}

function letAdminLogin(user) {
      let isUser = true;
      // Logic
      if(isUser) {
            return "Access Granted to " + user;
      } else {
            return "Access Dined!";
      }
}




// Function with parameter
function letUserLogin(user) {
      let isUser = true;
      // Logic
      if(isUser) {
            return "Access Granted to " + user;
      } else {
            return "Access Dined!";
      }
}

// console.log(letUserLogin("Adam"));
// console.log(letUserLogin("Eva"));
// console.log(letUserLogin("Rahul"));




//This is just a normal function
/* 
      * Here, we are violating DRY principal.
*/
function letAdamLogin() {
  // Employee authentication Code/ Logic
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }

  return "Access Granted to Adam";
}

function letEvaLogin() {
  // Employee authentication Code/ Logic
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }

  return "Access Granted to Eva";
}

// letAdamLogin();
// letEvaLogin();
