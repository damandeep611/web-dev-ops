// for (let i = 0; i <= 10; i += 5) {
//   console.log(i);
// }

for (let i = 1; i < 2; i++) {
  let name = "johnWick";
  console.log(`My name is ${name}`);
}

let sum = 0;
let n = 20;
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log(sum);

// looping through an array
let arr = [11, 22, 12, 32, 343, 33, 67, 88, 18, 19];
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 1) {
    evenNumbers.push(arr[i]);
  } else {
    oddNumbers.push(arr[i]);
  }
}
console.log(`The even numbers are: ${evenNumbers}`);
console.log(`The odd numbers are: ${oddNumbers}`);

// finding the max number
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(`The maximum number in the arr array is : ${max}`);
