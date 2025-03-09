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
