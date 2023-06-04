function multiplyByFive(num) {
      return num*5;
}

// Use Object.create() in place of __proto__
const human = {mortal:true, immortal:false};
const rahul = Object.create(human);
console.log(human.__proto__)
console.log(rahul.__proto__)