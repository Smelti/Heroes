
export default class Character {
    constructor(name,type) {
        this.name = name
        this.type = type
        this.health = 100;
        this.level = 1
        this.attack = null;
        this.defence = null;
    
        if (name.length < 2 || name.length > 10) {
        throw new Error('Имя должно содержать от 2 до 10 символов.')
        }

        const typeCharacter = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (!typeCharacter.includes(type)) {
            throw new Error(`Такого класса не существует. Выберите один из: ${typeCharacter.join(', ')}`);
        }
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error ('Нельзя повысить уровень умершего персонажа')
        }

        this.level += 1
        this.attack *=1.2
        this.defence *= 1.2
        this.health = 100 
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100)

        if (this.health < 0) {
            this.health = 0
        }
    }
}


