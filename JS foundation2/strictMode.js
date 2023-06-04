debugger;
/* 
      Without 'use strict' -> Leakage of Global variables
 */
function logMyBB() {
      myBankBalance = " $1 Billion";
      console.log(myBankBalance);
}
logMyBB();
console.log("Outside function" + myBankBalance);