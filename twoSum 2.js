const twoSum = (nums, target) => {
  let ans = [];
  nums.forEach((outterNumber, outterIndex) => {
    nums.forEach((innerNumber, innerIndex) => {
      if (innerIndex !== outterIndex && outterNumber + innerNumber === target) {
        ans = [outterIndex, innerIndex];
        return;
      }
    });
  });
  return ans;
};

console.log(twoSum([3, 2, 4], 6));
