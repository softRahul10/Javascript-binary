// prototype in JS
/* Points to remember

1. All JS functions have : Prototype
2. Object created using Object () || Object Literal Syntax have : Object.prototype _/\_


 */




function Book(name,author,pages,price){
      this.name = name;
      this.author = author;
      this.pages = pages;
      this.price = price;
}

Book.prototype.getName = function(){
      return `Book Title : ${this.name}`;
}
Book.prototype.getAuthorName = function(){
      return `Author of Book : ${this.author}`;
}
Book.prototype.getPages = function(){
      return `Book Pages : ${this.pages}`;
}
Book.prototype.getPrice = function(){
      return `Book Price : ${this.price}$`;
}

const bookOne = new Book('Power of Compounding','Dr.David',400,149);
// console.log(bookOne);

//  ES5 Object.create(obj);

const object2 = Object.create(bookOne.__proto__);
// console.log(object2);

/* Prototypal Inheritance ex */
function Plant () {
this.country = "Mexico";
this.isOrganic = true;
}


// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor =  function () {
// console.log("I am a " + this.name + " and my color is " + this.color);
}


// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
if (this.isOrganic)
console.log("I am organic, Baby!");
}

function Fruit (fruitName, fruitColor) {
this.name = fruitName;
this.color = fruitColor;
}

Fruit.prototype.getName= function(){
      return this.name;
}

Fruit.prototype.getColor= function(){
      return this.color;
}

const apple = new Fruit('Apple','Red');
// console.log(apple);

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant ();
const mango = new Fruit('Mango','Yellow');
// console.log(mango);



/* Prototypal Inheritance and Chain in Depth */

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {

      jump:true,
      __proto__: animal,

}

/* exercise 1 */
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__:head,
};

let bed = {
  sheet: 1,
  pillow: 2
  ,
  __proto__:table,
};

let pockets = {
  money: 2000,
  __proto__:bed,
};

// console.log(pockets.sheet);
// console.log(pockets.pillow);
// console.log(pockets.pen);
// console.log(pockets.glasses);
// console.log(table.glasses);


// Object.create();

function Student() {
}
const s1 = new Student();
Student.prototype.sayName = function() {
  console.log(this.name)
}

console.log(s1);

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype);

const s2 = new EighthGrader('a');
console.log(s2);



































// // Prototype Inheritance
// function PrintDocuments(document){
//       this.document = document;
// }
// PrintDocuments.prototype.print = function(){
      // console.log(`Document: ${this.document}`);
// }

// const doc = new PrintDocuments('This is a demo file');
// console.log(doc.document);
// // doc.print();

// function fn(){
//       let text = 'I am a function!';
      // console.log(text);
// }

// // fn();
// console.log(fn.prototype);


// const obj = {
//       property:'This is a property',
//       fn(){
            // console.log('This is a method in object!');
//       }
// }

// // obj.fn();
// console.log(obj.__proto__);
