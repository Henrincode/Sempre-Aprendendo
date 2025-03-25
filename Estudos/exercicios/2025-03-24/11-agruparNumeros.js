// Agrupar números em pares e ímpares
// Descrição: Dado um array de números, retorne um objeto com duas chaves: pares e impares, cada uma contendo um array com os respectivos números.

// Entrada: [1, 2, 3, 4, 5, 6]
// Saída esperada:
// {
//     pares: [2, 4, 6],
//     impares: [1, 3, 5]
// }

// Método recomendado: .reduce()

// Criando array
const numeros = [1, 2, 3, 4, 5, 6];

// Tratando dados com o metodo .reduce()
const agruparNumeros = numeros.reduce(
  (grupo, numero) => {
    if (numero % 2 === 0) {
      grupo.pares.push(numero);
    } else {
      grupo.impares.push(numero);
    }
    return grupo;
  },
  { pares: [], impares: [] }
);

// Imprime no console
console.log(agruparNumeros);
