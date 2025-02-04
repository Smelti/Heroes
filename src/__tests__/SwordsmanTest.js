import Swordsman from "../class/Swordsman";

const hero = new Swordsman('Timmy')
test('check attack & defence', () => {
    expect(hero.attack).toBe(40)
    expect(hero.defence).toBe(10)
})
test('level up', () => {
    hero.levelUp()
    expect(hero.level).toBe(2)
    expect(hero.attack).toBe(48)
    expect(hero.defence).toBe(12)
    expect(hero.health).toBe(100)
})
test('damage', () => {
    hero.damage(20)
    expect(hero.health).toBe(82.4)
})