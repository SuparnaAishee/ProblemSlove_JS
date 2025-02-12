const isPalindrome = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
};

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
