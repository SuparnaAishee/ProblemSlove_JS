function checkIfInstanceOf(obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  if (typeof obj === "number" && classFunction === Number) {
    return true;
  }

  return obj instanceof classFunction;
}

// Example usage:
class Animal {}
class Dog extends Animal {}

console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true
