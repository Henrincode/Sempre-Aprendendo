// Crie uma função que receba quatro números como parâmetro
// (numero, minimo, maximo, inclusivo) e
// retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro
// inclusivo for true, tenha "entre" como inclusivo, ou seja,
// considerando se numero é igual a minimo ou a maximo.
// Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false,
// portanto, a lógica será exclusiva, não considerando se numero é igual
// a minimo ou a maximo.

// Exemplos:

const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (inclusivo) {
        console.log(numero >= minimo && numero <= maximo);
    } else {
        console.log(numero > minimo && numero < maximo);
    };
};

estaEntre(10, 10, 20)
estaEntre(10, 10, 20, true)
estaEntre(10, 15, 20)
estaEntre(10, 15, 20, true)