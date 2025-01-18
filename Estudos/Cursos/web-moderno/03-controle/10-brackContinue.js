// Exemplo de break (interromper) e continue

// O comando break interrompe a execução do laço mais próximo (for, while, switch).
// O comando continue pula a execução da iteração atual do laço, passando para a próxima iteração.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exemplo de break: interrompe o laço quando o índice 'x' é igual a 5.
for (let x in nums) {
    if (x == 5) {
        break; // Interrompe o laço quando x é igual a 5
    }
    console.log(`${x} = ${nums[x]}`);
}

// Exemplo de continue: ignora o código abaixo da condição e continua para a próxima iteração.
for (let x in nums) {
    if (x == 5) {
        continue; // Pula a iteração atual quando x é igual a 5
    }
    console.log(`${x} = ${nums[x]}`);
}

// Exemplo de rótulo (label): A utilização de rótulos não é recomendada.
externo: for (let a in nums) {
    for (let b in nums) {
        console.log(`Par - ${a}, ${b}`);
        if (a == 2 && b == 2) break externo; // Interrompe ambos os laços quando a == 2 e b == 2
        
    }
};