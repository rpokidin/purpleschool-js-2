
class Character {

    race
    name
    language

    constructor(race, name, language) {

        this.race = race
        this.name = name
        this.language = language
        
    }

    speak() {
	    console.log(`Имя: ${this.name}. Язык: ${this.language}`)
    }

}

class Ork extends Character {

    weapon

    constructor(race, name, language, weapon) {

        super(race, name, language)
        this.weapon = weapon
        
    }

    speak() {
	    console.log(`Для орка имя: ${this.name}. Язык: ${this.language}`)
    }

    hitWeapon() {
        console.log(`Удар оружием: ${this.weapon}`)
    }

}

const ork = new Ork('Орк', 'Готмог', 'Кирт', 'Рубило')
ork.speak()
ork.hitWeapon()

class Elf extends Character {

    spellType

    constructor(race, name, language, spellType) {

        super(race, name, language)
        this.spellType = spellType
        
    }

    speak() {
	    console.log(`Для ельфа имя: ${this.name}. Язык: ${this.language}`)
    }

    spellCast() {
	    console.log(`Заклинания: ${this.spellType}`)
    }

}

const elf = new Elf('Эльф', 'Воронвэ', 'Квенья', 'Крик')
elf.speak()
elf.spellCast()