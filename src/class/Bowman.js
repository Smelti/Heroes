import Character from '../configCharacter/CharacterClass.js';

export default class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman')
        this.attack = 25
        this.defence = 25
    }
}