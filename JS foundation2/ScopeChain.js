function a() {
  var a = "a";
  return function b() {
    var b = "b";
    function cFn() {
      var c = "c";
      return "Rahul Keshri, Software Engineer @ Google!";
    }
    console.dir(cFn);
    return cFn;
  };
}
a()()();
