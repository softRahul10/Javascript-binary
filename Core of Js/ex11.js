let view;
function initialize() {
      let called = 0;
      return function() {
            if(called > 0) return;
            else{
                  view = '🗻';
                  console.log('View Set!'); 
                  called++;
            }
      }
}

const setView = initialize();
setView();
setView();
