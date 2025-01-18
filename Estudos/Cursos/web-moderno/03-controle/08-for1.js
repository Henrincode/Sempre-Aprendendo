// Exemplo usando o laço for (para)

// Diferenças entre usar contador com while e for
let contador = 1;

// Laço while: a variável é inicializada antes e a condição é verificada a cada iteração.
while (contador <= 10) {
    console.log(`Contador = ${contador}`);
    contador++; // Incrementa o contador a cada iteração
}

// Laço for: a variável é inicializada diretamente na condição do laço e o incremento ocorre após cada execução.
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}

// Usando o for para percorrer um array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`);
}