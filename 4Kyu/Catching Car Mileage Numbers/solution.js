function shortInterest(number, awesomePhrases) {
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

  // The digits are sequential, incrementing
  let digitsIncrementing = 0;
  let firstSymbol = parseInt(number[0], 10);
  for (let symbol of number) {
    if (symbol == firstSymbol) digitsIncrementing += 1;
    firstSymbol += 1;
  }

  if (
    digitsIncrementing === number.length ||
    (digitsIncrementing === number.length - 1 &&
      number.slice(-1) == 0 &&
      number.slice(-2, -1) == 9)
  )
    return 2;

  // The digits are sequential, decrementing
  let digitsDecrementing = 0;
  firstSymbol = parseInt(number[0], 10);
  for (let symbol of number) {
    if (symbol == firstSymbol) digitsDecrementing += 1;
    firstSymbol -= 1;
  }

  if (
    digitsDecrementing === number.length ||
    (digitsDecrementing === number.length - 1 &&
      number.slice(-1) == 0 &&
      number.slice(-2, -1) == 1)
  )
    return 2;

  // the digits are a palindrome
  if (number === number.split("").reverse().join("")) return 2;

  return -1;
}

function isInteresting(number, awesomePhrases) {
  for (let i = 0; i <= 3; i++) {
    let result = shortInterest(number, awesomePhrases);

    if (i === 3) return 0;

    if (result === 2 && i === 0) {
      return 2;
    } else if (result === 2 && i >= 1) {
      return 1;
    } else if (result === -1 || (result === 0 && i <= 2)) {
      //do nothing
    } else {
      return 0;
    }
    number += 1;
  }
}
