let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

// [a, b] = [b, a] também faz a troca

// depois da troca.. a = 94 e b = 7
console.log(a);
console.log(b);