function titleCase(title, minorWords) {
  const wordsArray = title.toLowerCase().split(' ');
  let firstLetters = [];
  let formattedWords = '';
  let minorWordsArray = [];
  if (minorWords) {
    minorWordsArray = minorWords.toLowerCase().split(' ');
  }
  for (let i = 0; i < wordsArray.length; i++) {
    if (title.length > 0 && title !== '') {
      wordsArray[i] = wordsArray[i].toLowerCase();
      firstLetters[i] = wordsArray[i][0].toUpperCase();
      if (wordsArray.length > 0) {
        console.log(wordsArray[i]);
        console.log(minorWordsArray);
        if (i > 0 && minorWordsArray.includes(wordsArray[i])) {
          formattedWords += wordsArray[i] + ' ';
        } else {
          formattedWords += firstLetters[i] + wordsArray[i].slice(1, 20) + ' ';
        }
      } else {
        formattedWords += firstLetters[i] + wordsArray[i].slice(1, 20) + ' ';
      }
    }
  }
  return formattedWords === '' ? formattedWords : formattedWords.trim();
}

// console.log(titleCase(''), '');
// console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
console.log(
  titleCase('THE WIND IN THE WILLOWS', 'The In'),
  'The Wind in the Willows'
);
// console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox');
