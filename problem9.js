function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const sentence = "hello world this is javascript";
console.log(capitalizeWords(sentence)); 