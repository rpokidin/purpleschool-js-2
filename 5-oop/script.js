
const Character = function (race, name, language) {
    this.race = race
    this.name = name
    this.language = language
}

Character.prototype.speak = function () {
	console.log(`Имя: ${this.name}. Язык: ${this.language}`)
}

const ork = new Character('Орк', 'Готмог', 'Кирт')
ork.weapon = 'Рубило';
ork.hitWeapon = function () {
	console.log(`Удар оружием: ${this.weapon}`)
}
ork.speak()
ork.hitWeapon()

const elf = new Character('Эльф', 'Воронвэ', 'Квенья');
elf.spellType = 'Крик';
elf.spellCast = function () {
	console.log(`Заклинания: ${this.spellType}`);
};
elf.speak();
elf.spellCast();