/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

const calcular = (a, b, c) => {
    switch(b) {
        case "+":
            console.log(a + c);
            break;
        case "-":
            console.log(a - c);
            break;
        case "*":
            console.log(a * c);
            break;
        case "/":
            console.log(a / c);
            break;
        default:
            console.log("Simbolo inválido.");
    };
};

calcular(10, "+", 5);
calcular(10, "-", 5);
calcular(10, "*", 5);
calcular(10, "/", 5);
calcular(10, "x", 5);