function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  const generateKey = (...args) => JSON.stringify(args);

  function memoizedFunction(...args) {
    const key = generateKey(...args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    callCount++;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }

  memoizedFunction.getCallCount = () => callCount;

  return memoizedFunction;
}

// Example functions
theSum = (a, b) => a + b;
fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Usage
const memoizedSum = memoize(theSum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum(2, 2)); // 4 (cached)
console.log(memoizedSum.getCallCount()); // 1
console.log(memoizedFib(5)); // 8
console.log(memoizedFib.getCallCount()); // 1
