// ES9 Features
const obj = {
      customer:'Google',
      price:'10 lacs',
      products:'GioPhone, Gio',
      other:'etc....'
};

// Old way
// let customerName = obj.customer;
// let price = obj.price;
// let products = obj.products;
// let other = obj.other;

// New way
let {customer,...all} = obj;
console.log(customer,all);



const btn = document.querySelector("button");
btn.addEventListener("click", showSomething);

//  Callback
function showSomething() {
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date().getDay();
  alert(`It is ${dayArray[d]} Today!`);
}

// Callback Hell

// Promise
const myPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    resolve("JS is a Synchronous Programming Language! 😍");
  } else {
    reject("Server is not working!");
  }
});

const myPromise2 = new Promise((resolve,reject)=>{
      setTimeout(resolve,1000,"Timeout with 1000 milliSeconds");
})

const myPromise3 = new Promise((resolve,reject)=>{
      setTimeout(resolve,2000,"Timeout with 2000 milliSeconds");
})

const myPromise4 = new Promise((resolve,reject)=>{
      setTimeout(resolve,3000,"Timeout with 3000 milliSeconds");
})

Promise.all([myPromise,myPromise2,myPromise3,myPromise4])
      .then(data=>console.log(data));


// myPromise
//   .then((result) => {
//      console.log(result);
//      return result;
//   })
//   .then((result) => {
//     console.log(result + " I love JS 😊");
//     return "Java is big brother of Javascript 🤷‍♂️";
//   })
//   .then((result) => console.log(result))
//   .catch(error => console.log('error'));