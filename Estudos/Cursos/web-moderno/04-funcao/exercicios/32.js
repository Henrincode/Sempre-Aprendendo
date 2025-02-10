/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

const vetor = [9, 64, 53, 35, 8, 29, 57, 33, 26, 76, 29, 54, 24, 95, 30, 99, 30, 92, 24, 91, 57, 50, 88, 33, 95, 58, 13, 80, 14, 49, 40, 28, 87, 88, 25, 81, 33, 79, 12, 36, 41, 90, 26, 64, 54, 71, 24, 71, 96, 2];
let soma = 0, media = 0;

for(i = 0; i < vetor.length; i++){
    soma += vetor[i];
}

media = soma / vetor.length;

console.log(media);