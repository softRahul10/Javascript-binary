// Constructor function
function Player(name,weapon) {
      this.name = name;
      this.weapon = weapon;
}

Player.prototype.attack = function() {
      console.log(`Attack with ${this.weapon}`);
}

const p1 = new Player('Peter','Stones');
const p2 = new Player('Bob','Fire');



// Object.create()
const commonFunctionsForPlayer = {
       attach() {
                  return 'Attach with ' + this.weapon;
            }
}

// OOPs 2- Factory function
function createPlayer(name,weapon) {
     const player = Object.create(commonFunctionsForPlayer);
     player.name = name;
     player.weapon = weapon;
     return player;
}

// const p1 = createPlayer('Peter','stones');
// const p2 = createPlayer('Son','Fire');




// OOPs 1- Encapsulation
const elf = {
      name:'Orwell',
      weapon:'bow',
      attach() {
            return `Attach with ${this.weapon}`;
      }
}

const elf2 = {
      name:'something else',
      weapon:'gun',
      attach() {
            return `Attach with ${this.weapon}`;
      }
}

// elf.attach();
// elf2.attach();