// Link do desafio: https://www.codewars.com/kata/55f2b110f61eb01779000053

const getSum = (a, b) => {
  let sum = 0;
  if (a > b) [a, b] = [b, a];
  while (a <= b) sum += a++;
  return sum;
};

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(2, 2)); // 2
