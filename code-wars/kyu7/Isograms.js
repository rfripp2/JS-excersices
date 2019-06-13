function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  let filteredArr = [];
  for (let element of arr) {
    if (filteredArr.indexOf(element) == -1) {
      filteredArr.push(element);
    }
  }
  return arr.length == filteredArr.length;
}

isIsogram("juan");

let filteredArr = arr.filter(letter => filteredArr.indexOf(letter === -1));
