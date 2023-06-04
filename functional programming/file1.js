// * Pure functions in Js
// * Input -----> Output
// * Has no side effects

const arr = [1,2,3]
function removeLast(array) {
      const temp = [].concat(array);
      temp.pop();
      return temp;
}

function multiplyByTen(array) {
      const result = array.map((item,idx,arr)=>{
            item * 10;
      })
      return result;
}

console.log(removeLast(arr));
console.log('Original Array ' ,arr);

console.log(multiplyByTen(arr));
console.log('Original Array ' ,arr);















// function a(array) {
//       array.pop();
// }

// console.dir(arr);
// a(arr);
// console.dir(arr);
