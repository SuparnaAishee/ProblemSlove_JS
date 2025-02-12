const secondLargest = (arr) => {
  let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueArr.length > 1 ? uniqueArr[1] : null;
};

console.log(secondLargest([10, 20, 4, 45, 99, 99])); // Output: 45
console.log(secondLargest([3])); // Output: null
