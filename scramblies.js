function scramble(str1, str2) {
  let stringOne = str1;
  let stringTwo = str2;
  let matchingLetters = [];
  for (let i = 0; i < stringOne.length; i++) {
    if (stringTwo.includes(stringOne[i])) {
      matchingLetters.push(stringOne[i]);
      stringTwo.slice(stringTwo.indexOf(stringOne[i]), 1);
    }
    console.log(stringTwo);
  }
  if (matchingLetters.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
