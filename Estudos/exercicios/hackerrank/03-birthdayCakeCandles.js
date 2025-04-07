// Link do desafio: https://www.hackerrank.com/challenges/birthday-cake-candles

const birthdayCakeCandles = candles => {
  const n = [];
  candles.forEach(candle => (!n[candle] ? (n[candle] = 1) : n[candle]++));
  return n.sort((a, b) => b - a)[0];
};
console.log(birthdayCakeCandles([3, 2, 1, 3]));
