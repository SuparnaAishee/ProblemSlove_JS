//5. Task: Find and Modify
const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 20, gender: "male" }
];

function updateAgeByName(people, name, newAge) {
  people.forEach(person => {
    if (person.name === name) {
      person.age = newAge; 
    }
  });
  return people;
}

console.log(updateAgeByName(people, "Alice", 35));

