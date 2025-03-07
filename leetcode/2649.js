function* inorderTraversal(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* inorderTraversal(item); // Recursively yield elements
    } else {
      yield item; // Yield integer values directly
    }
  }
}

// Example Test Cases
const generator1 = inorderTraversal([[[6]], [1, 3], []]);
console.log(generator1.next().value); // 6
console.log(generator1.next().value); // 1
console.log(generator1.next().value); // 3
console.log(generator1.next().done); // true

const generator2 = inorderTraversal([]);
console.log(generator2.next().done); // true (no values)
