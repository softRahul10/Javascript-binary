function Student() {

}

Student.prototype.printName = function() {
      return `Hello,${this.name}`;
}

Student.prototype.printClass = function() {
      return `Hello,${this.grade}`;
}

function EightGrade(name) {
      this.name = name;
      this.grade = 8;
}




// Player Object
function Player(name,marker) {
      this.name = name;
      this.marker = marker;
      this.sayName = function() {
            return `Hi,${this.name}`;
      }
}

const play1 = new Player('RK','X');
const play2 = new Player('GK','O');