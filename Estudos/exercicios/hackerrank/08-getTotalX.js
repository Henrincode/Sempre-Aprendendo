// Link do desafio: https://www.hackerrank.com/challenges/between-two-sets

const getTotalX = (a, b) => {
  a = a.sort((aa, bb) => aa - bb);
  b = b.sort((aa, bb) => aa - bb);
  let mmc = a.some(e => e === 1) ? 1 : 0;
  let isDivisible = true;
  let total = 0;

  if (b.some(e => e === 1 || e === 0)) return total;

  // MMC
  for (let i = 2; mmc === 0; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) isDivisible = false;
    }
    if (isDivisible) mmc = i;
    isDivisible = true;
  }
  // MCD and TOTAL
  for (let i = mmc; i <= b.at(-1); i += mmc) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] % i !== 0) isDivisible = false;
    }
    if (isDivisible) total++;
    isDivisible = true;
  }

  return total;
};

console.log(getTotalX([1], [100]));
