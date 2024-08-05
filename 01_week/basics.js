// functions
function canVote(num) {
  if (num < 18) {
    console.log("you can't vote");
  } else {
    console.log("you can vote buddy");
  }
}
// const checkVote = canVote(21);
// console.log(checkVote);

// checking odd or even
function oddEven(num) {
  if (num % 2 === 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}
// const numCheck = oddEven(41);
// console.log(numCheck);

// loops
function checknum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(checknum(5));
