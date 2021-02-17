function fixTheMeerkat(arr) {
  const [head, body, tail] = [...arr];
  return [tail, body, head];
}

console.log(fixTheMeerkat([1, 2, 3]));
