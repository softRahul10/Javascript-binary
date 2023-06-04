
// Hoisting
console.log("Variable Hoisting " + langName); // Vars - partially hoisted
printJS(); // Functions are fully hoisted

var langName = "Java";
function printJS() {
      console.log('JS');
}
// What is happing here : I think this -> () is creating new ec for script 
(function printJSSecond() {
      console.log('JS second!');
})