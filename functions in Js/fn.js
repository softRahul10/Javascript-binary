// normal function call
function one() {
  return 1;
}

console.log(one());

//  method call
const obj = {
  property: "value",
  two() {
    return 2;
  },
};

console.log(obj.two());

// indirect call
function three() {
  return 3;
}

console.log(three.call());

// constructor call
const four = new Function("a", "b", " return a + b");
console.dir(four.toString());
