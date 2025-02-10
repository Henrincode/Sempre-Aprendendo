/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos
números negativos há nesse vetor e imprime a quantidade no console. */

let negativos = 0;
const vetor = [12, -5, 34, 78, -42, 56, 89, -7, 23, -19, 45, 67, -33, 90, 21, -8, 55, -12, 38, 72, -49, 11, -27, 63, -14, 80, -22, 97, -66, 31, 40, -55, 17, -30, 74, -88, 29, -44, 60, -25, 83, -51, 14, -70, 37, -99, 58, -61, 92, -35];

for(i = 0; i < vetor.length; i++){
    if(vetor[i] < 0) negativos++;
};

console.log(negativos);