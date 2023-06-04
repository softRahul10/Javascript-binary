/*
      ^ Find Index of Smallest element in an Array
*/
function findSmallest(arr) {
      let result = 0;
      for(let i = 1; i < arr.length; i++) {
            if(arr[i] < arr[result]) {
                  result = i;
            }
      }
      return result;
}

module.exports = findSmallest;