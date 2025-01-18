// Exemplo de For/In (para dentro)

// O laço For/In percorre os atributos de um objeto ou os índices de um array.
// Pode ser útil, mas é importante saber quando é mais apropriado usá-lo.

// Percorrendo todos os índices do array
// Embora seja possível usar o For/In com arrays, existem outras opções mais eficientes, como o For tradicional ou o ForEach.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
    console.log(i, notas[i]);
}

// Percorrendo todos os atributos do objeto
// O For/In é mais útil para percorrer os atributos de objetos do que para arrays.
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
};

for (let atributo in pessoa) { 
    console.log(`${atributo} = ${pessoa[atributo]}`);
}