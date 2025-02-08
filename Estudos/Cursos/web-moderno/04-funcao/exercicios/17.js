/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano   Aumento
A       10%
B       15%
C       20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const aumento = (salario, plano) => {
    switch (plano) {
        case "a":
            salario *= 1.1;
            break;
        case "b":
            salario *= 1.15;
            break;
        case "c":
            salario *= 1.20;
            break;
        default:
            return console.log("Plano inválido.")
    }
    return console.log(`Novo salário é de R$${salario.toFixed(2).replace(".",",")}`)
}

aumento(1000, "a");
aumento(1000, "b");
aumento(1000, "c");
aumento(1000, "d");