function scramble(str1, str2) {
  let stringOne = str1;
  let stringTwo = str2;
  let matchingLetters = [];
  for (let i = 0; i < stringOne.length; i++) {
    if (stringTwo.includes(stringOne[i])) {
      matchingLetters.push(stringOne[i]);
    }
  }
  let numberToCompare = matchingLetters.length;
  for (let i = 0; i < matchingLetters.length; i++) {
    if (matchingLetters.includes(matchingLetters[i])) {
      numberToCompare -= 0.5;
    }
  }
  if (Math.floor(numberToCompare) >= str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
