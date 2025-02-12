var createCounter = function (n) {
  return function () {
    return n++;
  };
};

// Example Usage:
const counter = createCounter(10);
console.log(counter()); 
console.log(counter());
console.log(counter()); 
