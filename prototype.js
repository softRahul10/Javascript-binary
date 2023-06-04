// object constructor
class User {
      constructor(name, age) {
            this.name = name;
            this.age = age;
      }

      getName(){
            console.log(this.name);
      }

      getAge(){
            console.log(this.age);
      }
}

const u1 = new User('Rahul Keshri',22);
console.dir(u1);