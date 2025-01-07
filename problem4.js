//4. Task: Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2013 }
];

function sortCarsByYear(cars) {
  return cars.sort((a, b) => a.year - b.year); 
}

console.log(sortCarsByYear(cars));
