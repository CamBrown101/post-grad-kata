function last(x) {
  arrayOfWords = x.split(' ');
  arrayOfletters = [];
  arrayOfWords.forEach((word, i) => {
    arrayOfletters.push(word[word.length - 1]);
  });
  sorted = arrayOfletters.sort();

  const ans = [];
  for (letter of sorted) {
    for (word of arrayOfWords) {
      if (letter === word[word.length - 1]) {
        ans.push(word);
      }
    }
  }
  return ans;
}

console.log(last('man i need a taxi up to ubud'));
