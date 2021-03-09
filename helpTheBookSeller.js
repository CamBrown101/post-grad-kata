function stockList(listOfArt, listOfCat) {
  let res = {};
  for (codes of listOfArt) {
    let firstLetter = codes[0];
    if (listOfCat.includes(firstLetter)) {
      res[firstLetter] += codes.split(' ')[1];
    }
    // console.log(res);
  }
}

b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
c = ['A', 'B'];
res = '(A : 200) - (B : 1140)';
console.log((stockList(b, c), res));

// b = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
// c = ['A', 'B', 'C', 'W'];
// res = '(A : 0) - (B : 114) - (C : 70) - (W : 0)';
// console.log((stockList(b, c), res));
