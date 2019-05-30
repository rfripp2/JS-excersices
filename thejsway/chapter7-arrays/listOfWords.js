let word = "";
let arr = [];

do {
  word = prompt("write");
  arr.push(word);
} while (word != "stop");

arr.pop();
console.log(arr.join(" "));
