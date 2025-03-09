Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};

function expect(val) {
  return {
    toBe: (expected) => {
      if (val !== expected) throw new Error("Not Equal");
      return true;
    },
    notToBe: (expected) => {
      if (val === expected) throw new Error("Equal");
      return true;
    },
  };
}

function cancellable(fn, args, t) {
  const timer = setTimeout(() => {
    console.log({ time: t, returned: fn(...args) });
  }, t);
  return () => clearTimeout(timer);
}

function once(fn) {
  let called = false;
  return function (...args) {
    if (called) return undefined;
    called = true;
    return fn(...args);
  };
}

// Example test cases
const array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];
console.log(array1.groupBy((item) => item.id));

const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
console.log(array2.groupBy((list) => String(list[0])));

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array3.groupBy((n) => String(n > 5)));

// Test cases for expect function
try {
  console.log({ value: expect(5).toBe(5) });
} catch (error) {
  console.log({ error: error.message });
}

try {
  console.log({ value: expect(5).notToBe(null) });
} catch (error) {
  console.log({ error: error.message });
}

try {
  console.log({ value: expect(5).toBe(null) });
} catch (error) {
  console.log({ error: error.message });
}

// Test cases for cancellable function
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

const cancelFn2 = cancellable((x) => x ** 2, [2], 100);
setTimeout(cancelFn2, cancelTimeMs);

const cancelFn3 = cancellable((x1, x2) => x1 * x2, [2, 4], 30);
setTimeout(cancelFn3, 100);

// Test cases for once function
const onceFn = once((a, b, c) => a + b + c);
console.log({ calls: 1, value: onceFn(1, 2, 3) }); // 6
console.log({ calls: 2, value: onceFn(2, 3, 6) }); // undefined
