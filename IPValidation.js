const isValidIP = (str) => {
  const numbers = str.split('.');
  if (numbers.length === 4) {
    for (let n of numbers) {
      if (isNaN(n)) {
        return false;
      } else if (n > 255) {
        return false;
      }
    }
  }
  return true;
};
