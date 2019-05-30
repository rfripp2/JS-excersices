let musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Argagnan");

musketeers.forEach(element => console.log(element));

musketeers.splice(2, 1);

for (let item of musketeers) {
  console.log(item);
}
