// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
// const contentTwo = fs.readFileSync("b.txt", "utf-8");
// console.log(contentTwo);

//  the above method does tasks synchronously and takes time and is not a good method

// but now we will see async method to execute tasks
const fsa = require("fs");

fsa.readFile("a.txt", "utf-8", function (err, asynccontents) {
  console.log(asynccontents);
});
fsa.readFile("b.txt", "utf-8", function (err, asynccontents) {
  console.log(asynccontents);
});
fsa.readFile("a.txt", "utf-8", function (err, asynccontents) {
  console.log(asynccontents);
});
