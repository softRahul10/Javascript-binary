// Closure example
function a() {
      let grandpa = 'grandpa';
      return function b() {
            let father = 'father';
            return function c() {
                  let son = 'son';
                  return `${grandpa} > ${father} > ${son}`;
            }
      }
}

// ex2
function boo(string) {
      return function(name) {
            return function(name2) {
                  return `${string}, ${name},${name2}`;
            }
      }
}

const specialFn = boo("Rahul")("Kumar");


// Exercise 
function callMe() {
      const quote = "I can , I will";
      setTimeout(function() {
            console.log(quote);
      },4000);
}

//callMe();

// Benefits of closure
// 1. Memory efficient
function bigFn(i) {
      console.log('Memory Created');
      const arr = new Array(1000).fill('🧡');
      console.log('Memory Destroyed');
      return arr[i];
      
}

// console.log(bigFn(10));
// console.log(bigFn(10));

// using closure here : for Memory saving
function bigFn2() {0
      console.log('Created');
      const arr = new Array(1000).fill('🧡');
      console.log('Destroyed');
      
      return function getData(i) {
            return arr[i]
      }      
}


const getDataFromArray = bigFn2();
// console.log(getDataFromArray(1));
// console.log(getDataFromArray(1));
// console.log(getDataFromArray(1));
// console.log(getDataFromArray(1));



// Encapsulation
const makeNuclearButton = () => {
      let timeWithoutDestruction = 0;
      const passTime = () => timeWithoutDestruction++;
      const totalPeaceTime = () => timeWithoutDestruction;
      const launch = () => {
            timeWithoutDestruction = -1;
            return '🔥';
      };
      setInterval(passTime,1000);

      return {
            launch,
            totalPeaceTime
      };
};
const nuclearBombObject = makeNuclearButton();