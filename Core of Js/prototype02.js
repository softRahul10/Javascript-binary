let dragon = {
      name:'Tanya',
      fire:true,
      fight() {
            return 5;
      },
      sing() {
            return `I am ${this.name} Dragon!`;
      }
}

let lizard = {
      name:'KiKi',
      fight() {
            return 1;
      }
}


// Using Prototypal Inheritance here
lizard.__proto__ = dragon;

// for in 
console.group('All Properties of Object');
for(let prop in lizard) {
      console.log(prop);
}
console.groupEnd()


console.group('Only object Properties');
for(let prop in lizard) {
      if(lizard.hasOwnProperty(prop)) {
            console.log(prop);
      }
}
console.groupEnd()

