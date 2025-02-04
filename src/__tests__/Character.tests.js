import Character from '../configCharacter/CharacterClass';

const heroes = [
        {name: 'Adam', type: 'Bowman'},
        {name: 'Lesly', type:'Daemon'},
        {name: 'Kate', type: 'Magician'},
        {name: 'Timmy', type: 'Swordsman'},
        {name: 'Anna', type: 'Undead'},
        {name: 'JoJo', type: 'Zombie'}
];

const typeCharacter = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

describe ('Character', () => {
    test.each(heroes)('creating character: %o', ({name,type}) => {
        const hero = new Character(name,type)
        expect(hero.name).toBe(name);
        expect(hero.type).toBe(type);
        expect(hero.health).toBe(100);
        expect(hero.level).toBe(1);
    });
});

test('error Name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов.')
});

test('error type', () => {
    expect(() => new Character('Adam', 'Knight')).toThrow(`Такого класса не существует. Выберите один из: ${typeCharacter.join(', ')}`);
});

test('level up for dead character', () => {
    const hero = new Character('Adam', 'Bowman');
    hero.damage(100);
    expect(() => hero.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('damage calculation', () => {
    const hero = new Character('Adam', 'Bowman');
    hero.defence = 25;
    hero.damage(20);
    expect(hero.health).toBe(85);
    hero.damage(200);
    expect(hero.health).toBe(0)
});

