// Only functions have prototype property in JS
function multiplyByFive(num) {
      return num*5;
}

// Exercise 1 (Implement lastYear() method in Date Constructor)
// 1. Extend Date() functionality
// Access Date.prototype
// My Logic === Sir's Logic
Date.prototype.lastYear = function() {
      return this.getFullYear() - 1;
}

// Exercise 2 (Modify map() method of an Array)
// My Logic
Array.prototype.map = function() {
    this.forEach(ele=>{
      console.log(ele + '💷, ')
    })
}

// Sir's Logic
Array.prototype.map = function() {
      const arr = [];
      for(let i = 0; i < this.length; i++) {
            arr.push((this[i] + '🗺'));
      }
      return arr;
}

// Creator your own bind method
