// Link do desafio: https://www.hackerrank.com/challenges/staircase/

function staircase(n) {
  for (let i = n; i > 0; i--) {
    console.log(" ".repeat(i - 1) + "#".repeat(n - (i - 1)));
  }
}

staircase(5);
