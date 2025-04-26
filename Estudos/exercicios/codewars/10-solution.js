// Link do desafio https://www.codewars.com/kata/51edd51599a189fe7f000015/

const solution = (n1, n2) =>
  n1
    .map((n, i) => Math.pow(Math.abs(n - n2[i]), 2))
    .reduce((acc, att) => acc + att, 0) / n1.length;

console.log(solution([1, 2, 3], [4, 5, 6])); // 9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
console.log(solution([0, -1], [-1, 0])); // 1
