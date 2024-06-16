function isInteresting(number, awesomePhrases) {
  // only interesting if above 99
  if (number < 100) return 0;

  // if digits match one of the awesomePhrases array items
  if (awesomePhrases.includes(number)) return 2;

  number = number.toString();

  // Any digits followed by all zeroes
  let zeroNumbers = 0;
  for (let symbol of number.slice(1)) {
    if (symbol === "0") zeroNumbers += 1;
  }

  if (zeroNumbers === number.slice(1).length) return 2;

  // Every digit is the same number
  let sameDigits = 0;
  for (let symbol of number) {
    if (symbol === number[0]) sameDigits += 1;
  }

  if (sameDigits === number.length) return 2;
}
