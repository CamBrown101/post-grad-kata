// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//   moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]

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
