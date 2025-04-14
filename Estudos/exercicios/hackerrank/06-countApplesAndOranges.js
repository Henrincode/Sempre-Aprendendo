// Link do desafio: https://www.hackerrank.com/challenges/apple-and-orange

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const home = [s, t];
  const appleTree = a;
  const orangeTree = b;
  const inside = [0, 0];

  apples
    .map(e => appleTree + e)
    .filter(e => e >= home[0] && e <= home[1])
    .forEach(e => inside[0]++);
  oranges
    .map(e => orangeTree + e)
    .filter(e => e >= home[0] && e <= home[1])
    .forEach(e => inside[1]++);

  console.log(inside[0]);
  console.log(inside[1]);
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
