// Exemplo usando o laço 'for'

// Diferenças entre usar contador com While e For
let contador = 1;

// Usando o laço 'while' para imprimir valores até 10
while (contador <= 10) {
    console.log(`Contador = ${contador}`); // console.log 01: Exibe o valor do contador
    contador++;
}

// Usando o laço 'for', onde a variável de controle já é inicializada no próprio laço
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`); // console.log 02: Exibe o valor de 'i'
}

// Usando o laço 'for' para percorrer um array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`); // console.log 03: Exibe o valor da nota no índice 'i' do array
}