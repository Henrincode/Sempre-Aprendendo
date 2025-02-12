/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

const inicioFim = (a = 0, b = 100) => {
    if (a > b) [a, b] = [b, a];
    let impares = [];
    for(i = a; i <= b; i++){
        if (i % 2 !== 0) impares.push(i);
    };
    return impares;
};

console.log(inicioFim());
console.log(inicioFim(10));
console.log(inicioFim(5, 20));
console.log(inicioFim(20, 5));