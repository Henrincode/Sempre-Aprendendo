// Link do desafio: https://www.codewars.com/kata/523f5d21c841566fde000009

const arrayDiff = (a, b) => a.filter(a => !b.includes(a));

console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2], [1])); // [2]
