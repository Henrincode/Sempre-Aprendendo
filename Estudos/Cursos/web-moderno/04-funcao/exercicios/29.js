/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

let dentro = 0, fora = 0;
const vetor = [9, 64, 53, 35, 8, 29, 57, 33, 26, 76, 29, 54, 24, 95, 30, 99, 30, 92, 24, 91, 57, 50, 88, 33, 95, 58, 13, 80, 14, 49, 40, 28, 87, 88, 25, 81, 33, 79, 12, 36, 41, 90, 26, 64, 54, 71, 24, 71, 96, 2];

for(i = 0; i < vetor.length; i++) {
    if(vetor[i] >= 10 && vetor[i] <=20) {
        dentro++;
    } else {
        fora++;
    };
};

console.log(`Dentro do infervalo temos ${dentro} e fora do intervalo temos ${fora}`)