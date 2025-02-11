function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(removeDuplicates(arrWithDuplicates)); 