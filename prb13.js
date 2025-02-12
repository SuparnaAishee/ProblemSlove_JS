const toQueryString = (obj) => {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

console.log(toQueryString({ name: "John Doe", age: 25, city: "New York" }));

