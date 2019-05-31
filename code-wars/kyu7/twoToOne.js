/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
  arr1 = s1.split("");
  arr2 = s2.split("");
  let twoArrays = arr1.concat(arr2);
  let unrepeated = [...new Set(twoArrays)];
  return unrepeated.sort().join("");
}
