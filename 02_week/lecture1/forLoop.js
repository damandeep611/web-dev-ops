let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  // console.log(sum);
}

// for loop to multiply all numbers from 1 to 10
let multiply = 1;
for (let i = 1; i <= 10; i++) {
  multiply = multiply * i;
  // console.log(multiply);
}

//loop to print even numbers from 1 to 20
let printEven = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}
// loop that counts vowels in given string
let count = 0;
let vowels = "Martian man";
for (let i = 0; i < vowels.length; i++) {
  if (
    vowels[i] === "a" ||
    vowels[i] === "e" ||
    vowels[i] === "i" ||
    vowels[i] === "o" ||
    vowels[i] === "u"
  ) {
    count++;
  }
}
// console.log(count);

//Reverse a string

let str = "Omni-Man";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
// console.log(reverse);

// print prime numbers from 2 to 50
for (let i = 2; i < 19; i++) {
  let prime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    // console.log(i);
  }
}

// print first 10 fibonacci series numbers
let a = 0;
let b = 1;
for (let i = 2; i <= 10; i++) {
  let next = a + b;
  // console.log(next);
  a = b;
  b = next;
}

let sumEven = 0;
for (let i = 2; i <= 20; i++) {
  sumEven += i;
}
console.log(sumEven);
