const b = {
  name: "jay",
  say() {
    console.log(this);
  },
};

console.log('1');
b.say(); // b

const c = {
  name: "jay",
  say() {
    return function () {
      console.log(this);
    };
  },
};

console.log('2');
c.say()(); // window

const d = {
  name: "jay",
  say() {
    return () => {
      console.log(this);
    };
  },
};

console.log('3');
d.say()(); // window