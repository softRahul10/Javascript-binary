function sort1(num) {
      for(let i = 0; i < num.length - 1; i++) {
            let isSwapping = false;
            for(let j = 0; j < num.length - 1 - i; j++) {
                  if(num[j] > num[j+1]) {
                        swap(num,j,j+1);
                        isSwapping = true;
                  }
            }
            if(!isSwapping) {
                  break;
            }
      }

      return num;
}

// Swap function for Sorting
const swap = function(arr,i,j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
}

module.exports = sort1;