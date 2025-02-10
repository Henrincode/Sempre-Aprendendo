/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */

const vetor = [9, 64, 53, 35, 8, 29, 57, 33, 26, 76, 29, 54, 24, 95, 30, 99, 30, 92, 24, 91, 57, 50, 88, 33, 95, 58, 13, 80, 14, 49, 40, 28, 87, 88, 25, 81, 33, 79, 12, 36, 41, 90, 26, 64, 54, 71, 24, 71, 96, 2];
let menor = vetor[0], maior = vetor[0];

for(i = 0; i < vetor.length; i++){
    menor = menor > vetor[i] ? vetor[i] : menor;
    maior = maior < vetor[i] ? vetor[i] : maior;
};

console.log(`Número menor é ${menor} e o maior é ${maior}`);