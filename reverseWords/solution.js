function reverseWords(str) {
  const words = str.split(" ");
  const reversedWord = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversedWord.join(" ");
}
