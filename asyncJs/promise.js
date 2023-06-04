// console.log("First line of file");

// const fetchMoneyFromBank = new Promise((resolve, reject) => {
//   resolve("Success! 100 Crores Rupees Fetched from Bank");
// });

// fetchMoneyFromBank.then((money) => {
//   console.log("Second line of file");
//   console.log(money);
// });

// console.log("Third line of file");
// console.log("Fourth line of file");

console.time();
// chain of promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 5000);
});

promise
  .then((num) => {
    console.log(num);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num * 10);
      }, 2000);
    });
  })
  .then((num) => {
    console.log(num);
  });

console.timeEnd();
// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, ms);
//   });
// }

// delay(4000).then((result) => {
//   console.log(result);
// });
