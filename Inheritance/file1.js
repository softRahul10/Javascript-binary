/* Inheritance In Js */
class Character{
      constructor(name,weapon) {
            this.name = name;
            this.weapon = weapon;
      }

      attack() {
            return `attack with ${this.weapon}`;
      }

      //...
}

class Elf extends Character {
      constructor(name,weapon,type) {
            super(name,weapon);
            this.type = type;
      }
}

class Ogre extends Character{
      constructor(name,weapon,color) {
            super(name,weapon);
            this.color = color;
      }
      makeFort() {
            return 'Fort';
      }
}

const fiona = new Elf('fiona','ninja stars','house');
const o = new Ogre('Ogre','stone','red');

// clone using ...
const ogre = {...fiona};
