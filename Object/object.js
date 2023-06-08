// creating an object is pretty easy
const user = {
      name:'Rahul Kumar Keshri',
      age:25,
};

// adding properties
user.gender = 'male';

user.income = null;

// deleting properties

delete user.income;

// checking properties
// if we try to access a non-existing property then we will get undefined

for(let prop in user) {
      console.log(prop, user[prop]);
}

console.log(user);

/* Exercise one */
const isObjectEmpty = obj => {
      for(let key in obj) {
            return false;
            
      }
      return true;
};

const dummyObj = {};
const dummyObj2 = {
      id:1,
};

// console.log(isObjectEmpty(dummyObj)); // true
// console.log(isObjectEmpty(dummyObj2)); // false


/* Exercise 2 */
const multiplyNumericValueByTwo = obj => {
      for(let key in obj) {
            if(typeof obj[key] === 'number') {
                  obj[key] *= 2;
            }
      }
}

const box = {
      height:100,
      width:350,
      type:'div',
}

//console.log(box);
//multiplyNumericValueByTwo(box);
// console.log(box);
