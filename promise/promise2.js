console.log("Start of Script");

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Registration complete");
    }, 1000);
  });
}
function sendMail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mail sent successfully");
    }, 11000);
  });
}
function login() {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve("Login successfully");
            }, 1000);
      });
}
function getData() {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve("Got Data");
            }, 1000);
      });
}
function displayData() {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve("Data displayed successfully");
            }, 1000);
      });
}


register()
      .then((result) => {
            console.log(result);
            return sendMail();
      })
      .then((result2)=> {
            console.log(result2);
            return login();
      })
      .then((result3) => {
            console.log(result3);
            return getData();
      })
      .then((result4) => {
            console.log(result4);
            return displayData();
      })
      .then((result5)=>{
            console.log(result5);
      })

console.log("End of Script");
