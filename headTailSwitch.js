function fixTheMeerkat(arr) {
  const [head, body, tail] = [...arr];
  return [tail, body, head];
}
