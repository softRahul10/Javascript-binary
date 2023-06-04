console.log("Start of Script");
function register(cb) {
  setTimeout(() => {
    console.log("Registration complete");
    cb();
  }, 5000);
}
function sendMail(cb) {
  setTimeout(() => {
    console.log("Mail sent successfully");
    cb();
  }, 1000);
}
function login(cb) {
  setTimeout(() => {
    console.log("Login successfully");
    cb();
  }, 1000);
}
function getData(cb) {
  setTimeout(() => {
    console.log("Got Data");
    cb();
  }, 1000);
}
function displayData() {
  setTimeout(() => {
    console.log("Display Data complete");
  }, 1000);
}

register(function () {
  sendMail(function () {
    login(function () {
      getData(function () {
        displayData();
      });
    });
  });
});

console.log("End of Script");
