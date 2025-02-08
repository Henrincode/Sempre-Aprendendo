/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const troco = n => {
    let rs100 = 0, rs50 = 0, rs10 = 0, rs5 = 0, rs1 = 0, texto = `Troco: `;

    while (n > 0) {
        if (n >= 100) {
            rs100++;
            n -= 100;
        }
        else if (n >= 50) {
            rs50++;
            n -= 50;
        }
        else if (n >= 10) {
            rs10++;
            n -= 10;
        }
        else if (n >= 5) {
            rs5++;
            n -= 5;
        }
        else if (n >= 1) {
            rs1++;
            n -= 1;
        };
    };
    texto += rs100 > 0 ? ` ${rs100} nota(s) de R$100,00.` : ``;
    texto += rs50  > 0 ? ` ${rs50} nota(s) de R$50,00.`   : ``;
    texto += rs10  > 0 ? ` ${rs10} nota(s) de R$10,00.`   : ``;
    texto += rs5   > 0  ? ` ${rs5} nota(s) de R$5,00.`     : ``;
    texto += rs1   > 0  ? ` ${rs1} nota(s) de R$1,00.`     : ``;
    return texto;
};

console.log(troco(1234));