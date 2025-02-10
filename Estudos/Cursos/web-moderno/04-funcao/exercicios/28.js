/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let pares = 0, impares = 0;
const vetor = [9, 64, 53, 35, 8, 29, 57, 33, 26, 76, 29, 54, 24, 95, 30, 99, 30, 92, 24, 91, 57, 50, 88, 33, 95, 58, 13, 80, 14, 49, 40, 28, 87, 88, 25, 81, 33, 79, 12, 36, 41, 90, 26, 64, 54, 71, 24, 71, 96, 2];

for(i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 === 0){
        pares++;
    } else {
        impares++;
    };
};

console.log(`O vetor com tamanho de ${vetor.length} tem um total de ${pares} pares e ${impares} impares.`);