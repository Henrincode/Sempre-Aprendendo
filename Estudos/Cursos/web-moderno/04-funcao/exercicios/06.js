// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
// A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capital, juros, meses) => {
    juros /= 100;
    return capital * juros * meses + capital;
};

const jurosCompostos = (capital, juros, meses) => {
    juros /= 100;
    return capital * (1 + juros) ** meses;
};

const jurosDiferenca = (capital, juros, meses) => 
    jurosCompostos(capital, juros, meses) - jurosSimples(capital, juros, meses);

console.log(`Juros Simples, 5%, 3 meses = R$ ${jurosSimples(1000, 5, 3).toFixed(2).replace(".", ",")}.`);
console.log(`Juros Compostos, 5%, 3 meses = R$ ${jurosCompostos(1000, 5, 3).toFixed(2).replace(".", ",")}.`);
console.log(`Juros Compostos renderam R$ ${jurosDiferenca(1000, 5, 3).toFixed(2).replace(".", ",")} a mais que o Juros Simples.`);