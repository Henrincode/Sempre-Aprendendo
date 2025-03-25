// Contar quantas vezes cada palavra aparece
// Descrição: Dado um array de palavras, retorne um objeto com a contagem de cada palavra.

// Entrada: ["maçã", "banana", "maçã", "laranja", "banana", "banana"]
// Saída esperada: { "maçã": 2, "banana": 3, "laranja": 1 }

// Método recomendado: .reduce()

// Criando array
const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];

// Tratando os dados com o metodo .reduce()
const contarPalavras = palavras.reduce((palavras, palavra) => {
  palavras[palavra] = (palavras[palavra] || 0) + 1;
  return palavras;
}, {});

// Imprime no console
console.log(contarPalavras);
