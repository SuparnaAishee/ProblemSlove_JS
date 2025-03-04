async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// Example usage:
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // Approximately 100
});

sleep(200).then(() => {
  console.log(Date.now() - t); // Approximately 200
});
