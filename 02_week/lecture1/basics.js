function addTwoNum(a, b) {
  return a + b;
}
console.log(addTwoNum(20, 50));
// find sum from one to a n number
function findsumX(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}
const sumNow = findsumX(10);
console.log(sumNow);
