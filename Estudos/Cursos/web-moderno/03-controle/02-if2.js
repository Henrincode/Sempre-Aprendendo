// Testando estrutura if sem o bloco de código {}

// O JavaScript permite escrever um if sem usar chaves {},
// mas apenas a primeira instrução imediatamente após o if será executada
// como parte do bloco de código. Qualquer código adicional, mesmo que esteja
// na mesma indentação, será executado fora do escopo do if.

function teste1(num) {
    if (num > 7)
        console.log('01)', num); // Essa linha será executada se a condição for verdadeira.
    console.log('02) Final');   // Essa linha será sempre executada, pois está fora do if.
}

teste1(6); // Resultado: 
// 02) Final (a condição num > 7 é falsa, então só essa linha é exibida)

teste1(8); // Resultado:
// 01) 8 (porque num > 7 é verdadeiro)
// 02) Final (sempre executado)

// Exemplo de cuidado ao usar ponto e vírgula no if

// A estrutura de controle if NÃO deve ter ponto e vírgula após a condição,
// pois isso termina a instrução do if prematuramente.
// Isso cria um comportamento inesperado, onde o bloco de código seguinte
// não está relacionado ao if.

function teste2(num) {
    if (num > 7); { // O ponto e vírgula encerra a instrução do if.
        console.log('03)', num); // Esse bloco de código sempre será executado,
        // porque ele está fora do escopo do if.
    }
}

teste2(6); // Resultado:
// 03) 6 (a condição if é ignorada por causa do ponto e vírgula)

teste2(8); // Resultado:
// 03) 8 (o mesmo acontece aqui)
