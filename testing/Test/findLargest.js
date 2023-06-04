/* 
      ^ Find index of Largest element in an Array
*/

function findLargest(arr) {
      let result = 0;
      for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[result]) {
                  result = i;
            }
      }

      return result;
}

module.exports = findLargest;

