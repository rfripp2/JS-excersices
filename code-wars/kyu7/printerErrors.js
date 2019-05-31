function printerError(s) {
  let validColors = "abcdefghijklm";
  let errors = 0;
  for (let i = 0; i < s.length; i++) {
    if (validColors.indexOf(s[i]) == -1) {
      errors++;
    }
  }
  return `${errors}/${s.length}`;
}
printerError("abcdyy");
