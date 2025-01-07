//1. Task: Array Filtering and Mapping

const people = [
  { name: "Anis", age: 25, gender: "male" },
  { name: "Moon", age: 30, gender: "female" },
  { name: "AD", age: 20, gender: "male" },
  { name: "Aishee", age: 22, gender: "female" }
];

function getMaleNames(people) {
  return people
    .filter(person => person.gender === "male") 
    .map(person => person.name);
}

console.log(getMaleNames(people));