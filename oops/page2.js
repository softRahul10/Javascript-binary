// ES6 class
class People {
      constructor(name, age) {
            this.name = name;
            this.age = age;
      }
      greet() {
            return `Hello,${this.name}`;
      }
      pendingLife() {
            let life = 70 - this.age;
            return `You have enjoyed your ${this.age} years of life. Your Remaining Life is : ${life} years only 😢`;
      }
}

function User(name, age) {
      this.name = name;
      this.age = age;
}

User.prototype.greet = function () {
      return `Hello,${this.name}`;
}

User.prototype.pendingLife = function () {
      // Set this
      const self = this;
      function leftLife() {
            let life = 70 - self.age;
            return `You have enjoyed your ${self.age} years of life. Your Remaining Life is : ${life} years only 😢`;
      }
      return leftLife();
}

const user1 = new User('RK', 25);
const user2 = new User('GK', 20);

console.log(user1.greet())
console.log(user1.pendingLife())
