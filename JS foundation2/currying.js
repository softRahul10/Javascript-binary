// Eating 🍴 JS Curry
function multiply(a, b) {
  return a * b;
}

// 😋 Curry is ready!
const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(2);
multiplyByTwo(8);
