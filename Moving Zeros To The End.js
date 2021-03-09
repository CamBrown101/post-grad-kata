const moveZeros = (array) => {
  const finalArray = [];
  const zeros = [];
  array.forEach((element) => {
    if (element === 0) {
      zeros.push(element);
    } else {
      finalArray.push(element);
    }
  });
  ans = [...finalArray, ...zeros];
  return ans;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
