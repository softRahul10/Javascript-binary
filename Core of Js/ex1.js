// Exercise 1
function callMeMaybe() {
      setTimeout(function() {
            console.log(callMe);
      },4000);
      const callMe = 'Hi! I am now here!';
}

callMeMaybe();