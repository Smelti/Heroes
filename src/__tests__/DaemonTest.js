import Daemon from "../class/Daemon";
const hero = new Daemon('Lesly')
test('check attack & defence', () => {
    expect(hero.attack).toBe(10)
    expect(hero.defence).toBe(40)
})
test('level up', () => {
    hero.levelUp()
    expect(hero.level).toBe(2)
    expect(hero.attack).toBe(12)
    expect(hero.defence).toBe(48)
    expect(hero.health).toBe(100)
})
test('damage', () => {
    hero.damage(20)
    expect(hero.health).toBe(89.6)
})