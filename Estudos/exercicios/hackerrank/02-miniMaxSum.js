// Link do desafio: https://www.hackerrank.com/challenges/mini-max-sum

function miniMaxSum(arr) {
  let sums = [];

  arr.forEach((n, i) => {
    arr.forEach((n2, i2) => {
      if (i !== i2) !sums[i] ? (sums[i] = n2) : (sums[i] += n2);
    });
  });
  sums = sums.sort((a, b) => a - b);
  console.log(sums[0], sums[sums.length - 1]);
}

miniMaxSum([1, 2, 3, 4, 5]);
