// Link do desafio: https://www.hackerrank.com/challenges/the-birthday-bar

const birthday = (choc, d, m) => {
  let count = 0;

  choc.forEach((e, i) => {
    let interval = i + (m - 1);
    let sum = 0;

    if (interval < choc.length) {
      for (let i2 = i; i2 <= interval; i2++) {
        sum += choc[i2];
      }
      if (sum === d) count++;
    }
  });
  return count;
};

console.log(birthday([1, 1, 3, 1, 1], 3, 1));
