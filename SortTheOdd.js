// You will be given an array of numbers. You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortOddArray = (arr) => {
  const oddNumbers = [];
  const evenNumbers = [];
  const indexOfOdd = [];
  arr.forEach((element, index) => {
    if (element % 2 === 0) {
      evenNumbers.push(element);
    } else {
      oddNumbers.push(element);
      indexOfOdd.push(index);
    }
  });
  oddNumbers.sort(function (a, b) {
    return a - b;
  });
  indexOfOdd.forEach((ele, i) => {
    arr[ele] = oddNumbers[i];
  });
  return arr;
};

console.log(sortOddArray([1, 3, 2, 8, 5, 4, 11]));
