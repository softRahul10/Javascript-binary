'use strict';

class Student{
  constructor(name,rollNo){
    this.name = name;
    this.rollNo = rollNo;
  }

  /* getter methods */
  get name(){
    return this.name;
  }

  get rollNo(){
    return this.rollNo;
  }

  /* setter methods */

  // set newName(value){
  //   this.name = value;
  // }

  // set newRollNo(value){
  //   this.rollNo = value;
  // }

}































class Kitab{

constructor(name,author){

  this.name = name;
  this.author = author;

}

getName(){
  return `Name is : ${this.name}`;
}

getAuthor(){

  return `${this.name} Author is : ${this.author}`;

}

}

const bOne = new Kitab('One Day a Hour','Lady');

console.log(bOne);




























/* Constructor function */
function User(username,age){
  this.username = username;
  this.age = age;
}


/* prototype */
User.prototype.getName = function(){
  return this.username;
}
User.prototype.getAge = function(){
  return this.age;
}
User.prototype.setName = function(newName){
  this.username = newName;
}
User.prototype.setAge = function(newAge){
  this.age = newAge;
}

/* classes  */
class User2{

  constructor(username,age){
    this.username = username;
    this.age = age;
  }

  /* static methods */

  static fnOne(){
    console.log('hi,');
  }
  static fnTwo(){
    console.log('bye');
  }



  getName(){
    return this.username;
  }

  getAge(){
    return this.age;
  }

  setName(newName){
    this.username = newName;
  }

  setAge(newAge){
    this.age = newAge;
  }


}































/* Object  Constructor way  */
function Book(name, author, price, pages) {
  this.name = name;
  this.author = author;
  this.price = price;
  this.pages = pages;
}

Book.prototype.getNameOfBook = function () {
  return `Book Title : ${this.name}`;
};
Book.prototype.getAuthorName = function () {
  return `Author : ${this.author}`;
};
Book.prototype.getPages = function () {
  return `No. of Pages  : ${this.pages}`;
};
Book.prototype.getPrice = function () {
  return ` Price : ${this.price} $`;
};

const bookOne = new Book("Book one", "Someone", 14.99, 122);
// console.log(bookOne);

/* ES6 Class syntax */

class BookNew {
  constructor(name, author, price, pages) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.pages = pages;
  }
  // prototype methods
  getNameOfBook() {
  return `Book Title : ${this.name}`;
}

getAuthorName() {
  return `Author : ${this.author}`;
}

getPages() {
  return `No. of Pages  : ${this.pages}`;
}

getPrice() {
  return ` Price : ${this.price} $`;
}

}


const bookTwo = new BookNew('BookTwo','Me',999,1200);
// console.log(bookTwo);