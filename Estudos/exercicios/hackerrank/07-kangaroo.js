// Link do desafio: https://www.hackerrank.com/challenges/kangaroo

const kangaroo = (x1, v1, x2, v2) => {
  if (x1 === x2 && v1 === v2) return "YES";
  if (x1 === x2 && v1 !== v2) return "NO";

  const k1 = { position: x1, jump: v1 };
  const k2 = { position: x2, jump: v2 };
  let p1;
  let p2;

  x1 > x2 ? ((p1 = k1), (p2 = k2)) : ((p1 = k2), (p2 = k1));

  while (p1.position >= p2.position && p1.jump < p2.jump) {
    if (p1.position === p2.position) return "YES";
    p1.position += p1.jump;
    p2.position += p2.jump;
  }

  return "NO";
};

console.log(kangaroo(0, 2, 5, 3));
