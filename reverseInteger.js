const reverse = (x) => {
  let returnNumber = '';
  numberString = x.toString();
  if (numberString[0] === '-') {
    returnNumber += '-';
  }
  for (let i = numberString.length - 1; i >= 0; i--) {
    if (numberString[i] !== '-') {
      returnNumber += numberString[i];
    }
  }
  return returnNumber;
};

console.log(reverse(-123));
