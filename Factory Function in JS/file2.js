/* Function Constructor and Factory Function */
function User(name,age){
this.name = name;
this.age = age;
}

User.prototype.getName = function(){
      return this.name;
}
User.prototype.getAge = function(){
      return this.age;
}

const u = new User('Narendra Modi',70);
// console.log(u);





function user(name,age){

      const object = Object.create(userMethods);
      object.name = name;
      object.age = age;
      

      return object;

}

userMethods = {
     getName:function(){
            return this.name;
      },
      getAge: function(){
            return this.age;
      }
};

const u1 = user('RK',22);
// console.log(u1);

/* interview question - closure */
function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
    console.log(count);
  }
  

  function log() {
    console.log(`Count is ${count}`);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();