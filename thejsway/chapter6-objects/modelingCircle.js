/*
Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
*/
const r = Number(prompt("Enter the circle radius:"));
let circle = {
  radius: r,
  diameter: r * 2,
  circumference() {
    return Math.PI * this.diameter;
  },
  area() {
    return Math.PI * Math.pow(r, 2);
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
