function stockList(listOfArt, listOfCat) {
  let ans = {};
  for (codes of listOfArt) {
    let firstLetter = codes[0];
    if (listOfCat.includes(firstLetter)) {
      if (!ans.hasOwnProperty(firstLetter)) {
        ans[firstLetter] = parseInt(codes.split(' ')[1]);
      } else {
        ans[firstLetter] += parseInt(codes.split(' ')[1]);
      }
    }
  }

  for (let cat of listOfCat) {
    if (!ans.hasOwnProperty(cat)) {
      ans[cat] = 0;
    }
  }
  const orderedAns = Object.keys(ans)
    .sort()
    .reduce((obj, key) => {
      obj[key] = ans[key];
      return obj;
    }, {});

  //Format answer
  let formattedAns = '';
  for (let key in orderedAns) {
    formattedAns += `(${key} : ${ans[key]}) - `;
  }
  return formattedAns.slice(0, -3);
}

// b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
// c = ['A', 'B'];
// res = '(A : 200) - (B : 1140)';
// console.log(stockList(b, c));

b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
c = ['A', 'B', 'C', 'W'];
res = '(A : 0) - (B : 114) - (C : 70) - (W : 0)';
console.log(stockList(b, c));
