import Character from '../configCharacter/CharacterClass.js';
export default class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman')
        this.attack = 40
        this.defence = 10
    }
}
