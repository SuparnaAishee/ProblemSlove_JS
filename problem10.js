function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

const originalSentence = "hello world";
console.log(reverseWords(originalSentence)); // Output: "olleh dlrow"
