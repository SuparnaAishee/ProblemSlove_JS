//Task: Find the Longest Word in an Array
function findLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

const wordsArray = ["apple", "banana", "strawberry", "grape"];
console.log(findLongestWord(wordsArray)); 
