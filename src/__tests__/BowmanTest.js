import Bowman from "../class/Bowman"
const hero = new Bowman('Adam')
test('check attack & defence', () => {
    expect(hero.attack).toBe(25)
    expect(hero.defence).toBe(25)
})
test('level up', () => {
    hero.levelUp()
    expect(hero.level).toBe(2)
    expect(hero.attack).toBe(30)
    expect(hero.defence).toBe(30)
    expect(hero.health).toBe(100)
})
test('damage', () => {
    hero.damage(20)
    expect(hero.health).toBe(86)
})