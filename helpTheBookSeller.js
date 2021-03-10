function stockList(listOfArt, listOfCat) {
  if (listOfArt.reduce((a, b) => a + b, 0) === 0) {
    return '';
  }

  let ans = {};
  let formattedAns = '';

  for (let letter of listOfCat) {
    ans[letter] = 0;
  }

  for (codes of listOfArt) {
    let firstLetter = codes[0];
    if (listOfCat.includes(firstLetter)) {
      ans[firstLetter] += parseInt(codes.split(' ')[1]);
    }
  }

  for (let key in ans) {
    formattedAns += `(${key} : ${ans[key]}) - `;
  }

  return formattedAns.slice(0, -3);
}
