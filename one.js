// IIFE
const ui = (function(){
      const head = document.head;
      const body = document.getElementsByTagName('body');
      return {
            head,
            body
      }
})();

console.log(ui);