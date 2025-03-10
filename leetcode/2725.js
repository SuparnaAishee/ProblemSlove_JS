function cancellable(fn, args, t) {
  // Call the function immediately
  fn(...args);

  // Set an interval to call the function every t milliseconds
  const intervalId = setInterval(() => fn(...args), t);

  // Return a function that cancels the interval when called
  return () => clearInterval(intervalId);
}

// Example 1
const cancelFn1 = cancellable(
  (x) => console.log({ time: performance.now(), returned: x * 2 }),
  [4],
  35
);
setTimeout(cancelFn1, 190); // Cancels after 190ms

// Example 2
const cancelFn2 = cancellable(
  (x1, x2) => console.log({ time: performance.now(), returned: x1 * x2 }),
  [2, 5],
  30
);
setTimeout(cancelFn2, 165); // Cancels after 165ms

// Example 3
const cancelFn3 = cancellable(
  (x1, x2, x3) =>
    console.log({ time: performance.now(), returned: x1 + x2 + x3 }),
  [5, 1, 3],
  50
);
setTimeout(cancelFn3, 180); // Cancels after 180ms
