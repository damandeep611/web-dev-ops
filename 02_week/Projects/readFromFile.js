// read the contents of a file
const fs = require("fs");

function expensiveOperation(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Expensive Operation finished after", delay, "ms");
      resolve();
    }, delay);
  });
}

fs.readFile("readFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading File:", err);
    return;
  }
  console.log("file contents:", data);

  expensiveOperation(1000)
    .then(() => {
      console.log("After 1 Second expensive operation");
    })
    .catch((error) => console.error("Error in expensive operation:", error));
});
