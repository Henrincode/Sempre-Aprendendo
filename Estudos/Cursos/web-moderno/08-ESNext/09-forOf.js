// Exemplo de uso do for...of

// O loop for...of permite iterar diretamente sobre os valores de um objeto iterável (como strings, arrays, Map, Set, etc.)
for (let letra of "Cod3r") {
  console.log(letra); // Imprime cada letra da string "Cod3r"
}

const assuntosEcma = ["Map", "Set", "Promise"];

// Usando o for...in, que percorre os índices de um array ou as propriedades de um objeto
for (let i in assuntosEcma) {
  console.log(i); // Imprime o índice de cada item do array
}

// Usando o for...of, que percorre os valores de um array ou de outros objetos iteráveis
for (let assunto of assuntosEcma) {
  console.log(assunto); // Imprime o nome de cada assunto do array
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

// Iterando sobre o Map com for...of, que retorna arrays contendo chave e valor
for (let assunto of assuntosMap) {
  console.log(assunto); // Imprime um array com chave e valor (ex: ["Map", {abordado: true}])
}

// Iterando sobre as chaves do Map
for (let chave of assuntosMap.keys()) {
  console.log(chave); // Imprime as chaves do Map, como "Map", "Set", "Promise"
}

// Iterando sobre os valores do Map
for (let valor of assuntosMap.values()) {
  console.log(valor); // Imprime os valores associados às chaves do Map
}

// Iterando sobre as entradas (chave e valor) do Map
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl); // Imprime cada par chave-valor do Map
}

const s = new Set(["a", "b", "c"]);

// Iterando sobre os valores de um Set com for...of
for (let letra of s) {
  console.log(letra); // Imprime cada valor único do Set (não há repetições)
}
