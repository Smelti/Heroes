import Character from '../configCharacter/CharacterClass.js';
export default class Magician extends Character {
    constructor(name) {
        super(name, 'Magician')
        this.attack = 10
        this.defence = 40
    }
}
