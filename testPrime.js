// function testPrime(numbers) {
//   let tab = [];
//   numbers.forEach(num => {
//     console.log(num);
//     for (i = 2; i < num; i++) {
//       if (num % i !== 0 && num === 2) {
//         tab.push(num);
//         console.log(i);
//       }
//     }
//   });
// }

// if (num === 1) {
//   return false;
// } else if (num === 2) {
//   return num;
// } else {

function testPrime(numbers, index, array) {
  const first = 2;
  while (first <= Math.sqrt(numbers)) {
    if (numbers % first++ < 1) return false;
  }
  return numbers > 1;
}

console.log([7, 8, 2, 14].find(testPrime));
