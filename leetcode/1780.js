function checkPowersOfThree(n) {
  while (n > 0) {
    if (n % 3 === 2) return false;
    n = Math.floor(n / 3);
  }
  return true;
}

// Example usage:
console.log(checkPowersOfThree(12)); // Output: true
console.log(checkPowersOfThree(91)); // Output: true
console.log(checkPowersOfThree(21)); // Output: false
