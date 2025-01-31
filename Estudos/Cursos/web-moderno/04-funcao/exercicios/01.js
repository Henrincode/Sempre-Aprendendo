// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

const calcular = (a, b) => {
    console.log("Resolvendo calculos:");
    console.log(`${a} + ${b} = ${a + b}`);
    console.log(`${a} - ${b} = ${a - b}`);
    console.log(`${a} * ${b} = ${a * b}`);
    console.log(`${a} / ${b} = ${a / b}`);
};

calcular(5, 2);