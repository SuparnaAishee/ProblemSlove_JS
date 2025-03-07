function filter(arr, fn) {
  let filteredArr = []; // Initialize an empty array to store filtered elements

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      // Apply fn, check if the result is truthy
      filteredArr.push(arr[i]); // Add the element if condition is met
    }
  }

  return filteredArr;
}

// Example test cases

console.log(filter([0, 10, 20, 30], (n) => n > 10));
// Output: [20, 30]

console.log(filter([1, 2, 3], (n, i) => i === 0));
// Output: [1]

console.log(filter([-2, -1, 0, 1, 2], (n) => n + 1));
// Output: [-2, 0, 1, 2]
