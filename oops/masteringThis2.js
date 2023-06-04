/* ! Method invocation */
// 1. Method invocation
const obj = {
      fn:function() {
            console.log(this);
      }
}

const fn = obj.fn;
obj.fn(); // method invocation
fn(); // function calls