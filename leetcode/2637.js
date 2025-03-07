function reduce(nums, fn, init) {
  let val = init; // Start with the initial value

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]); // Apply the reducer function
  }

  return val;
}

// Example test cases

console.log(reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0));
// Output: 10

console.log(reduce([1, 2, 3, 4], (accum, curr) => accum + curr * curr, 100));
// Output: 130

console.log(reduce([], (accum, curr) => 0, 25));
// Output: 25
