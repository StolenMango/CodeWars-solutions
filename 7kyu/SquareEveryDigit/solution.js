function squareDigits(num) {
  const numStr = num.toString();

  let result = "";

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    const squaredDigit = digit * digit;

    result += squaredDigit.toString();
    //Inside the loop, we:
    //Extract the current digit from the string (numStr[i]).
    //Convert the digit back to a number using parseInt().
    //Square the digit by multiplying it by itself.
    //Convert the squared digit back to a string using toString().
    //Append the squared digit to the result string.
  }

  return parseInt(result);
}
