//IIFE pattern

var uiElements = (function(globalUI) {
      const uiDoc = document.documentElement;
      const uiHead = uiDoc.firstChild;
      const uiBody = uiDoc.lastChild;
      return {uiPage:globalUI,uiDoc,uiBody,uiHead};
})(window);

console.log(uiElements);