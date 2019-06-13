/*
Complete the following program to add the dog object definition.

// TODO: create the dog object here

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
*/

let dog = {
  name: "Bono",
  species: "street dog",
  size: "80",
  bark() {
    return "guauuu,guauuu!!";
  }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look,a cat! ${dog.name} barks: ${dog.bark()}`);
