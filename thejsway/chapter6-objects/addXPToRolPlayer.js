/*
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// TODO: create the character object here

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;
*/

let aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,
  describe() {
    return `${this.name} has ${this.health} health points, ${
      this.strength
    } as strength and ${this.xp} XP points`;
  }
};

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

console.log(aurora.describe());
