const wizard = {
      name:'Merlin',
      health:100,
      heal:function(n1,n2) {
            this.health += n1 + n2;
      }
};

const archer = {
      name:'Robin Hood',
      health:20,
};

console.log('1',archer);
// wizard.heal.call(archer,10,30);
// wizard.heal.apply(archer,[60,30]);
const healArcher = wizard.heal.bind(archer,100,900);
healArcher();

console.log('2',archer);




function coder() {
      console.log('010101');
}

//coder();
//coder.call();  internally all methods called in this way in JS. 